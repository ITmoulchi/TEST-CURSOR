"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

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

export default function TopNavbar() {
  return (
    <div className="w-full bg-black text-white text-xs fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4 py-1">
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
  );
} 