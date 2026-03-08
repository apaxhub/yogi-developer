import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import CompanyOverview from '@/components/about/CompanyOverview';
import CompanyStats from '@/components/about/CompanyStats';
import CompletedProjects from '@/components/about/CompletedProjects';
import { Certifications } from '@/components/about/Certifications';
import { FounderSection } from '@/components/about/FounderSection';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
    title: 'About | Yogi Developers',
    description: 'Learn more about Yogi Developers, a leader in Ahmedabad\'s construction industry with nearly 30 years of excellence.',
}

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-bg text-fg">
            <AboutHero />
            <CompanyOverview />
            <CompanyStats />
            <FounderSection />
            <CompletedProjects />
            <Certifications />
            <AboutCTA />
        </main>
    );
}
