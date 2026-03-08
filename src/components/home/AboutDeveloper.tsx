"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function AboutDeveloper() {
    const stats = [
        { value: "25+", label: "Years of Excellence" },
        { value: "40+", label: "Completed Projects" },
        { value: "12", label: "Ongoing Developments" },
        { value: "10k+", label: "Happy Families" }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="relative w-full bg-bg py-24 md:py-32 px-6 md:px-12 xl:px-24 border-t border-border overflow-hidden">

            {/* Subtle Background Pattern / Glow */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-150 pointer-events-none opacity-50 translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                {/* Left Column - Typography & Description */}
                <div className="w-full lg:w-1/2 flex flex-col">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 text-primary font-montserrat text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6 font-semibold"
                    >
                        <span className="w-8 h-[1px] bg-primary"></span>
                        About The Developer
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-fg tracking-wide leading-tight mb-8"
                    >
                        Building Legacies, <br />
                        <span className="font-normal italic text-primary">Not Just Homes.</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6 text-muted font-montserrat text-sm md:text-base leading-relaxed border-l-2 border-primary/40 pl-6 md:pl-8"
                    >
                        <p>
                            For over two decades, we have been at the forefront of redefining luxury real estate. Our philosophy is rooted in the belief that a home is more than a physical space—it is a canvas for life's most precious moments, meticulously crafted to reflect the aspirations of those who reside within.
                        </p>
                        <p>
                            With an unwavering commitment to architectural brilliance, sustainable development, and uncompromising quality, every project we undertake is designed to stand the test of time, creating enduring value for generations to come.
                        </p>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="group mt-10 self-start relative overflow-hidden bg-transparent border border-primary text-fg px-8 py-4 text-xs font-montserrat tracking-[0.2em] uppercase transition-all duration-500 hover:text-bg shadow-glow focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                        <span className="relative z-10 font-semibold transition-colors duration-500">Discover Our Heritage</span>
                        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
                    </motion.button>
                </div>

                {/* Right Column - Stats Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2"
                >
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="bg-surface p-6 sm:p-8 md:p-10 rounded-2xl shadow-soft border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-500 flex flex-col items-center justify-center text-center group translate-y-0 hover:-translate-y-2 relative overflow-hidden cursor-default"
                            >
                                {/* Subtle inner glow on hover */}
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-500"></div>

                                <h3 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-fg mb-2 group-hover:text-primary_soft transition-colors duration-500">
                                    {stat.value}
                                </h3>
                                <p className="relative z-10 font-montserrat text-[10px] sm:text-xs md:text-sm font-medium text-muted tracking-wide sm:tracking-wider uppercase">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
