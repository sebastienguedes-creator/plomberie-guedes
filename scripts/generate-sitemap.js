import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Gestion des chemins ES Modules dans Vite
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.plomberie-guedes.fr';
const today = new Date().toISOString().split('T')[0];

// Liste de toutes les routes actuelles du site
const routes = [
  { url: '/', priority: '1.0', changefreq: 'monthly' },
  { url: '/urgence-depannage-plomberie', priority: '1.0', changefreq: 'monthly' },
  { url: '/installation-pompe-a-chaleur', priority: '0.9', changefreq: 'monthly' },
  { url: '/renovation-salle-de-bain', priority: '0.8', changefreq: 'monthly' },
  { url: '/installation-adoucisseur-eau', priority: '0.8', changefreq: 'monthly' },
  { url: '/installation-vmc-ventilation', priority: '0.8', changefreq: 'monthly' },
  { url: '/chauffage-central-radiateurs', priority: '0.8', changefreq: 'monthly' },
];

function generateSitemap() {
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${DOMAIN}${route.url}</loc>
    <lastmod>${route.lastmod || today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const destinationPath = path.join(__dirname, '../public/sitemap.xml');
  
  fs.writeFileSync(destinationPath, xmlContent, 'utf8');
  console.log(`✅ Sitemap généré avec succès dans /public/sitemap.xml [${today}]`);
}

generateSitemap();