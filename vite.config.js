import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Cible les navigateurs récents pour un code plus léger
    target: 'esnext', 
    
    // Désactive les sourcemaps en production si vous n'en avez pas besoin (allège le build)
    sourcemap: false, 
    
    rollupOptions: {
      output: {
        // Logique de découpage automatique des dépendances (Code Splitting)
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Sépare le cœur de React dans un fichier dédié
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            // Sépare le client Supabase (souvent lourd)
            if (id.includes('@supabase')) {
              return 'vendor-supabase';
            }
            // Sépare la bibliothèque d'icônes
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            // Regroupe le reste des dépendances externes
            return 'vendor-core';
          }
        }
      }
    },
    // Repousse légèrement la limite d'avertissement de taille de fichier
    chunkSizeWarningLimit: 600,
  }
})