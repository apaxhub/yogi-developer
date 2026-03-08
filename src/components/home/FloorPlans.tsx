"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloorPlans() {
    const [activeTab, setActiveTab] = useState("3BHK");

    const plans = {
        "2BHK": {
            title: "2 BHK Luxury Suite",
            area: "1,850 Sq. Ft.",
            balcony: "320 Sq. Ft.",
            features: ["2 Bedrooms", "2 Bathrooms", "Powder Room", "Staff Quarters"],
            imagePath: "/floor_plan_2bhk.png"
        },
        "3BHK": {
            title: "3 BHK Premium Residence",
            area: "2,450 Sq. Ft.",
            balcony: "450 Sq. Ft.",
            features: ["3 Bedrooms", "3 Bathrooms", "Family Lounge", "Staff Quarters"],
            imagePath: "/floor_plan_3bhk.png"
        },
        "4BHK": {
            title: "4 BHK Penthouse Collection",
            area: "4,200 Sq. Ft.",
            balcony: "800 Sq. Ft.",
            features: ["4 Bedrooms", "5 Bathrooms", "Private Terrace", "Double Height Living"],
            imagePath: "/floor_plan_4bhk.png"
        }
    };

    const activeData = plans[activeTab as keyof typeof plans];

    return (
        <section className="relative w-full bg-bg py-24 md:py-32 px-6 md:px-12 xl:px-24 border-t border-border overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center gap-3 text-primary font-montserrat text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 font-semibold"
                    >
                        <span className="w-12 h-[1px] bg-primary/40"></span>
                        Masterfully Designed
                        <span className="w-12 h-[1px] bg-primary/40"></span>
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-5xl font-heading font-normal text-fg tracking-wide leading-tight mb-6"
                    >
                        Intelligent <span className="italic text-primary_soft font-medium">Layouts</span>
                    </motion.h2>
                </div>

                {/* Configurations Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch bg-surface border border-border rounded-3xl p-6 md:p-12 shadow-soft"
                >

                    {/* Left Column - Tabs & Details */}
                    <div className="w-full lg:w-1/3 flex flex-col">

                        {/* Tabs */}
                        <div className="flex flex-row lg:flex-col gap-2 md:gap-4 mb-10 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                            {Object.keys(plans).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-shrink-0 px-6 py-4 text-sm md:text-base font-montserrat tracking-widest uppercase transition-all duration-300 border-b-2 lg:border-l-2 lg:border-b-0 text-left ${activeTab === tab
                                        ? "text-primary border-primary bg-primary/5"
                                        : "text-muted hover:text-fg border-transparent hover:border-border"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Active Plan Details */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4 }}
                                className="flex-grow flex flex-col justify-center"
                            >
                                <h3 className="text-2xl md:text-3xl font-heading text-fg mb-2">{activeData.title}</h3>

                                <div className="w-12 h-[2px] bg-primary/50 mb-8 mt-4"></div>

                                <div className="space-y-6 mb-10 font-montserrat">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-1 font-semibold">Super Built-Up Area</p>
                                        <p className="text-xl text-fg font-medium">{activeData.area}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-1 font-semibold">Outdoor Living</p>
                                        <p className="text-lg text-fg">{activeData.balcony}</p>
                                    </div>

                                    <div className="pt-4 border-t border-border">
                                        <ul className="grid grid-cols-2 gap-y-3 gap-x-2">
                                            {activeData.features.map((feature, idx) => (
                                                <li key={idx} className="text-sm text-muted flex items-start gap-2">
                                                    <span className="text-primary mt-[2px]">✦</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Download Button */}
                                <button className="group relative w-full overflow-hidden backdrop-blur-md bg-transparent border border-primary text-fg px-8 py-4 text-xs font-montserrat tracking-[0.2em] uppercase transition-all duration-500 hover:bg-primary hover:text-bg shadow-glow flex items-center justify-center gap-3">
                                    <span className="relative z-10 font-semibold flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Download Plan
                                    </span>
                                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column - Image Preview */}
                    <div className="w-full lg:w-2/3 aspect-[4/3] lg:aspect-auto h-[400px] md:h-[500px] lg:h-auto min-h-[400px] md:min-h-[600px] bg-[#1a1a1a] border border-border/50 rounded-xl flex items-center justify-center p-4 md:p-8 relative overflow-hidden group shadow-inner">
                        {/* Soft background glow */}
                        <div className="absolute inset-0 bg-primary/5 blur-[100px] scale-150 pointer-events-none rounded-full"></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`img-${activeTab}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="relative z-10 w-full h-full rounded-lg flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={activeData.imagePath}
                                        alt={`${activeTab} Floor Plan`}
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        sizes="(max-width: 1024px) 100vw, 66vw"
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
