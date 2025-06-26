"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import type { JSX } from "react";
import React from "react";
import { useInView } from 'framer-motion';

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
  { image: "/images/Group 418.png", title: "Formation 1", desc: "Courte description de la formation proposée par l'INAU pour les étudiants et professionnels." },
  { image: "/images/Group 418.png", title: "Formation 2", desc: "Une autre formation de qualité à l'INAU." },
  { image: "/images/Group 418.png", title: "Formation 3", desc: "Formation axée sur l'innovation et la pratique." },
  { image: "/images/Group 418.png", title: "Formation 4", desc: "Formation complémentaire pour les professionnels." },
  { image: "/images/Group 418.png", title: "Formation 5", desc: "Formation avancée pour les étudiants." },
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
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const perView = isMobile ? 1 : itemsPerView;

  useEffect(() => {
    if (!auto) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % max);
    }, interval);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [current, auto, interval, max]);

  // Touch/swipe support
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) setCurrent((c) => (c - 1 + max) % max);
    else if (diff < -50) setCurrent((c) => (c + 1) % max);
    touchStartX.current = null;
  };

  // Calculate visible items
  let visible: any[] = [];
  for (let i = 0; i < perView; i++) {
    visible.push(items[(current + i) % max]);
  }

  const prev = () => setCurrent((c) => (c - 1 + max) % max);
  const next = () => setCurrent((c) => (c + 1) % max);
  const goTo = (idx: number) => setCurrent(idx);

  return (
    <div className="relative w-full flex flex-col items-center justify-center pb-8">
      {/* Cards row with arrows next to cards */}
      <div className="relative w-full flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Arrow */}
        <button
          onClick={prev}
          aria-label="Précédent"
          className="hidden md:flex absolute -left-8 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-12 h-12 bg-white border-2 border-[#20b2aa] text-[#19786a] hover:bg-[#20b2aa] hover:text-white rounded-full shadow transition-colors"
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
          className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-12 h-12 bg-white border-2 border-[#20b2aa] text-[#19786a] hover:bg-[#20b2aa] hover:text-white rounded-full shadow transition-colors"
        >
          <FaChevronRight size={28} />
        </button>
      </div>
      {/* Dots: one per card */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] flex justify-center gap-2 mt-2">
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

// StatBlock component for animated numbers
function StatBlock({ label, value }: { label: string; value: number }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    let started = false;
    function animate() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView && !started) {
        started = true;
        let start = 0;
        const duration = 1200;
        const startTime = performance.now();
        function step(now: number) {
          const progress = Math.min((now - startTime) / duration, 1);
          setCount(Math.floor(progress * value));
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setCount(value);
          }
        }
        requestAnimationFrame(step);
      }
    }
    window.addEventListener('scroll', animate);
    animate();
    return () => window.removeEventListener('scroll', animate);
  }, [value]);
  return (
    <div ref={ref} className="flex flex-col items-center bg-white rounded-xl shadow p-8">
      <span className="text-5xl font-extrabold text-green-800 mb-2">{count}</span>
      <span className="text-lg font-medium text-gray-700 text-center">{label}</span>
    </div>
  );
}

// Improved StatBlock with icon and better style
function StatBlockImproved({ label, value }: { label: string; value: number }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    let started = false;
    function animate() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView && !started) {
        started = true;
        let start = 0;
        const duration = 1200;
        const startTime = performance.now();
        function step(now: number) {
          const progress = Math.min((now - startTime) / duration, 1);
          setCount(Math.floor(progress * value));
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setCount(value);
          }
        }
        requestAnimationFrame(step);
      }
    }
    window.addEventListener('scroll', animate);
    animate();
    return () => window.removeEventListener('scroll', animate);
  }, [value]);
  return (
    <div
      ref={ref}
      className="flex flex-col items-center bg-white rounded-xl shadow p-8 transition-transform hover:-translate-y-1 hover:shadow-lg border border-green-100 min-w-0"
    >
      <span className="text-6xl font-normal text-green-700 mb-2 tracking-tight">
        {count}
      </span>
      <span className="text-base font-medium text-gray-700 text-center mt-2 tracking-wide">
        {label}
      </span>
    </div>
  );
}

