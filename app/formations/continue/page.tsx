import React from 'react';
import BannerWithBreadcrumb from '../../components/BannerWithBreadcrumb';

export default function FormationContinue() {
  return (
    <div className="pb-16">
      <BannerWithBreadcrumb image="/images/graduation.jpg" />
      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-white rounded-lg shadow p-8">
          <p className="text-gray-700 mb-6 text-lg">
            L'institut National d'Aménagement et d'Urbanisme (INAU) a une expérience notable en matière de Formation Continue au profit des acteurs et professionnels de l'aménagements et de l'urbanisme.
          </p>
          <p className="text-gray-700 mb-6">
            Les thèmes des formations sont définis en concertation avec le commanditaire en réponse à ses besoins propres en formation, des bénéficiaires et des thématiques à développer.
          </p>
          <p className="text-gray-700 mb-6">Les thèmes suivant sont proposés à titre indicatif (la liste est non exhaustive) :</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li>Diagnostic territorial</li>
            <li>Conduite et montage d'un Projet de Territoire</li>
            <li>Prospective territoriale</li>
            <li>Politique des villes nouvelles et zone d'urbanisme nouvelle (ZUN)</li>
            <li>Marketing territorial</li>
            <li>Documents d'aménagement et d'Urbanisme</li>
            <li>L'urbanisme opérationnel</li>
            <li>Les autorisations d'urbanisme</li>
            <li>L'habitat non réglementaire</li>
            <li>L'aménagement des agglomérations rurales</li>
            <li>Le projet urbain</li>
            <li>L'aménagement des zones sensibles</li>
            <li>Expertise des biens immobiliers</li>
            <li>Le Foncier et l'aménagement urbain</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 