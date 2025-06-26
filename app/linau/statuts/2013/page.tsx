import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: "Statuts 2013",
};

const DecretPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-64 md:h-80">
                <Image
                    src="/images/graduation.jpg" // Image d'exemple, à remplacer si besoin
                    alt="Salle de conférence de l'INAU"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-green-800/70" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">Statuts de l'INAU</h1>
                    <p className="mt-4 text-xl md:text-2xl">Décret n° 2-13-45 du 8 Joumada I 1434 (20 Mars 2013)</p>
                </div>
            </div>

            {/* Main Content Section */}
            <main className="max-w-4xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Moyens humains et matériels</h2>
                    <p className="mt-2 text-lg text-gray-600">notre unité est notre force, notre moteur</p>
                </div>

                <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            <Image
                                src="/images/conference-room.jpg" // Vous pouvez changer cette image
                                alt="Auditoire de l'INAU"
                                width={600}
                                height={600}
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <div className="md:w-1/2 p-8 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Moyens humains et matériels de l'INAU</h3>
                            <p className="text-gray-700 leading-relaxed">
                                L'Institut National d'Aménagement et d'Urbanisme (INAU) est doté de ressources humaines qualifiées et de moyens matériels modernes, essentiels à l'accomplissement de ses missions d'enseignement, de recherche et d'expertise.
                                <br/><br/>
                                Ces moyens garantissent un environnement propice à l'innovation et à l'excellence, permettant aux étudiants et aux chercheurs de réaliser leur plein potentiel et de contribuer activement au développement durable du territoire.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none mx-auto mt-16 text-gray-800">
                    <h3 className="text-2xl font-semibold mb-6 border-b pb-4">Texte du décret</h3>
                    
                    <h4>Article 1 : Dénomination et Tutelle</h4>
                    <p>L'établissement est dénommé Institut National d'Aménagement et d'Urbanisme, ci-après désigné "l'INAU". Il est placé sous la tutelle de l'autorité gouvernementale chargée de l'Aménagement du Territoire National, de l'Urbanisme, de l'Habitat et de la Politique de la Ville.</p>
                    
                    <h4>Article 2 : Missions</h4>
                    <p>L'INAU a pour missions principales :</p>
                    <ul>
                        <li>La formation supérieure en matière d'aménagement et d'urbanisme.</li>
                        <li>La recherche scientifique et technique dans les domaines de sa spécialité.</li>
                        <li>L'expertise et l'assistance au profit des administrations publiques et des collectivités territoriales.</li>
                    </ul>

                    <h4>Article 3 : Organisation Pédagogique</h4>
                    <p>L'enseignement à l'INAU est organisé en cycles, filières et modules. Le régime des études, les modalités d'accès, les programmes de formation et les conditions d'obtention des diplômes sont fixés par voie réglementaire, après avis du conseil de l'établissement.</p>

                    <h4>Article 4 : Dispositions Finales</h4>
                    <p>Le présent décret sera publié au Bulletin officiel. Fait à Rabat, le 8 Joumada I 1434 (20 mars 2013).</p>
                </div>
            </main>
        </div>
    );
};

export default DecretPage; 