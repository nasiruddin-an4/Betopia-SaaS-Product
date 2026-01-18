import Hero from "./components/Hero";
import MetricCounter from "./components/MetricCounter";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <MetricCounter />
      <Products />
      <Testimonial />
      <Faq />
      <CTA />
    </main>
  );
}
