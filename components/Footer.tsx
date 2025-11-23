import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <div className="flex items-end justify-center md:justify-start gap-0 mb-2">
                            {/* <img
                                src="/assets/images/logo-jurandir-alves.png"
                                alt="Jurandir Alves Eletricista Logo"
                                className="h-16 w-auto object-contain"
                            />
                            <div className="flex flex-col items-start -ml-4">
                                <h3 className="text-xl font-bold text-blue-400 leading-tight">Jurandir Alves</h3>
                                <span className="text-sm font-medium text-gray-300">Eletricista</span>
                            </div> */}
                            <img
                                src="/assets/images/logo-white-wbg.png"
                                alt="Jurandir Alves Eletricista Logo"
                                className="h-25 w-auto object-contain ml-[-82]"
                            />
                            <div className="flex flex-col -ml-16 mb-6">
                                <span className={`text-xl font-bold text-blue-400 leading-tight`}>Jurandir Alves</span>
                                <span className={`text-sm font-medium text-gray-300`}>Eletricista</span>
                            </div>
                        </div>
                        <p className="text-gray-400 mt-2">Soluções em Energia Solar e Elétrica</p>
                        <p className="text-gray-500 text-sm mt-1">Pimenta, MG</p>
                    </div>

                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <Link href="#hero" className="text-gray-400 hover:text-white transition">Início</Link>
                        <Link href="#services" className="text-gray-400 hover:text-white transition">Serviços</Link>
                        <Link href="#about" className="text-gray-400 hover:text-white transition">Sobre</Link>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} Jurandir Alves Eletricista. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
