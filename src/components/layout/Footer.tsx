import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
const Footer = () => {
  return <footer className="bg-fawaz-darker text-fawaz-light py-12 mt-12 border-t border-fawaz-gold/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img alt="Fawaz Real Estate Logo" className="h-12 object-contain mb-4" src="/lovable-uploads/3639a075-5165-46c2-a033-916f9c002ea9.png" />
            <p className="text-gray-400 mb-4">
              Discover premium residential, commercial, and land listings in Sierra Leone 
              backed by the trusted Fawaz name.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/properties">Properties</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="text-fawaz-gold mr-2" />
                <p>+232 74 155 291</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-fawaz-gold mr-2" />
                <p>info@fawazrealestate.com</p>
              </div>
              <address className="not-italic text-gray-400">
                Freetown, Sierra Leone
              </address>
            </div>
          </div>
        </div>
        
        <div className="border-t border-fawaz-gold/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fawaz Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
const SocialLink = ({
  href,
  icon
}: {
  href: string;
  icon: React.ReactNode;
}) => {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
      <span className="text-fawaz-gold">{icon}</span>
    </a>;
};
const FooterLink = ({
  to,
  children
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return <li>
      <Link to={to} className="text-gray-400 hover:text-fawaz-gold transition-colors">
        {children}
      </Link>
    </li>;
};
export default Footer;