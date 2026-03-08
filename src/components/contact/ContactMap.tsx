"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { mapConfig, contactInfoData } from '@/data/siteData';

export default function ContactMap() {
    return (
        <section className="relative w-full h-[450px] bg-[#050505] overflow-hidden border-t border-white/5">
            {/* Map Overlay for brand alignment */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-bg via-transparent to-bg opacity-40"></div>
            <div className="absolute inset-0 z-10 pointer-events-none bg-primary/5 mix-blend-color"></div>

            {/* Google Map Iframe Placeholder */}
            <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3024.184318683535!2d${mapConfig.center.lng}!3d${mapConfig.center.lat}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sin!4v1709491200000!5m2!1sen!2sin`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-1000"
            ></iframe>

            {/* Location Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-12 left-12 z-20 bg-bg/80 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-xl shadow-2xl"
            >
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <div>
                        <h4 className="text-[10px] tracking-[.3em] uppercase text-muted font-black">Yogi Developers HQ</h4>
                        <p className="text-xs text-fg/80 font-light whitespace-pre-line">{contactInfoData.headquarters.address}</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
