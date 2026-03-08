"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Anchor, Sparkles, Plane, Film, Wine } from 'lucide-react';
import { amenities as amenitiesData } from '@/data/siteData';

const iconMap: Record<string, any> = {
    Waves,
    Anchor,
    Sparkles,
    Plane,
    Film,
    Wine
};

const amenities = amenitiesData.map(item => ({
    ...item,
    icon: iconMap[item.icon] ? React.createElement(iconMap[item.icon], { size: 48, strokeWidth: 1, className: "w-10 h-10 md:w-12 md:h-12" }) : null
}));

export default function Amenities() {
    return (
        <section className="relative w-full bg-bg py-20 md:py-32 overflow-hidden border-t border-border">
            {/* Scoped CSS for Marquee Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 35s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee 40s linear infinite reverse;
                }
                /* Pause on hover for better user experience */
                .marquee-container:hover .animate-marquee,
                .marquee-container:hover .animate-marquee-reverse {
                    animation-play-state: paused;
                }
            `}} />

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-[100%] pointer-events-none"></div>

            {/* Header Content */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-24 mb-14 md:mb-20 flex flex-col items-center text-center gap-6 relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex items-center gap-3 text-primary font-montserrat text-xs tracking-[0.3em] uppercase font-semibold"
                >
                    <span className="w-8 h-[1px] bg-primary"></span>
                    Elevated Living
                    <span className="w-8 h-[1px] bg-primary"></span>
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-heading font-light text-fg tracking-wide leading-tight max-w-3xl"
                >
                    Beyond <span className="italic text-primary_soft pr-2">Expectation</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="text-muted font-montserrat text-sm md:text-base font-medium leading-relaxed max-w-xl"
                >
                    More than amenities. A sanctuary designed exclusively for your lifestyle, where every moment is curated seamlessly around you.
                </motion.p>
            </div>

            {/* Interactive Seamless Marquee Container */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="marquee-container relative w-full flex flex-col gap-8 md:gap-12 py-10 md:py-16 border-y border-white/5 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
            >

                {/* Fade Overlays masking the edges for ultra-premium look */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-bg/50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-bg/50 to-transparent z-10 pointer-events-none"></div>

                {/* Marquee Row 1 */}
                <div className="flex w-max animate-marquee">
                    {[...amenities, ...amenities].map((item, index) => (
                        <div key={`row1-${index}`} className="flex items-center gap-6 md:gap-10 px-6 md:px-10 group cursor-pointer transition-transform duration-700 hover:scale-105">
                            <div className="text-primary/30 group-hover:text-primary drop-shadow-[0_0_15px_rgba(198,167,94,0)] group-hover:drop-shadow-[0_0_15px_rgba(198,167,94,0.5)] transition-all duration-500">
                                {item.icon}
                            </div>
                            <span className="font-heading text-4xl md:text-6xl lg:text-7xl text-fg/40 group-hover:text-fg transition-all duration-500 whitespace-nowrap tracking-wide">
                                {item.name}
                            </span>
                            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-primary/20 group-hover:bg-primary ml-6 md:ml-10 transition-colors duration-500 relative">
                                <div className="absolute inset-0 bg-primary/50 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Marquee Row 2 (Reversed & Slightly larger dot spacer) */}
                <div className="flex w-max animate-marquee-reverse">
                    {[...amenities].reverse().concat([...amenities].reverse()).map((item, index) => (
                        <div key={`row2-${index}`} className="flex items-center gap-6 md:gap-10 px-6 md:px-10 group cursor-pointer transition-transform duration-700 hover:scale-105">
                            <span className="font-heading text-4xl md:text-6xl lg:text-7xl text-fg/30 group-hover:text-fg/90 transition-all duration-500 whitespace-nowrap tracking-wide">
                                {item.name}
                            </span>
                            <div className="text-primary/20 group-hover:text-primary_soft drop-shadow-[0_0_15px_rgba(232,215,165,0)] group-hover:drop-shadow-[0_0_15px_rgba(232,215,165,0.4)] transition-all duration-500">
                                {item.icon}
                            </div>
                            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-primary/10 group-hover:bg-primary_soft ml-6 md:ml-10 transition-colors duration-500 relative">
                                <div className="absolute inset-0 bg-primary_soft/40 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>

            </motion.div>
        </section>
    );
}
