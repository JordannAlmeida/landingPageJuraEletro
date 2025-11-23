import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-end gap-0">
                    <img
                        src={scrolled ? "/assets/images/logo-black-wbg.png" : "/assets/images/logo-white-wbg.png"}
                        alt="Jurandir Alves Eletricista Logo"
                        className="h-25 w-auto object-contain ml-[-70px]"
                    />
                    <div className="flex flex-col -ml-16 mb-6">
                        <span className={`text-xl font-bold leading-tight ${scrolled ? 'text-slate-800' : 'text-white'}`}>Jurandir Alves</span>
                        <span className={`text-sm font-medium ${scrolled ? 'text-green-600' : 'text-yellow-400'}`}>Eletricista</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8 items-center">
                    {['Início', 'Serviços', 'Sobre'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item === 'Início' ? 'hero' : item.toLowerCase().replace('ç', 'c').replace('õ', 'o')}`}
                            className={`font-medium transition hover:text-yellow-500 ${scrolled ? 'text-slate-600' : 'text-slate-200'
                                }`}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className={`px-6 py-2.5 rounded-full font-semibold transition transform hover:scale-105 ${scrolled
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-yellow-500 text-green-900 hover:bg-yellow-400'
                            }`}
                    >
                        Contato
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden focus:outline-none ${scrolled ? 'text-slate-800' : 'text-white'}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {['Início', 'Serviços', 'Sobre'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item === 'Início' ? 'hero' : item.toLowerCase().replace('ç', 'c').replace('õ', 'o')}`}
                                    className="text-slate-600 hover:text-green-600 font-medium text-lg"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                className="text-green-600 font-bold text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contato
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
