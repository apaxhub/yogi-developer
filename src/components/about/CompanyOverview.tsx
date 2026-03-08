"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { companyOverviewData } from '@/data/siteData';

export default function CompanyOverview() {
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: custom * 0.15
            }
        })
    };

    return (
        <section className="relative w-full bg-surface py-24 md:py-32 xl:py-40 px-6 md:px-12 xl:px-24 overflow-hidden">
            {/* Background Texture/Ambience */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, #D4AF37 0%, transparent 40%)' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

                {/* Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: -50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-7/12 h-[500px] md:h-[650px] lg:h-[800px] relative rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl"
                >
                    <Image
                        src={companyOverviewData.image}
                        alt="Yogi Developers Corporate Office"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-transparent z-10"></div>
                </motion.div>

                {/* Floating Text / Glassmorphic Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="w-full lg:w-6/12 bg-bg/90 lg:bg-[#111111]/95 backdrop-blur-xl border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-b-3xl md:rounded-3xl p-8 md:p-12 lg:p-16 lg:-ml-16 z-20 flex flex-col justify-center"
                >
                    <motion.div
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="flex items-center gap-3 mb-8"
                    >
                        <span className="w-8 h-[1px] bg-primary"></span>
                        <span className="font-montserrat text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary font-semibold">
                            {companyOverviewData.badge}
                        </span>
                    </motion.div>

                    <motion.h2
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-fg tracking-wide leading-tight mb-8"
                    >
                        {companyOverviewData.heading}
                    </motion.h2>

                    <div className="space-y-6 lg:space-y-8 font-montserrat text-sm md:text-base text-muted/80 leading-relaxed font-medium">
                        <motion.p
                            custom={3}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            {companyOverviewData.description1}
                        </motion.p>
                        <motion.p
                            custom={4}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            {companyOverviewData.description2}
                        </motion.p>
                    </div>

                    {/* Highlights / Stats */}
                    <motion.div
                        custom={7}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="mt-12 bg-primary/5 border-l-2 border-primary p-6 rounded-r-lg"
                    >
                        <p className="font-montserrat text-xs md:text-sm text-white/90 italic leading-relaxed">
                            "{companyOverviewData.callout}"
                        </p>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}
