import React from 'react';
import BannerWithBreadcrumb from '../../../components/BannerWithBreadcrumb';
import Link from 'next/link';

export default function DoctoratsIndexPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-0">
        <BannerWithBreadcrumb 
          title="Doctorats du CEDoc"
          image="/images/presentation.jpg"
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-center mb-10">Choisissez un doctorat</h2>
          <div className="flex flex-col gap-8">
            <Link href="/recherche/cedoc/doctorats/ugut">
              <div className="transition hover:scale-[1.03] cursor-pointer bg-white rounded-xl shadow-lg p-8 flex items-center gap-6 hover:bg-blue-50 border-l-4 border-blue-600">
                <span className="text-3xl font-bold text-blue-700">1</span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-1">Doctorat UGUT</h3>
                  <p className="text-gray-600 text-sm">Urbanisme, Gestion Urbaine et Territoriale</p>
                </div>
              </div>
            </Link>
            <Link href="/recherche/cedoc/doctorats/grdt">
              <div className="transition hover:scale-[1.03] cursor-pointer bg-white rounded-xl shadow-lg p-8 flex items-center gap-6 hover:bg-blue-50 border-l-4 border-blue-600">
                <span className="text-3xl font-bold text-blue-700">2</span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-1">Doctorat GRDT</h3>
                  <p className="text-gray-600 text-sm">Gestion des Ressources et Développement Territorial</p>
                </div>
              </div>
            </Link>
            <Link href="/recherche/cedoc/doctorats/dtpgu">
              <div className="transition hover:scale-[1.03] cursor-pointer bg-white rounded-xl shadow-lg p-8 flex items-center gap-6 hover:bg-blue-50 border-l-4 border-blue-600">
                <span className="text-3xl font-bold text-blue-700">3</span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-1">Doctorat DTPGU</h3>
                  <p className="text-gray-600 text-sm">Dynamiques Territoriales et Politiques de Gestion Urbaine</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 