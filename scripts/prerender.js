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
  '/plombier-chauffagiste-evreux',
];

// Serveur local temporaire avec fallback SPA (React Router)
const server = http.createServer((req, res) => {
  let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
  
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(DIST_DIR, 'index.html');
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
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `http://localhost:4567${route}`;
    await page.goto(url, { waitUntil: 'networkidle0' });

    const html = await page.content();
    const routeDir = route === '/' ? DIST_DIR : path.join(DIST_DIR, route);

    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
    console.log(`✅ Page pré-rendue avec succès : ${route}`);
  }

  await browser.close();
  server.close();
  console.log('🎉 Pré-rendu HTML terminé ! Le site est 100 % prêt pour Googlebot.');
});