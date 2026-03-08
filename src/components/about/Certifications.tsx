"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Award, ShieldCheck, FileBadge2, Building, PackageCheck, Users } from 'lucide-react';
import { certificationsData } from '@/data/siteData';

const iconMap: Record<string, any> = {
    FileBadge2,
    Award,
    ShieldCheck,
    Building,
    PackageCheck,
    Users
};

const certifications = certificationsData.map((item, idx) => ({
    ...item,
    id: idx + 1,
    icon: iconMap[item.icon]
}));

export function Certifications() {
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="py-24 bg-bg border-y border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-bg rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

                    {/* Text Content Area */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="lg:col-span-5 max-w-xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-[1px] w-12 bg-primary"></span>
                            <span className="text-primary tracking-widest uppercase text-sm font-semibold">
                                Accreditations
                            </span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading text-fg leading-tight mb-8">
                            A Legacy of <br />
                            <span className="italic text-muted font-light">Trust</span> & <span className="text-primary">Credibility</span>
                        </h2>

                        <p className="text-lg text-muted mb-10 leading-relaxed font-sans">
                            We believe that true luxury is built on a foundation of trust. Our commitment to unparalleled quality, ethical practices, and customer satisfaction is recognized by leading regulatory bodies worldwide.
                        </p>

                        <div className="flex items-center gap-4 bg-surface_light border border-border p-5 rounded-xl transition-transform duration-500 hover:scale-[1.02]">
                            <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                            <p className="text-sm text-fg font-medium tracking-wide uppercase font-montserrat">
                                100% Legal Compliance & Transparency
                            </p>
                        </div>
                    </motion.div>

                    {/* Grid Layout for Certifications */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {certifications.map((cert) => {
                            const Icon = cert.icon;
                            return (
                                <motion.div
                                    key={cert.id}
                                    variants={fadeUp}
                                    className="bg-surface p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 group hover:-translate-y-1 hover:shadow-glow relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-500 ease-out" />

                                    <div className="w-14 h-14 bg-surface_light rounded-xl flex items-center justify-center mb-6 border border-border group-hover:bg-primary group-hover:border-primary transition-colors duration-500 relative z-10">
                                        <Icon className="w-6 h-6 text-primary group-hover:text-bg transition-colors duration-500" />
                                    </div>

                                    <h3 className="text-xl font-heading font-semibold text-fg mb-3 relative z-10">
                                        {cert.title}
                                    </h3>

                                    <p className="text-sm text-muted leading-relaxed font-sans relative z-10 group-hover:text-fg/80 transition-colors duration-300">
                                        {cert.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Association Logos Banner */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mt-32 pt-12 border-t border-border/50"
                >
                    <p className="text-center text-xs font-montserrat text-muted uppercase tracking-widest mb-12">
                        Recognized By & Associated With
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                        <div className="text-2xl font-heading font-bold text-fg tracking-tighter hover:text-primary transition-colors cursor-default">RERA</div>
                        <div className="text-2xl font-sans font-black text-fg tracking-widest hover:text-primary transition-colors cursor-default">CREDAI</div>
                        <div className="text-3xl font-heading font-semibold text-primary tracking-wide italic hover:scale-110 transition-transform cursor-default">IGBC</div>
                        <div className="flex flex-col items-center hover:text-primary transition-colors cursor-default">
                            <span className="text-xl font-bold font-sans text-fg tracking-wider">ISO</span>
                            <span className="text-[10px] uppercase font-medium text-primary tracking-widest">9001:2015</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
