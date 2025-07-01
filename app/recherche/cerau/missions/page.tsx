import React from 'react';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import BannerWithBreadcrumb from '../../../components/BannerWithBreadcrumb';

export default function MissionsCERAU() {
  return (
    <div className="pb-16">
      <BannerWithBreadcrumb image="/images/graduation.jpg" />
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