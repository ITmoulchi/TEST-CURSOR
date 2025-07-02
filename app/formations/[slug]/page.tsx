import { formations } from '../../data/formations';
import BannerWithBreadcrumb from '../../components/BannerWithBreadcrumb';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  return formations.map(f => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const formation = formations.find(f => f.slug === slug);
  return {
    title: formation ? `Formation : ${formation.title}` : 'Formation',
  };
}

export default async function FormationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const formation = formations.find(f => f.slug === slug);
  if (!formation) return <div className="max-w-2xl mx-auto p-8">Formation introuvable.</div>;
  
  // Get 3 other formations (excluding the current one)
  const otherFormations = formations
    .filter(f => f.slug !== slug)
    .slice(0, 3);

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
      </main>
      
      {/* Other Formations Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center w-full mb-8">
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
          <h2 className="text-2xl font-bold text-green-800 mx-2 sm:mx-4 text-center break-words">Autres formations</h2>
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherFormations.map((otherFormation) => (
            <div key={otherFormation.slug} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="relative w-full h-40">
                <Image src={otherFormation.image} alt={otherFormation.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold rounded-full px-2 py-1 mb-2">{otherFormation.category}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{otherFormation.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{otherFormation.desc}</p>
                <Link href={`/formations/${otherFormation.slug}`} className="text-[#4169e1] font-semibold hover:underline text-sm">Voir la formation</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/formations/toutes" className="inline-block px-6 py-2 rounded-full border border-green-700 text-green-700 font-medium bg-white hover:bg-green-50 transition-colors">Voir toutes les formations</Link>
        </div>
      </section>
    </div>
  );
} 