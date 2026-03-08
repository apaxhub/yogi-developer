"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion';
import { aboutHeroData } from '@/data/siteData';

export default function AboutHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Subtler parallax for performance and premium feel
    const yHeroBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    // Mouse movement for subtle 3D hover effect
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const springConfig = { damping: 25, stiffness: 120 };
    const springX = useSpring(mousePosition.x, springConfig);
    const springY = useSpring(mousePosition.y, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 20; // Max 20px movement
            const y = (clientY / window.innerHeight - 0.5) * 20;
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Staggered text reveal variants
    const textVariants: Variants = {
        hidden: { y: "100%", opacity: 0 },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1] as any,
                delay: custom * 0.15
            }
        })
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen min-h-[700px] bg-bg overflow-hidden flex items-center"
        >
            {/* 1. Immersive Background */}
            <motion.div
                className="absolute right-0 top-0 w-full lg:w-[65%] h-full z-0 overflow-hidden"
                style={{ y: yHeroBg }}
            >
                <div className="absolute inset-0 bg-[#0f0f0f] z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(212,175,55,0.05) 0%, transparent 70%)' }}></div>

                <motion.div
                    className="relative w-full h-full"
                    style={{
                        scale: scaleImage,
                        x: springX,
                        y: springY
                    }}
                >
                    <Image
                        src={aboutHeroData.bgImage}
                        alt="Yogi Developers Architectural Detail"
                        fill
                        priority
                        className="object-cover object-center opacity-80 mix-blend-luminosity"
                        sizes="(max-width: 1024px) 100vw, 65vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/40 to-transparent z-10"></div>
                </motion.div>
            </motion.div>

            {/* Ambient Lighting Overlay */}
            <div className="absolute inset-0 z-0 bg-primary/5 blur-[120px] rounded-full scale-150 pointer-events-none opacity-30 translate-x-1/4 -translate-y-1/4"></div>

            {/* 2. Foreground Content */}
            <motion.div
                style={{ opacity: opacityContent }}
                className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col lg:flex-row items-start lg:items-center justify-between h-full pt-24 pb-12"
            >
                {/* Left Column: Manifesto */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center h-full order-2 lg:order-1 mt-12 lg:mt-0 z-30">
                    <div className="overflow-hidden mb-8">
                        <motion.div
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariants}
                            className="flex items-center gap-4"
                        >
                            <span className="w-12 h-[1px] bg-primary"></span>
                            <span className="font-montserrat text-[10px] sm:text-xs tracking-[0.4em] uppercase text-primary font-semibold">
                                {aboutHeroData.badge}
                            </span>
                        </motion.div>
                    </div>

                    <div className="space-y-6 lg:pl-16 relative">
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                            className="absolute left-0 top-0 w-[1px] bg-gradient-to-b from-primary via-primary/20 to-transparent hidden lg:block"
                        />

                        <div className="overflow-hidden">
                            <motion.h2
                                custom={3}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={textVariants}
                                className="text-2xl md:text-3xl lg:text-4xl font-heading text-fg font-light tracking-wide leading-snug"
                            >
                                {aboutHeroData.heading.plain1} <br className="hidden sm:block" />
                                <span className="italic text-primary_soft font-normal pr-2">{aboutHeroData.heading.italic}</span>, <br className="hidden sm:block" />
                                {aboutHeroData.heading.plain2}
                            </motion.h2>
                        </div>

                        <div className="overflow-hidden mt-6">
                            <motion.p
                                custom={4}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={textVariants}
                                className="font-montserrat text-xs sm:text-sm text-muted/80 leading-relaxed max-w-md"
                            >
                                {aboutHeroData.description}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="pt-8"
                        >
                            <span className="font-editorial text-xl sm:text-2xl text-fg/40 italic tracking-widest block">
                                {aboutHeroData.signature}
                            </span>
                        </motion.div>
                    </div>
                </div>

                {/* Right Column: Giant Typography */}
                <div className="w-full lg:w-7/12 absolute lg:relative top-1/4 lg:top-auto left-0 lg:left-auto px-6 lg:px-0 opacity-20 lg:opacity-100 pointer-events-none order-1 lg:order-2 flex justify-end">
                    <motion.div
                        initial={{ opacity: 0, x: 80, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="relative z-20 text-right mix-blend-difference hidden lg:block"
                    >
                        <h1 className="text-[120px] xl:text-[180px] leading-[0.85] font-heading font-bold text-white uppercase tracking-tighter">
                            Yogi <br />
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: 1.5 }}
                                className="text-transparent border-text stroke-white"
                                style={{ WebkitTextStroke: '2px rgba(212,175,55,0.8)' }}
                            >
                                Developers
                            </motion.span>
                        </h1>
                    </motion.div>

                    <div className="lg:hidden w-full text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="text-7xl sm:text-8xl md:text-9xl leading-[0.85] font-heading font-bold text-white/10 uppercase tracking-tighter"
                        >
                            Yogi <br /> Developers
                        </motion.h1>
                    </div>
                </div>
            </motion.div>

            {/* Custom Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 lg:bottom-12 right-6 md:right-12 xl:right-24 flex flex-col items-center gap-4 z-30 pointer-events-none"
            >
                <span className="font-montserrat text-[8px] uppercase tracking-[0.4em] text-white/50 rotate-90 origin-bottom translate-y-[-10px] mb-8">Scroll</span>
                <div className="w-[1px] h-16 bg-white/10 overflow-hidden relative">
                    <motion.div
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="w-full h-1/2 bg-primary absolute top-0 left-0"
                    />
                </div>
            </motion.div>
        </section>
    );
}
