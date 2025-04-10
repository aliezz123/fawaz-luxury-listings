
import { CheckCircle, Home, Smartphone } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <h2 className="section-title">Why Choose Fawaz Real Estate</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard 
            icon={<CheckCircle size={48} className="text-fawaz-gold" />} 
            title="Trusted Developer with Local Expertise"
            description="We understand the Sierra Leone market and provide you with accurate, reliable information and guidance every step of the way."
          />
          
          <FeatureCard 
            icon={<Home size={48} className="text-fawaz-gold" />} 
            title="Wide Range of Quality Properties"
            description="Browse our selection of premium properties that are fairly priced and meet high standards of quality and location."
          />
          
          <FeatureCard 
            icon={<Smartphone size={48} className="text-fawaz-gold" />} 
            title="Easy Viewing and Transparent Process"
            description="We make it simple to view properties and provide clear information about every aspect of your real estate transaction."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="text-center p-6 rounded-lg">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-playfair font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default WhyChooseUs;
