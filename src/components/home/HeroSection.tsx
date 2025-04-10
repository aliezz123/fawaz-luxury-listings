
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center bg-gradient-to-b from-black/60 to-black/20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Luxury Properties in Sierra Leone"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6">
            Find Your Perfect Property in Sierra Leone
          </h1>
          <p className="text-xl text-fawaz-light mb-8">
            Residential, commercial, and land listings 
            backed by the trusted Fawaz name.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/properties" className="gold-btn">
              Browse Properties
            </Link>
            <Link to="/contact" className="dark-btn">
              Talk to an Agent
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
