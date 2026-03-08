"use client";

import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { motion } from 'framer-motion';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const portfolioLocations = [
    {
        id: "new-york",
        city: "New York",
        country: "United States",
        projects: "8 Premium Estates",
        description: "Architectural marvels gracing Manhattan's Billionaires' Row, offering unparalleled panoramic views of Central Park.",
        coordinates: [-74.0060, 40.7128] as [number, number]
    },
    {
        id: "london",
        city: "London",
        country: "United Kingdom",
        projects: "5 Heritage Restorations",
        description: "Bespoke mansions and sophisticated townhouses in Mayfair and Knightsbridge, blending timeless history with modern opulence.",
        coordinates: [-0.1276, 51.5072] as [number, number]
    },
    {
        id: "dubai",
        city: "Dubai",
        country: "United Arab Emirates",
        projects: "12 Exclusive Developments",
        description: "Defining the skyline with record-breaking ultra-luxury branded residences in Downtown and the iconic Palm Jumeirah.",
        coordinates: [55.2708, 25.2048] as [number, number]
    },
    {
        id: "mumbai",
        city: "Mumbai",
        country: "India",
        projects: "15 Sea-Facing Towers",
        description: "Commanding the Arabian Sea coastline with ultra-luxurious super-tall condominiums in Worli and Bandra.",
        coordinates: [72.8777, 19.0760] as [number, number]
    }
];

export default function LocationAdvantage() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative w-full bg-bg py-20 md:py-32 overflow-hidden border-t border-border">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none transition-all duration-1000"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 xl:px-16">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20 px-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-4 max-w-2xl"
                    >
                        <span className="flex items-center gap-3 text-primary font-montserrat text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            Global Portfolio
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-heading font-light text-fg tracking-wide leading-tight">
                            Commanding <br className="hidden md:block" />
                            <span className="italic text-primary_soft pr-2">Presence</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-muted font-montserrat text-sm md:text-base leading-relaxed md:max-w-xs lg:max-w-sm md:text-right border-l md:border-l-0 md:border-r-2 border-primary/30 pl-4 md:pl-0 md:pr-6 py-1"
                    >
                        Shaping the skylines of the world's most coveted destinations with a master portfolio of architectural supremacy.
                    </motion.p>
                </div>

                {/* Main Interactive Map Area */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-10 w-full lg:min-h-[500px] px-2"
                >

                    {/* Left: Locations List */}
                    <div className="w-full lg:w-[40%] flex flex-col justify-center gap-3 md:gap-4">
                        {portfolioLocations.map((loc, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div
                                    key={loc.id}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onClick={() => setActiveIndex(index)}
                                    className={`relative p-5 md:p-6 rounded-2xl md:rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden group
                                        ${isActive ? 'bg-white/[0.03] border border-primary/20 shadow-[0_0_30px_rgba(212,175,55,0.05)]' : 'bg-transparent border border-white/5 hover:border-white/10 hover:bg-white/[0.01]'}
                                    `}
                                >
                                    {/* Active Glow Accent */}
                                    <div className={`absolute left-0 top-0 w-1 md:w-1.5 h-full bg-gradient-to-b from-transparent via-primary to-transparent transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

                                    <div className="flex flex-col gap-1 relative z-10 pl-2 md:pl-4 w-full">
                                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between w-full">
                                            <h3 className={`font-heading text-xl md:text-2xl transition-colors duration-500 ${isActive ? 'text-primary_soft' : 'text-fg'}`}>
                                                {loc.city}
                                            </h3>
                                            <span className={`text-[10px] md:text-xs font-montserrat tracking-widest uppercase mt-1 md:mt-0 transition-colors duration-500
                                                ${isActive ? 'text-primary/70' : 'text-muted/40'}
                                            `}>
                                                {loc.country}
                                            </span>
                                        </div>

                                        {/* Expandable Content Area */}
                                        <div className={`grid transition-all duration-500 ${isActive ? 'grid-rows-[1fr] opacity-100 mt-3 md:mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                            <div className="overflow-hidden">
                                                <div className="pt-4 border-t border-white/10 flex flex-col gap-2 md:gap-3">
                                                    <span className="inline-block text-[10px] md:text-[11px] font-montserrat uppercase tracking-[0.2em] text-primary">
                                                        {loc.projects}
                                                    </span>
                                                    <p className="font-montserrat text-sm text-white/70 leading-relaxed drop-shadow-sm pr-4">
                                                        {loc.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right: Immersive Map Visualizer */}
                    <div className="w-full lg:w-[60%] min-h-[400px] lg:min-h-full relative rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-[#0A0A0A] border border-white/10 group shadow-2xl flex items-center justify-center">

                        {/* Abstract Geographic Dot Grid (Stylized implicit map backdrop) */}
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
                        </div>

                        {/* Vignette */}
                        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0A0A0A]/40 to-[#0A0A0A] pointer-events-none"></div>

                        <ComposableMap
                            projection="geoMercator"
                            projectionConfig={{ scale: 110, center: [10, 35] }}
                            className="w-[120%] h-[120%] lg:w-full lg:h-full relative z-10"
                            style={{ backgroundColor: "transparent" }}
                        >
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill="#141414"
                                            stroke="#222222"
                                            strokeWidth={0.5}
                                            style={{
                                                default: { outline: "none" },
                                                hover: { outline: "none", fill: "#1F1F1F" },
                                                pressed: { outline: "none" },
                                            }}
                                        />
                                    ))
                                }
                            </Geographies>
                            {portfolioLocations.map((loc, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <Marker
                                        key={loc.id}
                                        coordinates={loc.coordinates}
                                        onClick={() => setActiveIndex(index)}
                                        className="cursor-pointer"
                                    >
                                        <g className="transition-all duration-500 ease-out" style={{ cursor: "pointer" }}>
                                            {/* Glowing Pulse Rings */}
                                            {isActive && (
                                                <g>
                                                    <circle r={16} fill="none" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4">
                                                        <animate attributeName="r" from="4" to="24" dur="2s" repeatCount="indefinite" />
                                                        <animate attributeName="opacity" from="1" to="0" dur="2s" repeatCount="indefinite" />
                                                    </circle>
                                                </g>
                                            )}

                                            {/* Solid Core Element */}
                                            <circle
                                                r={isActive ? 6 : 4}
                                                fill={isActive ? "#D4AF37" : "rgba(255,255,255,0.4)"}
                                                className={`transition-all duration-300 ${isActive ? '' : 'hover:fill-[#D4AF37]'}`}
                                            />
                                            {isActive && (
                                                <circle r={2} fill="#fff" />
                                            )}
                                        </g>

                                        {/* Label (above pin) */}
                                        <g style={{ pointerEvents: 'none' }}>
                                            {isActive && (
                                                <line x1="0" y1="-8" x2="0" y2="-20" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.7" />
                                            )}
                                            <text
                                                textAnchor="middle"
                                                y={-26}
                                                style={{
                                                    fontFamily: "Inter, sans-serif",
                                                    fontWeight: 500,
                                                    fill: "#fff",
                                                    fontSize: isActive ? "14px" : "0px",
                                                    opacity: isActive ? 1 : 0,
                                                    transition: "all 0.3s ease",
                                                    textShadow: "0 2px 8px rgba(0,0,0,1)"
                                                }}
                                            >
                                                {loc.city}
                                            </text>
                                        </g>
                                    </Marker>
                                );
                            })}
                        </ComposableMap>

                    </div>

                </motion.div>
            </div>
        </section>
    );
}
