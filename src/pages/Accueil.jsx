import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import CertificationsBanner from '../components/sections/CertificationsBanner';
import QuickAccessBar from '../components/sections/QuickAccessBar'; // ✅ Chemin corrigé
import Services from '../components/sections/Services';
import Realisations from '../components/sections/Realisations';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

export default function Accueil() {
    return (
        <main>
            <Helmet>
                <title>Plombier Chauffagiste Eure (27) | SARL Anthony GUEDES</title>
                <meta name="description" content="Artisan plombier chauffagiste dans l'Eure (Bernay, Évreux). Installation, dépannage, pompe à chaleur, rénovation salle de bain." />
                <link rel="canonical" href="https://www.plomberie-guedes.fr/" />

                {/* Open Graph */}
                <meta property="og:title" content="Plombier Chauffagiste Eure (27) | SARL Anthony GUEDES" />
                <meta property="og:description" content="Artisan plombier chauffagiste dans l'Eure (Bernay, Évreux). Installation, dépannage, pompe à chaleur, rénovation salle de bain." />
                <meta property="og:url" content="https://www.plomberie-guedes.fr/" />
                <meta property="og:type" content="website" />
            </Helmet>

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