import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trustbar from "../components/Trustbar";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import QuoteForm from "../components/QuoteForm";
import Footer from "../components/Footer";
import About from "../components/About";
import FAQ from "../components/FAQ";
import ServiceArea from "../components/ServiceArea";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Trustbar />
      <Services />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <FAQ />
      <ServiceArea />
      <QuoteForm />
      <Footer />
    </main>
  );
}