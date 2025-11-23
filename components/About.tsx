import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative h-[500px]"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-yellow-100 rounded-tr-[4rem] rounded-bl-[4rem] -z-10 transform translate-x-4 -translate-y-4"></div>

            {/* Main Image - Working */}
            <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <img
                src="/assets/images/image_working.png"
                alt="Técnico trabalhando em painel solar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Secondary Image - Electrical Board */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20"
            >
              <img
                src="/assets/images/image_eletrical_board.png"
                alt="Quadro elétrico moderno"
                className="w-full h-full object-cover"
              />
            </motion.div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Sobre Nós</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              25 Anos de <br />
              <span className="text-green-700">Excelência e Confiança</span>
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Jurandir Alves presta serviços eletricos em <strong>Pimenta, MG</strong> a mais de 25 anos. Sua empresa é um negócio de família, e é por isso que o próprio Jurandir supervisiona para que cada projeto na região receba a atenção e o cuidado que só um proprietário totalmente dedicado pode garantir.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Nossa equipe combina experiência tradicional com as mais modernas tecnologias em energia solar,
              oferecendo o melhor dos dois mundos: confiabilidade comprovada e inovação sustentável.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                <span className="block text-4xl font-bold text-green-700 mb-1">25+</span>
                <span className="text-sm font-medium text-green-800 uppercase tracking-wide">Anos de Mercado</span>
              </div>
              <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-100">
                <span className="block text-4xl font-bold text-yellow-600 mb-1">100%</span>
                <span className="text-sm font-medium text-yellow-800 uppercase tracking-wide">Compromisso</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  );
}
