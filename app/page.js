'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Tools from "@/components/Tools";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  return (
    <div className="bg-void-blue text-primary-text">
      <Navbar />
      <Header /> 
      <About />  
      <Services /> 
      <Tools />
      <Work />
      <section id="newsletter" className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <NewsletterSignup />
        </div>
      </section>
      <Contact />
      <Footer /> 
    </div>
  );
}
