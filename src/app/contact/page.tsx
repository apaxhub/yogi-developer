import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactMain from '@/components/contact/ContactMain';

import ContactMap from '@/components/contact/ContactMap';

export const metadata = {
    title: 'Contact | Yogi Developers',
    description: 'Reach out to Yogi Developers for your next residential, commercial, or industrial project in Ahmedabad.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-bg">
            <ContactHero />
            <ContactMain />
            <ContactMap />
        </main>
    );
}
