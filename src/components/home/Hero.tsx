import React from 'react';
import Image from "next/image";
import heroBg from "../../../public/hero-bg.png";
import { heroData } from "@/data/siteData";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden">
            {/* Background Image - Lighter, Brighter Overlay */}
            <div className="absolute inset-0 z-[0] transform animate-kenburns scale-105">
                <Image
                    src={heroBg}
                    alt="Luxury Real Estate Property"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                    quality={100}
                />
            </div>

            {/* Darker Overlay to ensure text is properly visible */}
            <div className="absolute inset-0 bg-black/40 sm:bg-gradient-to-b sm:from-black/50 sm:via-black/30 sm:to-black/70 z-[1] pointer-events-none"></div>

            {/* Hero Content - Centered, Breathtaking Typography */}
            <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 md:px-8 mt-12 md:mt-16">
                {/* Subtle Pre-Heading */}
                <span className="text-fg font-montserrat text-[10px] md:text-xs tracking-[0.5em] uppercase mb-6 md:mb-8 font-semibold drop-shadow-lg opacity-90 animate-fadeUp">
                    {heroData.preHeading}
                </span>

                {/* Stunning Main Title - Using Playfair Display for Elegance */}
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] leading-[1.1] font-heading font-semibold text-fg tracking-wide mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] uppercase">
                    {heroData.title.plain} <span className="font-normal italic text-primary">{heroData.title.italic}</span>
                </h1>

                {/* Very Clean, Modern Description */}
                <p className="text-base md:text-lg font-montserrat text-fg max-w-2xl font-medium tracking-wide leading-relaxed drop-shadow-xl mb-12 opacity-80">
                    {heroData.description}
                </p>

                {/* Elegant Action Button */}
                <button className="group relative overflow-hidden rounded-full backdrop-blur-md bg-surface/40 border border-primary text-fg px-10 py-5 text-xs font-montserrat tracking-[0.3em] uppercase transition-all duration-500 hover:bg-primary hover:text-bg shadow-glow">
                    <span className="relative z-10 flex items-center gap-3 font-semibold">
                        {heroData.ctaText}
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </button>
            </div>

            {/* Bottom Information Bar - Glassmorphism */}
            <div className="relative z-20 w-full mt-auto mb-8 md:mb-12 px-4 md:px-12 xl:px-24 flex justify-center">
                <div className="w-full max-w-6xl backdrop-blur-xl bg-surface/60 border border-border rounded-2xl md:rounded-full p-6 md:py-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 text-fg font-montserrat shadow-soft">
                    {heroData.stats.map((stat, idx) => (
                        <React.Fragment key={idx}>
                            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
                                <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-semibold text-muted drop-shadow-md">{stat.label}</span>
                                <span className={`text-sm md:text-base tracking-widest font-medium drop-shadow-md ${stat.highlight ? 'font-bold text-primary' : ''}`}>{stat.value}</span>
                            </div>
                            {idx < heroData.stats.length - 1 && <div className="hidden md:block w-[1px] h-8 bg-border"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
