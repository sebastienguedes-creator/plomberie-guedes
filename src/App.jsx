import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// --- LAYOUTS & COMPOSANTS CRITIQUES ---
// Chargés immédiatement pour ne pas bloquer l'affichage de l'interface principale
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// --- PAGE D'ACCUEIL ---
// Chargée de manière synchrone pour garantir le meilleur score LCP possible au premier atterrissage
import Accueil from './pages/Accueil';

// --- PAGES DIFFÉRÉES (Code Splitting avec React.lazy) ---
// Ces pages ne seront téléchargées par le navigateur que si l'utilisateur clique dessus
const MentionsLegales = lazy(() => import('./components/MentionsLegales'));
const PolitiqueConfidentialite = lazy(() => import('./components/PolitiqueConfidentialite'));
const PompeAChaleur = lazy(() => import('./pages/PompeAChaleur'));
const SalleDeBain = lazy(() => import('./pages/SalleDeBain'));
const AdoucisseurEau = lazy(() => import('./pages/AdoucisseurEau'));
const VmcVentilation = lazy(() => import('./pages/VmcVentilation'));
const ChauffageRadiateurs = lazy(() => import('./pages/ChauffageRadiateurs'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const UrgenceDepannage = lazy(() => import('./pages/UrgenceDepannage'));
const AdminChantier = lazy(() => import('./pages/AdminChantier'));

// --- COMPOSANT DE CHARGEMENT ---
// S'affiche très brièvement pendant le téléchargement d'une nouvelle page
const PageLoader = () => (
  <div className="flex-grow flex items-center justify-center min-h-[50vh]">
    <div className="w-8 h-8 border-4 border-slate-700 border-t-slate-300 rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // --- Raccourci secret pour aller sur /admin (Ctrl + Shift + Espace) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.code === 'Space') {
        e.preventDefault();
        navigate('/admin');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);
  
  // On vérifie si on est sur la page admin
  const isAdminPage = location.pathname === '/admin';

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <ScrollToTop />
      
      {/* La Navbar s'affiche partout SAUF sur /admin */}
      {!isAdminPage && <Navbar />} 
      
      <div className="flex-grow flex flex-col">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Accueil />} />
            
            {/* Pages SEO Métier & Locales */}
            <Route path="/installation-pompe-a-chaleur" element={<PompeAChaleur />} />
            <Route path="/renovation-salle-de-bain" element={<SalleDeBain />} />
            <Route path="/installation-adoucisseur-eau" element={<AdoucisseurEau />} />
            <Route path="/installation-vmc-ventilation" element={<VmcVentilation />} />
            <Route path="/chauffage-central-radiateurs" element={<ChauffageRadiateurs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/urgence-depannage-plomberie" element={<UrgenceDepannage />} />
            
            {/* Pages légales */}
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />

            {/* Page Admin / Outil Chantier */}
            <Route path="/admin" element={<AdminChantier />} />
          </Routes>
        </Suspense>
      </div>

      {/* Le Footer s'affiche partout SAUF sur /admin */}
      {!isAdminPage && <Footer />}
    </div>
  );
}