import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Zigzag from "@/components/landing/zigzag";
import Newsletter from "@/components/landing/newsletter";
import Header from "@/components/landing/landing_header";
import Footer from "@/components/landing/footer";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Zigzag />
      <Newsletter />
      <Footer />
    </main>
  );
}


