"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import BannerWithBreadcrumb from '../components/BannerWithBreadcrumb';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Link from 'next/link';
import { annonces } from '../data/annonces';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

const ANNONCES_PER_PAGE = 6;

export default function AnnoncesListClient() {
  const [page, setPage] = useState(1);
  const [fade, setFade] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(annonces.length / ANNONCES_PER_PAGE);
  const startIdx = (page - 1) * ANNONCES_PER_PAGE;
  const endIdx = startIdx + ANNONCES_PER_PAGE;
  const annoncesToShow = annonces.slice(startIdx, endIdx);

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
      <BannerWithBreadcrumb image="/images/graduation.jpg" title="Toutes les annonces" />
      <main ref={mainRef} className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-10 text-center">Toutes les annonces</h2>
        <div key={page} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          {annoncesToShow.map((annonce, i) => (
            <MotionDiv
              key={annonce.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col h-full w-full max-w-[380px] mx-auto overflow-hidden"
            >
              <div className="relative w-full h-40">
                <Image src={annonce.image} alt={annonce.title} fill className="object-cover" />
              </div>
              <div className="px-6 pt-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold rounded-full px-3 py-1 mb-2">{annonce.category}</span>
              </div>
              <div className="p-6 flex flex-col flex-1 pt-0">
                <div className="flex items-center gap-2 text-[#20b2aa] font-semibold text-sm">
                  <span>{annonce.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{annonce.title}</h3>
                <p className="text-gray-600 text-sm">{annonce.desc}</p>
                <Link href={`/annonces/${annonce.slug}`} className="text-[#4169e1] font-semibold hover:underline mt-1">Voir plus</Link>
              </div>
            </MotionDiv>
          ))}
        </div>
        {/* Pagination controls */}
        <div className="flex justify-center mt-10 gap-2 flex-wrap">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx + 1)}
              className={`px-4 py-2 rounded-full border font-semibold transition-colors ${page === idx + 1 ? 'bg-[#1f3a93] text-white border-[#1f3a93]' : 'bg-white text-[#1f3a93] border-[#1f3a93] hover:bg-[#1f3a93] hover:text-white'}`}
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