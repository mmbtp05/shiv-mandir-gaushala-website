'use client';

import { scrollToSection } from '@/app/(utils)/scroll';
import { useState, useEffect } from 'react';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.04) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.touchAction = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.touchAction = '';
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { title: 'Home', id: 'home' },
        { title: 'Products', id: 'products' },
        { title: 'Donate', id: 'donate' },
        { title: 'Gallery', id: 'gallery' },
        { title: 'Contact Us', id: 'contact' }
    ];

    const handleNavClick = (e: any, id: any) => {
        e.preventDefault();
        scrollToSection(id);
        setIsOpen(false); 
    };

    return (
        <>
            {/* Fixed navbar with higher z-index */}
            <div className="fixed top-0 left-0 right-0 z-[1000]">
                <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-orange-700/90 backdrop-blur-sm' : 'bg-transparent'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <div className="flex-shrink-0 flex items-center gap-2">
                                {/* Cow logo placeholder */}
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="18" fill="#ea580c" />
                                    <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="18" fontFamily="Arial" dy=".3em">🐄</text>
                                </svg>
                                <span className="text-2xl font-bold text-orange-600">Shree <span className="text-white">Gaushala</span></span>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-center space-x-8">
                                    {navLinks.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            onClick={(e) => handleNavClick(e, item.id)}
                                            className="text-white hover:text-orange-300 transition-colors duration-200"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile menu button */}
                            <button
                                type="button"
                                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-emerald-400"
                                onClick={toggleMenu}
                                aria-expanded={isOpen}
                            >
                                <span className="sr-only">Open menu</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile menu drawer with higher z-index */}
                <div className={`fixed inset-0 z-[1001] transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}>
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={closeMenu}
                        aria-hidden="true"
                    />

                    {/* Drawer */}
                    <div
                        className={`absolute right-0 top-0 h-full w-full max-w-xs bg-orange-700 shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        {/* Drawer content */}
                        <div className="h-full flex flex-col">
                            {/* Header */}
                            <div className="px-4 pt-5 pb-4">
                                <div className="flex items-center justify-between">
                                    <div className="text-xl font-bold text-orange-600 flex items-center gap-2">
                                        <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18" cy="18" r="18" fill="#ea580c" />
                                            <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="14" fontFamily="Arial" dy=".3em">🐄</text>
                                        </svg>
                                        Shree <span className="text-white ml-1">Gaushala</span>
                                    </div>
                                    <button
                                        type="button"
                                        className="p-2 text-white hover:text-emerald-400"
                                        onClick={closeMenu}
                                    >
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Navigation links */}
                            <div className="flex-1 px-4 py-6">
                                <div className="flex flex-col space-y-4">
                                    {navLinks.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            onClick={(e) => handleNavClick(e, item.id)}
                                            className="text-white hover:text-orange-300 text-lg font-medium"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Social links */}
                            <div className="px-4 py-6 border-t border-gray-700">
                                <div className="flex justify-center space-x-6">
                                    <a href="#" className="text-gray-400 hover:text-emerald-400">
                                        <span className="sr-only">Facebook</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-emerald-400">
                                        <span className="sr-only">Instagram</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;