
import React from 'react';
import Navbar from '../components/Navbar';
import HomepageCarousel from '../components/homepage-carousel';

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div style={{ marginTop: '0px' }}>
                <HomepageCarousel />
                <div className="p-4">
                    {/* Page content can go here */}
                </div>
            </div>
        </div>
    )
}