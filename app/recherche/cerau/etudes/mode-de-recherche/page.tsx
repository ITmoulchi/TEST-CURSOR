import React from 'react';
import BannerWithBreadcrumb from '../../../../components/BannerWithBreadcrumb';

export default function ModeDeRecherchePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-0">
        <BannerWithBreadcrumb 
          title="Mode de recherche"
          image="/images/presentation.jpg"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            {/* Section Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Recherche : Mode d'organisation
              </h2>
              
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Le développement de la recherche scientifique a toujours été l'une des missions importantes assumées par l'INAU/CERAU. Ce dernier et depuis sa création n'a pas cessé de mobiliser ses moyens humains et matériels pour promouvoir cette activité et faire de l'institution et du centre une référence en matière de la recherche scientifique en général et plus particulièrement au niveau des disciplines liées à l'aménagement et l'urbanisme.
                </p>
                
                <p>
                  A cet effet, des structures de recherche permanentes ont été mises en place au sein du CERAU. Ces structures appelées Unités d'Etudes et de Recherches (UER) constituent des plates formes de recherche qui regroupent à la fois des enseignants-chercheurs et cadres-chercheurs de l'INAU.
                </p>
                
                <p>
                  Aussi, et dans le cadre de sa volonté de s'ouvrir davantage sur le monde de la recherche scientifique à l'échelle nationale et internationale, l'INAU a développé ces dernières années de nouvelles formes de recherche axées sur la recherche-action et la recherche en partenariat.
                </p>
                
                <p className="font-semibold text-lg">
                  De ce fait, la Recherche est organisée au niveau du CERAU dans le cadre d'UER (Unités d'Études et de Recherches) et la Recherche/Action.
                </p>
              </div>
            </div>

            {/* Section Les UER */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Les UER
              </h3>
              
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Le mode d'organisation par les UER est dicté par un besoin fondamental de recherche d'efficacité et d'économie d'envergure à travers des structures stables pouvant contribuer à l'émergence d'une identité institutionnelle et d'un espace de réflexion collectif sur les problèmes d'aménagement.
                </p>
                
                <p>
                  Une UER est créée par décision du Directeur de l'INAU sur proposition du Directeur du CERAU après avis du Conseil Scientifique.
                </p>
                
                <p>
                  Chaque unité d'étude et de recherche doit être composée d'un minimum de trois enseignants – chercheurs de l'INAU.
                </p>
              </div>
            </div>

            {/* Section Missions des UER */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Les UER ont pour missions :
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-semibold text-gray-800">
                    La participation à l'élaboration du programme d'étude et de recherche ;
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-semibold text-gray-800">
                    La mise en œuvre du programme de recherche ;
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-semibold text-gray-800">
                    La conduite des activités d'étude ;
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-semibold text-gray-800">
                    L'encadrement des travaux de recherche des étudiants ;
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-semibold text-gray-800">
                    La prise en charge du programme d'animation scientifique ;
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-semibold text-gray-800">
                    Le développement des publications des résultats de la recherche ;
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-semibold text-gray-800">
                    Le développement du travail interdisciplinaire ;
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-semibold text-gray-800">
                    Le développement du partenariat et de la recherche en réseau.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Thèmes majeurs */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Thèmes majeurs abordés dans le cadre des UER :
              </h3>
              
              <p className="text-gray-700 mb-4">
                Le programme actuel de recherche aborde cinq thèmes majeurs, à savoir :
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-semibold text-gray-800">
                    <strong>Projet 1</strong> : Planification et gestion urbaine : acteurs, enjeux et instrument.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-semibold text-gray-800">
                    <strong>Projet 2</strong> : Politique par le Bas et Territoire(s) Urbain(s) au Maroc.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-semibold text-gray-800">
                    <strong>Projet 3</strong> : Réseaux Techniques, Territoires et Société.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-semibold text-gray-800">
                    <strong>Projet 4</strong> : Systèmes productifs, infrastructures de réseau et territoires.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-semibold text-gray-800">
                    <strong>Projet 5</strong> : Infrastructures et équipements en milieu rural : Logiques des acteurs.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Recherche-action */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Recherche-action
              </h3>
              
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Les nouvelles formes de la recherche scientifique engagée par l'INAU : la recherche-action.
                </p>
                
                <p>
                  Dans sa volonté de s'ouvrir davantage sur le monde de la recherche à l'échelle nationale et internationale et de participer aux réflexions et actions entreprises par le ministère de tutelle, l'INAU, via le CERAU, s'est engagé depuis 2000 dans de nouvelles formes de recherche.
                </p>
                
                <p>
                  Axées principalement sur la promotion de la recherche-action et de la recherche en partenariat, ces nouvelles formes permettent de répondre à des préoccupations opérationnelles et de mobiliser un ensemble de laboratoires de recherche nationaux et internationaux travaillant sur des thématiques partagées. C'est dans ce cadre que de nouveaux projets de recherche se sont mis en place au sein du CERAU, dont on peut citer :
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-green-700 mb-2">
                      Le projet FSP
                    </h4>
                    <p className="font-semibold text-gray-800">
                      <strong>Faire la ville en périphérie(s)</strong> : territoires et territorialités dans les grandes villes du Maghreb.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-700 mb-2">
                      Le projet de partenariat multilatéral
                    </h4>
                    <p className="font-semibold text-gray-800">
                      <strong>L'Agriculture Urbaine comme facteur d'Intégration du Développement Urbain</strong>, cas de la périphérie de Casablanca
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-700 mb-2">
                      Les groupes de travail
                    </h4>
                    <p className="font-semibold text-gray-800">
                      <strong>Groupes de travail Interministériels</strong> sur les nouvelles démarches de l'Aménagement du Territoire.
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
                  <a href="/recherche/cerau/contact" className="text-green-600 hover:text-green-800 hover:underline">
                    Contact / CERAU
                  </a>
                </li>
                <li>
                  <a href="/recherche/cerau/etudes/liste-des-recherches" className="text-green-600 hover:text-green-800 hover:underline">
                    Liste des recherche du CERAU
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