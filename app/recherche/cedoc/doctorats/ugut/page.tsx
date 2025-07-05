import React from 'react';
import BannerWithBreadcrumb from '../../../../components/BannerWithBreadcrumb';

export default function DoctoratUGUTPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-0">
        <BannerWithBreadcrumb 
          title="Doctorat UGUT"
          image="/images/presentation.jpg"
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-black">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Formation doctorale Urbanisme, gouvernance urbaine et territoires</h2>

          {/* Objectifs */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Objectifs</h3>
            <p>
              L'ensemble des diagnostics réalisés en matière de formation en aménagement et urbanisme au Maroc montre le manque patent de profils de haut niveau pouvant participer à la réflexion sur l'avenir de l'aménagement du territoire et de l'urbanisme au Maroc, tout en assurant la relève dans le domaine de l'enseignement. Au-delà des cadres de conception, il s'agit du vivier intellectuel, nourri par la recherche fondamentale qui alimente de façon continue la réflexion et l'action dans ce domaine. Ces profils, jusque là formés essentiellement à l'étranger, sont de plus en plus à penser dans le cadre de la nouvelle réforme de l'enseignement à l'INAU.
            </p>
            <p className="mt-2">
              En effet, la formation de ce type de profil ne peut être envisagée que soutenue par un réseau de recherche dans lequel s'insère le doctorant. La qualité de la formation dépend essentiellement du type et du niveau de l'appui que peuvent lui apporter les laboratoires de recherche associés dans la formation.
            </p>
            <p className="mt-2">
              C'est dans ce contexte que l'INAU se propose de mettre en place cette formation doctorale dont l'objectif ultime doit mener à <b>la formation de chercheurs et de profils capables de transmettre les exigences de la recherche</b>.
            </p>
          </section>

          {/* Argumentaire */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Argumentaire</h3>
            <p>
              La formation doctorale « urbanisme, gouvernance urbaine et territoires » prépare au <b>métier de la recherche et de l'enseignement en urbanisme et gestion urbaine</b>. Elle vise à offrir les outils méthodologiques et intellectuels pour la compréhension des mutations actuelles de la ville et des politiques qui les accompagnent. La ville est comprise dans son unité par une approche pluridisciplinaire associant les dimensions géographiques, économiques, sociales et politiques.
            </p>
            <p className="mt-2">
              Depuis le milieu des années 80, les questions liées à la gestion urbaine et à la répartition des pouvoirs dans la ville ne se posent plus en termes de monopole des agents de l'Etat. Les initiatives locales et municipales se confirment, le champ du commandement s'effrite (notamment dans les grandes villes), l'appel à de nouveaux gestionnaires de réseaux privés les assoient comme des partenaires à part entière alors que la demande de participation financière des populations aux équipements affirment ces dernières (à travers leurs associations et amicales) comme acteurs de la gestion urbaine. Les problèmes urbains actuels se posent de plus en plus d'une part dans des villes connaissant une multiplication des acteurs (participant à une perte de repères sur les processus de prise de décision), et d'autre part, dans des territoires connaissant de fortes mutations sociospatiales (transformation des quartiers, des valeurs, des représentants des populations, multiplicité des découpages administratifs…).
            </p>
            <p className="mt-2">
              Cette double caractéristique impose un mouvement de rapprochement de la sphère publique et privée. La notion de gouvernance renvoie justement à une forme négociée de l'action publique (Le Gales, 1995). Cette dernière est d'autant plus nécessaire que la scène décisionnelle urbaine, a à répondre aussi bien à la demande et aux exigences des entreprises privées locales et mondialisées, qu'à assurer, aux couches les plus défavorisées, l'accès aux services publics. Des défis qui impliquent des choix et des régulations répondant aussi à la dimension environnementale et à la gestion des risques. Les conflits d'usage, notamment autour de projets provoquant des nuisances, montrent la montée des expressions et revendications locales jusque là absentes de la scène publique. L'arbitrage des conflits, le contrôle des mutations de l'occupation de l'espace et l'organisation des dynamiques économiques et sociales exigent un ensemble de dispositifs institutionnels et relationnels par lequel passe l'action publique. Leur analyse renseigne aussi bien sur les logiques qui traversent l'Etat (sécuritaire, techniciste, participationniste) que sur les modalités de gestion du local.
            </p>
            <p className="mt-2">
              Cette formation doctorale vise, d'une part, l'observation de la scène politique locale à travers divers enjeux urbains, et d'autre part, la traduction des interventions sur l'organisation de l'espace et les populations concernées sur le terrain. Selon quelles modalités s'organise la gestion des nouvelles périphéries urbaines et de l'étalement résidentiel, des réseaux urbains de transports, d'eau et d'assainissement urbains, des nuisances des installations industrielles…? Quelle place occupe le maire en tant qu'acteur (entrepreneur) rassembleur des forces économiques, mais aussi coordinateur de l'action portée vers les populations les plus pauvres ? Quels territoires politico-administratifs et quels acteurs assurent la coordination et la planification territoriale à l'échelle métropolitaine ? Y a-t-il des échelles pertinentes de gestion si tant est que la gouvernance urbaine aurait à répondre à la mise en cohérence à la fois entre niveaux de responsabilité, entre acteurs publics et privés et entre pouvoirs fragmentés (Gaudin, 2002), et enfin, quels effets socio-spatiaux ?
            </p>
            <p className="mt-2">
              Qu'il s'agisse de la planification urbaine ou des politiques publiques (habitat, transport, eau, assainissement…), il y a à confronter les outils mis en place et leur mise en œuvre sur un territoire à travers l'étude des acteurs, des institutions, des instruments et des résultats. L'analyse des politiques publiques et de la gouvernance urbaine doit donc s'appuyer sur une démarche comparative, pluridisciplinaire et sur une observation de terrain.
            </p>
          </section>

          {/* Axes */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Axes de recherche</h3>
            <ul className="list-disc pl-6 space-y-2 text-green-800">
              <li>Gouvernance urbaine et territoires : acteurs, enjeux et instruments</li>
              <li>Politiques publiques et planification urbaine</li>
              <li>Dynamiques territoriales et mutations sociospatiales</li>
              <li>Gestion urbaine, réseaux et services publics</li>
              <li>Conflits d'usage, participation et régulation</li>
            </ul>
          </section>

          {/* Conditions d'accès */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Conditions d'accès</h3>
            <ul className="list-disc pl-6 space-y-2 text-green-800">
              <li>Être titulaire d'un Master ou Master Spécialisé ou d'un diplôme reconnu équivalent dans les domaines suivants : Urbanisme, Architecture, Géographie, Sociologie, Sciences Politiques, Sciences Juridiques, Sciences Économiques.</li>
              <li>Bonnes bases et connaissances dans la discipline d'origine, ouverture vers le pluridisciplinaire et lien avec l'urbanisme et la gouvernance urbaine.</li>
            </ul>
          </section>

          {/* Procédures de sélection */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Procédures de sélection</h3>
            <ol className="list-decimal pl-6 space-y-2 text-green-800">
              <li>Sélection sur dossier : étude du parcours, des matières étudiées, du mémoire de Master, des stages et enquêtes de terrain, du projet de thèse.</li>
              <li>Entretien : bases dans la formation d'origine, articulation du cursus à l'urbanisme et la gouvernance urbaine, réflexion sur le projet de thèse.</li>
            </ol>
          </section>

          {/* Dossier de candidature */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Dossier de candidature</h3>
            <ol className="list-decimal pl-6 space-y-2 text-green-800">
              <li>Copie du Mémoire du MASTER ou du travail de fin d'études du diplôme reconnu équivalent.</li>
              <li>Lettre de motivation.</li>
              <li>Projet de recherche succinct.</li>
              <li>Deux lettres de recommandation délivrées par deux professeurs connaissant le candidat.</li>
              <li>CV détaillé mettant en évidence les différentes expériences du candidat.</li>
              <li>Photocopies certifiées des diplômes universitaires obtenus.</li>
              <li>Copie certifiée de la CIN & une photo.</li>
              <li>Formulaire d'inscription à télécharger (voir site INAU).</li>
            </ol>
          </section>

          {/* Contacts */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Contacts</h3>
            <ul className="list-disc pl-6 text-green-800">
              <li>Directeur du CED : Mohamed TAMIM, PES à l'INAU – E-mail : ytamimoh@yahoo.fr</li>
              <li>Coordonnateur scientifique : Aziz EL MAOULA EL IRAKI, PES à l'INAU – E-mail : aziz_iraki@yahoo.fr</li>
              <li>Contact et renseignements : Tél. : 0537.77.16.24 / Fax : 0537.77.50.09</li>
            </ul>
          </section>

          <div className="mt-12 text-center text-red-600 font-bold">
            La formation a pris fin en Décembre 2023.
          </div>
        </div>
      </main>
    </div>
  );
} 