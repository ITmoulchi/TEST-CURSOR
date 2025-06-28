import React from 'react';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';

export default function MissionsCERAU() {
  return (
    <div className="pb-16">
      {/* Header with background image and title */}
      <div className="relative w-full h-48 md:h-56 flex items-center justify-center">
        <Image
          src="/images/graduation.jpg"
          alt="Missions CERAU Header"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">Missions du CERAU</h1>
          {/* Breadcrumb */}
          <div className="text-sm text-white/90 flex items-center justify-center gap-2">
            <span>Home</span>
            <span className="mx-1">&gt;</span>
            <span className="font-semibold">Missions Du CERAU</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#20b2aa]/80 to-[#19786a]/80" />
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 mt-12">
        <div className="bg-white rounded-lg shadow p-8">
          <p className="text-gray-700 mb-6">Le CERAU a pour missions :</p>
          <div className="border-l-4 border-[#00b16a] pl-8 space-y-8 relative">
            {/* Mission 1 */}
            <div className="flex items-start gap-6">
              <span className="bg-[#16a34a] rounded-lg p-3 mt-1"><FaCheck className="text-white text-2xl" /></span>
              <span className="text-gray-700 text-lg">Le développement de la recherche scientifique et technique dans les domaines de l'aménagement et de l'urbanisme.</span>
            </div>
            {/* Mission 2 */}
            <div className="flex items-start gap-6">
              <span className="bg-[#16a34a] rounded-lg p-3 mt-1"><FaCheck className="text-white text-2xl" /></span>
              <span className="text-gray-700 text-lg">La réalisation d'études en prestation de service pour le compte des administrations publiques, des collectivités locales, des établissements publics et des tiers.</span>
            </div>
            {/* Mission 3 */}
            <div className="flex items-start gap-6">
              <span className="bg-[#16a34a] rounded-lg p-3 mt-1"><FaCheck className="text-white text-2xl" /></span>
              <span className="text-gray-700 text-lg">La contribution à la formation pratique des étudiants de l'INAU</span>
            </div>
            {/* Mission 4 */}
            <div className="flex items-start gap-6">
              <span className="bg-[#16a34a] rounded-lg p-3 mt-1"><FaCheck className="text-white text-2xl" /></span>
              <span className="text-gray-700 text-lg">La publication des résultats de la recherche.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 