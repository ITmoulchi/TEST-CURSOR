"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import type { JSX } from "react";

const slides = [
  {
    image: "/images/graduation.jpg",
    title: "Bienvenue à l'Institut National d'Aménagement et d'Urbanisme",
    desc: "L'INAU s'engage à façonner un avenir durable et harmonieux pour nos villes. Découvrez notre mission et nos projets qui transforment l'urbanisme en France.",
    buttons: [
      { label: "En savoir plus", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    image: "/images/exams.jpg",
    title: "Examens à l'INAU",
    desc: "Préparez-vous pour les examens avec nos ressources et conseils. Consultez le calendrier et les modalités d'examen.",
    buttons: [
      { label: "Voir les examens", href: "/examens" },
    ],
  },
  {
    image: "/images/school.jpg",
    title: "La Vie Scolaire à l'INAU",
    desc: "Découvrez l'environnement académique, les infrastructures et la vie étudiante à l'INAU.",
    buttons: [
      { label: "Découvrir l'école", href: "/ecole" },
    ],
  },
  {
    image: "/images/sports.jpg",
    title: "Sports à l'INAU",
    desc: "Participez à nos activités sportives et découvrez les installations dédiées au bien-être des étudiants.",
    buttons: [
      { label: "En savoir plus sur le sport", href: "/sports" },
    ],
  },
];

// Dummy data for carousels
const annonces = [
  { image: "/images/graduation.jpg", date: "08 Juin 2024", title: "Titre de l'annonce 1", desc: "Description courte de l'annonce pour donner un aperçu rapide à l'utilisateur." },
  { image: "/images/exams.jpg", date: "12 Juin 2024", title: "Titre de l'annonce 2", desc: "Une autre annonce importante pour les étudiants et le staff." },
  { image: "/images/school.jpg", date: "15 Juin 2024", title: "Titre de l'annonce 3", desc: "Annonce sur un événement à venir à l'INAU." },
  { image: "/images/sports.jpg", date: "20 Juin 2024", title: "Titre de l'annonce 4", desc: "Annonce sur les activités sportives de l'INAU." },
  { image: "/images/graduation.jpg", date: "25 Juin 2024", title: "Titre de l'annonce 5", desc: "Annonce supplémentaire pour tester le diaporama." },
];
const formations = [
  { image: "/images/inau logo.png", title: "Formation 1", desc: "Courte description de la formation proposée par l'INAU pour les étudiants et professionnels." },
  { image: "/images/inau logo.png", title: "Formation 2", desc: "Une autre formation de qualité à l'INAU." },
  { image: "/images/inau logo.png", title: "Formation 3", desc: "Formation axée sur l'innovation et la pratique." },
  { image: "/images/inau logo.png", title: "Formation 4", desc: "Formation complémentaire pour les professionnels." },
  { image: "/images/inau logo.png", title: "Formation 5", desc: "Formation avancée pour les étudiants." },
];

// Add explicit types for Carousel props and parameters
interface CarouselProps {
  items: any[];
  renderItem: (item: any, idx: number) => JSX.Element;
  itemsPerView?: number;
  auto?: boolean;
  interval?: number;
}

function Carousel({ items, renderItem, itemsPerView = 3, auto = true, interval = 4000 }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const max = items.length;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const perView = isMobile ? 1 : itemsPerView;

  useEffect(() => {
    if (!auto) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % max);
    }, interval);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [current, auto, interval, max]);

  // Responsive: update perView on resize
  useEffect(() => {
    const handleResize = () => setCurrent(0);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + max) % max);
  const next = () => setCurrent((c) => (c + 1) % max);
  const goTo = (idx: number) => setCurrent(idx);

  // Calculate visible items
  let visible: any[] = [];
  for (let i = 0; i < perView; i++) {
    visible.push(items[(current + i) % max]);
  }

  return (
    <div className="relative w-full flex items-center justify-center pb-20">
      {/* Left Arrow */}
      <button
        onClick={prev}
        aria-label="Précédent"
        className="absolute left-0 z-10 flex items-center justify-center w-12 h-12 bg-white border-2 border-[#20b2aa] text-[#19786a] hover:bg-[#20b2aa] hover:text-white rounded-full shadow transition-colors"
        style={{ transform: 'translateX(-50%)' }}
      >
        <FaChevronLeft size={28} />
      </button>
      {/* Cards Row with fade/scale animation */}
      <div className="flex flex-row gap-8 w-full justify-center">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-row gap-8 w-full justify-center"
        >
          {visible.map((item, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="flex flex-col items-stretch"
            >
              {renderItem(item, idx)}
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Right Arrow */}
      <button
        onClick={next}
        aria-label="Suivant"
        className="absolute right-0 z-10 flex items-center justify-center w-12 h-12 bg-white border-2 border-[#20b2aa] text-[#19786a] hover:bg-[#20b2aa] hover:text-white rounded-full shadow transition-colors"
        style={{ transform: 'translateX(50%)' }}
      >
        <FaChevronRight size={28} />
      </button>
      {/* Dots: one per card */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-36px] flex justify-center gap-2 mt-6">
        {items.map((_, idx: number) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${current === idx ? "bg-[#4169E1] border-[#4169E1]" : "bg-transparent border-gray-300"}`}
            aria-label={`Go to card ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const total = slides.length;
  const fadeRef = useRef<HTMLDivElement>(null);

  // Autoplay for diaporama
  useEffect(() => {
    const timer = setTimeout(() => setCurrent((c) => (c + 1) % total), 5000);
    return () => clearTimeout(timer);
  }, [current, total]);

  // Fade effect
  useEffect(() => {
    if (fadeRef.current) {
      fadeRef.current.classList.remove("opacity-0");
      fadeRef.current.classList.add("opacity-100");
      setTimeout(() => {
        if (fadeRef.current) fadeRef.current.classList.remove("opacity-100");
        if (fadeRef.current) fadeRef.current.classList.add("opacity-0");
      }, 4800);
    }
  }, [current]);

  // Show scroll-to-top button
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const slide = slides[current];

  return (
    <>
      <div className="relative w-full min-h-[calc(100vh-96px)] flex items-stretch overflow-hidden" style={{height: 'calc(100vh - 96px)'}}>
        {/* Diaporama image with fade */}
        <div ref={fadeRef} className="transition-opacity duration-700 absolute inset-0 opacity-100">
          {/* Image with gradient overlay */}
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover z-0"
              priority
            />
            {/* Gradient overlay only on image */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#066f52] to-transparent" />
          </div>
        </div>
        {/* Text and buttons overlay (above gradient) */}
        <div className="absolute z-30 flex flex-col justify-center items-start top-1/2 -translate-y-1/2 left-0 right-0 mx-auto max-w-7xl px-4 sm:px-8">
          <div className="max-w-xl md:ml-[10px] text-white gap-4 sm:gap-6 p-3 sm:p-6 md:p-0">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2 sm:mb-4 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-base xs:text-lg sm:text-xl mb-4 sm:mb-6 drop-shadow-lg max-w-[90vw] sm:max-w-none">
              {slide.desc}
            </p>
            <div className="flex gap-2 sm:gap-4 flex-wrap">
              {slide.buttons.map((btn, i) => (
                <a
                  key={i}
                  href={btn.href}
                  className="px-5 py-2 sm:px-8 sm:py-3 rounded-full font-bold shadow-lg bg-gradient-to-r from-[#4169E1] to-[#1E90FF] hover:from-[#3A5ECA] hover:to-[#3A5ECA] transition-all duration-300 text-white border-none outline-none focus:ring-2 focus:ring-[#1E90FF] focus:ring-offset-2 text-base sm:text-lg tracking-wide"
                  style={{boxShadow: '0 4px 24px 0 rgba(65,105,225,0.15)'}}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Arrows - always outside text area on all screens */}
        <button
          onClick={prev}
          className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-40 p-0 bg-transparent text-[#4169E1] hover:text-[#3A5ECA] transition-all duration-300 group"
          aria-label="Previous image"
          style={{boxShadow: 'none'}}
        >
          <FaChevronLeft size={32} className="sm:size-[44px] transition-all duration-300 group-hover:scale-110" />
        </button>
        <button
          onClick={next}
          className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-40 p-0 bg-transparent text-[#4169E1] hover:text-[#3A5ECA] transition-all duration-300 group"
          aria-label="Next image"
          style={{boxShadow: 'none'}}
        >
          <FaChevronRight size={32} className="sm:size-[44px] transition-all duration-300 group-hover:scale-110" />
        </button>
        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                current === idx ? "bg-[#4169E1] border-[#4169E1]" : "bg-transparent border-white"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Home sections */}
      <motion.section initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.7, ease:'easeOut'}} className="max-w-7xl mx-auto px-4 py-32 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">À propos de l'INAU</h2>
          <p className="text-gray-700 mb-2">L'Institut National d'Aménagement et d'Urbanisme (INAU) est un établissement de référence dédié à la formation, la recherche et l'innovation dans le domaine de l'urbanisme et de l'aménagement du territoire au Maroc.</p>
          <a href="#" className="text-green-700 hover:underline font-semibold">En savoir plus →</a>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">Actualités</h2>
          <ul className="space-y-2 text-gray-700">
            <li>📢 Concours d'accès 2024 – <a href="#" className="text-green-700 hover:underline">Voir les détails</a></li>
            <li>📚 Nouvelles publications de l'INAU – <a href="#" className="text-green-700 hover:underline">Découvrir</a></li>
            <li>🎓 Prochaines soutenances de thèses – <a href="#" className="text-green-700 hover:underline">Calendrier</a></li>
          </ul>
        </div>
      </motion.section>
      <motion.section initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.7, ease:'easeOut'}} className="bg-green-50 py-32">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Partenaires & Coopérations</h2>
            <p className="text-gray-700 mb-2">L'INAU collabore avec de nombreux partenaires nationaux et internationaux pour promouvoir la recherche et l'innovation en urbanisme.</p>
            <a href="#" className="text-green-700 hover:underline font-semibold">Voir nos partenaires →</a>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <img src="/images/inau logo.png" alt="INAU" className="h-12 w-auto" />
            <img src="/images/inau logo.png" alt="Partenaire 2" className="h-12 w-auto opacity-60" />
            <img src="/images/inau logo.png" alt="Partenaire 3" className="h-12 w-auto opacity-40" />
          </div>
        </div>
      </motion.section>
      <motion.section initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.7, ease:'easeOut'}} className="max-w-7xl mx-auto px-4 py-32 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-lg font-bold text-green-800 mb-2">Formations</h3>
          <ul className="text-gray-700 space-y-1">
            <li><a href="#" className="hover:underline">Formation académique</a></li>
            <li><a href="#" className="hover:underline">Formation continue</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-green-800 mb-2">Recherche</h3>
          <ul className="text-gray-700 space-y-1">
            <li><a href="#" className="hover:underline">CERAU</a></li>
            <li><a href="#" className="hover:underline">CEDoc</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-green-800 mb-2">Ressources</h3>
          <ul className="text-gray-700 space-y-1">
            <li><a href="#" className="hover:underline">Bibliothèque</a></li>
            <li><a href="#" className="hover:underline">Centre de Documentation</a></li>
          </ul>
        </div>
      </motion.section>
      {/* --- Annonces Section --- */}
      <motion.section initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.7, ease:'easeOut'}} className="max-w-7xl mx-auto px-4 py-32">
        <h2 className="text-2xl md:text-3xl font-bold text-[#19786a] mb-8 text-center border-b-2 border-[#20b2aa] pb-2 w-fit mx-auto">Annonces</h2>
        <Carousel
          items={annonces}
          itemsPerView={3}
          renderItem={(annonce, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col h-full min-h-[400px] max-h-[400px] w-[350px] max-w-[350px] mx-auto" style={{boxShadow:'0 8px 32px 0 rgba(44,62,80,0.10)'}}>
              <div className="relative w-full h-40 rounded-xl overflow-hidden mb-3">
                <Image src={annonce.image} alt="Annonce" fill className="object-cover" />
              </div>
              <div className="flex items-center gap-2 text-[#20b2aa] font-semibold text-sm">
                <FaCalendarAlt /> <span>{annonce.date}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{annonce.title}</h3>
              <p className="text-gray-600 text-sm flex-1">{annonce.desc}</p>
              <a href="#" className="text-[#4169e1] font-semibold hover:underline mt-2">Voir plus</a>
            </div>
          )}
        />
      </motion.section>
      {/* --- Qui nous sommes Section --- */}
      <motion.section initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.7, ease:'easeOut'}} className="max-w-5xl mx-auto px-4 py-32 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-lg">
            <Image src="/images/exams.jpg" alt="Directeur" fill className="object-cover" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#19786a] mb-4">Qui nous sommes</h2>
          <h3 className="text-xl font-semibold mb-2">Unlock Your Potential in Architecture and BIM</h3>
          <p className="text-gray-700 mb-4">Notre mission est de former les leaders de demain dans le domaine de l'architecture et du BIM, en offrant un enseignement de qualité et des opportunités uniques de développement professionnel.</p>
          <a href="#" className="inline-block bg-[#4169e1] hover:bg-[#1976d2] text-white font-bold px-6 py-3 rounded-full transition-colors shadow">En savoir plus</a>
        </div>
      </motion.section>
      {/* --- Explorer nos formations Section --- */}
      <motion.section initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.7, ease:'easeOut'}} className="max-w-7xl mx-auto px-4 py-32">
        <h2 className="text-2xl md:text-3xl font-bold text-[#19786a] mb-8 text-center border-b-2 border-[#20b2aa] pb-2 w-fit mx-auto">Explorer nos formations</h2>
        <Carousel
          items={formations}
          itemsPerView={3}
          renderItem={(formation, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col h-full min-h-[400px] max-h-[400px] w-[350px] max-w-[350px] mx-auto" style={{boxShadow:'0 8px 32px 0 rgba(44,62,80,0.10)'}}>
              <div className="relative w-full h-40 rounded-xl overflow-hidden mb-3">
                <Image src={formation.image} alt={formation.title} fill className="object-cover bg-gray-100" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{formation.title}</h3>
              <p className="text-gray-600 text-sm flex-1">{formation.desc}</p>
              <a href="#" className="text-[#4169e1] font-semibold hover:underline mt-2">Voir la formation</a>
            </div>
          )}
        />
      </motion.section>
      {/* Footer */}
      <footer className="bg-green-900 text-white py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <img src="/images/inau logo.png" alt="INAU" className="h-10 mb-4" />
            <p className="text-sm">Institut National d'Aménagement et d'Urbanisme<br />Avenue Allal El Fassi, B.P. 6215, Rabat – Instituts, Maroc</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Liens rapides</h4>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:underline">Accueil</a></li>
              <li><a href="#" className="hover:underline">Formations</a></li>
              <li><a href="#" className="hover:underline">Recherche</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact</h4>
            <p className="text-sm mb-2">+212 537 776189<br />inau@inau.ac.ma</p>
            <div className="flex gap-3 mt-2">
              <a href="https://www.facebook.com/profile.php?id=100092615197955" target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
              <a href="https://www.instagram.com/inau.officiel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.414 3.635 1.381 2.668 2.348 2.384 3.521 2.326 4.798 2.267 6.078 2.254 6.487 2.254 12c0 5.513.013 5.922.072 7.202.058 1.277.342 2.45 1.309 3.417.967.967 2.14 1.251 3.417 1.309C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.45-.342 3.417-1.309.967-.967 1.251-2.14 1.309-3.417.059-1.28.072-1.689.072-7.202 0-5.513-.013-5.922-.072-7.202-.058-1.277-.342-2.45-1.309-3.417C19.398.414 18.225.13 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
              <a href="#" className="hover:text-green-400"><svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5zm-7 19h-3v-8h3v8zm-1.5-9.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 9.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.532 0-1.768 1.197-1.768 2.435v4.682h-3v-8h2.881v1.093h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v3.87z"/></svg></a>
              <a href="#" className="hover:text-green-400"><svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186c-.183-.687-.72-1.224-1.406-1.406C20.88 4.5 12 4.5 12 4.5s-8.88 0-10.092.28c-.687.183-1.224.72-1.406 1.406C0 7.398 0 12 0 12s0 4.602.28 5.814c.183.687.72 1.224 1.406 1.406C3.12 19.5 12 19.5 12 19.5s8.88 0 10.092-.28c.687-.183 1.224-.72 1.406-1.406C24 16.602 24 12 24 12s0-4.602-.28-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"/></svg></a>
            </div>
          </div>
        </div>
      </footer>
      {/* Scroll-to-top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 bg-green-700 hover:bg-green-800 text-white p-3 rounded-full shadow-lg transition-colors"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
        </button>
      )}
    </>
  );
}
