import Image from 'next/image';
import BannerWithBreadcrumb from '../../components/BannerWithBreadcrumb';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import Link from 'next/link';
import AnnonceDetailClient from './AnnonceDetailClient';
import { annonces } from '../../data/annonces';

export function generateStaticParams() {
  return annonces.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const annonce = annonces.find(a => a.slug === slug);
  return {
    title: annonce ? `Annonce : ${annonce.title}` : 'Annonce',
  };
}

export default async function AnnonceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const annonce = annonces.find(a => a.slug === slug);

  if (!annonce) {
    return (
      <div className="max-w-2xl mx-auto py-24 text-center text-red-600 font-bold text-xl">Annonce introuvable</div>
    );
  }

  // Get 3 other annonces (excluding the current one)
  const otherAnnonces = annonces
    .filter(a => a.slug !== slug)
    .slice(0, 3);

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
          </div>
        </div>
      </main>
      
      {/* Other Annonces Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center w-full mb-8">
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
          <h2 className="text-2xl font-bold text-green-800 mx-2 sm:mx-4 text-center break-words">Autres annonces</h2>
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherAnnonces.map((otherAnnonce) => (
            <div key={otherAnnonce.slug} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="relative w-full h-40">
                <Image src={otherAnnonce.image} alt={otherAnnonce.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold rounded-full px-2 py-1 mb-2">{otherAnnonce.category}</span>
                <div className="flex items-center gap-2 text-[#20b2aa] font-semibold text-xs mb-2">
                  <span>{otherAnnonce.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{otherAnnonce.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{otherAnnonce.desc}</p>
                <Link href={`/annonces/${otherAnnonce.slug}`} className="text-[#4169e1] font-semibold hover:underline text-sm">Voir plus</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/annonces" className="inline-block px-6 py-2 rounded-full border border-[#1f3a93] text-[#1f3a93] font-medium bg-white hover:bg-blue-50 transition-colors">Voir toutes les annonces</Link>
        </div>
      </section>
      
      <ScrollToTopButton />
    </div>
  );
} 