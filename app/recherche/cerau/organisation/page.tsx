import React from 'react';
import BannerWithBreadcrumb from '../../../components/BannerWithBreadcrumb';

export default function OrganisationCERAU() {
  return (
    <div className="pb-16">
      <BannerWithBreadcrumb image="/images/graduation.jpg" />
      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 mt-12">
        <div className="bg-white rounded-lg shadow p-8">
          <p className="text-gray-700 mb-6">
            Compte tenu de la spécificité de ses activités, le CERAU est organisé en double entités interdépendantes : deux Services Techniques qui ont pour mission d'assurer la gestion des activités d'études et de recherches et leur suivi
          </p>

          {/* Service des Moyens Communs */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white bg-[#00b16a] px-4 py-2 inline-block rounded">Le Service des Moyens Communs</h2>
            <p className="mt-4 text-gray-700">
              Il a pour mission la gestion et le suivi des activités études et de recherche ainsi que la mise en œuvre de la stratégie et les moyens de diffusion des résultats des activités d'études et de recherche sous différentes formes (cahiers, revue, actes, rapports…).
            </p>
            <p className="mt-2 text-gray-700">Il se décompose en 3 cellules :</p>

            {/* Cellule de suivi des Études */}
            <div className="mt-6">
              <h3 className="text-lg font-bold text-[#16a34a]">^ La cellule de suivi des Études</h3>
              <p className="font-semibold mt-2">La cellule de suivi des études est chargée de :</p>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>=&gt; La participation à l'élaboration du programme annuel des études ;</li>
                <li>=&gt; Le suivi administratif des contrats d'études ;</li>
                <li>=&gt; La gestion logistique des activités d'études ;</li>
                <li>=&gt; La gestion interne des situations comptables et budget des études ;</li>
                <li>=&gt; La gestion des relations avec les commanditaires ;</li>
                <li>=&gt; L'élaboration des conventions de partenariat et le suivi de leur exécution ;</li>
                <li>=&gt; La mise en place et le suivi des bases de consultants ;</li>
                <li>=&gt; Le suivi du marché des études dans les domaines d'intérêt du CERAU</li>
              </ul>
            </div>
            <hr className="my-6" />
            {/* Cellule de suivi des activités de Recherche */}
            <div>
              <h3 className="text-lg font-bold text-[#16a34a]">^ La cellule de suivi des activités de Recherche</h3>
              <p className="font-semibold mt-2">La cellule de suivi des activités de recherche est chargée de :</p>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>=&gt; Suivre et gérer la mise en œuvre du programme de recherche ;</li>
                <li>=&gt; Assurer la gestion logistique des activités de recherche ;</li>
                <li>=&gt; Assurer la gestion interne des situations comptables de budgets de recherche ;</li>
                <li>=&gt; Etablir une base de donnée de réseaux de recherche ;</li>
                <li>=&gt; Procéder à des évaluations des activités de recherche et à l'élaboration de bilans d'activités dans ce domaine ;</li>
                <li>=&gt; De suivre les projets conduits en coopération ;</li>
                <li>=&gt; De présenter des requêtes de coopération afférant au domaine d'intervention du CERAU ;</li>
                <li>=&gt; De mettre en place un programme d'animation scientifique en relation avec les UER ;</li>
                <li>=&gt; De suivre les activités d'animation scientifique organisées au niveau national et international et d'en informer les enseignants chercheurs.</li>
              </ul>
            </div>
            <hr className="my-6" />
            {/* Cellule de la Publication et d'Archivage */}
            <div>
              <h3 className="text-lg font-bold text-[#16a34a]">^ La cellule de la Publication et d'Archivage</h3>
              <p className="font-semibold mt-2">La cellule de la publication et d'archivage est chargée de :</p>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>=&gt; Suivre et gérer la mise en œuvre du programme de recherche ;</li>
                <li>=&gt; De participer à la définition de la stratégie de diffusion des résultats des activités du CERAU ;</li>
                <li>=&gt; D'assurer le secrétariat des différentes formes de publication ;</li>
                <li>=&gt; D'assurer la gestion technique des différentes publications ;</li>
                <li>=&gt; De gérer la relation avec les éditeurs ;</li>
                <li>=&gt; D'assurer la diffusion des publications ;</li>
                <li>=&gt; D'alimenter la page Web relative au CERAU dans le cadre du site INAU ;</li>
                <li>=&gt; D'archiver les documents d'étude (questionnaire d'enquête, rapports intermédiaires…) ;</li>
                <li>=&gt; De constituer un documentation d'étude et de recherche en liaison avec le CDIC ;</li>
                <li>=&gt; D'assurer les recherches bibliographiques et documentaires au profit des UER ;</li>
                <li>=&gt; De constituer des bases de données d'archives numériques des travaux d'études et de recherche réalisés au CERAU ;</li>
                <li>=&gt; D'assurer tous les travaux de traitement de texte et de reprographie ;</li>
                <li>=&gt; De gérer tous les travaux de reprographie ;</li>
                <li>=&gt; De gérer l'accès à l'intranet du CERAU.</li>
              </ul>
            </div>
          </div>

          {/* Service d'appui technique */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white bg-[#00b16a] px-4 py-2 inline-block rounded">Le service d'appui technique</h2>
            <p className="mt-4 text-gray-700">
              Il a pour mission d'assurer tous les travaux de cartographie, de télédétection et de traitement de données requis dans le cadre des activités d'études et de recherches du CERAU, de gérer et d'administrer le parc informatique du CERAU.
            </p>
            <p className="mt-2 text-gray-700">Il se décompose de 3 cellules :</p>
            {/* Cellule Informatique */}
            <div className="mt-6">
              <h3 className="text-lg font-bold text-[#16a34a]">^ La cellule Informatique</h3>
              <p className="font-semibold mt-2">La cellule informatique est chargée de :</p>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>=&gt; Du traitement des données de terrain collectées dans le cadre des activités d'études et de recherches du CERAU ;</li>
                <li>=&gt; De la mise en place de banques de données utiles aux activités d'études et de recherches ;</li>
                <li>=&gt; Du développement d'application de gestion des activités du CERAU ;</li>
                <li>=&gt; De la maintenance du parc informatique du CERAU ;</li>
                <li>=&gt; De l'administration du réseau intranet.</li>
              </ul>
            </div>
            <hr className="my-6" />
            {/* Cellule de C.A.O. et S.I.G */}
            <div>
              <h3 className="text-lg font-bold text-[#16a34a]">^ La cellule de C.A.O. et S.I.G</h3>
              <p className="font-semibold mt-2">La cellule de C.A.O. et S.I.G est chargée de :</p>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>=&gt; De tous les travaux de cartographie manuelle ;</li>
                <li>=&gt; De tous les travaux de cartographie automatique et d'infographie requis dans le cadre des études et recherches ;</li>
                <li>=&gt; De la mise en place et le développement d'application SIG ;</li>
                <li>=&gt; De la constitution d'une cartothèque numérique.</li>
              </ul>
            </div>
            <hr className="my-6" />
            {/* Cellule de Traitement d'images */}
            <div>
              <h3 className="text-lg font-bold text-black">&rsaquo; La cellule de Traitement d'images</h3>
            </div>
          </div>

          {/* UER */}
          <div className="mb-8">
            <div className="bg-gray-100 p-4 rounded mb-4">
              <h3 className="font-bold">Des structures de prise en charge des activités d'études et de recherche appelées Unités d'Etudes et de Recherche (UER) :</h3>
              <p className="mt-2 text-gray-700">
                L'organisation des activités du CERAU dans le cadre d'unités d'études et de recherches (UER) est dictée par un besoin fondamental de recherche d'efficacité et d'économie d'énergie à travers des structures stables pouvant contribuer à l'émergence d'une identité institutionnelle et d'un espace de réflexion collectif sur les problèmes d'aménagement.
              </p>
              <p className="mt-2 text-gray-700">
                Une UER est créée par décision du Directeur de l'INAU sur proposition du Directeur du CERAU après avis du Conseil Scientifique.
              </p>
              <p className="mt-2 text-gray-700">
                Chaque unité d'étude et recherche doit être composée d'un minimum de trois enseignants – chercheurs de l'INAU.
              </p>
              <p className="mt-2 text-gray-700">
                La responsabilité scientifique et la coordination des activités de l'UER revient au chef de projet nommément désigné parmi ses membres permanents.
              </p>
              <p className="mt-2 text-gray-700">
                Les UER peuvent associer à leurs activités, de manière permanente ou à titre occasionnel, des cadres chargés d'études et de recherche du CERAU ou d'autres intervenants extérieurs, et ce après avis du CS.
              </p>
            </div>
            <h3 className="text-lg font-bold text-black">&rsaquo; Missions des UER</h3>
            <div className="bg-green-50 border border-green-200 rounded p-4 mt-2 mb-4">
              <h4 className="text-[#16a34a] font-bold">^ Thèmes majeurs abordés</h4>
              <p className="font-semibold mt-2">Thèmes majeurs abordés sont :</p>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li><span className="font-bold">Projet 1 :</span> Planification et gestion urbaine : acteurs, enjeux et instrument ;</li>
                <li><span className="font-bold">Projet 2 :</span> Politique par le Bas et Territoire(s) Urbain(s) au Maroc ;</li>
                <li><span className="font-bold">Projet 3 :</span> Réseaux Techniques, Territoires et Société ;</li>
                <li><span className="font-bold">Projet 4 :</span> Systèmes productifs, infrastructures et réseaux de territoires ;</li>
                <li><span className="font-bold">Projet 5 :</span> Infrastructures et équipements en milieu rural : Logiques des acteurs.</li>
              </ul>
            </div>
          </div>

          {/* Moyens humains */}
          <div className="mb-8">
            <div className="bg-gray-100 p-4 rounded mb-4">
              <h3 className="font-bold text-xl">Moyens humains</h3>
              <p className="mt-2 text-gray-700">
                Les moyens humains que l'INAU mobilise pour réaliser ses activités se décomposent en 4 catégories :
              </p>
            </div>
            <h4 className="text-[#16a34a] font-bold">^ Des enseignants chercheurs (au nombre de 18) ;</h4>
          </div>
        </div>
      </div>
    </div>
  );
} 