import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import WhyUs from '@/components/why-us'
import About from '@/components/about'
import Portfolio from '@/components/portfolio'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import BackToTop from '@/components/back-to-top'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </main>
  )
}
