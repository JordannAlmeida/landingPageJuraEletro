import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jurandir Alves Eletricista | Energia Solar e Eletricista em Pimenta, MG e Região</title>
        <meta name="description" content="Economize até 95% na conta de luz com Energia Solar. Eletricista experiente em Pimenta, Piumhi, Capitólio e região. 25 anos de tradição. Orçamento grátis!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="energia solar pimenta mg, eletricista pimenta mg, instalação elétrica piumhi, usina solar capitólio, Jurandir Alves Eletricista, eletricista guapé, energia fotovoltaica minas gerais" />
        <meta property="og:title" content="Jurandir Alves Eletricista | Energia Solar e Serviços Elétricos em Pimenta e Região" />
        <meta property="og:description" content="Sua conta de luz está cara? Instale energia solar com a Jurandir Alves Eletricista. Atendemos Pimenta, Piumhi, Capitólio e toda região com 25 anos de experiência." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jurandiralveseletricista.com.br" />
        <meta property="og:image" content="https://jurandiralveseletricista.com.br/assets/images/image_hero.png" />
        <link rel="canonical" href="https://jurandiralveseletricista.com.br" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Jurandir Alves Eletricista",
              "image": [
                "https://jurandiralveseletricista.com.br/assets/images/image_hero.png",
                "https://jurandiralveseletricista.com.br/logo.png"
              ],
              "telephone": "+5537999451323",
              "url": "https://jurandiralveseletricista.com.br",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Marinana francisca da Silveira, 25",
                "addressLocality": "Pimenta",
                "addressRegion": "MG",
                "postalCode": "35585-000",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -20.4836,
                "longitude": -45.8000
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Pimenta",
                  "sameAs": "https://pt.wikipedia.org/wiki/Pimenta_(Minas_Gerais)"
                },
                {
                  "@type": "City",
                  "name": "Piumhi",
                  "sameAs": "https://pt.wikipedia.org/wiki/Piumhi"
                },
                {
                  "@type": "City",
                  "name": "Capitólio",
                  "sameAs": "https://pt.wikipedia.org/wiki/Capitólio"
                },
                {
                  "@type": "City",
                  "name": "Guapé",
                  "sameAs": "https://pt.wikipedia.org/wiki/Guapé"
                },
                {
                  "@type": "City",
                  "name": "Pains",
                  "sameAs": "https://pt.wikipedia.org/wiki/Pains"
                },
                {
                  "@type": "City",
                  "name": "Córrego Fundo",
                  "sameAs": "https://pt.wikipedia.org/wiki/Córrego_Fundo"
                },
                {
                  "@type": "City",
                  "name": "Formiga",
                  "sameAs": "https://pt.wikipedia.org/wiki/Formiga_(Minas_Gerais)"
                },
                {
                  "@type": "City",
                  "name": "Vargem Bonita",
                  "sameAs": "https://pt.wikipedia.org/wiki/Vargem_Bonita_(Minas_Gerais)"
                },
                {
                  "@type": "City",
                  "name": "São Roque de Minas",
                  "sameAs": "https://pt.wikipedia.org/wiki/São_Roque_de_Minas"
                },
                {
                  "@type": "City",
                  "name": "Doresópolis",
                  "sameAs": "https://pt.wikipedia.org/wiki/Doresópolis"
                },
                {
                  "@type": "City",
                  "name": "Iguatama",
                  "sameAs": "https://pt.wikipedia.org/wiki/Iguatama"
                }
              ],
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.instagram.com/jurandiralveseletricista",
                "https://www.facebook.com/jurandiralveseletricista"
              ]
            })
          }}
        />
      </Head>

      <Header />

      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
