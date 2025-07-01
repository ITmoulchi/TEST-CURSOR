'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function capitalize(str: string) {
  return str.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

interface BannerWithBreadcrumbProps {
  image: string;
  title?: string;
}

const BannerWithBreadcrumb: React.FC<BannerWithBreadcrumbProps> = ({ image, title }) => {
  const pathname = usePathname();
  let segments = pathname.split('/').filter(Boolean);
  let breadcrumb = [];
  if (pathname === '/annonces') {
    breadcrumb = [
      { label: 'Actualités', href: '/actualites' },
      { label: 'Annonces', href: '/annonces' },
    ];
  } else {
    breadcrumb = [
      { label: 'Accueil', href: '/' },
      ...segments.map((seg, idx) => {
        const href = '/' + segments.slice(0, idx + 1).join('/');
        return { label: capitalize(seg), href };
      })
    ];
  }
  const pageTitle = title || (segments.length ? capitalize(segments[segments.length - 1]) : 'Accueil');

  return (
    <div>
      {/* Banner with image and overlay */}
      <div className="relative w-full h-48 md:h-56 flex items-center justify-center">
        <Image
          src={image}
          alt={pageTitle}
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        {/* Gradient overlay blending into breadcrumb */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{background: 'linear-gradient(to bottom, rgba(6,111,82,0.8) 0%, #006A4E 100%)'}} />
        <div className="relative z-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">{pageTitle}</h1>
        </div>
      </div>
      {/* Breadcrumb path banner below the image, with vertical gradient from #006A4E (top) to #1f3a93 (bottom) */}
      <div className="w-full py-4 px-4 flex items-center gap-2 text-white text-base font-medium border-b-4 border-white" style={{background: 'linear-gradient(to bottom, #006A4E 0%, #1f3a93 100%)'}}>
        {breadcrumb.map((item, idx) => (
          <React.Fragment key={item.href}>
            {idx > 0 && <span className="text-white text-lg font-bold">&#8250;</span>}
            {idx === breadcrumb.length - 1 ? (
              <span className="whitespace-nowrap font-semibold">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:underline">{item.label}</Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BannerWithBreadcrumb; 