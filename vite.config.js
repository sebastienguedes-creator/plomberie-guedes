import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Découpage manuel des paquets pour éliminer le JS inutilisé selon les recommandations Lighthouse
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 1. Isoler le moteur critique (chargé instantanément)
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            // 2. Isoler la base de données (lourd, chargé uniquement si besoin)
            if (id.includes('@supabase')) {
              return 'vendor-supabase';
            }
            // 3. Isoler la bibliothèque d'icônes (très lourd)
            if (id.includes('lucide-react')) {
              return 'vendor-lucide';
            }
            // 4. Regrouper le reste des dépendances mineures
            return 'vendor-utils';
          }
        }
      }
    },
    // Désactive les alertes de taille dans le terminal si un chunk dépasse 500ko (purement cosmétique)
    chunkSizeWarningLimit: 800,
  }
});