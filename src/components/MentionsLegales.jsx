import { Helmet } from 'react-helmet-async';
import { Scale } from 'lucide-react';

export default function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | SARL Anthony GUEDES</title>
        <meta name="description" content="Mentions légales de la SARL Anthony GUEDES, plombier chauffagiste à Valailles (27)." />
      </Helmet>

      <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* En-tête de la page */}
          <div className="text-center mb-12">
            <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Mentions Légales</h1>
          </div>

          {/* Contenu juridique */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-10 space-y-10 text-slate-700 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">1. Éditeur du site</h2>
              <p>Le présent site est édité par :</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li><strong>Dénomination sociale :</strong> SARL Anthony GUEDES</li>
                <li><strong>Forme juridique :</strong> SARL (Société à responsabilité limitée)</li>
                <li><strong>Siège social :</strong> 2A Rue du Ravin, 27300 Valailles</li>
                <li><strong>SIRET :</strong> 985 004 480 00010</li>
                <li><strong>Numéro de TVA Intracommunautaire :</strong> FR 20 985004480</li>
                <li><strong>Registre des Métiers :</strong> Immatriculée à la Chambre de Métiers et de l'Artisanat de l'Eure</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">2. Nous contacter</h2>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li><strong>Téléphone :</strong> 06 17 92 10 04</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">3. Assurance Responsabilité Civile Professionnelle (RCP) & Décennale</h2>
              <p>
                Conformément à la réglementation applicable aux artisans du bâtiment, l'entreprise SARL Anthony GUEDES est couverte par une assurance Responsabilité Civile Professionnelle et une Garantie Décennale :
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li><strong>Compagnie d'assurance :</strong> [Nom de votre assurance, ex: MAAF / AXA]</li>
                <li><strong>Numéro de police d'assurance :</strong> [Votre numéro de contrat]</li>
                <li><strong>Couverture géographique :</strong> France Métropolitaine</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">4. Directeur de la publication</h2>
              <p>
                Le directeur de la publication est <strong>Monsieur Anthony GUEDES</strong>, en sa qualité de Gérant de la SARL Anthony GUEDES.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">5. Hébergement du site</h2>
              <p>Ce site est hébergé par :</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li><strong>Nom de l'hébergeur :</strong> Vercel Inc.</li>
                <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">https://vercel.com</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">6. Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="mt-2">
                Toute reproduction totale ou partielle de ce site sans l'autorisation expresse de l'éditeur est prohibée et constituerait une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">7. Médiation de la consommation</h2>
              <p>
                Conformément aux articles L.616-1 et R.616-1 du code de la consommation, nous proposons un dispositif de médiation de la consommation. L'entité de médiation retenue est : <strong>[Nom de votre médiateur, obligatoire pour les artisans, ex: CNPM - MEDIATION DE LA CONSOMMATION]</strong>.
              </p>
              <p className="mt-2">
                En cas de litige, vous pouvez déposer votre réclamation sur son site : [Lien du site du médiateur] ou par voie postale : [Adresse du médiateur].
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}