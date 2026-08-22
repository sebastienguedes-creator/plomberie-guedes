import { useState } from 'react';
import { Camera, Copy, CheckCircle, ArrowLeft, MapPin, Sparkles, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminChantier() {
  const [preview, setPreview] = useState(null);
  const [action, setAction] = useState('dépannage');
  const [categorie, setCategorie] = useState('plomberie');
  const [localisation, setLocalisation] = useState('Secteur non défini');
  const [texteGenere, setTexteGenere] = useState('');
  const [copie, setCopie] = useState(false);

  // Déclenchement direct de l'appareil photo du téléphone depuis l'app
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      
      // Lancement de la géolocalisation RGPD et génération du texte
      setLocalisation('Recherche...');
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&zoom=10`, {
                headers: { 'Accept-Language': 'fr' }
              });
              const data = await res.json();
              const ville = data.address?.city || data.address?.town || data.address?.village || data.address?.county || "notre secteur";
              setLocalisation(ville);
              mettreAJourTexte(action, categorie, ville);
            } catch {
              setLocalisation('Secteur d\'intervention');
              mettreAJourTexte(action, categorie, 'Secteur d\'intervention');
            }
          },
          () => {
            setLocalisation('Secteur d\'intervention');
            mettreAJourTexte(action, categorie, 'Secteur d\'intervention');
          },
          { timeout: 10000 }
        );
      } else {
        setLocalisation('Secteur d\'intervention');
        mettreAJourTexte(action, categorie, 'Secteur d\'intervention');
      }
    }
  };

  const mettreAJourTexte = (currentAction, currentCat, currentLoc) => {
    const dateDuJour = new Date().toLocaleDateString('fr-FR', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
    const texte = `Nouvelle intervention de ${currentAction} en ${currentCat} réalisée à ${currentLoc} le ${dateDuJour} ! 🔧\n\nBesoin d'un artisan qualifié ? L'entreprise Guedes Plomberie intervient rapidement avec professionnalisme dans la région. Le travail de qualité est notre priorité.\n\n📞 Contactez-nous pour votre projet ou un devis gratuit !\n#plomberie #artisan #guedesplomberie #${currentCat} #${currentAction}`;
    setTexteGenere(texte);
  };

  const handleSelectChange = (newAction, newCat) => {
    const a = newAction !== null ? newAction : action;
    const c = newCat !== null ? newCat : categorie;
    if (newAction) setAction(newAction);
    if (newCat) setCategorie(newCat);
    mettreAJourTexte(a, c, localisation);
  };

  // Copie le texte ET ouvre directement la recherche Google de sa fiche pro
  const copierEtOuvrirFicheGoogle = () => {
    navigator.clipboard.writeText(texteGenere);
    setCopie(true);
    
    setTimeout(() => {
      window.open('https://www.google.com/search?q=Guedes+Plomberie&authuser=0', '_blank');
    }, 500);
  };

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
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="text-blue-500" />
              Nouveau Chantier
            </h1>
            {preview && (
              <div className="flex items-center gap-1 text-xs text-emerald-400 font-medium bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-800/50">
                <MapPin size={12} /> {localisation}
              </div>
            )}
          </div>

          {/* Zone de prise de photo intégrée */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">1. Photo du chantier</label>
            <div className="relative border-2 border-dashed border-slate-600 rounded-xl p-6 hover:border-blue-500 transition-colors text-center bg-slate-900/50">
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handlePhotoChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
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

          {/* Sélecteurs rapides */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300">2. Type</label>
              <select 
                value={action} 
                onChange={(e) => handleSelectChange(e.target.value, null)}
                className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                onChange={(e) => handleSelectChange(null, e.target.value)}
                className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="plomberie">Plomberie</option>
                <option value="chauffage">Chauffage</option>
                <option value="sanitaire">Sanitaire</option>
              </select>
            </div>
          </div>

          {/* Aperçu du texte généré en temps réel */}
          {texteGenere && (
            <div className="space-y-2 pt-2">
              <label className="block text-sm font-medium text-slate-300">4. Aperçu du texte :</label>
              <div className="bg-slate-900 p-4 rounded-xl text-xs text-slate-300 border border-slate-700/80 h-28 overflow-y-auto whitespace-pre-wrap leading-relaxed">
                {texteGenere}
              </div>
            </div>
          )}

          {/* Bouton unique d'action */}
          {preview && (
            <button 
              onClick={copierEtOuvrirFicheGoogle}
              className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98] ${
                copie ? 'bg-emerald-600 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
            >
              {copie ? <CheckCircle size={20} /> : <Copy size={20} />}
              {copie ? 'Copié ! Ouverture de sa fiche Google...' : 'Copier et ouvrir sa fiche Google'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}