"use client";
import { useState, useEffect, useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaChevronDown, FaChevronRight, FaSearch, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

const contact = {
  phone: "+212 537 776189",
  mail: "inau@inau.ac.ma",
  address: "INAU, Avenue Allal El Fassi, B.P. 6215, Rabat – Instituts, Morocco",
};

const socials = [
  { href: "https://www.facebook.com/profile.php?id=100092615197955", icon: FaFacebookF, label: "Facebook" },
  { href: "https://www.instagram.com/inau.officiel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: FaInstagram, label: "Instagram" },
  { href: "#", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "#", icon: FaYoutube, label: "YouTube" },
];

const menu = [
  {
    label: "L'INAU",
    children: [
      { label: "Présentation", href: "/linau/presentation" },
      { label: "Organigramme", href: "/linau/organigramme" },
      {
        label: "Statuts",
        children: [
          { label: "Décret 2013", href: "/linau/statuts/2013" },
          { label: "Décret 2017", href: "/linau/statuts/2017" },
        ],
      },
      { label: "Avis d'appel d'offres", href: "/linau/appel-offres" },
      {
        label: "Partenariats & Coopérations",
        children: [
          { label: "Au Maroc", href: "/linau/partenariats/maroc" },
          { label: "À l'Étranger", href: "/linau/partenariats/etranger" },
          { label: "Bourses et Partenariats", href: "/linau/partenariats/bourses" },
        ],
      },
    ],
  },
  {
    label: "Formations",
    children: [
      {
        label: "Formation académique",
        children: [
          { label: "L'Offre de formations", href: "/formations/offre" },
          { label: "Cursus", href: "/formations/cursus" },
        ],
      },
      { label: "Formation continue", href: "/formations/continue" },
    ],
  },
  {
    label: "Recherche",
    children: [
      {
        label: "CERAU",
        children: [
          { label: "Missions", href: "/recherche/cerau/missions" },
          { label: "Organisation", href: "/recherche/cerau/organisation" },
          { label: "Études", href: "/recherche/cerau/etudes" },
          { label: "Recherches", href: "/recherche/cerau/recherches" },
        ],
      },
      {
        label: "CEDoc",
        children: [
          { label: "Doctorats (UGUT, GRDT, DTPGU)", href: "/recherche/cedoc/doctorats" },
          { label: "Thèses soutenues", href: "/recherche/cedoc/theses" },
        ],
      },
    ],
  },
  {
    label: "Communication",
    children: [
      { label: "Présentation du C.D.I.C", href: "/communication/cdic" },
      { label: "Centre de Documentation", href: "/communication/centre-doc" },
      { label: "Service Information & Communication", href: "/communication/service-info" },
    ],
  },
  {
    label: "Actualités",
    children: [
      { label: "Concours", href: "/actualites/concours" },
      { label: "Publications de l'INAU", href: "/actualites/publications" },
    ],
  },
  { label: "Bibliothèque", href: "/bibliotheque" },
  { label: "Contact", href: "/contact" },
];

function Dropdown({ items, depth = 0, pathname }: { items: any[]; depth?: number; pathname: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <ul className={`absolute left-0 top-full min-w-[200px] bg-white shadow-lg border rounded z-50`}>
      {items.map((item, idx) => (
        <li
          key={item.label}
          className={`relative group hover:bg-green-50 px-4 py-2 cursor-pointer flex items-center justify-between ${openIndex === idx ? "bg-green-100" : ""}`}
          onMouseEnter={() => setOpenIndex(idx)}
          onMouseLeave={() => setOpenIndex(null)}
        >
          {item.children ? (
            <span className="flex items-center gap-1 text-[#2C2C2C] group-hover:text-green-700 font-medium select-none">
              {item.label}
              <FaChevronDown size={12} />
            </span>
          ) : (
            <a
              href={item.href}
              className={`text-[#2C2C2C] group-hover:text-green-700 font-medium transition-colors ${pathname === item.href ? "text-green-700 font-bold" : ""}`}
            >
              {item.label}
            </a>
          )}
          {item.children && openIndex === idx && (
            <div className="absolute left-full top-0 min-w-[200px]">
              <Dropdown items={item.children} depth={depth + 1} pathname={pathname} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [hideNav, setHideNav] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [mobileMenuState, setMobileMenuState] = useState<{ [key: string]: boolean }>({});
  const pathname = usePathname();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 2;
      if (window.scrollY < threshold) {
        setHideNav(false);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper for mobile menu
  const toggleMobileMenu = (label: string) => {
    setMobileMenuState((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <div className={`fixed w-full left-0 top-0 z-50 transition-transform duration-300 ${hideNav ? "-translate-y-full" : "translate-y-0"}`} style={{margin:0,padding:0,border:0}}>
      {/* TopNavbar */}
      <div className="w-full bg-black text-white text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4 py-1.5">
          {/* Contact info (hidden on mobile/tablet) */}
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1">
              <FaPhoneAlt className="text-green-600" />
              {contact.phone}
            </span>
            <a href={`mailto:${contact.mail}`} className="flex items-center gap-1 hover:underline">
              <FaEnvelope className="text-green-600" />
              {contact.mail}
            </a>
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-green-600" />
              {contact.address}
            </span>
          </div>
          {/* Social icons (always visible, centered on mobile) */}
          <div className="flex items-center gap-4 ml-auto md:ml-0">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white hover:text-green-600 transition-colors text-lg"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Navbar */}
      <nav className={`w-full bg-white shadow-md border-b border-gray-100 transition-transform duration-300 ${hideNav ? "-translate-y-full" : "translate-y-0"}`} style={{margin:0,padding:0,border:0}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Image src="/images/inau logo.png" alt="INAU Logo" width={120} height={40} className="object-contain" />
          </div>
          <div className="hidden md:flex gap-6 items-center h-full">
            {menu.map((item, idx) => (
              <div
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => setOpenIndex(idx)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                {item.children ? (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded font-medium text-[#2C2C2C] group-hover:text-green-700 transition-colors select-none ${openIndex === idx ? "text-green-700" : ""}`}
                    tabIndex={0}
                    type="button"
                  >
                    {item.label}
                    <FaChevronDown size={12} />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className={`px-3 py-2 rounded font-medium text-[#2C2C2C] hover:text-green-700 transition-colors ${pathname === item.href ? "text-green-700 font-bold" : ""}`}
                  >
                    {item.label}
                  </a>
                )}
                {item.children && openIndex === idx && (
                  <div className="absolute left-0 top-full min-w-[200px]">
                    <Dropdown items={item.children} pathname={pathname} />
                  </div>
                )}
              </div>
            ))}
            {/* Desktop search icon and dropdown */}
            <div className="relative">
              <button
                className="ml-4 text-[#2C2C2C] hover:text-green-700 transition-colors text-xl rounded-full bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                onClick={() => {
                  setSearchOpen((v) => !v);
                  setTimeout(() => searchInputRef.current?.focus(), 100);
                }}
                aria-label="Search"
              >
                <FaSearch />
              </button>
              {searchOpen && (
                <form
                  onSubmit={e => { e.preventDefault(); if (searchValue.trim()) alert(`Recherche: ${searchValue}`); }}
                  className="absolute right-0 top-12 bg-white border rounded-full shadow-lg flex items-center px-2 py-1 z-50 w-72 animate-fade-in"
                >
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    placeholder="Rechercher..."
                    className="flex-1 border-none outline-none bg-transparent text-[#2C2C2C] placeholder-gray-400 px-1 py-1"
                  />
                  {searchValue && (
                    <button type="button" onClick={() => setSearchValue("")}
                      className="ml-2 text-gray-400 hover:text-red-500">
                      <FaTimes />
                    </button>
                  )}
                  <button type="submit" className="ml-2 bg-green-700 hover:bg-green-800 text-white rounded-full p-1.5 transition-colors">
                    <FaSearch />
                  </button>
                </form>
              )}
            </div>
          </div>
          {/* Mobile menu button only */}
          <div className="flex md:hidden items-center gap-2">
            <button
              className="flex flex-col gap-1.5"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span className="w-7 h-0.5 bg-green-700 rounded" />
              <span className="w-7 h-0.5 bg-green-700 rounded" />
              <span className="w-7 h-0.5 bg-green-700 rounded" />
            </button>
          </div>
        </div>
        {/* Mobile menu ... unchanged ... */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <ul className="flex flex-col gap-1 py-2">
              {menu.map((item) => (
                <li key={item.label} className="px-6 py-2 text-[#2C2C2C] font-medium border-b border-gray-50">
                  <div className="flex items-center justify-between">
                    {item.children ? (
                      <button
                        onClick={() => toggleMobileMenu(item.label)}
                        className="ml-0 text-[#2C2C2C] hover:text-green-700 flex items-center gap-1 font-medium"
                        aria-label="Expand submenu"
                        type="button"
                      >
                        {item.label}
                        <FaChevronDown size={14} className={mobileMenuState[item.label] ? "rotate-180 transition-transform" : "transition-transform"} />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className={`block w-full text-left hover:text-green-700 transition-colors ${pathname === item.href ? "text-green-700 font-bold" : ""}`}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                  {/* Submenu for mobile */}
                  {item.children && mobileMenuState[item.label] && (
                    <ul className="pl-4 border-l border-green-100 mt-1">
                      {item.children.map((sub: any) => (
                        <li key={sub.label} className="py-1">
                          {sub.children ? (
                            <>
                              <div className="flex items-center justify-between">
                                <button
                                  onClick={() => toggleMobileMenu(sub.label)}
                                  className="ml-0 text-[#2C2C2C] hover:text-green-700 flex items-center gap-1 font-medium"
                                  aria-label="Expand submenu"
                                  type="button"
                                >
                                  {sub.label}
                                  <FaChevronDown size={12} className={mobileMenuState[sub.label] ? "rotate-180 transition-transform" : "transition-transform"} />
                                </button>
                              </div>
                              {mobileMenuState[sub.label] && (
                                <ul className="pl-4 border-l border-green-100 mt-1">
                                  {sub.children.map((sub2: any) => (
                                    <li key={sub2.label} className="py-1">
                                      <a href={sub2.href} className={`hover:text-green-700 transition-colors ${pathname === sub2.href ? "text-green-700 font-bold" : ""}`}>{sub2.label}</a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          ) : (
                            <a href={sub.href} className={`hover:text-green-700 transition-colors ${pathname === sub.href ? "text-green-700 font-bold" : ""}`}>{sub.label}</a>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            {/* Mobile search bar as last item in menu */}
            <form
              onSubmit={e => { e.preventDefault(); if (searchValue.trim()) alert(`Recherche: ${searchValue}`); }}
              className="w-full bg-white border-t z-50 flex items-center px-4 py-2 animate-fade-in"
            >
              <input
                ref={searchInputRef}
                type="text"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder="Rechercher..."
                className="flex-1 border-none outline-none bg-transparent text-[#2C2C2C] placeholder-gray-400 px-1 py-1"
              />
              {searchValue && (
                <button type="button" onClick={() => setSearchValue("")}
                  className="ml-2 text-gray-400 hover:text-red-500">
                  <FaTimes />
                </button>
              )}
              <button type="submit" className="ml-2 bg-green-700 hover:bg-green-800 text-white rounded-full p-1.5 transition-colors">
                <FaSearch />
              </button>
            </form>
          </div>
        )}
      </nav>
    </div>
  );
} 