// Glassmorphic StatBlock
function StatBlockGlass({ label, value }: { label: string; value: number }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    let started = false;
    function animate() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView && !started) {
        started = true;
        let start = 0;
        const duration = 1200;
        const startTime = performance.now();
        function step(now: number) {
          const progress = Math.min((now - startTime) / duration, 1);
          setCount(Math.floor(progress * value));
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setCount(value);
          }
        }
        requestAnimationFrame(step);
      }
    }
    window.addEventListener('scroll', animate);
    animate();
    return () => window.removeEventListener('scroll', animate);
  }, [value]);
  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center min-w-[180px] min-h-[160px] px-8 py-8 bg-white/60 backdrop-blur-md shadow-md rounded-2xl"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <span className="text-7xl font-thin text-gray-800 mb-2 select-none">
        {count}
      </span>
      <span className="text-xs font-semibold text-gray-500 tracking-widest uppercase text-center mt-4 select-none">
        {label}
      </span>
    </div>
  );
}

// Professional StatBlock with site color palette
function StatBlockPro({ label, value }: { label: string; value: number }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    let started = false;
    function animate() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView && !started) {
        started = true;
        let start = 0;
        const duration = 1200;
        const startTime = performance.now();
        function step(now: number) {
          const progress = Math.min((now - startTime) / duration, 1);
          setCount(Math.floor(progress * value));
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setCount(value);
          }
        }
        requestAnimationFrame(step);
      }
    }
    window.addEventListener('scroll', animate);
    animate();
    return () => window.removeEventListener('scroll', animate);
  }, [value]);
  return (
    <div
      ref={ref}
      className="flex flex-col items-center bg-white rounded-2xl shadow-md p-10 min-w-0"
    >
      <span className="text-6xl font-normal text-green-700 mb-2 tracking-tight select-none">
        {count}
      </span>
      <span className="text-base font-semibold text-gray-700 text-center mt-2 tracking-wide select-none">
        {label}
      </span>
    </div>
  );
}

// VideoCard component
function VideoCard({ src, title, subtitle, poster }: { src: string; title: string; subtitle: string; poster: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4 flex flex-col items-stretch">
      <video
        src={src}
        controls
        className="rounded-xl w-full h-56 object-cover mb-4 bg-gray-100"
        poster={poster}
      />
      <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-2">{subtitle}</p>
    </div>
  );
}

