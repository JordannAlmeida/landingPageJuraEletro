import { motion } from 'framer-motion';

export default function WhyChooseUs() {
    const benefits = [
        "Atendimento direto com o dono",
        "Equipe experiente e qualificada",
        "Garantia em todos os serviços",
        "Orçamento transparente e justo",
        "Especialistas em Energia Solar",
        "Atendimento rápido em Pimenta e região"
    ];

    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Qual o Diferencial de <span className="text-yellow-500">Jurandir Alves</span>?
                    </motion.h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Diferenciais que garantem a sua tranquilidade e o sucesso do seu projeto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(30, 41, 59, 1)' }}
                            className="flex items-center bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-yellow-500/50 transition-all cursor-default"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center mr-4 flex-shrink-0 text-green-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-lg font-medium text-slate-200">{benefit}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
