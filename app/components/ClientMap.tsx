"use client";
export default function ClientMap() {
  return (
    <iframe
      title="INAU Location"
      src="https://www.openstreetmap.org/export/embed.html?bbox=-6.8639539%2C33.9862879%2C-6.8579539%2C33.9892879&layer=mapnik&marker=33.9877879%2C-6.8609539"
      className="w-full h-56 md:h-64"
      loading="lazy"
      style={{ border: 0 }}
      allowFullScreen
    />
  );
} 