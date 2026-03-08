"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const images = [
        { src: "/gallery_exterior_dusk.png", alt: "Spectacular exterior architecture at dusk" },
        { src: "/gallery_pool_deck.png", alt: "Infinity edge pool overlooking the city skyline" },
        { src: "/gallery_living_room.png", alt: "Double-height luxury penthouse living room" },
        { src: "/gallery_master_bedroom.png", alt: "Ultra high-end master bedroom with panoramic views" },
        { src: "/gallery_clubhouse.png", alt: "Exclusive residents' clubhouse and lounge" },
        { src: "/gallery_spa.png", alt: "Private indoor wellness center and spa" }
    ];

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % images.length);
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + images.length) % images.length);
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <>
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
                            A Glimpse of Perfection
                            <span className="w-12 h-[1px] bg-primary/40"></span>
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-5xl font-heading font-normal text-fg tracking-wide leading-tight mb-6"
                        >
                            The <span className="italic text-primary_soft font-medium">Gallery</span>
                        </motion.h2>
                    </div>

                    {/* Masonry-style Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]"
                    >
                        {images.map((img, idx) => {
                            // Create a varied grid layout
                            let spanClass = "col-span-1 row-span-1";
                            if (idx === 0) spanClass = "col-span-1 md:col-span-2 row-span-1 md:row-span-2"; // Feature image large
                            if (idx === 3) spanClass = "col-span-1 md:col-span-2 lg:col-span-1 row-span-1"; // Wide on tablet

                            return (
                                <motion.div
                                    variants={itemVariants}
                                    key={idx}
                                    className={`relative group overflow-hidden rounded-xl bg-surface border border-border cursor-pointer shadow-soft ${spanClass}`}
                                    onClick={() => setSelectedImage(idx)}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6">
                                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="w-8 h-[1px] bg-primary mb-3"></div>
                                            <p className="font-montserrat text-xs text-fg tracking-wider uppercase font-medium">
                                                View Details
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* View All Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 text-center"
                    >
                        <button className="group relative overflow-hidden bg-transparent border border-primary text-fg px-10 py-4 text-xs font-montserrat tracking-[0.2em] uppercase transition-all duration-500 hover:text-bg shadow-glow focus:outline-none">
                            <span className="relative z-10 font-semibold transition-colors duration-500">View Full Gallery</span>
                            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
                        </button>
                    </motion.div>

                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-md flex items-center justify-center transform-none opacity-100"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 md:top-10 md:right-10 text-muted hover:text-primary transition-colors focus:outline-none z-50 p-2"
                            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Previous Button */}
                        <button
                            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-muted hover:text-primary transition-colors focus:outline-none z-50 p-4"
                            onClick={handlePrev}
                        >
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Next Button */}
                        <button
                            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-muted hover:text-primary transition-colors focus:outline-none z-50 p-4"
                            onClick={handleNext}
                        >
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Active Image Container */}
                        <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="relative w-full max-w-6xl h-[70vh] md:h-[85vh] mx-4 md:mx-20"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                        >
                            <Image
                                src={images[selectedImage].src}
                                alt={images[selectedImage].alt}
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />

                            {/* Image Caption */}
                            <div className="absolute -bottom-12 left-0 right-0 text-center">
                                <p className="font-montserrat text-sm text-fg/80 tracking-widest uppercase">
                                    {images[selectedImage].alt}
                                </p>
                                <p className="font-montserrat text-[10px] text-muted tracking-widest mt-2 uppercase">
                                    {selectedImage + 1} / {images.length}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
