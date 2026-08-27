import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Camera, Send, CheckCircle, ArrowLeft, MapPin, Sparkles, RefreshCw, Loader2, Calendar, Lock, Edit3, Trash2, Save, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

// --- CONFIGURATION SÉCURISÉE (VIA .env / VERCEL) ---
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

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

// --- GÉNÉRATEUR PAR IA (MISTRAL PIXTRAL-12B) ---
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

    if (MISTRAL_API_KEY) {
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
      response = await fetch("/api/generate-description", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, base64Image })
      });
    }

    if (!response || !response.ok) {
      return getUniqueDynamicText(act, cat, loc, dateFormatted);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    return content ? content.trim() : getUniqueDynamicText(act, cat, loc, dateFormatted);
  } catch (err) {
    return getUniqueDynamicText(act, cat, loc, dateFormatted);
  }
};

// --- GÉNÉRATEUR LOCAL DE SECOURS ---
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
      "Pour dire adieu aux traces de calcaire et prolonger durablement la durée de vie de vos équipements, rien ne remplace une installation sur mesure."
    ],
    "PAC": [
      "Optimiser les performances énergétiques de l'habitat et garantir un confort thermique idéal, quelle que soit la saison, c'est tout l'enjeu de cette installation."
    ],
    "Salle de Bain": [
      "Transformation et aménagement de cet espace d'eau pour allier esthétisme, modernité et fonctionnalité au quotidien."
    ],
    "VMC": [
      "Assurer un air sain et renouvelé en continu dans le logement est essentiel pour éviter l'humidité et protéger le bâti."
    ],
    "Radiateur": [
      "Mise en place d'émetteurs de chaleur adaptés pour assurer une température homogène et un confort thermique parfait dans chaque pièce."
    ]
  };

  const defaultBodies = [
    "Un travail rigoureux et soigné assuré pour garantir la fiabilité et la durabilité de vos installations."
  ];

  const ctas = [
    "📞 Un projet de rénovation ou besoin d'un dépannage ? Contactez Guedes Plomberie pour un devis gratuit !"
  ];

  const randomHook = hooks[Math.floor(Math.random() * hooks.length)];
  const bodiesList = domainBodies[cat] || defaultBodies;
  const randomBody = bodiesList[Math.floor(Math.random() * bodiesList.length)];
  const randomCta = ctas[Math.floor(Math.random() * ctas.length)];

  return `${randomHook}\n\n${randomBody}\n\n${randomCta}\n\n#plomberie #artisan #guedesplomberie`;
};

const getTodayString = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

// --- UTILITAIRE : EXTRAIRE LE PUBLIC_ID CLOUDINARY DEPUIS L'URL ---
const getPublicIdFromUrl = (url) => {
  if (!url) return null;
  try {
    const parts = url.split('/');
    const uploadIndex = parts.indexOf('upload');
    if (uploadIndex === -1) return null;
    let pathParts = parts.slice(uploadIndex + 1);
    if (pathParts[0].startsWith('v')) {
      pathParts = pathParts.slice(1);
    }
    const fullPath = pathParts.join('/');
    const lastDotIndex = fullPath.lastIndexOf('.');
    return lastDotIndex !== -1 ? fullPath.substring(0, lastDotIndex) : fullPath;
  } catch (e) {
    return null;
  }
};

