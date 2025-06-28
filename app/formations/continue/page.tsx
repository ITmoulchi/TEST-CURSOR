import React from 'react';
import Image from 'next/image';

export default function FormationContinue() {
  return (
    <div className="pb-16">
      {/* Header MOULCHI */}
      <div className="relative w-full h-48 md:h-56 flex items-center justify-center">
        <Image
          src="/images/graduation.jpg"
          alt="Formation Continue Header"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">Formation Continue</h1>
          {/* Breadcrumb */}
          <div className="text-sm text-white/90 flex items-center justify-center gap-2">
            <span>Home</span>
            <span className="mx-1">&gt;</span>
            <span className="font-semibold">Formation Continue</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#20b2aa]/80 to-[#19786a]/80" />
      </div>

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