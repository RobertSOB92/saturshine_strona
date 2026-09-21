import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#uslugi"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#C8913A] focus:text-white focus:rounded-sm focus:font-body focus:text-sm"
      >
        Przejdź do treści głównej
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <ContactForm />
        <ContactInfo />
      </main>

      <Footer />
    </>
  );
}
