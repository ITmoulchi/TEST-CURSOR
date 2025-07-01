'use client';
import { useRouter } from 'next/navigation';

export default function AnnonceDetailClient() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="px-6 py-2 rounded-full border border-[#1f3a93] text-[#1f3a93] font-medium bg-white hover:bg-blue-50 transition-colors shadow-none"
    >
      Retour
    </button>
  );
} 