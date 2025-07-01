import Image from 'next/image';
import BannerWithBreadcrumb from '../../components/BannerWithBreadcrumb';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import Link from 'next/link';
import AnnonceDetailClient from './AnnonceDetailClient';
import { annonces } from '../../data/annonces';

export function generateStaticParams() {
  return annonces.map(a => ({ slug: a.slug }));
}

export default function AnnonceDetailPage({ params }: { params: { slug: string } }) {
  const annonce = annonces.find(a => a.slug === params.slug);

  if (!annonce) {
    return (
      <div className="max-w-2xl mx-auto py-24 text-center text-red-600 font-bold text-xl">Annonce introuvable</div>
    );
  }

  return (
    <div className="pb-16">
      <BannerWithBreadcrumb image={annonce.image} title={annonce.title} />
      <main className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="relative w-full h-64">
            <Image src={annonce.image} alt={annonce.title} fill className="object-cover" />
          </div>
          <div className="p-6">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold rounded-full px-3 py-1 mb-2">{annonce.category}</span>
            <div className="flex items-center gap-2 text-[#20b2aa] font-semibold text-sm mb-2">
              <span>{annonce.date}</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{annonce.title}</h1>
            <p className="text-gray-600 text-base mb-6">{annonce.desc}</p>
            <AnnonceDetailClient />
            <Link href="/annonces" className="ml-4 px-6 py-2 rounded-full border border-[#1f3a93] text-[#1f3a93] font-medium bg-white hover:bg-blue-50 transition-colors shadow-none">Toutes les annonces</Link>
          </div>
        </div>
      </main>
      <ScrollToTopButton />
    </div>
  );
} 