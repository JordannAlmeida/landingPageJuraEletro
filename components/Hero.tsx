import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center bg-green-900 overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-green-800/30 rounded-l-full blur-3xl transform translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-emerald-900/40 rounded-r-full blur-3xl transform -translate-x-1/4"></div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 text-center lg:text-left"
                    >
                        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-green-800/50 border border-green-700 text-green-300 text-sm font-semibold tracking-wide uppercase">
                            Energia Sustentável & Eficiência
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Energia que <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                                Transforma
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Soluções completas em usinas solares e serviços elétricos em <strong>Pimenta-MG e região</strong>.
                            25 anos de experiência trazendo economia e segurança para você.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="https://wa.me/37999451323?text=Olá,%20gostaria%20de%20um%20orçamento."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold rounded-2xl transition shadow-lg hover:shadow-yellow-500/20 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                                Solicitar Orçamento
                            </a>
                            <a
                                href="#services"
                                className="px-8 py-4 bg-transparent border border-gray-600 text-white hover:bg-white/10 font-bold rounded-2xl transition"
                            >
                                Nossos Serviços
                            </a>
                        </div>
                    </motion.div>

                    {/* Visual Element (Placeholder for 3D/Image) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative z-10 bg-gradient-to-tr from-green-500 to-emerald-300 rounded-3xl p-1 shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500">
                            <div className="bg-green-900 rounded-2xl h-96 flex items-center justify-center overflow-hidden relative">
                                {/* Replace with actual image */}
                                <div className="absolute inset-0">
                                    <img
                                        src="/assets/images/image_hero.png"
                                        alt="Solar panels generating clean energy"
                                        className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                                    />
                                </div>
                                <div className="text-center p-8 relative z-10">
                                    <span className="text-6xl mb-4 block">☀️</span>
                                    <h3 className="text-2xl font-bold text-white">Energia Limpa</h3>
                                    <p className="text-green-200">Para um futuro sustentável</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
