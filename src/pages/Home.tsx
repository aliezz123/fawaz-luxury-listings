
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import QuickSearch from "@/components/home/QuickSearch";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import TestimonialSection from "@/components/home/TestimonialSection";
import CallToAction from "@/components/shared/CallToAction";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <QuickSearch />
      <WhyChooseUs />
      <FeaturedProperties />
      <TestimonialSection />
      <CallToAction />
    </Layout>
  );
};

export default Home;
