import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Layouts
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Accueil from './pages/Accueil';
import MentionsLegales from './components/MentionsLegales';
import PolitiqueConfidentialite from './components/PolitiqueConfidentialite';
import PompeAChaleur from './pages/PompeAChaleur';
import SalleDeBain from './pages/SalleDeBain';
import PlombierEvreux from './pages/PlombierEvreux';
import AdoucisseurEau from './pages/AdoucisseurEau';
import VmcVentilation from './pages/VmcVentilation';
import ChauffageRadiateurs from './pages/ChauffageRadiateurs';
import UrgenceDepannage from './pages/UrgenceDepannage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar /> 
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Accueil />} />
          
          {/* Pages SEO Métier & Locales */}
          <Route path="/installation-pompe-a-chaleur" element={<PompeAChaleur />} />
          <Route path="/renovation-salle-de-bain" element={<SalleDeBain />} />
          <Route path="/installation-adoucisseur-eau" element={<AdoucisseurEau />} />
          <Route path="/installation-vmc-ventilation" element={<VmcVentilation />} />
          <Route path="/chauffage-central-radiateurs" element={<ChauffageRadiateurs />} />
          <Route path="/urgence-depannage-plomberie" element={<UrgenceDepannage />} />
          <Route path="/plombier-chauffagiste-evreux" element={<PlombierEvreux />} />
          
          {/* Pages légales */}
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}