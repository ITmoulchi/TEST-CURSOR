"use client";
import Image from 'next/image';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import dynamic from 'next/dynamic';
const ClientMap = dynamic(() => import('../components/ClientMap'), { ssr: false });

export default function ClientContactPage() {
  return (
    <div className="pb-16">
      {/* Header with background image and title */}
      <div className="relative w-full h-48 md:h-56 flex items-center justify-center">
        <Image
          src="/images/graduation.jpg"
          alt="Contact Header"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-white drop-shadow-lg">Contact</h1>
        <div className="absolute inset-0 bg-gradient-to-b from-[#20b2aa]/80 to-[#19786a]/80" />
      </div>

      {/* Map section */}
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <ClientMap />
        </div>
      </div>

      {/* Main content: info + form */}
      <div className="max-w-6xl mx-auto mt-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-gray-900">Feel Free To Contact<br />And Reach Us !</h2>
          <p className="text-gray-500 mb-6 max-w-md">Duis ac Blu Mosttur Commodo Copiosae, Quorum Translatorem Et Aquatam Ut Supra Institutus Veni Vento Solito Cotidie Probabatur.</p>
          <div className="space-y-5">
            {/* Phone */}
            <div className="flex items-start gap-4 bg-gray-100 rounded-xl p-4 shadow-sm">
              <span className="flex-shrink-0 bg-[#20b2aa] text-white rounded-full p-3 text-xl"><FaPhoneAlt /></span>
              <div>
                <div className="font-semibold text-gray-800">Phone Number :</div>
                <div className="text-gray-700 text-sm">Head Office: (+212) 537 77 77 46<br />Branch-Office: (+212) 537 77 57 50</div>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-start gap-4 bg-gray-100 rounded-xl p-4 shadow-sm">
              <span className="flex-shrink-0 bg-[#20b2aa] text-white rounded-full p-3 text-xl"><FaMapMarkerAlt /></span>
              <div>
                <div className="font-semibold text-gray-800">Location Address :</div>
                <div className="text-gray-700 text-sm">Avenue Allal El Fassi, Madinat Al Irfane, Rabat – Maroc</div>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start gap-4 bg-gray-100 rounded-xl p-4 shadow-sm">
              <span className="flex-shrink-0 bg-[#20b2aa] text-white rounded-full p-3 text-xl"><FaEnvelope /></span>
              <div>
                <div className="font-semibold text-gray-800">Email Address :</div>
                <div className="text-gray-700 text-sm">inau@inau.ac.ma<br />Contact@inau.ac.ma</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div>
          <form className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="Your Name.." className="flex-1 rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-[#20b2aa] outline-none bg-gray-50" required />
              <input type="email" placeholder="Your Email.." className="flex-1 rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-[#20b2aa] outline-none bg-gray-50" required />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="Phone Number.." className="flex-1 rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-[#20b2aa] outline-none bg-gray-50" required />
              <input type="text" placeholder="Your Subject.." className="flex-1 rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-[#20b2aa] outline-none bg-gray-50" required />
            </div>
            <textarea placeholder="Enter Your Message.." rows={5} className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-[#20b2aa] outline-none bg-gray-50 resize-none" required />
            <button type="submit" className="w-full bg-[#4169e1] hover:bg-[#1976d2] text-white font-bold py-3 rounded-lg transition-colors text-lg shadow">SUBMIT MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
} 