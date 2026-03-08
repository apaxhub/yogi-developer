import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteData';

export default function Footer() {
    return (
        <footer className="relative bg-[#050505] pt-32 pb-10 overflow-hidden border-t border-white/5">
            {/* Massive Background Typography */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center overflow-hidden pointer-events-none opacity-[0.04] select-none flex items-center justify-center h-full z-0">
                <span className="font-heading text-[10vw] leading-none font-bold whitespace-nowrap  uppercase">
                    {siteConfig.brandName}
                </span>
            </div>

            {/* Glowing Accent Orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none -translate-y-1/2 translate-x-1/3 z-0"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none translate-y-1/2 -translate-x-1/3 z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 xl:px-24">

                {/* Top Section: Newsletter & Brand */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 border-b border-white/10 pb-16 mb-16">

                    <div className="max-w-xl">
                        <Link href="/" className="group flex flex-col focus:outline-none mb-6">
                            <span className="font-heading text-3xl md:text-4xl text-white tracking-[0.3em] font-light transition-transform duration-500 origin-left">
                                Yogi <span className="text-primary italic font-serif">Developers</span>
                            </span>
                        </Link>
                        <p className="font-montserrat text-sm md:text-base text-white/60 leading-relaxed font-light">
                            {siteConfig.description}
                        </p>
                    </div>

                    <div className="w-full lg:w-auto flex flex-col gap-4">
                        <h4 className="font-montserrat text-xs tracking-[0.3em] text-white/50 uppercase font-medium">Exclusive Opportunities</h4>
                        <div className="relative flex items-center w-full lg:w-[400px] group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm font-montserrat text-white outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 placeholder:text-white/30"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black hover:bg-white hover:rotate-[-45deg] transition-all duration-500 group-focus-within:bg-white group-focus-within:text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Footer Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">

                    {/* Columns 1-3 Links */}
                    {[
                        { title: 'Residences', links: ['Penthouses', 'Sky Villas', 'Garden Estates', 'Floor Plans'] },
                        { title: 'The Brand', links: ['Our Story', 'Design Philosophy', 'Awards', 'Careers'] },
                        { title: 'Discover', links: ['Amenities', 'Neighborhood', 'Gallery', 'Press'] }
                    ].map((col, idx) => (
                        <div key={idx} className="col-span-1">
                            <h4 className="font-montserrat text-xs tracking-[0.2em] text-white uppercase mb-8 font-semibold">{col.title}</h4>
                            <ul className="space-y-4">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="font-montserrat text-sm text-white/50 hover:text-primary hover:tracking-wide transition-all duration-300 w-fit flex">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact & Socials */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col justify-between">
                        <div>
                            <h4 className="font-montserrat text-xs tracking-[0.2em] text-white uppercase mb-8 font-semibold">Connect</h4>
                            <ul className="space-y-4 font-montserrat text-sm text-white/60">
                                <li className="flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:text-white">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_10px_#D4AF37] transition-all duration-300"></div>
                                    <span className="whitespace-pre-line">{siteConfig.contact.address}</span>
                                </li>
                                <li className="flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:text-white">
                                    <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_10px_#D4AF37] transition-all duration-300"></div>
                                    <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
                                </li>
                                <li className="flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:text-white">
                                    <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_10px_#D4AF37] transition-all duration-300"></div>
                                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">{siteConfig.contact.email}</a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Icons (Sleek Minimal Design) */}
                        <div className="flex items-center gap-4 mt-10">
                            {[
                                { name: 'Instagram', path: 'M17 2h-10A5 5 0 0 0 2 7v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z M16.5 7.5v.01' },
                                { name: 'Twitter', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
                                { name: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' }
                            ].map((social, i) => (
                                <a key={i} href="#" aria-label={social.name} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-500 hover:-translate-y-1">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={social.path}></path>
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Bar Elements */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="font-montserrat text-[10px] md:text-xs text-white/40 tracking-widest uppercase text-center md:text-left">
                        &copy; {new Date().getFullYear()} {siteConfig.brandName} {siteConfig.brandTagline}. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-8 font-montserrat text-[10px] md:text-xs text-white/40 tracking-widest uppercase">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-primary transition-colors hidden sm:block">Cookie Settings</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
