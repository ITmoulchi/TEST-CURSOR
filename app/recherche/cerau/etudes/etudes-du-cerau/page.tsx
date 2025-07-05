import React from 'react';
import Header from '../../../../components/Header';
import BannerWithBreadcrumb from '../../../../components/BannerWithBreadcrumb';

export default function EtudesCerauPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <BannerWithBreadcrumb 
          title="Études du CERAU"
          image="/images/presentation.jpg"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Études du CERAU
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p className="text-lg mb-6">
                  Depuis sa mise en marche en 1984, le CERAU a réalisé plusieurs études de différents types au profit de commanditaires divers :
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-semibold text-gray-800">
                      Des études d'aménagement et de développement à caractère général ;
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-semibold text-gray-800">
                      Des études d'élaboration de documents d'aménagement et d'urbanisme ;
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-semibold text-gray-800">
                      Des études sectorielles ponctuelles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Liste des études réalisées par le CERAU
              </h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 text-center italic">
                  Cette section sera mise à jour avec la liste complète des études réalisées par le CERAU.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-green-700 mb-3">
                      Études d'aménagement et de développement
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Études à caractère général portant sur l'aménagement du territoire et le développement régional.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-green-700 mb-3">
                      Documents d'aménagement et d'urbanisme
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Élaboration de plans d'aménagement, schémas directeurs et documents d'urbanisme.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-green-700 mb-3">
                      Études sectorielles ponctuelles
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Études spécialisées dans des domaines spécifiques de l'aménagement et de l'urbanisme.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Navigation de l'article
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="/recherche/cerau/recherches" className="text-green-600 hover:text-green-800 hover:underline">
                    Liste des recherches réalisées au CERAU
                  </a>
                </li>
                <li>
                  <a href="/communication/cdic" className="text-green-600 hover:text-green-800 hover:underline">
                    Présentation du C.D.I.C
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