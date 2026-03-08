"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, Menu } from 'lucide-react';
import { siteConfig, navbarLinks } from '@/data/siteData';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Add scroll listener for styling and progress bar
    useEffect(() => {
        const handleScroll = () => {
            // Style toggle
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Scroll Progress Bar calculation
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = windowHeight > 0 ? `${totalScroll / windowHeight}` : "0";
            setScrollProgress(Number(scroll) * 100);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = navbarLinks;

    return (
        <header
            className={`fixed z-[100] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-full flex justify-center
                ${isScrolled && !isMobileMenuOpen
                    ? 'top-4 md:top-6 px-4'
                    : 'top-0 left-0 px-0'
                }
            `}
        >
            <div
                className={`relative z-20 flex items-center justify-between transition-all duration-700 w-full
                    ${isScrolled && !isMobileMenuOpen
                        ? 'max-w-5xl bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] rounded-full px-4 py-2 md:px-10 md:py-4'
                        : 'max-w-7xl bg-transparent px-6 md:px-12 xl:px-24 py-8'
                    }
                `}
            >
                {/* Scroll Progress Border (Only visible when scrolled) */}
                {isScrolled && (
                    <div className="absolute inset-0 rounded-full pointer-events-none overflow-hidden">
                        <div
                            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary/50 via-primary to-primary_soft shadow-[0_0_15px_rgba(212,175,55,0.8)] transition-all duration-150 ease-out"
                            style={{ width: `${scrollProgress}%` }}
                        />
                    </div>
                )}

                {/* Logo Area */}
                <Link href="/" className="group flex flex-col focus:outline-none relative z-[60]">
                    <span className="font-heading text-base md:text-xl lg:text-2xl text-fg tracking-[0.10em] md:tracking-[0.3em] font-medium transition-transform duration-500 group-hover:scale-105 flex items-center uppercase">
                        {siteConfig.brandName.split(' ')[0]} <span className="text-primary italic font-light ml-2 lowercase">{siteConfig.brandName.split(' ')[1]}</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((item) => (
                        <Link
                            href={item.href}
                            key={item.name}
                            className="relative group font-montserrat text-xs text-muted/80 hover:text-white tracking-[0.2em] uppercase transition-colors duration-500 py-2"
                        >
                            <span className="relative z-10">{item.name}</span>
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full opacity-0 transform scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-[0_0_10px_#D4AF37]"></span>
                        </Link>
                    ))}
                </nav>

                {/* Right Area: Contact / CTA */}
                <div className="flex items-center gap-2 md:gap-4 relative z-[60]">
                    {/* Minimalist Phone hidden on mobile, visible on desktop */}
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="hidden lg:flex items-center gap-2 group cursor-pointer mr-2">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-primary/50 group-hover:bg-primary/10">
                            <Phone size={16} className="text-muted group-hover:text-primary transition-colors" />
                        </div>
                    </a>

                    {/* CTA Button - Hidden or simplified on mobile to save space */}
                    <button
                        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                        className={`relative overflow-hidden group font-montserrat text-[9px] md:text-xs font-semibold tracking-widest uppercase transition-all duration-500 flex items-center justify-center
                            ${isScrolled && !isMobileMenuOpen
                                ? 'px-3 py-2 md:px-6 md:py-2.5 rounded-full bg-primary text-black hover:bg-white'
                                : 'hidden sm:flex px-6 py-2.5 md:px-8 md:py-3.5 border border-white/20 text-white hover:border-primary hover:bg-primary/10 rounded-sm'
                            }
                        `}
                    >
                        <span className="relative z-10">Inquire</span>
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/40 opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                    </button>

                    {/* Mobile Menu Trigger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden w-10 h-10 flex items-center justify-center focus:outline-none relative group border border-white/10 rounded-full bg-white/5 z-[70]"
                    >
                        {isMobileMenuOpen ? (
                            <X size={20} className="text-white group-hover:text-primary transition-colors" />
                        ) : (
                            <Menu size={20} className="text-white group-hover:text-primary transition-colors" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-10 bg-[#050505]/98 backdrop-blur-3xl lg:hidden overflow-y-auto"
                    >
                        {/* Background Decoration */}
                        <div className="fixed top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0">
                            <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
                            <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] bg-primary/3 rounded-full blur-[80px]"></div>
                        </div>

                        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-10 pt-32 pb-20">
                            <nav className="flex flex-col items-center gap-10 md:gap-12 w-full">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + idx * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-4xl md:text-5xl lg:text-5xl font-heading text-fg hover:text-primary transition-colors tracking-tighter text-center block"
                                        >
                                            {link.name}<span className="text-primary italic font-light">.</span>
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-12 pt-12 border-t border-white/10 w-full max-w-xs flex flex-col items-center gap-8"
                                >
                                    <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 text-muted hover:text-primary transition-colors">
                                        <Phone size={20} />
                                        <span className="font-montserrat tracking-widest uppercase text-xs">{siteConfig.contact.phone}</span>
                                    </a>
                                    <div className="flex gap-6">
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-300">IG</div>
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-300">LI</div>
                                    </div>
                                </motion.div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
