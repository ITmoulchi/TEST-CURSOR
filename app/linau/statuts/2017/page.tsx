import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: "Statuts 2017",
};

const Decret2017Page = () => {
    return (
        <div className="pb-16">
            {/* Header MOULCHI */}
            <div className="relative w-full h-48 md:h-56 flex items-center justify-center">
                <Image
                    src="/images/graduation.jpg"
                    alt="Statuts 2017 Header"
                    fill
                    className="object-cover object-center brightness-75"
                    priority
                />
                <div className="relative z-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">Statuts de l'INAU (Mise à jour)</h1>
                    {/* Breadcrumb */}
                    <div className="text-sm text-white/90 flex items-center justify-center gap-2">
                        <span>Home</span>
                        <span className="mx-1">&gt;</span>
                        <span className="font-semibold">Statuts 2017</span>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#20b2aa]/80 to-[#19786a]/80" />
            </div>

            {/* Main Content Section */}
            <main className="max-w-4xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Évolution et adaptation</h2>
                    <p className="mt-2 text-lg text-gray-600">Adapter nos statuts pour les défis de demain</p>
                </div>

                <div className="prose prose-lg max-w-none mx-auto mt-16 text-gray-800">
                    <h3 className="text-2xl font-semibold mb-6 border-b pb-4">Texte du décret de 2017</h3>
                    
                    <h4>Article 1 : Modification de la Tutelle</h4>
                    <p>Le décret n° 2-13-45 est modifié comme suit : La tutelle de l'Institut National d'Aménagement et d'Urbanisme est confirmée sous l'autorité gouvernementale en charge de l'Urbanisme et de l'Aménagement du Territoire National.</p>
                    
                    <h4>Article 2 : Nouvelles Missions</h4>
                    <p>En plus de ses missions existantes, l'INAU se voit confier :</p>
                    <ul>
                        <li>Le développement de la formation continue pour les professionnels du secteur.</li>
                        <li>La promotion de partenariats internationaux pour la recherche et l'innovation.</li>
                        <li>L'intégration des technologies numériques dans les cursus de formation.</li>
                    </ul>

                    <h4>Article 3 : Organisation du Conseil d'Administration</h4>
                    <p>La composition et les modalités de fonctionnement du conseil d'administration sont mises à jour pour inclure des représentants du secteur privé et de la société civile, afin de renforcer la gouvernance de l'institut.</p>

                    <h4>Article 4 : Dispositions Finales</h4>
                    <p>Le présent décret modifie et complète les dispositions du décret de 2013. Il sera publié au Bulletin officiel. Fait à Rabat, le 15 Chaabane 1438 (12 mai 2017).</p>
                </div>
            </main>
        </div>
    );
};

export default Decret2017Page; 