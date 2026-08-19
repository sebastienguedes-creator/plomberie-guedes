import { Helmet } from 'react-helmet-async';
import { ShieldCheck } from 'lucide-react';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | SARL Anthony GUEDES</title>
        <meta name="description" content="Politique de confidentialité concernant la collecte et l'utilisation de vos données personnelles." />
      </Helmet>

      <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* En-tête de la page */}
          <div className="text-center mb-12">
            <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Politique de Confidentialité</h1>
          </div>

          {/* Contenu juridique */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-10 space-y-10 text-slate-700 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">1. Introduction</h2>
              <p>
                La SARL Anthony GUEDES attache une grande importance à la protection et au respect de votre vie privée. La présente politique de confidentialité vise à vous informer sur la manière dont nous collectons, utilisons et protégeons vos données personnelles dans le cadre de nos activités (plomberie, chauffage, etc.), conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">2. Données personnelles collectées</h2>
              <p>Nous pouvons être amenés à collecter les données suivantes lorsque vous nous contactez (par téléphone, e-mail ou via un formulaire de contact sur le site) :</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li><strong>Données d'identification :</strong> Nom, prénom.</li>
                <li><strong>Coordonnées :</strong> Adresse postale (pour l'établissement des devis et la réalisation des travaux), adresse e-mail, numéro de téléphone.</li>
                <li><strong>Données relatives à votre projet :</strong> Détails des travaux souhaités, spécificités du logement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">3. Utilisation de vos données</h2>
              <p>Les données que nous collectons sont utilisées exclusivement pour les finalités suivantes :</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Traitement de vos demandes de contact et établissement de devis gratuits.</li>
                <li>Planification et exécution des interventions chez vous.</li>
                <li>Gestion de la facturation et de la comptabilité.</li>
                <li>Suivi de la relation client, service après-vente et gestion de la garantie décennale.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">4. Durée de conservation</h2>
              <p>
                Vos données personnelles sont conservées uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées :
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li><strong>Prospects (devis non validés) :</strong> 3 ans à compter du dernier contact.</li>
                <li><strong>Clients :</strong> Pendant toute la durée de la relation commerciale.</li>
                <li><strong>Documents comptables (factures) :</strong> 10 ans, conformément aux obligations légales.</li>
                <li><strong>Dossiers techniques et garantie décennale :</strong> 10 ans à compter de la réception des travaux.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">5. Partage des données</h2>
              <p>
                Vos données personnelles sont strictement confidentielles. Elles sont utilisées uniquement par la SARL Anthony GUEDES et ne sont <strong>jamais vendues, louées ou cédées à des tiers</strong> à des fins commerciales. 
              </p>
              <p className="mt-2">
                Elles peuvent toutefois être transmises à nos partenaires de confiance (ex: cabinet comptable, sous-traitants éventuels) uniquement dans le strict cadre de la gestion administrative de l'entreprise ou de la réalisation de vos travaux.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">6. Vos droits (RGPD)</h2>
              <p>Conformément à la réglementation en vigueur, vous disposez des droits suivants concernant vos données personnelles :</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en obtenir une copie.</li>
                <li><strong>Droit de rectification :</strong> mettre à jour ou corriger vos données si elles sont inexactes.</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données (dans la limite de nos obligations légales de conservation, comme pour les factures).</li>
                <li><strong>Droit d'opposition :</strong> refuser que vos données soient utilisées pour certaines finalités.</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, vous pouvez nous contacter :
              </p>
              <ul className="mt-2 space-y-2 list-disc pl-5">
                <li><strong>Par courrier :</strong> SARL Anthony GUEDES, 2A Rue du Ravin, 27300 Valailles</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">7. Cookies</h2>
              <p>
                Notre site internet peut utiliser des "cookies" (petits fichiers textes déposés sur votre terminal) strictement nécessaires à son bon fonctionnement et à sa sécurité. Si des cookies de mesure d'audience ou tiers sont utilisés, un bandeau de consentement vous permettra de les accepter ou de les refuser lors de votre première visite. Vous pouvez configurer votre navigateur pour bloquer l'ensemble des cookies.
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}