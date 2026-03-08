"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building2, Users, Briefcase } from 'lucide-react';
import { companyStats as statsData } from '@/data/siteData';

const iconMap: Record<string, any> = {
    Briefcase,
    Building2,
    Users,
    Award
};

const stats = statsData.map((stat, idx) => ({
    ...stat,
    id: idx + 1,
    icon: iconMap[stat.icon] ? React.createElement(iconMap[stat.icon], { size: 24, className: "text-primary" }) : null
}));

export default function CompanyStats() {
    return (
        <section className="py-20 bg-bg relative overflow-hidden">
            {/* Subtle radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-surface/40 backdrop-blur-sm border border-white/5 hover:border-primary/20 transition-all duration-500 hover:bg-surface/60"
                        >
                            <div className="mb-6 p-3 w-fit rounded-xl bg-primary/5 border border-primary/10 transition-colors duration-500 group-hover:bg-primary/10">
                                {stat.icon}
                            </div>

                            <div className="mb-4">
                                <span className="text-4xl lg:text-5xl font-heading font-light text-white tracking-tight">
                                    {stat.value}
                                </span>
                                <div className="h-0.5 w-8 bg-primary mt-2 transition-all duration-500 group-hover:w-full" />
                            </div>

                            <p className="text-primary font-montserrat text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                                {stat.label}
                            </p>

                            <p className="text-muted text-sm leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
