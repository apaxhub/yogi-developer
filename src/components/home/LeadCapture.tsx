"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function LeadCapture() {
    return (
        <section className="relative w-full bg-bg py-24 md:py-32 px-6 md:px-12 xl:px-24 border-t border-border overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-border/50 flex flex-col lg:flex-row"
            >

                {/* Left Side - The Pitch */}
                <div className="w-full lg:w-5/12 bg-bg p-10 md:p-14 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                    {/* Inner subtle glow */}
                    <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full scale-[2] pointer-events-none opacity-50 translate-x-1/2 translate-y-1/2"></div>

                    <div className="relative z-10">
                        <span className="flex items-center gap-3 text-primary font-montserrat text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6 font-semibold animate-fadeUp">
                            <span className="w-8 h-[1px] bg-primary/40"></span>
                            Exclusive Invitation
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-heading font-normal text-fg tracking-wide leading-tight mb-6">
                            Book Your <br className="hidden lg:block" /><span className="italic text-primary_soft font-medium">Private</span> Tour
                        </h2>

                        <div className="w-12 h-[2px] bg-primary/30 mb-8"></div>

                        <p className="font-montserrat text-muted text-sm md:text-base leading-relaxed mb-10">
                            Experience the pinnacle of luxury living. Register your interest and our bespoke relationship managers will orchestrate a curated tour of your future home.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary/70">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-montserrat text-[10px] uppercase tracking-widest text-muted/60 mb-1">Direct Line</p>
                                    <p className="font-heading text-xl text-fg tracking-wide">+91 98765 43210</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - The Form */}
                <div className="w-full lg:w-7/12 bg-surface/80 backdrop-blur-md p-10 md:p-14 lg:p-16 border-t lg:border-t-0 lg:border-l border-border/50">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="font-montserrat text-[10px] uppercase tracking-widest text-muted block pl-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="e.g. Anand Mahindra"
                                    className="w-full bg-bg border border-border rounded-xl px-5 py-4 text-fg font-montserrat text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 placeholder:text-muted/30 shadow-inner"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <label htmlFor="phone" className="font-montserrat text-[10px] uppercase tracking-widest text-muted block pl-1">Contact Number</label>
                                <div className="relative">
                                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-muted/50 font-montserrat text-sm border-r border-border pr-3">+91</span>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="00000 00000"
                                        className="w-full bg-bg border border-border rounded-xl pl-[4.5rem] pr-5 py-4 text-fg font-montserrat text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 placeholder:text-muted/30 shadow-inner"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="font-montserrat text-[10px] uppercase tracking-widest text-muted block pl-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="youremail@example.com"
                                className="w-full bg-bg border border-border rounded-xl px-5 py-4 text-fg font-montserrat text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 placeholder:text-muted/30 shadow-inner"
                                required
                            />
                        </div>

                        {/* Budget Dropdown */}
                        <div className="space-y-2">
                            <label htmlFor="budget" className="font-montserrat text-[10px] uppercase tracking-widest text-muted block pl-1">Investment Range</label>
                            <div className="relative">
                                <select
                                    id="budget"
                                    name="budget"
                                    className="w-full bg-bg border border-border rounded-xl px-5 py-4 text-fg font-montserrat text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 appearance-none shadow-inner cursor-pointer"
                                    required
                                    defaultValue=""
                                >
                                    <option value="" disabled className="text-muted/30 hidden">Select your budget</option>
                                    <option value="5cr-10cr">₹ 5 Cr - 10 Cr</option>
                                    <option value="10cr-20cr">₹ 10 Cr - 20 Cr</option>
                                    <option value="20cr+">₹ 20 Cr +</option>
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-primary/50 shrink-0 bg-bg pl-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="group relative w-full overflow-hidden bg-primary text-bg rounded-xl px-8 py-5 text-sm md:text-base font-montserrat font-bold tracking-widest uppercase transition-all duration-500 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg shadow-lg hover:-translate-y-1"
                            >
                                <span className="relative z-10 transition-colors duration-500 flex items-center justify-center gap-3">
                                    Submit Request
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
                            </button>
                        </div>

                        {/* Trust Guarantee */}
                        <div className="text-center pt-4">
                            <p className="font-montserrat text-[10px] text-muted/60 flex items-center justify-center gap-1.5 uppercase tracking-widest">
                                <svg className="w-3 h-3 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                Your information is strictly confidential.
                            </p>
                        </div>

                    </form>
                </div>

            </motion.div>
        </section>
    );
}
