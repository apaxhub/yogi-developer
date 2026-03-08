"use client";

import React from 'react';
import { Phone } from 'lucide-react';

export default function FloatingActions() {
    return (
        <>
            {/* Desktop & Mobile Floating WhatsApp Button */}
            {/* Positioned higher on mobile (bottom-32) to sit above the sticky call bar */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-32 right-6 md:bottom-10 md:right-10 z-[45] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all duration-500 group focus:outline-none"
                aria-label="Chat on WhatsApp"
            >
                <svg
                    className="w-8 h-8 md:w-9 md:h-9"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12.031 0C5.385 0 0 5.386 0 12.031c0 2.128.552 4.164 1.602 5.968l-1.63 5.947 6.088-1.597a12.015 12.015 0 005.971 1.587h.005c6.645 0 12.031-5.386 12.031-12.031S18.677 0 12.031 0zm0 21.968h-.005a9.982 9.982 0 01-5.083-1.385l-.364-.216-3.778.991 1.01-3.682-.236-.376A9.975 9.975 0 012.067 12.03c0-5.506 4.482-9.986 9.967-9.986 2.668 0 5.176 1.04 7.062 2.927a9.964 9.964 0 012.921 7.062c-.001 5.485-4.483 9.935-9.986 9.935zm5.48-7.487c-.3-.15-1.782-.879-2.059-.979-.276-.101-.478-.15-.678.15-.2.3-.777.979-.953 1.18-.175.2-.351.225-.651.075-.3-.15-1.272-.469-2.423-1.496-.895-.8-1.5-1.788-1.676-2.088-.176-.3-.019-.463.131-.613.135-.135.3-.3.45-.45.15-.15.2-.25.3-.413.1-.163.05-.313-.025-.463-.075-.15-.678-1.638-.928-2.245-.243-.588-.49-.508-.678-.518-.175-.01-.376-.01-.576-.01-.2 0-.527.075-.802.375s-1.053 1.026-1.053 2.502c0 1.476 1.078 2.903 1.228 3.103.15.2 2.115 3.226 5.123 4.526 2.052.884 2.89.754 3.96.634s1.782-.726 2.033-1.427c.25-.701.25-1.302.175-1.427-.075-.125-.276-.2-.576-.35z" />
                </svg>
                {/* Tooltip (Desktop only) */}
                <span className="absolute right-full mr-4 bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 text-fg font-montserrat text-[10px] tracking-widest uppercase px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:block">
                    Concierge Access
                </span>
            </a>

            {/* Mobile Sticky Bottom Call Bar (Hidden on Desktop) */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-50 bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <div className="flex flex-col">
                    <span className="font-montserrat text-[8px] text-primary tracking-[0.4em] uppercase font-bold">Secure a Visit</span>
                    <span className="font-heading text-lg text-fg tracking-tight">+91 98765 43210</span>
                </div>
                <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-3 bg-primary text-bg px-6 py-3 rounded-xl font-montserrat text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.3)] active:scale-95 transition-all"
                >
                    <Phone size={14} className="fill-bg" />
                    Call
                </a>
            </div>
        </>
    );
}
