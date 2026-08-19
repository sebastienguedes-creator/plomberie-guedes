import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';
import CertificationsBanner from '../components/sections/CertificationsBanner';
import QuickAccessBar from '../components/sections/QuickAccessBar';
import Services from '../components/sections/Services';
import Realisations from '../components/sections/Realisations';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

export default function Accueil() {
    return (
        <main>
            <SEO 
                title="Plombier Chauffagiste Eure (27) | SARL Anthony GUEDES"
                description="Artisan plombier chauffagiste dans l'Eure (Bernay, Évreux). Installation, dépannage, pompe à chaleur, rénovation salle de bain."
                canonicalUrl="https://www.plomberie-guedes.fr/"
            />

            <Hero />
            <CertificationsBanner />
            <QuickAccessBar />
            <Services />
            <Realisations />
            <Testimonials />
            <Contact />
        </main>
    );
}