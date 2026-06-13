import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Stats from "./components/stats";
import Services from "./components/services";
import Projects from "./components/projects";
import About from "./components/about";
import Testimonials from "./components/testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/contact";
import EnquiryForm from "./components/enquiryform";
import Footer from "./components/footer";
import WhatsAppButton from "./components/whatsapp";

function App() {
  return (
    <div className="bg-[#03080f] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <EnquiryForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;