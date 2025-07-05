import React from 'react';
import Header from '../../../../components/Header';
import BannerWithBreadcrumb from '../../../../components/BannerWithBreadcrumb';

export default function ListeDesRecherchesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <BannerWithBreadcrumb 
          title="Liste des recherches du CERAU"
          image="/images/presentation.jpg"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            {/* Section Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Liste des recherches du CERAU
              </h2>
              
              <div className="text-gray-700 leading-relaxed">
                <p className="text-lg mb-6">
                  Le CERAU a développé un programme de recherche portant sur :
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-semibold text-gray-800">
                      Des axes structurants généraux liés au rôle de l'Institut en matière de formation et de recherche ;
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-semibold text-gray-800">
                      Des axes stratégiques relevant de la prospective et s'appuyant sur les évolutions et les demandes des intervenants concernant la gestion urbaine, l'habitat, le développement local, l'économie urbaine et régionale; l'économie immobilière, etc ;
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-semibold text-gray-800">
                      Des thèmes conjoncturels et ponctuels.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Liste des recherches */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Liste des recherches réalisées au CERAU
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 text-center italic mb-6">
                  Cette section sera mise à jour avec la liste complète des recherches réalisées par le CERAU.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Axes structurants généraux */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-green-700 mb-3">
                      Axes structurants généraux
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Recherches liées au rôle de l'Institut en matière de formation et de recherche.
                    </p>
                    <div className="text-xs text-gray-500">
                      Formation, recherche, méthodologie
                    </div>
                  </div>
                  
                  {/* Axes stratégiques */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-green-700 mb-3">
                      Axes stratégiques
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Prospective basée sur les évolutions et demandes des intervenants.
                    </p>
                    <div className="text-xs text-gray-500">
                      Gestion urbaine, habitat, développement local, économie urbaine
                    </div>
                  </div>
                  
                  {/* Thèmes conjoncturels */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-green-700 mb-3">
                      Thèmes conjoncturels et ponctuels
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Recherches répondant à des problématiques actuelles spécifiques.
                    </p>
                    <div className="text-xs text-gray-500">
                      Études ponctuelles, analyses conjoncturelles
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Projets de recherche en cours */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Projets de recherche en cours
              </h3>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-600 text-center italic mb-6">
                  Cette section présentera les projets de recherche actuellement en cours au CERAU.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Projets UER */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-blue-700 mb-3">
                      Projets UER
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Projets menés dans le cadre des Unités d'Études et de Recherches.
                    </p>
                  </div>
                  
                  {/* Projets de recherche-action */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-blue-700 mb-3">
                      Projets de recherche-action
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Projets de recherche-action et de recherche en partenariat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Publications */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Publications et résultats
              </h3>
              
              <div className="bg-green-50 rounded-lg p-6">
                <p className="text-gray-600 text-center italic mb-6">
                  Cette section présentera les publications et résultats des recherches du CERAU.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-md text-center">
                    <h4 className="text-lg font-semibold text-green-700 mb-3">
                      Rapports de recherche
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Rapports détaillés des études et recherches réalisées.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md text-center">
                    <h4 className="text-lg font-semibold text-green-700 mb-3">
                      Articles scientifiques
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Publications dans des revues scientifiques spécialisées.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md text-center">
                    <h4 className="text-lg font-semibold text-green-700 mb-3">
                      Communications
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Présentations lors de colloques et conférences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Navigation */}
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Navigation de l'article
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="/recherche/cerau/etudes/mode-de-recherche" className="text-green-600 hover:text-green-800 hover:underline">
                    Mode de recherche
                  </a>
                </li>
                <li>
                  <a href="/recherche/cerau/etudes/recherches-en-cours" className="text-green-600 hover:text-green-800 hover:underline">
                    Liste des recherches en cours au CERAU
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 