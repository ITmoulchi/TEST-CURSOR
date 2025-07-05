import React from 'react';
import BannerWithBreadcrumb from '../../../../components/BannerWithBreadcrumb';

export default function DoctoratDTPGUPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-0">
        <BannerWithBreadcrumb 
          title="Doctorat DTPGU"
          image="/images/presentation.jpg"
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-black">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Doctorat Dynamiques Territoriales et Politiques de Gestion Urbaine (DTPGU)</h2>

          {/* Objectifs */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Objectifs</h3>
            <p>
              Cette formation doctorale vise à former des chercheurs et des professionnels capables d'analyser, de comprendre et d'accompagner les dynamiques territoriales et les politiques de gestion urbaine. Elle s'adresse aux étudiants souhaitant approfondir leurs connaissances dans les domaines de l'urbanisme, de l'aménagement du territoire, de la gouvernance urbaine et du développement territorial.
            </p>
          </section>

          {/* Axes de recherche */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Axes de recherche</h3>
            <ul className="list-disc pl-6 space-y-2 text-green-800">
              <li>Dynamiques territoriales et mutations urbaines</li>
              <li>Politiques publiques et gouvernance urbaine</li>
              <li>Planification urbaine et aménagement du territoire</li>
              <li>Gestion des services urbains et participation citoyenne</li>
              <li>Développement durable et résilience urbaine</li>
            </ul>
          </section>

          {/* Conditions d'accès */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Conditions d'accès</h3>
            <ul className="list-disc pl-6 space-y-2 text-green-800">
              <li>Être titulaire d'un Master ou d'un diplôme reconnu équivalent dans les domaines suivants : Urbanisme, Aménagement du territoire, Géographie, Sciences sociales, Sciences économiques, Sciences politiques, Architecture.</li>
              <li>Bonnes connaissances dans la discipline d'origine et ouverture vers l'interdisciplinarité.</li>
            </ul>
          </section>

          {/* Procédures de sélection */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Procédures de sélection</h3>
            <ol className="list-decimal pl-6 space-y-2 text-green-800">
              <li>Sélection sur dossier : étude du parcours académique, du mémoire de Master, des expériences professionnelles et du projet de recherche.</li>
              <li>Entretien : évaluation des connaissances, de la motivation et de la pertinence du projet de thèse.</li>
            </ol>
          </section>

          {/* Dossier de candidature */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Dossier de candidature</h3>
            <ol className="list-decimal pl-6 space-y-2 text-green-800">
              <li>Copie du mémoire de Master ou du travail de fin d'études.</li>
              <li>Lettre de motivation.</li>
              <li>Projet de recherche succinct.</li>
              <li>Deux lettres de recommandation de professeurs.</li>
              <li>CV détaillé.</li>
              <li>Photocopies certifiées des diplômes obtenus.</li>
              <li>Copie certifiée de la CIN et une photo.</li>
              <li>Formulaire d'inscription (à télécharger sur le site de l'INAU).</li>
            </ol>
          </section>

          {/* Contacts */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Contacts</h3>
            <ul className="list-disc pl-6 text-green-800">
              <li>Directeur du CED : Mohamed TAMIM, PES à l'INAU – E-mail : ytamimoh@yahoo.fr</li>
              <li>Coordonnateur scientifique : (à compléter)</li>
              <li>Contact et renseignements : Tél. : 0537.77.16.24 / Fax : 0537.77.50.09</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 