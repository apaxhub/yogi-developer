"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { contactHeroData } from '@/data/siteData';

export default function ContactHero() {
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: custom * 0.1,
            },
        }),
    };

    return (
        <section className="relative pt-32 pb-24 bg-bg overflow-hidden border-b border-white/5">
            {/* Architectural Grid / Lines */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:mr-24 mr-6"></div>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent lg:mt-40 mt-32"></div>

                {/* Asymmetrical Glows */}
                <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">

                    {/* Editorial Badge */}
                    <motion.div
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mb-10 relative"
                    >
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-primary/40"></span>
                            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase font-montserrat">
                                {contactHeroData.badge}
                            </span>
                            <span className="w-12 h-[1px] bg-primary/40"></span>
                        </div>
                    </motion.div>

                    {/* High-Contrast Typography */}
                    <div className="max-w-4xl relative">
                        {/* Decorative background letter */}
                        <span className="absolute -top-12 -left-8 text-[12rem] font-heading font-black text-white/[0.03] select-none pointer-events-none">C</span>

                        <motion.h1
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="text-5xl md:text-7xl lg:text-8xl font-heading text-fg leading-[1.1] tracking-tight mb-8"
                        >
                            {contactHeroData.heading.plain1} <br />
                            <span className="italic font-normal text-primary ml-4 relative">
                                {contactHeroData.heading.italic}
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1.2, delay: 0.5, ease: "circOut" }}
                                    className="absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            custom={3}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="text-muted/70 text-base md:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed font-sans font-light tracking-wide italic"
                        >
                            {contactHeroData.description}
                        </motion.p>
                    </div>

                    {/* Refined Detail */}
                    <motion.div
                        custom={4}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mt-16 w-full max-w-md pt-8 border-t border-white/5"
                    >
                        <div className="grid grid-cols-2 gap-8 text-[10px] tracking-[.3em] uppercase text-muted font-bold">
                            {contactHeroData.details.map((detail, idx) => (
                                <div key={idx} className="flex flex-col gap-1">
                                    <span className="text-primary italic">{detail.label}</span>
                                    <span>{detail.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
