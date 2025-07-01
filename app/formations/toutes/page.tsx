'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import BannerWithBreadcrumb from '../../components/BannerWithBreadcrumb';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import { motion } from 'framer-motion';
import { formations } from '../../data/formations';

const FORMATIONS_PER_PAGE = 6;

export default function ToutesFormationsPage() {
  const [page, setPage] = useState(1);
  const [fade, setFade] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(formations.length / FORMATIONS_PER_PAGE);
  const startIdx = (page - 1) * FORMATIONS_PER_PAGE;
  const endIdx = startIdx + FORMATIONS_PER_PAGE;
  const formationsToShow = formations.slice(startIdx, endIdx);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 10);
  }, []);

  const handlePageChange = (newPage: number) => {
    if (newPage === page) return;
    setFade(true);
    setTimeout(() => {
      setPage(newPage);
      setFade(false);
      if (mainRef.current) {
        const offset = 100;
        const top = mainRef.current.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 250);
  };

  return (
    <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'} pb-16`}>
      <BannerWithBreadcrumb image="/images/Group 418.png" title="Toutes les formations" />
      <main ref={mainRef} className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-10 text-center">Toutes les formations</h2>
        <div key={page} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          {formationsToShow.map((formation, i) => (
            <motion.div
              key={`${page}-${startIdx + i}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col h-full w-full max-w-[380px] mx-auto overflow-hidden"
            >
              <div className="relative w-full h-40">
                <Image src={formation.image} alt={formation.title} fill className="object-cover bg-gray-100" />
              </div>
              <div className="px-6 pt-4">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold rounded-full px-3 py-1 mb-2">{formation.category}</span>
              </div>
              <div className="p-6 flex flex-col flex-1 pt-0">
                <h3 className="text-lg font-bold text-gray-900">{formation.title}</h3>
                <p className="text-gray-600 text-sm">{formation.desc}</p>
                <a href={`/formations/${formation.slug}`} className="text-[#4169e1] font-semibold hover:underline mt-1">Voir la formation</a>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Pagination controls */}
        <div className="flex justify-center mt-10 gap-2 flex-wrap">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx + 1)}
              className={`px-4 py-2 rounded-full border font-semibold transition-colors ${page === idx + 1 ? 'bg-[#00b16a] text-white border-[#00b16a]' : 'bg-white text-[#00b16a] border-[#00b16a] hover:bg-[#00b16a] hover:text-white'}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </main>
      <ScrollToTopButton />
    </div>
  );
} 