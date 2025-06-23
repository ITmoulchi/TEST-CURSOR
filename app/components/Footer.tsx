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
        <footer className="bg-[#1a5a51] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-[#1f3a93] rounded-2xl p-8 mb-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold">Institut National d'Aménagement</h2>
                            <p className="mt-2 text-gray-200">
                                INAU est un établissement public d'enseignement supérieur et de recherche, dédié à la formation, à la recherche scientifique, et à l'expertise dans les domaines de l'aménagement du territoire et du développement durable.
                            </p>
                        </div>
                        <div className="w-full md:w-auto">
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Search for what you want...."
                                    className="rounded-l-full py-3 px-5 w-full md:w-80 text-gray-900 focus:outline-none"
                                />
                                <button className="bg-[#1a5a51] hover:bg-[#154b44] text-white font-semibold py-3 px-6 rounded-r-full">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                            {section.isSocial ? (
                                <div className="flex space-x-4">
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
                                    {section.title === 'Contact' && (
                                       <li className="mt-4">
                                            <button className="bg-[#1f3a93] hover:bg-[#1a3282] text-white font-semibold py-2 px-6 rounded-full">
                                                Search
                                            </button>
                                       </li>
                                    )}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>Copyright © 2023 Educationsector. All rights reserved</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">PRIVACY POLICY</a>
                        <a href="#" className="hover:text-white">SUPPORT</a>
                        <a href="#" className="hover:text-white">TERMS & CONDITIONS</a>
                    </div>
                </div>
            </div>
        </footer>
    );
} 