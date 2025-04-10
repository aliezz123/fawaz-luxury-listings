
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-fawaz-dark to-fawaz-darker">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
          Ready to Find Your Perfect Property?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Let our experts guide you through the process of finding and securing 
          your ideal property in Sierra Leone.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/properties" className="gold-btn">
            Browse Properties
          </Link>
          <Link to="/contact" className="dark-btn">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
