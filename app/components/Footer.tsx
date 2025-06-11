import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaSearch } from "react-icons/fa";
import Image from "next/image";

const socials = [
  { href: "https://www.facebook.com/profile.php?id=100092615197955", icon: FaFacebookF, label: "Facebook" },
  { href: "https://www.instagram.com/inau.officiel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.linkedin.com/company/institut-national-d-aménagement-et-d-urbanisme-inau/", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://www.youtube.com/@INAUofficiel", icon: FaYoutube, label: "YouTube" },
];

const links = [
  { label: "À propos de l'INAU", href: "/linau" },
  { label: "Formations", href: "/formations" },
  { label: "Recherche", href: "/recherche" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 text-white">
      {/* Background image with sea green glassmorphism gradient overlay */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/images/graduation.jpg"
          alt="Graduation background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="pointer-events-none select-none"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#20b2aa]/90 via-[#20b2aa]/80 to-[#19786a]/95 backdrop-blur-[2px]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Top: Logo, Title, Search */}
        <div className="rounded-3xl bg-white/20 backdrop-blur-md shadow-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-14 border border-white/20">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="flex items-center gap-3 mb-2">
              <Image src="/images/inau logo.png" alt="INAU Logo" width={60} height={60} className="rounded bg-white/80 p-1 shadow" />
              <span className="text-2xl md:text-3xl font-extrabold drop-shadow-lg tracking-tight text-white">Institut National d'Aménagement</span>
            </div>
            <p className="text-sm md:text-base opacity-90 drop-shadow max-w-lg font-medium text-white/90">
              INAU est un établissement public d'enseignement supérieur et de recherche, dédié à la formation, à la recherche scientifique, et à l'expertise dans les domaines de l'aménagement du territoire et du développement durable.
            </p>
          </div>
          <form className="flex w-full md:w-auto items-center gap-2 mt-2 md:mt-0">
            <input
              type="text"
              placeholder="Recherchez ce que vous voulez..."
              className="rounded-full px-6 py-3 w-full md:w-80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4169e1] placeholder-gray-500 bg-white/80 shadow"
            />
            <button
              type="submit"
              className="bg-[#4169e1] hover:bg-[#1976d2] text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 shadow-md"
            >
              <FaSearch />
            </button>
          </form>
        </div>
        {/* Main Links and Socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Liens principaux */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white/90 tracking-wide">Liens principaux</h3>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#4169e1] transition-colors duration-200 font-medium text-white/90 text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact rapide */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white/90 tracking-wide">Contact rapide</h3>
            <ul className="space-y-3 text-base">
              <li>
                <span className="font-semibold">Téléphone:</span> <a href="tel:+212537776189" className="hover:text-[#4169e1] transition-colors">+212 537 776189</a>
              </li>
              <li>
                <span className="font-semibold">Email:</span> <a href="mailto:inau@inau.ac.ma" className="hover:text-[#4169e1] transition-colors">inau@inau.ac.ma</a>
              </li>
              <li>
                <span className="font-semibold">Adresse:</span> INAU, Avenue Allal El Fassi, B.P. 6215, Rabat – Instituts, Maroc
              </li>
            </ul>
          </div>
          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white/90 tracking-wide">Réseaux sociaux</h3>
            <div className="flex gap-4 mt-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white hover:text-[#4169e1] transition-colors text-2xl p-2 rounded-full bg-[#183c6b]/90 hover:bg-white hover:shadow-lg border border-white/20"
                  style={{ transition: 'all 0.2s' }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Footer bottom */}
        <div className="border-t border-white/30 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between text-sm opacity-95">
          <span>© {new Date().getFullYear()} INAU. Tous droits réservés.</span>
          <span className="mt-2 md:mt-0">Design & Développement par l'équipe INAU</span>
        </div>
      </div>
    </footer>
  );
} 