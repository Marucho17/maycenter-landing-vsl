import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { InstagramCarousel } from "@/components/instagram-carousel";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Reviews } from "@/components/reviews";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <InstagramCarousel />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