// PhotoGalleryCarousel component
function PhotoGalleryCarousel() {
  const images = [
    "/images/gallery1.jpg",
    "/images/galley2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
  ];
  const [current, setCurrent] = React.useState(0);
  const total = images.length;
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const imagesPerView = isMobile ? 1 : 3;
  const interval = 4000;
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Autoplay like Annonces/Formation
  React.useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % total);
    }, interval);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [current, total]);

  // Touch/swipe support
  const touchStartX = React.useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) setCurrent((c) => (c - 1 + total) % total);
    else if (diff < -50) setCurrent((c) => (c + 1) % total);
    touchStartX.current = null;
  };

  // Calculate visible images
  let visible = [];
  for (let i = 0; i < imagesPerView; i++) {
    visible.push(images[(current + i) % total]);
  }
  return (
    <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
      {/* Images row with arrows just outside, matching Annonces/Formation */}
      <div className="relative w-full flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Arrow */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + total) % total)}
          aria-label="Précédent"
          className="hidden md:flex absolute -left-24 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-12 h-12 bg-white border-2 border-[#20b2aa] text-[#19786a] hover:bg-[#20b2aa] hover:text-white rounded-full shadow transition-colors"
        >
          <FaChevronLeft size={28} />
        </button>
        {/* Images */}
        <div className="flex flex-row gap-8 w-full justify-center">
          {visible.map((img, idx) => (
            <div key={idx} className="w-full max-w-xs aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
              <img
                src={img}
                alt={`Galerie photo ${((current + idx) % total) + 1}`}
                className={`w-full h-full object-cover ${img.includes('gallery4') ? 'object-top' : 'object-center'} transition-all duration-500`}
              />
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          onClick={() => setCurrent((c) => (c + 1) % total)}
          aria-label="Suivant"
          className="hidden md:flex absolute -right-24 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-12 h-12 bg-white border-2 border-[#20b2aa] text-[#19786a] hover:bg-[#20b2aa] hover:text-white rounded-full shadow transition-colors"
        >
          <FaChevronRight size={28} />
        </button>
      </div>
      {/* Dots styled like Annonces */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${current === idx ? "bg-[#4169E1] border-[#4169E1]" : "bg-transparent border-gray-300"}`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Add AnimatedStat component above Home
function AnimatedStat({ label, value }: { label: string; value: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [count, setCount] = React.useState(0);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (inViewport && !inView) setInView(true);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [inView]);
  React.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    function step(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    }
    requestAnimationFrame(step);
  }, [inView, value]);
  return (
    <div ref={ref} className="flex flex-col items-center w-full">
      <span className="text-4xl sm:text-4xl font-bold text-blue-800 mb-1">{count}</span>
      <span className="text-xs sm:text-sm text-gray-500 font-medium text-center">{label}</span>
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
      {/* --- Annonces Section --- */}
      <motion.section initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.7, ease:'easeOut'}} className="max-w-7xl mx-auto px-4 py-32">
        <div className="flex items-center w-full mb-2">
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mx-2 sm:mx-4 text-center break-words">
            Annonces
          </h2>
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
        </div>
        <p className="text-blue-800 font-semibold mb-12 text-center text-sm sm:text-base md:text-lg break-words">
          Retrouvez ici toutes les annonces et actualités importantes de l'INAU
        </p>
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
      <motion.section initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.7, ease:'easeOut'}} className="max-w-7xl mx-auto px-4 py-32">
        <div className="flex items-center w-full mb-2">
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mx-2 sm:mx-4 text-center break-words">
            Qui nous sommes
          </h2>
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
        </div>
        <p className="text-blue-800 font-semibold mb-12 text-center text-sm sm:text-base md:text-lg break-words">
          Restez informé de nos dernières activités et actualités
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center relative">
            {/* Stacked images example, adjust src as needed */}
            <div className="absolute left-0 top-8 z-0 hidden md:block">
              <img src="/images/exams.jpg" alt="INAU" className="w-56 h-72 object-cover rounded-2xl shadow-lg rotate-[-8deg]" />
            </div>
            <div className="relative z-10">
              <img src="/images/graduation.jpg" alt="Directeur" className="w-64 h-80 object-cover rounded-2xl shadow-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-black text-center md:text-left">Unlock Your Potential in Architecture and BIM</h3>
            <p className="text-gray-700 mb-4 text-lg text-center md:text-left">Discover personalized training and tools tailored for your architectural journey.</p>
            <p className="text-gray-700 mb-8 text-lg text-center md:text-left">Discover personalized training and tools tailored for your architectural journey.</p>
            <div className="flex justify-center md:justify-start">
              <a href="#" className="px-8 py-3 rounded-lg font-bold border border-blue-400 text-blue-700 bg-white hover:bg-blue-50 transition text-lg">Learn More</a>
            </div>
          </div>
        </div>
      </motion.section>
      {/* --- Explorer nos formations Section --- */}
      <motion.section initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.7, ease:'easeOut'}} className="max-w-7xl mx-auto px-4 py-32">
        <div className="flex items-center w-full mb-2">
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mx-2 sm:mx-4 text-center break-words">
            Explorer nos formations
          </h2>
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
        </div>
        <p className="text-blue-800 font-semibold mb-12 text-center text-sm sm:text-base md:text-lg break-words">
          Parcourez notre offre de formations en urbanisme, architecture et aménagement du territoire
        </p>
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
      {/* --- Explorer la bibliothèque Section --- */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 py-32 flex flex-col items-center"
      >
        <div className="flex items-center w-full mb-2">
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mx-2 sm:mx-4 text-center break-words">
            Explorer la bibliothèque
          </h2>
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
        </div>
        <p className="text-blue-800 font-semibold mb-12 text-center text-sm sm:text-base md:text-lg break-words">
          Restez informé de nos dernières activités et actualités
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12 w-full">
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-black text-center md:text-left">
              Ressources essentielles en architecture, urbanisme et territoire.
            </h3>
            <p className="text-gray-500 mb-6 text-base md:text-lg text-center md:text-left">
              Discover personalized training and tools tailored for your architectural journey.
            </p>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <a
                href="#"
                className="px-8 py-3 rounded-lg font-bold bg-gradient-to-r from-blue-900 to-blue-400 text-white shadow hover:from-blue-800 hover:to-blue-500 transition text-lg"
              >
                Visit
              </a>
              <a
                href="#"
                className="px-8 py-3 rounded-lg font-bold border border-blue-400 text-blue-700 bg-white hover:bg-blue-50 transition text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/images/presentation.jpg"
              alt="INAU Bibliothèque"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </motion.section>
      {/* --- Moyens humains et matériels Section (Improved) --- */}
      <section className="max-w-7xl mx-auto px-4 py-20 bg-white">
        <div className="flex items-center w-full mb-2">
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mx-2 sm:mx-4 text-center break-words">
            Moyens humains et matériels
          </h2>
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
        </div>
        <p className="text-blue-800 font-semibold mb-12 text-center text-sm sm:text-base md:text-lg break-words">
          notre unité est notre force, notre moteur
        </p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col md:flex-row items-center gap-12 w-full mt-12"
        >
          {/* Left: Real image from /images */}
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <img
              src="/images/graduation.jpg"
              alt="Groupe INAU"
              className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
              style={{ aspectRatio: '16/9' }}
            />
          </div>
          {/* Right: Title, subtitle, stats */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center md:text-left">
              Moyens humains et materiels de l'INAU
            </h3>
            <p className="text-gray-600 mb-8 text-base md:text-lg text-center md:text-left max-w-lg">
              Discover personalized training and tools tailored for your architectural journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 w-full justify-center md:justify-start">
              <AnimatedStat label="Enseignants permanents" value={14} />
              <AnimatedStat label="Cadres administratifs et techniques" value={17} />
              <AnimatedStat label="Personnel d'appui" value={10} />
            </div>
          </div>
        </motion.div>
      </section>
      {/* --- INAU dans la presse Section --- */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex items-center w-full mb-2">
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mx-2 sm:mx-4 text-center break-words">
            INAU dans la presse
          </h2>
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
        </div>
        <p className="text-blue-800 font-semibold mb-12 text-center text-sm sm:text-base md:text-lg break-words">
          Restez informé de nos dernières activités et actualités
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <VideoCard
            src="/videos/introductioninau.mp4"
            poster="/images/imgvideo1.jpg"
            title="Présentation de l'INAU"
            subtitle="Découvrez l'Institut National d'Aménagement et d'Urbanisme, sa mission et ses valeurs."
          />
          <VideoCard
            src="/videos/introductionformation.mp4"
            poster="/images/imgvideo2.jpg"
            title="Présentation des Formations INAU"
            subtitle="Aperçu des formations proposées par l'INAU pour les étudiants et professionnels."
          />
          <VideoCard
            src="/videos/introductionformation2.mp4"
            poster="/images/imgvideo3.jpg"
            title="Témoignages et Parcours à l'INAU"
            subtitle="Retours d'expérience et parcours d'apprenants à l'INAU."
          />
        </div>
      </section>
      {/* --- Galerie de photos Section --- */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex items-center w-full mb-2">
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mx-2 sm:mx-4 text-center break-words">
            Galerie de photos
          </h2>
          <div className="flex-1 h-0.5 bg-green-800 relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-800"></span>
          </div>
        </div>
        <p className="text-blue-800 font-semibold mb-12 text-center text-sm sm:text-base md:text-lg break-words">
          Découvrez les moments forts de l'INAU à travers notre galerie photo
        </p>
        <PhotoGalleryCarousel />
      </section>
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
