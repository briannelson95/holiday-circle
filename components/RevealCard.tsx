"use client"
import React, { useState } from 'react'

export default function RevealCard({name}: {name: string}) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [tiltStyle, setTiltStyle] = useState({ rotateX: 0, rotateY: 0 });

    // Handle mouse movement over the card to calculate tilt
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left; // Mouse position X relative to card
        const y = e.clientY - rect.top; // Mouse position Y relative to card

        // Calculate rotation angles (tilt effect)
        const rotateX = ((y / rect.height) - 0.5) * 20; // Max tilt: 15 degrees
        const rotateY = ((x / rect.width) - 0.5) * -20;

        setTiltStyle({ rotateX, rotateY });
    };

    // Reset tilt when mouse leaves
    const handleMouseLeave = () => {
        setTiltStyle({ rotateX: 0, rotateY: 0 });
    };

    return (
        <div
            className="relative w-64 h-40 perspective cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Card Container */}
            <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d rounded-lg`}
                style={{
                transform: `
                    perspective(1000px)
                    rotateX(${tiltStyle.rotateX}deg) 
                    rotateY(${tiltStyle.rotateY}deg) 
                    ${isFlipped ? 'rotateY(180deg)' : ''}
                `,
                }}
            >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 z-10 pointer-events-none shine-overlay" />
                
                {/* Front of the Card */}
                <div className="absolute w-full h-full bg-primary-200 text-white shadow-md shadow-primary-500 rounded-lg flex items-center justify-center backface-hidden">
                    <h2 className="text-xl font-bold">Click to Reveal</h2>
                </div>

                {/* Back of the Card */}
                <div className="absolute w-full h-full bg-accent-500 shadow-md shadow-accent-500 rounded-lg flex items-center justify-center backface-hidden transform rotate-y-180">
                    <div className='flex-col'>
                        <p className='font-light'>Your Draw:</p>
                        <h2 className="text-xl text-center font-bold">{name}</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
