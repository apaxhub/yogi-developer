"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import { projectHighlights, siteConfig } from '@/data/siteData';

const highlights = projectHighlights;

export default function ProjectHighlights() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative w-full bg-bg py-20 md:py-32 px-4 md:px-8 xl:px-16 border-t border-border overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto relative z-10 w-full flex flex-col gap-10 md:gap-14">

                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2">
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <span className="flex items-center gap-3 text-primary font-montserrat text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            The Legacy
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-heading font-light text-fg tracking-wide leading-tight">
                            A Track Record of <br />
                            <span className="italic text-primary_soft pr-2">Excellence</span>
                        </h2>
                    </div>
                    <p className="font-montserrat text-sm md:text-base text-muted md:max-w-xs lg:max-w-sm md:text-right">
                        Reflecting our commitment to redefining luxury living on a global scale.
                    </p>
                </div>

                {/* Expanding Cards Section (Bento/Accordion Hybrid) */}
                <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[500px] lg:h-[600px] gap-3 md:gap-4 mt-4">
                    {highlights.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => setActiveIndex(index)}
                                className={`relative rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group
                                    ${isActive ? 'flex-[2.5] md:flex-[3.5] lg:flex-[4] border border-primary/30 shadow-[0_0_40px_rgba(212,175,55,0.08)]' : 'flex-1 border border-white/5 hover:border-white/20'}
                                `}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full bg-surface">
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.title}
                                        fill
                                        className={`object-cover transition-all duration-1000 ${isActive ? 'scale-100 opacity-90' : 'scale-110 opacity-30 grayscale'}`}
                                    />
                                </div>

                                {/* Gradient Overlays */}
                                <div className={`absolute inset-0 transition-all duration-700 ${isActive ? 'bg-gradient-to-t from-bg via-bg/40 to-transparent' : 'bg-bg/60 group-hover:bg-bg/40'}`}></div>

                                {/* Content Container */}
                                <div className="absolute inset-0 p-5 md:p-6 lg:p-10 pointer-events-none">
                                    <div className="relative w-full h-full flex flex-col justify-end">

                                        <div className="absolute bottom-0 w-full flex flex-col justify-end">

                                            {/* Number */}
                                            <span className={`font-heading font-light text-primary transition-all duration-700 block
                                                ${isActive ? 'text-4xl md:text-5xl lg:text-7xl mb-2 md:mb-4 drop-shadow-lg' : 'text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-0'}
                                            `}>
                                                {item.number}
                                            </span>

                                            {/* Title */}
                                            <h3 className={`font-heading text-fg transition-all duration-700 whitespace-nowrap
                                                ${isActive
                                                    ? 'relative text-xl md:text-2xl lg:text-3xl opacity-100 transform-none delay-100'
                                                    : 'relative text-sm md:text-base opacity-70 md:absolute md:bottom-20 lg:bottom-28 md:left-2 lg:left-3 md:-rotate-90 md:origin-bottom-left md:tracking-widest'}
                                            `}>
                                                {item.title}
                                            </h3>

                                            {/* Description */}
                                            <div className={`grid transition-all duration-700 ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                                <div className="overflow-hidden">
                                                    <p className="font-montserrat text-sm lg:text-base text-white/80 mt-2 md:mt-4 leading-relaxed max-w-[95%] md:max-w-xl pb-1 border-t border-white/10 pt-4 md:pt-6">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                {/* Active subtle border glow at bottom */}
                                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
