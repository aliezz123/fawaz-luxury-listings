
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    toast.success("Thank you for your message! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <Layout>
      <div className="pt-16 pb-24">
        {/* Page Header */}
        <div className="container-custom mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Have questions about a property or need guidance? Our team is ready to assist you in finding your perfect property in Sierra Leone.
          </p>
        </div>
        
        {/* Contact Information and Form */}
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-fawaz-darker p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-playfair font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <ContactItem 
                    icon={<Phone size={20} className="text-fawaz-gold" />}
                    title="Phone"
                    content="+232 76 000000"
                  />
                  <ContactItem 
                    icon={<Mail size={20} className="text-fawaz-gold" />}
                    title="Email"
                    content="info@fawazrealestate.com"
                  />
                  <ContactItem 
                    icon={<MapPin size={20} className="text-fawaz-gold" />}
                    title="Office"
                    content="Freetown, Sierra Leone"
                  />
                </div>
              </div>
              
              <div className="bg-fawaz-darker p-8 rounded-lg">
                <h2 className="text-2xl font-playfair font-semibold mb-6">Connect With Us</h2>
                
                <div className="flex space-x-4">
                  <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} />
                  <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
                  <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
                </div>
                
                <div className="mt-8">
                  <p className="text-gray-300 mb-4">
                    Follow us on social media for the latest property updates, real estate tips, and news about Sierra Leone's property market.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-fawaz-darker p-8 rounded-lg">
              <h2 className="text-2xl font-playfair font-semibold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput 
                    label="Full Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FormInput 
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput 
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="search-select w-full"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="property-inquiry">Property Inquiry</option>
                      <option value="viewing-request">Viewing Request</option>
                      <option value="investment-advice">Investment Advice</option>
                      <option value="general-question">General Question</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="search-input w-full"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="gold-btn w-full flex items-center justify-center gap-2">
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map Section - Optional */}
        <div className="container-custom mt-16">
          <div className="bg-fawaz-darker p-4 rounded-lg">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.47736349204!2d-13.2957592!3d8.4657805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04f71898239a8d%3A0xf2dc22523103899!2sFreetown%2C%20Sierra%20Leone!5e0!3m2!1sen!2sus!4v1713799608045!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Fawaz Real Estate Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const ContactItem = ({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string;
}) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-300">{content}</p>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors"
    >
      <span className="text-fawaz-gold">{icon}</span>
    </a>
  );
};

const FormInput = ({ 
  label, 
  name, 
  type, 
  value, 
  onChange,
  required = false 
}: { 
  label: string; 
  name: string; 
  type: string; 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="search-input w-full"
        required={required}
      />
    </div>
  );
};

export default Contact;
