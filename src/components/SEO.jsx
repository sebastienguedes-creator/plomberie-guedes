import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, canonicalUrl, ogImage, schema }) {
    const siteName = "SARL Anthony GUEDES";
    const defaultTitle = `Plombier Chauffagiste en Normandie | ${siteName}`;
    const defaultDescription = "Expert en pompes à chaleur, VMC double flux et dépannage plomberie. Devis gratuit et accompagnement aux aides MaPrimeRénov'.";
    const siteUrl = "https://www.guedes-plomberie-chauffage.fr";
    const defaultImage = `${siteUrl}/hero.png`;

    // Gestion du titre (Page | Site)
    const pageTitle = title ? `${title} | ${siteName}` : defaultTitle;
    const metaDescription = description || defaultDescription;
    const canonical = canonicalUrl || siteUrl;
    const ogImg = ogImage || defaultImage;

    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph (Facebook / LinkedIn / WhatsApp) */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={ogImg} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="fr_FR" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={ogImg} />

            {/* Schema.org dynamique si fourni */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}