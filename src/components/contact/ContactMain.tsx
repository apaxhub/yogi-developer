"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight, Layers, Box, Globe } from 'lucide-react';
import { contactInfoData } from '@/data/siteData';

export default function ContactMain() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Mouse Tracking for Physics-like drifting
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Parallax & Physics Transforms
    const springConfig = { stiffness: 60, damping: 25, restDelta: 0.001 };

    // Floating Nodes Parallax
    const node1Y = useSpring(useTransform(scrollYProgress, [0, 1], [150, -150]), springConfig);
    const node2Y = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 100]), springConfig);
    const node3Y = useSpring(useTransform(scrollYProgress, [0, 1], [50, -200]), springConfig);

    // Mouse Follow (Rotation & Subtle Shift)
    const rotateX = useSpring(useTransform(mouseY, [0, 1000], [5, -5]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [0, 1500], [-5, 5]), springConfig);

    return (
        <section ref={containerRef} className="relative min-h-[140vh] bg-bg py-24 overflow-hidden select-none">

            {/* --- ARCHITECTURAL BACKDROP --- */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay"></div>

                {/* Blueprint Grid Lines */}
                <div className="absolute inset-0 h-full w-full"
                    style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
                </div>

                {/* Massive Architectural Typography */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute top-1/4 left-0 -translate-x-1/2 flex flex-col items-center rotate-90 origin-left"
                >
                    <span className="text-[15vw] font-heading font-black text-white/[0.03] tracking-tighter leading-none">STRUCTURAL.</span>
                    <span className="text-[15vw] font-heading font-black text-primary/[0.05] tracking-tighter leading-none -mt-8 italic">EXCELLENCE</span>
                </motion.div>

                {/* Ambient Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] mix-blend-screen"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12 lg:gap-0">

                    {/* --- THE AURA NODES (Interactive Shards) --- */}
                    <div className="w-full lg:w-[45%] relative min-h-[600px] lg:h-[1000px] flex flex-col gap-6 lg:block px-4 lg:px-0">

                        {/* THE SPINE (Central glowing architectural line) */}
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: '80%' }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-primary/40 to-transparent z-0 hidden lg:block"
                        />

                        {/* NODE 1: OFFICE */}
                        <motion.div
                            style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? node1Y : 0, rotateX, rotateY }}
                            whileHover={{ scale: 1.05 }}
                            className="relative lg:absolute lg:top-20 lg:left-12 w-full max-w-full lg:max-w-[340px] z-20 cursor-crosshair group"
                        >
                            <div className="bg-[#111]/80 backdrop-blur-2xl border border-white/10 p-6 md:p-10 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-primary/50 overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><Layers size={60} className="text-primary" /></div>
                                <div className="space-y-4 md:space-y-6 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                            <MapPin size={16} className="text-primary" />
                                        </div>
                                        <span className="text-[9px] md:text-[10px] tracking-[.5em] uppercase text-primary font-black">Headquarters</span>
                                    </div>
                                    <p className="text-lg md:text-xl font-heading text-fg leading-tight whitespace-pre-line">
                                        {contactInfoData.headquarters.address}
                                    </p>
                                    <div className="h-[1px] w-12 bg-primary/30 group-hover:w-full transition-all duration-700"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* NODE 2: ADVISORY */}
                        <motion.div
                            style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? node2Y : 0, rotateX, rotateY }}
                            className="relative lg:absolute lg:top-[40%] lg:-right-4 w-full max-w-full lg:max-w-[320px] z-30 group"
                        >
                            <div className="bg-[#080808]/90 backdrop-blur-3xl border border-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl transition-all duration-700 group-hover:bg-[#121212] flex flex-col gap-6 md:gap-8">
                                <div className="space-y-3 md:space-y-4">
                                    <div className="flex items-center gap-4">
                                        <Globe size={14} className="text-primary/60" />
                                        <h3 className="text-[8px] md:text-[9px] tracking-[.4em] uppercase text-muted font-bold">Contact Numbers</h3>
                                    </div>
                                    <a href={`tel:${contactInfoData.globalDesk.phone}`} className="block text-xl md:text-2xl font-black text-fg hover:text-primary transition-colors font-heading">
                                        {contactInfoData.globalDesk.value}
                                    </a>
                                </div>
                                <div className="space-y-3 md:space-y-4 pt-6 border-t border-white/5">
                                    <div className="flex items-center gap-4">
                                        <Mail size={14} className="text-primary/60" />
                                        <h3 className="text-[8px] md:text-[9px] tracking-[.4em] uppercase text-muted font-bold">Inquiry Mail</h3>
                                    </div>
                                    <a href={`mailto:${contactInfoData.email.value}`} className="block text-sm text-muted hover:text-fg transition-colors truncate">
                                        {contactInfoData.email.value}
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* NODE 3: AVAILABILITY */}
                        <motion.div
                            style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? node3Y : 0, rotateX, rotateY }}
                            className="relative lg:absolute lg:bottom-1/4 lg:left-1/4 w-full max-w-full lg:max-w-[240px] z-10"
                        >
                            <div className="bg-white/[0.01] backdrop-blur-sm border border-white/5 p-4 md:p-6 rounded-2xl flex items-center gap-4 md:gap-6">
                                <Clock size={20} className="text-primary/30" />
                                <div className="space-y-1">
                                    <span className="text-[7px] md:text-[8px] tracking-[.4em] uppercase text-muted/40 font-bold">{contactInfoData.status.label}</span>
                                    <p className="text-[9px] md:text-[10px] text-muted leading-relaxed whitespace-pre-line">
                                        {contactInfoData.status.hours}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- THE INQUIRY MONOLITH (Cinematic Form) --- */}
                    <div className="w-full lg:w-[48%] relative">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative group h-full"
                        >
                            {/* The Monolith Container */}
                            <div className="bg-[#050505] border-l-[3px] border-primary p-10 md:p-16 lg:p-20 shadow-3xl relative overflow-hidden">

                                {/* Background "A" Initial */}
                                <div className="absolute -top-20 -right-20 text-[35rem] font-black text-white/[0.015] select-none pointer-events-none rotate-12">
                                    A
                                </div>

                                <div className="relative z-10 space-y-16">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <span className="w-10 h-[2px] bg-primary"></span>
                                            <h2 className="text-[10px] tracking-[.6em] uppercase text-primary font-black">Digital Portal</h2>
                                        </div>
                                        <h3 className="text-4xl md:text-6xl font-heading text-fg leading-none tracking-tighter">
                                            Inquire <br />
                                            <span className="italic font-light opacity-50">Without</span> <br />
                                            Boundary.
                                        </h3>
                                    </div>

                                    <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                                        <div className="space-y-10">
                                            {/* Minimal Field: Name */}
                                            <div className="relative group/field">
                                                <input type="text" required className="peer w-full bg-transparent py-4 text-xl md:text-2xl font-heading text-fg border-b border-white/10 outline-none focus:border-primary transition-all duration-500 placeholder-transparent" placeholder="Name" id="name" />
                                                <label htmlFor="name" className="absolute left-0 top-4 text-muted/30 text-sm md:text-base pointer-events-none transition-all duration-500 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:tracking-[.4em] peer-focus:uppercase peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[.4em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-primary">
                                                    Your Formal Name
                                                </label>
                                                {/* Liquid Underline Animation */}
                                                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-focus-within/field:w-full transition-all duration-700 ease-in-out"></div>
                                            </div>

                                            {/* Minimal Field: Contact */}
                                            <div className="relative group/field">
                                                <input type="email" required className="peer w-full bg-transparent py-4 text-xl md:text-2xl font-heading text-fg border-b border-white/10 outline-none focus:border-primary transition-all duration-500 placeholder-transparent" placeholder="Email" id="email" />
                                                <label htmlFor="email" className="absolute left-0 top-4 text-muted/30 text-sm md:text-base pointer-events-none transition-all duration-500 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:tracking-[.4em] peer-focus:uppercase peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[.4em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-primary">
                                                    Electronic Mail Address
                                                </label>
                                                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-focus-within/field:w-full transition-all duration-700 ease-in-out"></div>
                                            </div>

                                            {/* Portfolio Selection */}
                                            <div className="space-y-6">
                                                <span className="text-[10px] tracking-[.4em] uppercase text-muted font-bold">Portfolio of Interest</span>
                                                <div className="flex flex-wrap gap-4">
                                                    {["Penthouses", "Villas", "Estates"].map((item) => (
                                                        <button key={item} type="button" className="px-6 py-3 rounded-full border border-white/10 text-[10px] font-bold tracking-widest uppercase text-muted hover:border-primary hover:text-primary transition-all duration-500">
                                                            {item}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <button className="group relative w-full overflow-hidden py-8 border border-white/20 hover:border-primary transition-all duration-1000">
                                            {/* Kinetic Fill Animation */}
                                            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
                                            <div className="relative flex items-center justify-center gap-6">
                                                <span className="text-sm font-black tracking-[0.8em] uppercase text-fg group-hover:text-bg transition-colors duration-500">Submit Request</span>
                                                <ArrowRight size={20} className="text-primary group-hover:text-bg transition-all duration-500 group-hover:translate-x-2" />
                                            </div>
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Decorative architectural box */}
                            <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-white/10 -z-10 group-hover:w-32 group-hover:h-32 transition-all duration-700"></div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Float Element: Geometric Box */}
            <motion.div
                animate={{
                    rotate: 360,
                    y: [0, -20, 0]
                }}
                transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-1/2 left-10 opacity-10 pointer-events-none"
            >
                <Box size={100} className="text-primary" />
            </motion.div>

        </section>
    );
}