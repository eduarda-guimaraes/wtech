import React from 'react';
import logonameblue from '../assets/wtech-logoname-blue.png';

export function Header() {
    return (
        <header className="bg-white py-4 px-6 w-full shadow-sm">
            <img 
                src={logonameblue} 
                alt="WTech Logo" 
                className="w-32 md:w-40 h-auto object-contain" 
            />
        </header>
    );
}