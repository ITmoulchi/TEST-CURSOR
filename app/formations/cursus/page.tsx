import React from 'react';
import Image from 'next/image';

export default function CursusFormation() {
  return (
    <div className="pb-16">
      {/* Header with background image and title - MOULCHI */}
      <div className="relative w-full h-48 md:h-56 flex items-center justify-center">
        <Image
          src="/images/graduation.jpg"
          alt="Formation Académique Header"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">La Formation Académique à L'INAU</h1>
          {/* Breadcrumb */}
          <div className="text-sm text-white/90 flex items-center justify-center gap-2">
            <span>Home</span>
            <span className="mx-1">&gt;</span>
            <span className="font-semibold">La Formation Académique à L'INAU</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#20b2aa]/80 to-[#19786a]/80" />
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 mt-12">
        <div className="bg-white rounded-lg shadow p-8 space-y-12">
          {/* Le contexte de la réforme */}
          <section>
            <h2 className="text-3xl font-bold text-[#00b16a] mb-6">Le contexte de la réforme</h2>
            <p className="text-gray-700 leading-relaxed">
              Le nouveau contexte de la fabrication de la ville et des territoires est marqué essentiellement par : la montée en puissance de l'urbanisme participatif et de la gouvernance, l'injonction au développement durable, le règne de l'incertitude et du risque et enfin la large diffusion des pratiques et des modèles urbains à travers le monde….etc. autant de défis qui nécessitent un accompagnement par une stratégie de formation adéquate dans les domaines de l'aménagement et de l'urbanisme.
            </p>
          </section>
          {/* Les principes généraux */}
          <section>
            <h2 className="text-3xl font-bold text-[#00b16a] mb-6">Les principes généraux de la refonte de la formation initiale</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Incontestablement, la redéfinition des missions de l'INAU ne signifie nullement faire abstraction du passé. Le projet de réforme a pris en compte au préalable les insuffisances et les dysfonctionnements du modèle qui a prévalu jusqu'à présent. Il a, également, valorisé et consolidé les acquis tout en s'intégrant aux nouvelles attentes et en anticipant les évolutions futures.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Par rapport à tout ce qui précède, L'INAU est devenu un véritable espace de débat, de réflexion, de formation, de synthèse, de propositions et d'évaluation de politiques territoriales.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              L'INAU a consolidé son originalité en étant à la fois un lieu de formation initiale, de formation continue, d'expertise et de recherche sur la ville et le territoire.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">Il s'agit d'une meilleure articulation entre les trois missions suivantes :</p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 ml-4">
              <li className="leading-relaxed">
                La formation de professionnels de haut niveau, capables de monter, négocier et évaluer des projets de territoire. En somme des managers territoriaux dotés d'un esprit de synthèse et d'une force d'anticipation, ainsi que la formation de chercheurs et d'experts territoriaux capables de mener la réflexion en profondeur sur les problématiques de l'aménagement du territoire et de l'urbanisme.
              </li>
              <li className="leading-relaxed">
                La formation continue au profit des acteurs intervenants, notamment dans les nouveaux métiers de l'intermédiation, de la négociation et de l'accompagnement social. Mais aussi dans le domaine des outils : SIG, techniques d'enquête, communication et marketing territorial…etc.
              </li>
              <li className="leading-relaxed">
                La recherche fondamentale, la recherche-action et l'expertise au sein du CERAU sur des problématiques nouvelles dont l'évaluation des stratégies et la prospective territoriale, le CERAU fonctionne, également, comme lieu de stage et de formation pour doctorants.
              </li>
            </ol>
            <p className="text-gray-700 mt-6 leading-relaxed">
              Parallèlement à ces trois fonctions qui constitueront l'identité, le label de l'Institut National d'Aménagement et d'Urbanisme, des activités parallèles comme l'animation scientifique, la production documentaire et la publication font l'objet de programmes spécifiques au niveau de chaque composante.
            </p>
          </section>
          {/* Les produits pédagogiques */}
          <section>
            <h2 className="text-3xl font-bold text-[#00b16a] mb-6">Les produits pédagogiques de l'INAU</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              La loi 01- 00 qui traite les aspects institutionnels de la réforme universitaire laisse aux établissements d'enseignement supérieur une certaine autonomie notamment pédagogique qui leur permet d'entrer dans une nouvelle ère d'auto- réforme, dans l'esprit de la Charte Nationale pour l'Education et la Formation.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">Ainsi, les produits pédagogiques de l'INAU sont :</p>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#00b16a] mb-4">1. Le diplôme de l'Institut National d'Aménagement et d'Urbanisme DINAU (Bac+5)</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  qui a démarré en 2018 – 2019 ouvert aux jeunes bacheliers scientifiques et techniques désireux de faire une carrière d'urbaniste.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  L'objectif est de fournir aux administrations centrales, aux établissements publics, aux bureaux d'études privés et surtout aux collectivités territoriales des cadres supérieurs spécialisés dans le domaine de l'urbanisme.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#00b16a] mb-4">2. Un Cycle Supérieur en Aménagement et Urbanisme</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  qui est un Master professionnalisant ou spécialisé. Il s'agit en fait du renforcement de la formation actuelle tout en révisant ses objectifs et son contenu dans le sens de la formation d'Aménagistes-Urbanistes de haut niveau ayant la possibilité de se spécialiser dans l'un des trois domaines suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Urbanisme et management des projets urbains.</li>
                  <li>Développement local et régional.</li>
                  <li>Développement durable et territoire.</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Pour ce cycle de formation, l'Aménagiste- Urbaniste se définit comme un développeur territorial qui intègre les préoccupations économiques, politiques, sociales et écologiques dans l'élaboration, la conduite et l'évaluation de projets sectoriels ou globaux à des échelles territoriales variées. Il est sensé maîtriser les activités suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
                  <li>Elaboration des études générales ou spécialisées (études d'aménagement urbain, études d'impact,…),</li>
                  <li>Montage de projets territoriaux,</li>
                  <li>Évaluation de projets territoriaux,</li>
                  <li>Pilotage de projets,</li>
                  <li>Communication autour d'un projet territorial,</li>
                  <li>Animation des réseaux de partenaires et d'associations.</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#00b16a] mb-4">3. Un cycle doctoral</h3>
                <p className="text-gray-700 leading-relaxed">
                  il s'agit de deux filières doctorales « Urbanisme, gouvernance urbaine et territoires » et « Gestion des risques et développement territorial ».
                </p>
              </div>
            </div>
          </section>
          {/* Contenu pédagogique */}
          <section>
            <h2 className="text-3xl font-bold text-[#00b16a] mb-6">Contenu pédagogique</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Le cursus de formation propose un enseignement pluridisciplinaire fondamental et opérationnel visant à développer chez les futurs lauréats les préoccupations liées à l'aménagement, à l'urbanisme et au développement urbain.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              La formation permet d'apporter un savoir théorique et un apprentissage professionnel à travers des cours, des séminaires, des stages et des ateliers de travaux pratiques susceptibles de mettre sur le marché d'emploi des diplômés opérationnels dans les domaines de l'aménagement et de l'urbanisme.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Le cursus de formation s'appuie sur cinq composantes pédagogiques d'un volume d'horaire variable :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Les cours fondamentaux,</li>
              <li>L'apprentissage des outils et des méthodes,</li>
              <li>L'apprentissage des techniques,</li>
              <li>Le terrain (stages et ateliers),</li>
              <li>Le mémoire ou le projet de fin d'étude.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 