import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import Image from "next/image";

const socialLinks = [
    { name: 'Facebook', icon: FaFacebookF, href: '#' },
    { name: 'Instagram', icon: FaInstagram, href: '#' },
    { name: 'Twitter', icon: FaTwitter, href: '#' },
    { name: 'TikTok', icon: FaTiktok, href: '#' },
];

const footerSections = [
    {
        title: 'Liens utiles',
        links: [
            { text: 'À propos de l\'INAU', href: '#' },
            { text: 'Nos formations', href: '#' },
            { text: 'Recherche & publications', href: '#' },
        ],
    },
    {
        title: 'Horaires',
        links: [
            { text: 'À propos de l\'INAU', href: '#' },
            { text: 'Recherche & publications', href: '#' },
            { text: 'Appels à candidatures', href: '#' },
        ],
    },
    {
        title: 'Resaux sociaux',
        isSocial: true,
    },
    {
        title: 'Contact',
        links: [
            { text: 'Appels à candidatures', href: '#' },
            { text: 'Recherche & publications', href: '#' },
            { text: 'Actualités', href: '#' },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#006A4E] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="bg-[#1f3a93] rounded-2xl p-6 sm:p-10 lg:p-12 mb-12 flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8">
                    <div className="flex-1 flex flex-col justify-center w-full lg:w-auto text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Institut National d'Aménagement</h2>
                        <p className="text-white text-sm sm:text-base">
                            INAU est un établissement public d'enseignement supérieur et de recherche, dédié à la formation, à la recherche scientifique, et à l'expertise dans les domaines de l'aménagement du territoire et du développement durable.
                        </p>
                    </div>
                    <form className="flex flex-col sm:flex-row items-center w-full max-w-xl lg:justify-end mt-6 lg:mt-0 gap-4">
                        <input
                            type="text"
                            placeholder="Recherchez ce que vous voulez..."
                            className="rounded-full py-3 px-6 w-full sm:w-80 text-gray-700 bg-white placeholder-gray-400 focus:outline-none shadow"
                        />
                        <button type="submit" className="bg-[#006A4E] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#00543b] transition-all w-full sm:w-auto">
                            Rechercher
                        </button>
                    </form>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {footerSections.map((section) => (
                        <div key={section.title} className="text-center md:text-left">
                            <h3 className="font-bold text-base sm:text-lg mb-4">{section.title}</h3>
                            {section.isSocial ? (
                                <div className="flex justify-center md:justify-start space-x-4">
                                    {socialLinks.map((social) => (
                                        <a key={social.name} href={social.href} className="text-white hover:text-gray-300 bg-white/10 p-2 rounded-full">
                                            <social.icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <ul className="space-y-2">
                                    {section.links?.map((link) => (
                                        <li key={link.text}>
                                            <a href={link.href} className="hover:text-gray-300 text-gray-200">
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/30 pt-8 sm:pt-12 mt-8 sm:mt-12 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-white gap-4">
                    <p className="text-center md:text-left">Copyright © 2025 INAU. Tous droits réservés</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 items-center">
                        <a href="/privacy-policy" className="hover:underline">POLITIQUE DE CONFIDENTIALITÉ</a>
                        <span className="mx-2">|</span>
                        <a href="/support" className="hover:underline">SUPPORT</a>
                        <span className="mx-2">|</span>
                        <a href="/terms" className="hover:underline">CONDITIONS GÉNÉRALES</a>
                    </div>
                </div>
            </div>
        </footer>
    );
} 