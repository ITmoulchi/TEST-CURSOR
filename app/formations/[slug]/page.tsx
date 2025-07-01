import { formations } from '../../data/formations';
import BannerWithBreadcrumb from '../../components/BannerWithBreadcrumb';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  return formations.map(f => ({ slug: f.slug }));
}

export default function FormationDetailPage({ params }: { params: { slug: string } }) {
  const formation = formations.find(f => f.slug === params.slug);
  if (!formation) return <div className="max-w-2xl mx-auto p-8">Formation introuvable.</div>;
  return (
    <div className="pb-16">
      <BannerWithBreadcrumb image={formation.image} title={formation.title} />
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
          <Image src={formation.image} alt={formation.title} fill className="object-cover" />
        </div>
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold rounded-full px-3 py-1 mb-2">{formation.category}</span>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{formation.title}</h1>
        <p className="text-gray-700 text-base mb-8">{formation.desc}</p>
        <Link href="/formations/toutes" className="inline-block px-6 py-2 rounded-full border border-green-700 text-green-700 font-medium bg-white hover:bg-green-50 transition-colors shadow-none">Retour à toutes les formations</Link>
      </main>
    </div>
  );
} 