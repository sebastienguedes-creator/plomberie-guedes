import { useState } from 'react';
import { Camera, Send, CheckCircle, ArrowLeft, MapPin, Sparkles, RefreshCw, Loader2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

// --- CONFIGURATION SÉCURISÉE (VIA .env) ---
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET;
const MAKE_WEBHOOK_URL = import.meta.env.VITE_MAKE_WEBHOOK_URL;
const MISTRAL_API_KEY = import.meta.env.VITE_MISTRAL_API_KEY;

// Utilitaire : Conversion du fichier photo en Base64 pour la vision par Mistral
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

// --- GÉNÉRATEUR PAR IA (MISTRAL PIXTRAL-12B - HYBRIDE LOCAL / PROD VERCEL) ---
const generateMistralText = async (file, act, cat, loc, dateFormatted) => {
  try {
    let base64Image = null;
    let imageContent = [];

    if (file) {
      base64Image = await fileToBase64(file);
      imageContent = [
        {
          type: "image_url",
          image_url: base64Image
        }
      ];
    }

    const prompt = `Tu es Anthony Guedes, artisan plombier-chauffagiste indépendant et gérant de la SARL Anthony GUEDES.
Rédige une légende de chantier authentique, ultra-percutante et optimisée pour le référencement local (Google My Business & Web SEO).

Informations sur l'intervention :
- Type de chantier : ${act}
- Domaine technique : ${cat}
- Localisation / Ville : ${loc}
- Date de réalisation : ${dateFormatted}

Directives de rédaction strictes :

1. RÈGLE N°1 - GESTION DES PERSONNES ("JE" ET "VOUS") :
   - Rédige l'intervention à la 1ère personne du singulier (« je », « mon », « ma »).
   - N'utilise JAMAIS « votre » pour décrire le chantier réalisé (interdiction d'écrire « j'ai révisé votre circuit » ou « votre installation est prête »). Utilise des termes neutres : « le circuit », « l'installation », « cette pompe à chaleur ».
   - Réserve le « vous » / « votre » EXCLUSIVEMENT à l'appel à l'action final s'adressant au futur client qui lit le post (ex : « Un projet pour votre logement ? »).

2. RÈGLE N°2 - CONFIDENTIALITÉ & RGPD :
   Ne mentionne AUCUN nom de client ni aucun placeholder. Parle uniquement de l'équipement ou du chantier réalisé à ${loc}.

3. RÈGLE N°3 - AUCUNE MENTION DES AIDES DE L'ÉTAT :
   Interdiction absolue d'évoquer les aides de l'État (MaPrimeRénov', CEE, etc.).

4. RÈGLE N°4 - MOBILITÉ & SOBRIÉTÉ SEO (80 À 100 MOTS MAX) :
   - Longueur totale : 80 à 100 mots MAXIMUM pour smartphone.
   - Limite la mention de la commune (${loc}) à 1 fois MAXIMUM dans tout le texte.

5. RÈGLE N°5 - TEXTE BRUT SANS MARKDOWN NI HASHTAGS :
   - Interdiction absolue d'inclure des hashtags (#).
   - Interdiction absolue d'utiliser du gras, des astérisques (**) ou du markdown. Rédige en texte brut pur.

6. ANALYSE VISUELLE DU CHANTIER :
   Observe la photo et cite un détail technique concret (tuyauterie cuivre, finitions, matériel Toshiba/Thermor, propreté).

7. STRUCTURE DE CONVERSION POUR GOOGLE MY BUSINESS :
   - Titre accrocheur avec un émoticône situant le chantier à ${loc}.
   - 2 phrases courtes : l'intervention réalisée sur l'équipement + le bénéfice (confort, économies).
   - Appel à l'action direct (CTA) s'adressant au prospect avec devis gratuit et mes coordonnées : 06 17 92 10 04 ou anthonyguedes.plomberie@gmail.com.

Fournis uniquement le texte rédigé final prêt à être mis en ligne, sans commentaires d'introduction, sans guillemets et sans aucun hashtag.`;

    let response;

    // 1. En environnement de développement local (npm run dev) avec VITE_MISTRAL_API_KEY renseignée
    if (import.meta.env.DEV && MISTRAL_API_KEY) {
      response = await fetch("https://api.mistral.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${MISTRAL_API_KEY}`
        },
        body: JSON.stringify({
          model: "pixtral-12b-2409",
          messages: [
            {
              role: "user",
              content: [
                { type: "text", text: prompt },
                ...imageContent
              ]
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });
    } else {
      // 2. En production sur Vercel (sécurisé via la fonction serveur /api/generate-description)
      response = await fetch("/api/generate-description", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt,
          base64Image
        })
      });
    }

    if (!response.ok) {
      console.warn("Erreur API Mistral, bascule sur la génération locale de secours.");
      return getUniqueDynamicText(act, cat, loc, dateFormatted);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    return content ? content.trim() : getUniqueDynamicText(act, cat, loc, dateFormatted);
  } catch (err) {
    console.error("Erreur lors de la génération Mistral :", err);
    return getUniqueDynamicText(act, cat, loc, dateFormatted);
  }
};

// --- GÉNÉRATEUR LOCAL DE SECOURS (FALLBACK EN CAS D'ERREUR API OU DE CLÉ MANQUANTE) ---
const getUniqueDynamicText = (act, cat, loc, date) => {
  const hooks = [
    `Intervention de ${act} réalisée à ${loc} le ${date} (${cat}).`,
    `Chantier du jour à ${loc} le ${date} : ${act} en ${cat}.`,
    `Nouvelle opération de ${act} finalisée avec succès à ${loc} le ${date} (${cat}).`,
    `Intervention technique menée à bien à ${loc} le ${date} (${cat} - ${act}).`,
    `Travaux de ${cat} (${act}) effectués avec soin à ${loc} le ${date}.`
  ];

  const domainBodies = {
    "Adoucisseur": [
      "Pour dire adieu aux traces de calcaire et prolonger durablement la durée de vie de vos équipements, rien ne remplace une installation sur mesure.",
      "L'eau en région étant particulièrement dure, la pose de cet adoucisseur garantit une protection optimale de votre réseau et un confort au quotidien.",
      "Protéger son chauffe-eau et ses canalisations contre le tartre est indispensable : un chantier minutieux réalisé pour assurer une eau douce dans toute la maison."
    ],
    "PAC": [
      "Optimiser les performances énergétiques de l'habitat et garantir un confort thermique idéal, quelle que soit la saison, c'est tout l'enjeu de cette installation.",
      "Une solution de chauffage moderne et performante mise en place dans les règles de l'art pour maîtriser durablement votre consommation d'énergie.",
      "Le choix d'une pompe à chaleur performante pour allier économies d'énergie et respect de l'environnement au cœur de notre région."
    ],
    "Salle de Bain": [
      "Transformation et aménagement de cet espace d'eau pour allier esthétisme, modernité et fonctionnalité au quotidien.",
      "Un travail de plomberie et de finition soigné pour donner vie à un projet de salle de bain sur mesure et pérenne.",
      "Rénovation complète pensée pour optimiser l'espace et garantir un confort absolu dans la pièce d'eau."
    ],
    "VMC": [
      "Assurer un air sain et renouvelé en continu dans le logement est essentiel pour éviter l'humidité et protéger le bâti.",
      "Installation d'un système de ventilation performant pour garantir une qualité d'air optimale et préserver la santé de votre foyer.",
      "Maîtrise des flux d'air et ventilation soignée : un élément clé pour l'isolation et la salubrité de la maison."
    ],
    "Radiateur": [
      "Mise en place d'émetteurs de chaleur adaptés pour assurer une température homogène et un confort thermique parfait dans chaque pièce.",
      "Remplacement et raccordement de radiateurs pour optimiser la diffusion de la chaleur et gagner en efficacité énergétique.",
      "Un système de chauffage central réglé et posé avec précision pour une performance thermique maximale."
    ]
  };

  const defaultBodies = [
    "Un travail rigoureux et soigné assuré pour garantir la fiabilité et la durabilité de vos installations.",
    "Parce que le respect des normes et la qualité de finition sont nos priorités, chaque intervention est menée avec le plus grand professionnalisme."
  ];

  const ctas = [
    "📞 Un projet de rénovation ou besoin d'un dépannage ? Contactez Guedes Plomberie pour un devis gratuit !",
    "📞 Envie d'améliorer le confort de votre habitat ? Parlons de votre projet dès aujourd'hui !",
    "📞 Besoin d'un conseil d'artisan qualifié ou d'une intervention rapide dans la région ? Appelez-nous !",
    "📞 N'hésitez pas à nous contacter pour toute question ou demande d'accompagnement sur vos équipements !"
  ];

  const randomHook = hooks[Math.floor(Math.random() * hooks.length)];
  const bodiesList = domainBodies[cat] || defaultBodies;
  const randomBody = bodiesList[Math.floor(Math.random() * bodiesList.length)];
  const randomCta = ctas[Math.floor(Math.random() * ctas.length)];

  return `${randomHook}\n\n${randomBody}\n\n${randomCta}\n\n#plomberie #artisan #guedesplomberie #${cat.toLowerCase().replace(/[^a-z0-9]/g, '')} #${act}`;
};

// Utilitaire : Date du jour
const getTodayString = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export default function AdminChantier() {
  const [preview, setPreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [action, setAction] = useState('dépannage');
  const [categorie, setCategorie] = useState('PAC');
  const [localisation, setLocalisation] = useState('Secteur non défini');
  const [chantierDate, setChantierDate] = useState(getTodayString());
  const [texteGenere, setTexteGenere] = useState('');
  
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [succes, setSucces] = useState(false);

  // Fonction centrale de mise à jour du texte via Mistral AI
  const mettreAJourTexte = async (file, currentAction, currentCat, currentLoc, currentDate) => {
    const dateObj = new Date(currentDate || chantierDate);
    const dateFormatee = dateObj.toLocaleDateString('fr-FR', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
    
    setIsGeneratingAi(true);
    try {
      const texte = await generateMistralText(file, currentAction, currentCat, currentLoc, dateFormatee);
      setTexteGenere(texte);
    } catch {
      setTexteGenere(getUniqueDynamicText(currentAction, currentCat, currentLoc, dateFormatee));
    } finally {
      setIsGeneratingAi(false);
    }
  };

  // Déclenchement de l'appareil photo & géolocalisation
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
      
      // Génération initiale
      mettreAJourTexte(file, action, categorie, 'Secteur d\'intervention', chantierDate);
      
      setLocalisation('Recherche...');
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&zoom=14`, {
                headers: { 'Accept-Language': 'fr' }
              });
              const data = await res.json();
              
              const nomVille = data.address?.city || data.address?.town || data.address?.village || data.address?.county || "notre secteur";
              const codePostal = data.address?.postcode;
              const villeFormatee = codePostal ? `${nomVille} (${codePostal})` : nomVille;
              
              setLocalisation(villeFormatee);
              mettreAJourTexte(file, action, categorie, villeFormatee, chantierDate);
            } catch {
              setLocalisation('Secteur d\'intervention');
              mettreAJourTexte(file, action, categorie, 'Secteur d\'intervention', chantierDate);
            }
          },
          () => {
            setLocalisation('Secteur d\'intervention');
            mettreAJourTexte(file, action, categorie, 'Secteur d\'intervention', chantierDate);
          },
          { timeout: 10000 }
        );
      } else {
        setLocalisation('Secteur d\'intervention');
        mettreAJourTexte(file, action, categorie, 'Secteur d\'intervention', chantierDate);
      }
    }
  };

  const handleSelectChange = (newAction, newCat, newDate) => {
    const a = newAction !== null ? newAction : action;
    const c = newCat !== null ? newCat : categorie;
    const d = newDate !== null ? newDate : chantierDate;
    
    if (newAction !== null) setAction(newAction);
    if (newCat !== null) setCategorie(newCat);
    if (newDate !== null) setChantierDate(newDate);

    if (imageFile) {
      mettreAJourTexte(imageFile, a, c, localisation, d);
    }
  };

  // --- CIRCUIT DE PUBLICATION DIRECT ---
  const publierChantier = async () => {
    if (!imageFile || localisation === 'Recherche...') return;
    
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', imageFile);
      formData.append('upload_preset', UPLOAD_PRESET);
      
      const cloudinaryRes = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData
      });
      
      const cloudinaryData = await cloudinaryRes.json();
      if (!cloudinaryData.secure_url) throw new Error("Erreur lors de l'upload Cloudinary");
      const imageUrl = cloudinaryData.secure_url;

      const { error: dbError } = await supabase
        .from('chantiers')
        .insert([
          { 
            image_url: imageUrl, 
            texte: texteGenere, 
            type: action, 
            domaine: categorie, 
            ville: localisation,
            created_at: new Date(chantierDate).toISOString()
          }
        ]);

      if (dbError) throw dbError;

      if (MAKE_WEBHOOK_URL) {
        await fetch(MAKE_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            texte: texteGenere,
            photoUrl: imageUrl,
            type: action,
            domaine: categorie,
            ville: localisation
          })
        });
      }

      setSucces(true);
      setTimeout(() => {
        setSucces(false);
        setPreview(null);
        setImageFile(null);
        setTexteGenere('');
        setLocalisation('Secteur non défini');
        setChantierDate(getTodayString());
      }, 3000);

    } catch (error) {
      console.error("Erreur lors de la publication :", error);
      alert("Une erreur est survenue lors de l'envoi. Vérifie la console.");
    } finally {
      setIsUploading(false);
    }
  };

  const isButtonDisabled = !imageFile || isUploading || isGeneratingAi || succes || localisation === 'Recherche...';

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 pb-24">
      <div className="max-w-md mx-auto">
        
        {/* En-tête */}
        <div className="flex items-center justify-between mb-6 pt-2">
          <Link to="/" className="text-slate-400 hover:text-white flex items-center gap-1 text-sm">
            <ArrowLeft size={18} /> Retour au site
          </Link>
          <span className="text-xs bg-blue-600/30 text-blue-400 px-3 py-1 rounded-full font-medium border border-blue-500/30">
            Espace Interne
          </span>
        </div>

        <div className="bg-slate-800 rounded-2xl shadow-xl border border-slate-700/60 p-6 space-y-6">
          <div className="flex items-start justify-between gap-2">
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="text-blue-500" />
              Nouveau Chantier
            </h1>
            
            {preview && (
              <div className="flex flex-col items-end gap-1.5">
                {localisation === 'Recherche...' ? (
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium bg-amber-950/50 px-2.5 py-1.5 rounded-lg border border-amber-800/50">
                    <Loader2 size={12} className="animate-spin" /> Recherche GPS...
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-1 text-xs text-emerald-400 font-medium bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-800/50">
                      <MapPin size={12} /> {localisation}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-300 font-medium bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700">
                      <Calendar size={12} className="text-blue-400" />
                      <span>Date :</span>
                      <input 
                        type="date"
                        value={chantierDate}
                        onChange={(e) => handleSelectChange(null, null, e.target.value)}
                        disabled={isUploading}
                        className="bg-transparent text-slate-100 focus:outline-none cursor-pointer text-xs"
                      />
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Photo */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">1. Photo du chantier</label>
            <div className="relative border-2 border-dashed border-slate-600 rounded-xl p-6 hover:border-blue-500 transition-colors text-center bg-slate-900/50">
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handlePhotoChange}
                disabled={isUploading}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed"
              />
              {preview ? (
                <div className="space-y-3">
                  <img src={preview} alt="Aperçu" className="mx-auto h-40 object-cover rounded-lg border border-slate-700 shadow-md" />
                  <div className="text-xs text-blue-400 flex items-center justify-center gap-1 font-medium">
                    <RefreshCw size={14} /> Appuyer pour changer de photo
                  </div>
                </div>
              ) : (
                <div className="text-slate-400 flex flex-col items-center py-6">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 mb-3 border border-blue-500/30">
                    <Camera size={32} />
                  </div>
                  <span className="text-sm font-bold text-slate-200">Appuyer pour prendre la photo</span>
                  <span className="text-xs text-slate-400 mt-1">L'appareil photo s'ouvrira directement</span>
                </div>
              )}
            </div>
          </div>

          {/* Sélecteurs */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300">2. Type</label>
              <select 
                value={action} 
                onChange={(e) => handleSelectChange(e.target.value, null, null)}
                disabled={isUploading}
                className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
              >
                <option value="installation">Installation</option>
                <option value="rénovation">Rénovation</option>
                <option value="dépannage">Dépannage</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300">3. Domaine</label>
              <select 
                value={categorie} 
                onChange={(e) => handleSelectChange(null, e.target.value, null)}
                disabled={isUploading}
                className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
              >
                <option value="PAC">PAC</option>
                <option value="Salle de Bain">Salle de Bain</option>
                <option value="Adoucisseur">Adoucisseur</option>
                <option value="VMC">VMC</option>
                <option value="Radiateur">Radiateur</option>
              </select>
            </div>
          </div>

          {/* Aperçu du texte généré par Mistral AI (Editable avant envoi) */}
          {preview && (
            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-blue-400" />
                    4. Description IA (Modifiable) :
                  </label>
                  <button
                    type="button"
                    onClick={() => mettreAJourTexte(imageFile, action, categorie, localisation, chantierDate)}
                    disabled={isGeneratingAi || isUploading}
                    className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium disabled:opacity-50"
                  >
                    <RefreshCw size={12} className={isGeneratingAi ? "animate-spin" : ""} />
                    Régénérer
                  </button>
                </div>

                <div className="relative">
                  {isGeneratingAi && (
                    <div className="absolute inset-0 bg-slate-900/80 rounded-xl flex items-center justify-center gap-2 text-xs text-blue-400 font-medium z-10">
                      <Loader2 size={16} className="animate-spin" /> Analyse Pixtral & Rédaction SEO...
                    </div>
                  )}
                  <textarea
                    value={texteGenere}
                    onChange={(e) => setTexteGenere(e.target.value)}
                    disabled={isUploading || isGeneratingAi}
                    className="w-full bg-slate-900 p-4 rounded-xl text-xs text-slate-200 border border-slate-700/80 min-h-[150px] resize-y focus:ring-2 focus:ring-blue-500 focus:outline-none whitespace-pre-wrap leading-relaxed disabled:opacity-50"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Bouton de publication */}
          {preview && (
            <button 
              onClick={publierChantier}
              disabled={isButtonDisabled}
              className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98] ${
                succes ? 'bg-emerald-600 text-white' : 
                isButtonDisabled ? 'bg-slate-700 text-slate-400 cursor-not-allowed' : 
                'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
            >
              {succes ? <CheckCircle size={20} /> : isUploading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
              {succes ? 'Publié partout avec succès !' : 
               isUploading ? 'Transmission en cours...' : 
               isGeneratingAi ? 'Génération du texte par l\'IA...' :
               localisation === 'Recherche...' ? 'Calcul de la position GPS...' : 
               'Publier (Google + Site Web)'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}