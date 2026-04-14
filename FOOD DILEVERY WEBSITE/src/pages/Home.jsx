import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import TrackingSection from '../components/TrackingSection';
import WhyFoodie from '../components/WhyFoodie';
import Testimonial from '../components/Testimonial';
import AppCTA from '../components/AppCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <FeaturedCategories />
        <TrackingSection />
        <WhyFoodie />
        <Testimonial />
        <AppCTA />
      </main>
      <Footer />
    </>
  );
};

export default Home;
