"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { completedProjectsData } from '@/data/siteData';

export default function CompletedProjects() {
    // We default to the first project being expanded on desktop
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const projects = completedProjectsData;

    return (
        <section className="relative w-full bg-[#050505] py-24 md:py-32 xl:py-40 px-4 md:px-8 xl:px-12 border-t border-white/5 overflow-hidden">

            <div className="max-w-[1800px] mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <span className="w-12 h-[1px] bg-primary"></span>
                            <span className="font-montserrat text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary font-semibold">
                                Portfolio Showcase
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-5xl lg:text-7xl font-heading font-light text-white tracking-wide"
                        >
                            Architectural <span className="italic text-primary/80 pr-2">Masterpieces</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="font-montserrat text-sm md:text-base text-white/50 max-w-sm text-left md:text-right">
                            Move your cursor to explore our legacy of iconic, category-defining developments across the globe.
                        </p>
                    </motion.div>
                </div>

                {/* Interactive Expanding Accordion Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col lg:flex-row w-full h-[600px] lg:h-[700px] gap-2 lg:gap-4"
                >
                    {projects.map((project, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => setActiveIndex(index)}
                                className={`group relative h-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer rounded-sm lg:rounded-none
                                    ${isActive ? 'flex-[1_1_100%] lg:flex-[3]' : 'flex-[1_1_25%] lg:flex-1'}
                                `}
                            >
                                {/* Image with subtle parallax mapping on expansion */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className={`object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                                            ${isActive ? 'scale-100' : 'scale-110 grayscale-[50%] opacity-60'}
                                        `}
                                        sizes={isActive ? "100vw" : "30vw"}
                                        priority={index === 0}
                                    />
                                </div>

                                {/* Overlays */}
                                <div className={`absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                                    ${isActive ? 'bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100' : 'bg-black/60'}
                                `}></div>

                                {/* Active State Border highlighting */}
                                <div className={`absolute inset-0 border border-primary/0 transition-colors duration-1000
                                     ${isActive ? 'lg:border-primary/20' : ''}
                                `}></div>

                                {/* Content Container */}
                                <div className="absolute inset-0 p-6 md:p-8 xl:p-12 flex flex-col justify-end">

                                    {/* Vertical/Collapsed Typography (Only visible when not active) */}
                                    <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 min-w-max transition-all duration-700 origin-bottom-left -rotate-90 lg:block hidden
                                        ${isActive ? 'opacity-0 invisible' : 'opacity-100 visible text-white/50 tracking-[0.3em] font-montserrat uppercase text-xs font-semibold'}
                                    `}>
                                        {project.name}
                                    </div>

                                    {/* Expanded Details (Only fully visible when active) */}
                                    <div className={`flex flex-col justify-end w-full h-full transition-all duration-1000 mix-blend-lighten
                                        ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 lg:translate-y-20'}
                                    `}>

                                        <div className="overflow-hidden mb-4">
                                            <div className="flex items-center gap-4">
                                                <span className="w-8 h-[1px] bg-primary"></span>
                                                <span className="font-montserrat text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-primary font-semibold">
                                                    {project.location} • {project.year}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="font-heading text-3xl md:text-5xl xl:text-7xl font-light text-white mb-6 whitespace-normal md:whitespace-nowrap leading-tight">
                                            {project.name}
                                        </h3>

                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/20 pt-6 mt-auto max-w-full">
                                            <span className="font-montserrat text-[10px] md:text-xs text-white/70 tracking-[0.2em] font-medium uppercase">
                                                {project.specs}
                                            </span>

                                            <div className="flex items-center gap-2 group/btn cursor-pointer">
                                                <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-white group-hover/btn:text-primary transition-colors">
                                                    Discover
                                                </span>
                                                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-primary group-hover/btn:bg-primary/10 transition-all">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover/btn:text-primary group-hover/btn:translate-x-0.5 transition-all">
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                        <polyline points="12 5 19 12 12 19"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Mobile View All Button (Also desktop as a global CTA) */}
                <div className="mt-16 flex justify-center">
                    <button className="group relative px-8 py-4 bg-transparent border border-white/20 text-white font-montserrat text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium overflow-hidden transition-colors duration-500 hover:border-primary">
                        <span className="relative z-10 transition-colors duration-500 group-hover:text-black">View Complete Portfolio</span>
                        <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
                    </button>
                </div>

            </div>
        </section>
    );
}
