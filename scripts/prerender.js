import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, '../dist');

// Liste des URLs de votre site à pré-rendre
const routes = [
  '/',
  '/urgence-depannage-plomberie',
  '/installation-pompe-a-chaleur',
  '/renovation-salle-de-bain',
  '/installation-adoucisseur-eau',
  '/installation-vmc-ventilation',
  '/chauffage-central-radiateurs',
];

// 🟢 ÉTAPE CLÉ : On sauvegarde une copie propre du template initial de Vite
const originalIndexPath = path.join(DIST_DIR, 'index.html');
const templateIndexPath = path.join(DIST_DIR, 'index-template.html');
fs.copyFileSync(originalIndexPath, templateIndexPath);

// Serveur local temporaire avec fallback SPA (utilisant le template vierge)
const server = http.createServer((req, res) => {
  let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
  
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    // 🟢 On pointe vers le template propre au lieu de index.html qui est écrasé au fur et à mesure
    filePath = templateIndexPath;
  }

  const ext = path.extname(filePath);
  const contentType = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
  }[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Erreur serveur');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(4567, async () => {
  console.log('🤖 Démarrage du robot de pré-rendu...');
  const browser = await puppeteer.launch({ headless: 'new' });

  for (const route of routes) {
    const page = await browser.newPage();
    const url = `http://localhost:4567${route}`;
    await page.goto(url, { waitUntil: 'networkidle0' });

    const html = await page.content();
    const routeDir = route === '/' ? DIST_DIR : path.join(DIST_DIR, route);

    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
    console.log(`✅ Page pré-rendue avec succès : ${route}`);

    await page.close();
  }

  // 🟢 Nettoyage : On supprime le fichier template temporaire du dossier dist
  if (fs.existsSync(templateIndexPath)) {
    fs.unlinkSync(templateIndexPath);
  }

  await browser.close();
  server.close();
  console.log('🎉 Pré-rendu HTML terminé ! Chaque page a désormais ses propres balises uniques.');
});
