import React from 'react';
import BannerWithBreadcrumb from '../../../../components/BannerWithBreadcrumb';

export default function DoctoratGRDTPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-0">
        <BannerWithBreadcrumb 
          title="Doctorat GRDT"
          image="/images/presentation.jpg"
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-center mb-10">Doctorat Gestion des Ressources et Développement Territorial (GRDT)</h2>
          <p className="text-gray-700 text-center">Contenu à compléter pour le doctorat GRDT.</p>
        </div>
      </main>
    </div>
  );
} 