export default function AdminChantier() {
  const [session, setSession] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authMessage, setAuthMessage] = useState('');
  const [isForgotMode, setIsForgotMode] = useState(false);
  const [isLoadingAuthAction, setIsLoadingAuthAction] = useState(false);

  const [activeTab, setActiveTab] = useState('add');

  const [chantiersExistants, setChantiersExistants] = useState([]);
  const [loadingChantiers, setLoadingChantiers] = useState(false);

  useEffect(() => {
    if (!supabase) {
      setLoadingAuth(false);
      return;
    }
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoadingAuth(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (activeTab === 'edit' && session) {
      chargerChantiers();
    }
  }, [activeTab, session]);

  const chargerChantiers = async () => {
    if (!supabase) return;
    setLoadingChantiers(true);
    const { data, error } = await supabase
      .from('chantiers')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setChantiersExistants(data);
    }
    setLoadingChantiers(false);
  };

  const modifierChantierSupabase = async (id, nouveauTexte, nouvelleVille, nouveauType, nouveauDomaine, nouvelleDate) => {
    if (!supabase) return;
    const { error } = await supabase
      .from('chantiers')
      .update({ 
        texte: nouveauTexte, 
        ville: nouvelleVille,
        type: nouveauType,
        domaine: nouveauDomaine,
        created_at: new Date(nouvelleDate).toISOString()
      })
      .eq('id', id);

    if (error) {
      alert("Erreur lors de la modification.");
    } else {
      alert("Chantier mis à jour avec succès !");
      chargerChantiers();
    }
  };

  const toggleForceVisible = async (id, currentStatus) => {
    if (!supabase) return;
    const newStatus = !currentStatus;
    const { error } = await supabase
      .from('chantiers')
      .update({ force_visible: newStatus })
      .eq('id', id);

    if (error) {
      alert("Erreur lors de la modification du statut épinglé.");
    } else {
      setChantiersExistants(
        chantiersExistants.map(c => c.id === id ? { ...c, force_visible: newStatus } : c)
      );
    }
  };

  const supprimerChantierSupabase = async (id, imageUrl) => {
    if (!confirm("Voulez-vous vraiment supprimer ce chantier ? Cela supprimera l'entrée et l'image associée.")) return;
    if (!supabase) return;

    try {
      const { error: dbError } = await supabase
        .from('chantiers')
        .delete()
        .eq('id', id);

      if (dbError) throw dbError;

      const publicId = getPublicIdFromUrl(imageUrl);
      if (MAKE_WEBHOOK_URL && publicId) {
        await fetch(MAKE_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'delete_image',
            public_id: publicId,
            image_url: imageUrl
          })
        });
      }

      setChantiersExistants(chantiersExistants.filter(c => c.id !== id));
      alert("Chantier et image supprimés avec succès !");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la suppression.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoadingAuthAction(true);
    setAuthError('');
    if (!supabase) return;

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setAuthError("E-mail ou mot de passe incorrect.");
    setIsLoadingAuthAction(false);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setAuthError("Veuillez entrer votre e-mail d'abord.");
      return;
    }
    setIsLoadingAuthAction(true);
    setAuthError('');
    setAuthMessage('');

    if (!supabase) return;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/admin',
    });

    if (error) {
      setAuthError("Erreur lors de l'envoi de l'e-mail de réinitialisation.");
    } else {
      setAuthMessage("Un e-mail de réinitialisation a été envoyé à cette adresse.");
    }
    setIsLoadingAuthAction(false);
  };

  const handleLogout = async () => {
    if (supabase) await supabase.auth.signOut();
  };

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

  const [rechercheVille, setRechercheVille] = useState('');
  const [suggestionsVilles, setSuggestionsVilles] = useState([]);
  const [isSaisieManuelle, setIsSaisieManuelle] = useState(false);

  useEffect(() => {
    if (rechercheVille.length < 2) {
      setSuggestionsVilles([]);
      return;
    }
    
    const fetchVilles = async () => {
      try {
        const res = await fetch(`https://geo.api.gouv.fr/communes?nom=${rechercheVille}&fields=codesPostaux&boost=population&limit=5`);
        const data = await res.json();
        setSuggestionsVilles(data);
      } catch (err) {
        console.error("Erreur lors de la récupération des villes", err);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchVilles();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [rechercheVille]);

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

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));

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
            } catch {
              setLocalisation('Secteur d\'intervention');
            }
          },
          () => {
            setLocalisation('Secteur d\'intervention');
          },
          { timeout: 10000 }
        );
      } else {
        setLocalisation('Secteur d\'intervention');
      }
    }
  };

  const handleSelectChange = (newAction, newCat, newDate) => {
    if (newAction !== null) setAction(newAction);
    if (newCat !== null) setCategorie(newCat);
    if (newDate !== null) setChantierDate(newDate);
  };

  const publierChantier = async () => {
    if (!imageFile || localisation === 'Recherche...' || !supabase) return;
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
      if (!cloudinaryData.secure_url) throw new Error("Erreur Cloudinary");
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
      console.error(error);
      alert("Erreur lors de la publication.");
    } finally {
      setIsUploading(false);
    }
  };

  if (loadingAuth) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-500" size={32} />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
        <Helmet>
          <title>Connexion - Admin Chantiers</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="w-full max-w-sm bg-slate-800 rounded-2xl shadow-xl border border-slate-700/60 p-6 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 mx-auto border border-blue-500/30">
              <Lock size={22} />
            </div>
            <h1 className="text-xl font-bold text-white">Espace Sécurisé</h1>
            <p className="text-xs text-slate-400">Guedes Plomberie - Administration</p>
          </div>

          {!isForgotMode ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm mb-3"
                  required
                />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                  required
                />
              </div>

              {authError && <p className="text-xs text-red-400 text-center font-medium">{authError}</p>}
              {authMessage && <p className="text-xs text-emerald-400 text-center font-medium">{authMessage}</p>}

              <button
                type="submit"
                disabled={isLoadingAuthAction}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2"
              >
                {isLoadingAuthAction && <Loader2 size={16} className="animate-spin" />}
                Se connecter
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => { setIsForgotMode(true); setAuthError(''); setAuthMessage(''); }}
                  className="text-xs text-blue-400 hover:underline"
                >
                  Mot de passe oublié ?
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <p className="text-xs text-slate-300 text-center">Entre ton e-mail pour recevoir un lien de réinitialisation :</p>
              <input
                type="email"
                placeholder="Votre e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                required
              />

              {authError && <p className="text-xs text-red-400 text-center font-medium">{authError}</p>}
              {authMessage && <p className="text-xs text-emerald-400 text-center font-medium">{authMessage}</p>}

              <button
                type="submit"
                disabled={isLoadingAuthAction}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2"
              >
                {isLoadingAuthAction && <Loader2 size={16} className="animate-spin" />}
                Envoyer le lien de réinitialisation
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => { setIsForgotMode(false); setAuthError(''); setAuthMessage(''); }}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Retour à la connexion
                </button>
              </div>
            </form>
          )}

          <div className="text-center pt-2 border-t border-slate-700/50">
            <Link to="/" className="text-xs text-slate-400 hover:text-white flex items-center justify-center gap-1">
              <ArrowLeft size={14} /> Retour au site public
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isButtonDisabled = !imageFile || isUploading || isGeneratingAi || succes || localisation === 'Recherche...';

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 pb-24">
      <Helmet>
        <title>Administration - Chantiers</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-md mx-auto">

        <div className="flex items-center justify-between mb-4 pt-2">
          <Link to="/" className="text-slate-400 hover:text-white flex items-center gap-1 text-sm">
            <ArrowLeft size={18} /> Retour au site
          </Link>
          <button
            onClick={handleLogout}
            className="text-xs text-red-400 hover:text-red-300 bg-red-950/40 px-3 py-1 rounded-full border border-red-800/40"
          >
            Déconnexion
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-6 bg-slate-800 p-1.5 rounded-2xl border border-slate-700/60">
          <button
            onClick={() => setActiveTab('add')}
            className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'add'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            <Sparkles size={16} /> Ajouter un chantier
          </button>
          <button
            onClick={() => setActiveTab('edit')}
            className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'edit'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            <Edit3 size={16} /> Gérer / Modifier
          </button>
        </div>

        {activeTab === 'add' && (
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
                      <div className="relative">
                        <div 
                          className="flex items-center gap-1 text-xs text-emerald-400 font-medium bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-800/50 cursor-pointer"
                          onClick={() => setIsSaisieManuelle(true)}
                        >
                          <MapPin size={12} className="flex-shrink-0" />
                          {isSaisieManuelle ? (
                            <input
                              type="text"
                              autoFocus
                              value={rechercheVille}
                              onChange={(e) => setRechercheVille(e.target.value)}
                              placeholder="Tapez une ville..."
                              className="bg-transparent border-none focus:outline-none text-emerald-400 w-full placeholder-emerald-700/50"
                              onBlur={() => setTimeout(() => setIsSaisieManuelle(false), 200)}
                            />
                          ) : (
                            <span>{localisation}</span>
                          )}
                        </div>

                        {isSaisieManuelle && suggestionsVilles.length > 0 && (
                          <div className="absolute top-full mt-1 right-0 w-[200px] bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-50 overflow-hidden">
                            {suggestionsVilles.map((ville) => (
                              <div
                                key={ville.code}
                                className="px-3 py-2 text-xs text-slate-200 hover:bg-blue-600 cursor-pointer flex items-center justify-between"
                                onMouseDown={(e) => {
                                  e.preventDefault();
                                  const cp = ville.codesPostaux ? ville.codesPostaux[0] : '';
                                  const villeFormatee = cp ? `${ville.nom} (${cp})` : ville.nom;
                                  
                                  setLocalisation(villeFormatee);
                                  setIsSaisieManuelle(false);
                                  setRechercheVille('');
                                }}
                              >
                                <span className="font-medium">{ville.nom}</span>
                                <span className="text-slate-400 text-[10px]">{ville.codesPostaux?.[0]}</span>
                              </div>
                            ))}
                          </div>
                        )}
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
                      disabled={isGeneratingAi || isUploading || localisation === 'Recherche...'}
                      className={`text-xs flex items-center gap-1 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${localisation === 'Recherche...'
                          ? 'text-slate-500'
                          : 'text-blue-400 hover:text-blue-300'
                        }`}
                    >
                      <RefreshCw size={12} className={isGeneratingAi ? "animate-spin" : ""} />
                      {texteGenere ? 'Régénérer' : 'Générer avec l\'IA'}
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

            {preview && (
              <button
                onClick={publierChantier}
                disabled={isButtonDisabled}
                className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98] ${succes ? 'bg-emerald-600 text-white' :
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
        )}

        {activeTab === 'edit' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 px-1">
              <Edit3 className="text-blue-500" size={18} /> Chantiers publiés ({chantiersExistants.length})
            </h2>

            {loadingChantiers ? (
              <div className="bg-slate-800 rounded-2xl p-12 text-center border border-slate-700/60">
                <Loader2 className="animate-spin text-blue-500 mx-auto" size={32} />
                <p className="text-xs text-slate-400 mt-2">Chargement des chantiers...</p>
              </div>
            ) : chantiersExistants.length === 0 ? (
              <div className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700/60 text-slate-400 text-xs">
                Aucun chantier trouvé dans la base de données.
              </div>
            ) : (
              chantiersExistants.map((chantier) => (
                <ChantierEditableCard
                  key={chantier.id}
                  chantier={chantier}
                  onUpdate={modifierChantierSupabase}
                  onDelete={supprimerChantierSupabase}
                  onToggleForce={toggleForceVisible}
                />
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
}

// --- SOUS-COMPOSANT POUR CHAQUE CARTE MODIFIABLE ---
function ChantierEditableCard({ chantier, onUpdate, onDelete, onToggleForce }) {
  const [texteModifie, setTexteModifie] = useState(chantier.texte);
  const [villeModifiee, setVilleModifiee] = useState(chantier.ville);
  
  const [typeModifie, setTypeModifie] = useState(chantier.type || 'dépannage');
  const [domaineModifie, setDomaineModifie] = useState(chantier.domaine || 'PAC');
  
  const getFormattedDateForInput = (dateStr) => {
    if (!dateStr) return getTodayString();
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return getTodayString();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };
  const [dateModifiee, setDateModifiee] = useState(getFormattedDateForInput(chantier.created_at));

  const [isSaving, setIsSaving] = useState(false);

  const [rechercheVille, setRechercheVille] = useState('');
  const [suggestionsVilles, setSuggestionsVilles] = useState([]);
  const [isSaisieManuelle, setIsSaisieManuelle] = useState(false);

  useEffect(() => {
    if (rechercheVille.length < 2) {
      setSuggestionsVilles([]);
      return;
    }
    
    const fetchVilles = async () => {
      try {
        const res = await fetch(`https://geo.api.gouv.fr/communes?nom=${rechercheVille}&fields=codesPostaux&boost=population&limit=5`);
        const data = await res.json();
        setSuggestionsVilles(data);
      } catch (err) {
        console.error("Erreur lors de la récupération des villes", err);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchVilles();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [rechercheVille]);

  const handleSave = async () => {
    setIsSaving(true);
    await onUpdate(chantier.id, texteModifie, villeModifiee, typeModifie, domaineModifie, dateModifiee);
    setIsSaving(false);
  };

  return (
    <div className="bg-slate-800 rounded-2xl shadow-xl border border-slate-700/60 p-4 space-y-4">
      <div className="flex gap-3">
        {chantier.image_url && (
          <img
            src={chantier.image_url}
            alt="Chantier"
            className="w-20 h-20 object-cover rounded-xl border border-slate-700 flex-shrink-0"
          />
        )}
        <div className="flex-1 text-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="bg-blue-950/60 text-blue-400 px-2 py-0.5 rounded border border-blue-800/40 font-medium">
              {domaineModifie} ({typeModifie})
            </span>
            <div className="flex items-center gap-1.5">
              {/* Sélecteur de date intégré en haut à droite */}
              <input
                type="date"
                value={dateModifiee}
                onChange={(e) => setDateModifiee(e.target.value)}
                className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-slate-300 text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none cursor-pointer"
                title="Modifier la date du chantier"
              />

              <button
                type="button"
                onClick={() => onToggleForce(chantier.id, chantier.force_visible)}
                title={chantier.force_visible ? "Épinglé (toujours visible sur le site)" : "Cliquer pour épingler sur le site"}
                className={`p-1.5 rounded-lg transition-colors flex items-center justify-center ${chantier.force_visible
                    ? "bg-red-500/20 text-red-500 border border-red-500/40"
                    : "bg-slate-900 text-slate-400 hover:text-red-400 border border-slate-700"
                  }`}
              >
                <Heart size={16} className={chantier.force_visible ? "fill-red-500" : ""} />
              </button>
            </div>
          </div>
          
          <div className="relative pt-1">
            <div 
              className="flex items-center gap-1 text-emerald-400 font-medium cursor-pointer"
              onClick={() => setIsSaisieManuelle(true)}
            >
              <MapPin size={12} className="flex-shrink-0" />
              {isSaisieManuelle ? (
                <input
                  type="text"
                  autoFocus
                  value={rechercheVille}
                  onChange={(e) => setRechercheVille(e.target.value)}
                  placeholder="Tapez une ville..."
                  className="bg-transparent border-b border-emerald-500 focus:outline-none text-emerald-400 w-full placeholder-emerald-700/50"
                  onBlur={() => setTimeout(() => setIsSaisieManuelle(false), 200)}
                />
              ) : (
                <span className="border-b border-transparent hover:border-emerald-800 w-full pb-0.5">
                  {villeModifiee}
                </span>
              )}
            </div>

            {isSaisieManuelle && suggestionsVilles.length > 0 && (
              <div className="absolute top-full mt-1 left-0 w-[200px] bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-50 overflow-hidden">
                {suggestionsVilles.map((ville) => (
                  <div
                    key={ville.code}
                    className="px-3 py-2 text-xs text-slate-200 hover:bg-blue-600 cursor-pointer flex items-center justify-between"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      const cp = ville.codesPostaux ? ville.codesPostaux[0] : '';
                      const villeFormatee = cp ? `${ville.nom} (${cp})` : ville.nom;
                      
                      setVilleModifiee(villeFormatee);
                      setIsSaisieManuelle(false);
                      setRechercheVille('');
                    }}
                  >
                    <span className="font-medium">{ville.nom}</span>
                    <span className="text-slate-400 text-[10px]">{ville.codesPostaux?.[0]}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Grille sur 2 colonnes (Type et Domaine) */}
      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-700/40">
        <div>
          <label className="block text-[10px] text-slate-400 mb-1">Type</label>
          <select
            value={typeModifie}
            onChange={(e) => setTypeModifie(e.target.value)}
            className="w-full p-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
          >
            <option value="installation">Installation</option>
            <option value="rénovation">Rénovation</option>
            <option value="dépannage">Dépannage</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] text-slate-400 mb-1">Domaine</label>
          <select
            value={domaineModifie}
            onChange={(e) => setDomaineModifie(e.target.value)}
            className="w-full p-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
          >
            <option value="PAC">PAC</option>
            <option value="Salle de Bain">Salle de Bain</option>
            <option value="Adoucisseur">Adoucisseur</option>
            <option value="VMC">VMC</option>
            <option value="Radiateur">Radiateur</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-medium text-slate-300">Modifier la description :</label>
        <textarea
          value={texteModifie}
          onChange={(e) => setTexteModifie(e.target.value)}
          className="w-full bg-slate-900 p-3 rounded-xl text-xs text-slate-200 border border-slate-700/80 min-h-[120px] resize-y focus:ring-2 focus:ring-blue-500 focus:outline-none whitespace-pre-wrap leading-relaxed"
        />
      </div>

      <div className="flex items-center justify-between pt-1">
        <button
          onClick={() => onDelete(chantier.id, chantier.image_url)}
          className="text-xs text-red-400 hover:text-red-300 bg-red-950/40 px-3 py-2 rounded-xl border border-red-800/40 flex items-center gap-1 transition-all"
        >
          <Trash2 size={14} /> Supprimer
        </button>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="text-xs text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl font-bold shadow-lg flex items-center gap-1.5 transition-all disabled:opacity-50"
        >
          {isSaving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
          Enregistrer
        </button>
      </div>
    </div>
  );
}