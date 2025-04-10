
import { Link } from "react-router-dom";
import { Mail, Phone, MessageSquare } from "lucide-react";

const CallToAction = () => {
  return <section className="py-20 bg-black">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
          Ready to Find Your Dream Property?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Our team of experienced agents is ready to assist you with finding the perfect property
          that meets your needs and budget.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {/* Call Us Box */}
          <div className="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex flex-col items-center">
            <div className="bg-transparent w-12 h-12 flex items-center justify-center mb-4">
              <Phone className="text-fawaz-gold w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Call Us</h3>
            <p className="text-fawaz-gold">+232 74 155 291</p>
          </div>
          
          {/* WhatsApp Box */}
          <a 
            href="https://wa.me/447747417544?text=Hello%2C%20I%27m%20interested%20in%20a%20property.%20Could%20you%20please%20help%20me%20find%20more%20details%3F" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex flex-col items-center hover:border-fawaz-gold/30 transition-colors"
          >
            <div className="bg-transparent w-12 h-12 flex items-center justify-center mb-4">
              <MessageSquare className="text-fawaz-gold w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
            <p className="text-gray-400">Quick Chat</p>
          </a>
          
          {/* Email Box */}
          <div className="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex flex-col items-center">
            <div className="bg-transparent w-12 h-12 flex items-center justify-center mb-4">
              <Mail className="text-fawaz-gold w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Email</h3>
            <p className="text-gray-300">info@fawazrealestate.com</p>
          </div>
        </div>
        
        <Link to="/contact" className="gold-btn inline-block">
          Contact Us
        </Link>
      </div>
    </section>;
};

export default CallToAction;
