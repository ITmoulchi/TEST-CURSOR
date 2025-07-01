import React from 'react';
import BannerWithBreadcrumb from '../../components/BannerWithBreadcrumb';

export default function OffreFormations() {
  return (
    <div className="pb-16">
      <BannerWithBreadcrumb image="/images/graduation.jpg" />
      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 mt-12">
        <div className="bg-white rounded-lg shadow p-8">
          <p className="text-gray-700 mb-8 text-lg">
            l'INAU offre un cycle complet de formation en aménagement et urbanisme :
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <span className="text-[#00b16a] text-2xl font-bold">&gt;</span>
              <p className="text-gray-700 text-lg">Le diplôme de l'Institut National d'Aménagement et d'Urbanisme DINAU (Bac+5)</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#00b16a] text-2xl font-bold">&gt;</span>
              <p className="text-gray-700 text-lg">Un Cycle Supérieur de Formation des Aménagistes-Urbanistes (Master spécialisé en Aménagement et Urbanisme)</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#00b16a] text-2xl font-bold">&gt;</span>
              <p className="text-gray-700 text-lg">Un cycle doctoral</p>
            </div>
          </div>

          {/* Diplôme DINAU */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#00b16a] mb-6">Diplôme de l'Institut National d'Aménagement et d'Urbanisme (Bac+5)</h2>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">Conditions d'accès :</h3>
            <p className="text-gray-700 mb-4">
              L'accès au cycle du diplôme de l'Institut National d'Aménagement et d'Urbanisme (DINAU) se fait par voie de concours et de toute autre modalité prévue dans le descriptif de la filière.
            </p>
            <p className="text-gray-700 mb-4">Il est ouvert aux candidats titulaires des diplômes suivants :</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Baccalauréats séries : sciences physiques, sciences mathématiques, sciences de la vie et de la terre, sciences économiques ou arts appliqués</li>
              <li>Tout diplôme reconnu équivalent à l'un des diplômes ci-dessus</li>
            </ul>
          </div>

          {/* Master Spécialisé */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#00b16a] mb-6">Master Spécialisé en Aménagement et Urbanisme</h2>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">Conditions d'accès :</h3>
            <p className="text-gray-700 mb-4">
              L'accès au cycle du Master spécialisé en Aménagement et Urbanisme se fait par voie de concours et de toute autre modalité prévue dans le descriptif de la filière.
            </p>
            <p className="text-gray-700 mb-4">Il est ouvert aux candidats titulaires des diplômes suivants:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Licence professionnelle en Aménagement et/ou en urbanisme</li>
              <li>Licence fondamentale en : Droit, économie, Sciences de la Terre, Sociologie, Histoire et Géographie</li>
              <li>Architecte</li>
              <li>Ingénieur : génie civil, Génie rural, statistiques ou démographie</li>
              <li>Ou tout diplôme reconnu équivalant à un des diplômes cités ci-dessus</li>
            </ul>
          </div>

          {/* Déroulement du concours */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#00b16a] mb-6">Déroulement du concours du Master</h2>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">Première étape :</h3>
            <p className="text-gray-700 mb-6">
              Les candidats sont convoqués par courrier pour passer, l'examen écrit constitué de deux épreuves : l'une à caractère technique (analyse de données), l'autre consistant en une réflexion sur un thème en rapport avec l'Aménagement, l'Urbanisme, l'Environnement ou l'Habitat.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">Deuxième étape :</h3>
            <p className="text-gray-700 mb-4">
              Les résultats de l'examen écrit doivent être affichés à l'Institut National d'Aménagement et d'Urbanisme. Cet affichage vaut convocation pour l'examen oral.
            </p>
            <p className="text-gray-700 mb-4">
              Les candidats ainsi convoqués doivent se présenter au jury dans les délais fixés pour passer l'examen oral.
            </p>
            <p className="text-gray-700 mb-4">
              Le jury est composé de quatre enseignant- chercheurs qui auront à évaluer les aptitudes scientifiques et l'expériences professionnelle des candidats. L'épreuve orale a le même coefficient que chacune des deux autres épreuves écrites (Coefficient 1).
            </p>
            <p className="text-gray-700 mb-6">
              Les résultats définitifs du concours sont obtenus par le classement de la somme des trois notes (Ecrit et Oral), lequel classement permet d'établir la liste des reçus et la liste des candidats en attente.
            </p>
          </div>

          {/* Débouchés */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#00b16a] mb-6">Débouchés</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Agences urbaines</li>
              <li>Inspections Régionales de l'Urbanisme et de l'Aménagement du Territoire</li>
              <li>Collectivités Territoriales</li>
              <li>Ministères</li>
              <li>Bureaux d'études</li>
              <li>Organismes internationaux, etc.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 