"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Quote } from 'lucide-react';
import { founderData } from '@/data/siteData';

export function FounderSection() {
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: custom * 0.1
            }
        })
    };

    return (
        <section className="py-24 bg-surface border-y border-border relative overflow-hidden">
            {/* Ambient Background Element */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Image / Portrait */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={1}
                        className="relative max-w-md mx-auto lg:mx-0 w-full"
                    >
                        {/* Decorative background framing */}
                        <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 rounded-2xl" />

                        {/* Image Wrapper */}
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface border border-border">
                            <img
                                src={founderData.image}
                                alt={`${founderData.name} - ${founderData.role}`}
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            />

                            {/* Overlay gradient for aesthetics */}
                            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent pointer-events-none" />

                            {/* Name overlay at the bottom of the image for mobile */}
                            <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                                <h3 className="text-2xl font-heading text-fg mb-1">{founderData.name}</h3>
                                <p className="text-primary tracking-widest text-sm font-semibold uppercase">{founderData.role}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content & Quote */}
                    <div className="flex flex-col">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={2}
                            className="flex items-center gap-3 mb-8"
                        >
                            <span className="h-[1px] w-12 bg-primary"></span>
                            <span className="text-primary uppercase text-sm font-semibold font-montserrat tracking-[0.2em]">
                                Visionary Leadership
                            </span>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={3}
                            className="relative mb-8"
                        >
                            <Quote className="absolute -top-4 -left-6 w-16 h-16 text-primary/10 -rotate-6" />
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-fg leading-tight relative z-10 italic">
                                {founderData.quote}
                            </h2>
                        </motion.div>

                        <div className="mb-10 text-muted space-y-5 leading-relaxed font-sans text-lg">
                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={4}
                            >
                                {founderData.bio1}
                            </motion.p>
                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={5}
                            >
                                {founderData.bio2}
                            </motion.p>
                        </div>

                        {/* Traditional Signature placeholder & Name for larger screens */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={6}
                            className="hidden lg:block pt-8 border-t border-border/50"
                        >
                            <h3 className="text-2xl font-heading text-fg mb-1">{founderData.name}</h3>
                            <p className="text-primary tracking-widest text-sm font-semibold uppercase font-montserrat tracking-[0.2em]">{founderData.role}</p>

                            <p className="mt-4 font-heading text-4xl text-fg/20 rotate-[-3deg] transform origin-left selection:bg-transparent">
                                {founderData.signature}
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
