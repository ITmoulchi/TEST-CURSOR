'use client';

import React from 'react';
import Link from 'next/link';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const StatCard = ({ number, text }: { number: number, text: string }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div ref={ref} className="text-center">
            <div className="text-5xl font-bold text-teal-600">
                {inView ? <CountUp end={number} duration={2.5} /> : '0'}
            </div>
            <p className="mt-2 text-gray-600">{text}</p>
        </div>
    );
};

const ClientPresentationPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Header with Image */}
            <header className="relative h-64 md:h-80">
                <Image
                    src="/images/presentation.jpg" // Remplacez par une image pertinente
                    alt="Campus de l'INAU"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-green-800/70" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">Présentation De L'INAU</h1>
                    <nav className="text-sm mt-4">
                        <Link href="/" className="text-white/80 hover:text-white">Home</Link>
                        <span className="mx-2 text-white/50">&gt;</span>
                        <span className="font-semibold text-white">Présentation De L'INAU</span>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto py-12 px-4 space-y-10">
                <section>
                    <h2 className="bg-teal-500 text-white font-bold text-xl p-3">Statut juridique de l'INAU</h2>
                    <div className="p-4 space-y-4 text-gray-700">
                        <p>L'INAU, crée en 1981, est un établissement de formation de cadres supérieurs en aménagement et urbanisme. La formation au sein de l'INAU se focalise sur les questions de l'organisation de l'espace et sur les différents instruments d'intervention sur celui-ci.</p>
                        <p>Il est juridiquement placé sous la tutelle du département gouvernemental chargé de l'Urbanisme et de l'Aménagement du territoire (actuellement, c'est le Ministère de l'Aménagement du Territoire National, de l'Urbanisme, de l'Habitat et de la Politique de la Ville ).</p>
                        <p>Le siège de l'Institut se trouve à Rabat, sis boulevard Allal Al fassi, Madinat Al Irfane – Rabat Instituts (voir <a href="#" className="text-blue-600 hover:underline">plan de situation</a>)</p>
                    </div>
                </section>

                <section>
                    <h2 className="bg-teal-500 text-white font-bold text-xl p-3">Missions de l'INAU</h2>
                    <h3 className="bg-teal-500 text-white font-bold text-xl p-3 mt-1">Formation à l'INAU</h3>
                    <div className="p-4 space-y-4 text-gray-700">
                        <p>L'INAU offre trois cycles de <a href="#" className="text-blue-600 hover:underline">formation</a> en aménagement et urbanisme :</p>
                        <ul className="list-none space-y-2 pl-4">
                            <li>=&gt; Un Cycle supérieur complet de formation pour l'obtention du diplôme de l'Institut National d'Aménagement et d'Urbanisme DINAU (Bac+5) ;</li>
                            <li>=&gt; Un Cycle Supérieur de Formation des Aménagistes-Urbanistes (Master spécialisé en Aménagement et Urbanisme) ;</li>
                            <li>=&gt; Un cycle doctoral.</li>
                        </ul>
                    </div>
                </section>
                
                <section>
                    <h2 className="bg-teal-500 text-white font-bold text-xl p-3">Etudes et recherches à l'INAU</h2>
                    <div className="p-4 space-y-4 text-gray-700">
                        <p>Les études et recherches en aménagement, urbanisme et domaines connexes constituent le deuxième volet de la mission de l'INAU.</p>
                        <p>Cette activité relève du Centre des Etudes et Recherches en Aménagement et Urbanisme (<a href="#" className="text-blue-600 hover:underline">CERAU</a>).</p>
                        <p>Ce centre participe d'une part, à la formation des étudiants en les initiant à la pratique sur des projets opérationnels et d'autre part, il a vocation d'être un bureau d'étude public au service des départements ministériels, des collectivités locales, des agences urbaines, des organismes publics et internationaux.</p>
                    </div>
                </section>

                <section>
                    <h2 className="bg-teal-500 text-white font-bold text-xl p-3">Moyens de l'INAU</h2>
                    <div className="p-4">
                         <h3 className="text-2xl font-semibold mb-6">Moyens humains</h3>
                         <div className="grid grid-cols-3 gap-8">
                            <StatCard number={14} text="Enseignants permanents" />
                            <StatCard number={20} text="Cadres administratifs et techniques" />
                            <StatCard number={11} text="Personnel d'appui" />
                         </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ClientPresentationPage; 