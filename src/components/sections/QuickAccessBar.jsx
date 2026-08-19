import { Wrench, Image as ImageIcon, Star, MessageSquare } from 'lucide-react';

export default function QuickAccessBar() {
  const links = [
    { name: 'Nos Services', href: '#services', icon: Wrench, isPrimary: false },
    { name: 'Réalisations', href: '#realisations', icon: ImageIcon, isPrimary: false },
    { name: 'Avis Clients', href: '#temoignages', icon: Star, isPrimary: false },
    { name: 'Demander un devis', href: '#contact', icon: MessageSquare, isPrimary: true },
  ];

  return (
    <section 
      aria-label="Accès rapide aux sections" 
      className="bg-slate-50 border-b border-slate-200 py-4 sm:py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          
          {links.map((link) => {
            const Icon = link.icon;
            
            return (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 ${
                  link.isPrimary 
                    ? 'bg-accent text-white border-2 border-accent hover:bg-accent/90' 
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-accent hover:text-accent'
                }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                <span>{link.name}</span>
              </a>
            );
          })}

        </div>
      </div>
    </section>
  );
}