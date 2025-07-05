import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BannerWithBreadcrumb from '../../../components/BannerWithBreadcrumb';
import Link from 'next/link';

export default function EtudesIndexPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <BannerWithBreadcrumb 
          title="Études du CERAU"
          image="/images/presentation.jpg"
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-center mb-10">Choisissez une rubrique</h2>
          <div className="flex flex-col gap-8">
            <Link href="/recherche/cerau/etudes/etudes-du-cerau">
              <div className="transition hover:scale-[1.03] cursor-pointer bg-white rounded-xl shadow-lg p-8 flex items-center gap-6 hover:bg-green-50 border-l-4 border-green-600">
                <span className="text-3xl font-bold text-green-700">1</span>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-1">Études du CERAU</h3>
                  <p className="text-gray-600 text-sm">Présentation générale des études réalisées par le CERAU.</p>
                </div>
              </div>
            </Link>
            <Link href="/recherche/cerau/etudes/mode-de-recherche">
              <div className="transition hover:scale-[1.03] cursor-pointer bg-white rounded-xl shadow-lg p-8 flex items-center gap-6 hover:bg-green-50 border-l-4 border-green-600">
                <span className="text-3xl font-bold text-green-700">2</span>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-1">Mode de recherche</h3>
                  <p className="text-gray-600 text-sm">Organisation, missions et projets de recherche du CERAU.</p>
                </div>
              </div>
            </Link>
            <Link href="/recherche/cerau/etudes/liste-des-recherches">
              <div className="transition hover:scale-[1.03] cursor-pointer bg-white rounded-xl shadow-lg p-8 flex items-center gap-6 hover:bg-green-50 border-l-4 border-green-600">
                <span className="text-3xl font-bold text-green-700">3</span>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-1">Liste des recherches du CERAU</h3>
                  <p className="text-gray-600 text-sm">Aperçu des axes, projets et publications de recherche du CERAU.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 