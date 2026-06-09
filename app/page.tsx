import Hero from "@/sections/Hero";
import ManagingDirector from "@/sections/ManagingDirector";
import CompanyOverview from "@/sections/CompanyOverview";
import Services from "@/sections/Services";
import FeaturedProjects from "@/sections/FeaturedProjects";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ManagingDirector />
      <CompanyOverview />
      <Services />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}
