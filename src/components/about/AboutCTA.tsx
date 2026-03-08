"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AboutCTA() {
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
        <section className="py-24 bg-bg relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={1}
                        className="flex justify-center mb-8"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                            Begin Your Journey
                        </span>
                    </motion.div>

                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={2}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading text-fg mb-8 leading-tight"
                    >
                        Explore Our <span className="text-primary italic">Latest Projects</span>
                    </motion.h2>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={3}
                        className="text-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        From breathtaking penthouses to exclusive gated communities, discover the next landmark that will define your legacy.
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={4}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <button className="px-10 py-5 bg-primary hover:bg-primary_hover text-bg font-bold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-3 group shadow-glow">
                            View All Projects
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                        <button className="px-10 py-5 bg-transparent border border-primary/30 hover:border-primary text-fg font-bold rounded-full transition-all duration-300 hover:bg-primary/5">
                            Schedule Site Visit
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
