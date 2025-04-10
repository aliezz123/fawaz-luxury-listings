
import Layout from "@/components/layout/Layout";
import CallToAction from "@/components/shared/CallToAction";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="pt-16 pb-24">
        {/* Hero Section */}
        <div className="container-custom mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">About Fawaz Real Estate</h1>
            <p className="text-xl text-gray-300">
              The premier real estate company in Sierra Leone, focused on delivering premium properties and exceptional service.
            </p>
          </div>
        </div>
        
        {/* Company Story */}
        <div className="container-custom mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded with a vision to transform the real estate landscape in Sierra Leone, 
                Fawaz Real Estate has established itself as a trusted name in premium property development and sales.
              </p>
              <p className="text-gray-300 mb-4">
                As part of the Fawaz Group, we leverage decades of experience in construction and development 
                to deliver properties that meet international standards while understanding local needs.
              </p>
              <p className="text-gray-300">
                Our commitment to transparency, fairness in pricing, and exceptional customer service 
                sets us apart in the Sierra Leone real estate market.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Fawaz Real Estate Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="bg-fawaz-darker py-20 mb-20">
          <div className="container-custom">
            <h2 className="text-3xl font-playfair font-bold text-center mb-16">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ValueCard 
                title="Integrity" 
                description="We are committed to honesty and transparency in every aspect of our business, from accurate property listings to fair pricing."
              />
              <ValueCard 
                title="Excellence" 
                description="We strive for excellence in our service, properties, and client relationships, exceeding expectations at every opportunity."
              />
              <ValueCard 
                title="Innovation" 
                description="We embrace innovation in our approach to real estate, using modern technology and practices to enhance the client experience."
              />
            </div>
          </div>
        </div>
        
        {/* Why We're Different */}
        <div className="container-custom mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-center mb-10">Why We're Different</h2>
            
            <div className="space-y-6">
              <DifferencePoint 
                title="We Only List Fairly Priced Properties" 
                description="Unlike competitors who list overpriced properties, we reject listings with unrealistic prices, ensuring our clients get genuine value."
              />
              <DifferencePoint 
                title="Local Expertise with International Standards" 
                description="We combine deep knowledge of the Sierra Leone market with international real estate best practices."
              />
              <DifferencePoint 
                title="Transparency at Every Step" 
                description="From property viewing to final purchase, we maintain complete transparency, with no hidden fees or surprises."
              />
              <DifferencePoint 
                title="Dedicated Client Support" 
                description="Our team provides personalized support throughout your real estate journey, whether you're local or investing from abroad."
              />
            </div>
          </div>
        </div>
        
        {/* Team Section - Optional, can be expanded */}
        <div className="container-custom mb-20">
          <h2 className="text-3xl font-playfair font-bold text-center mb-16">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <TeamMember 
              name="Ahmed Fawaz" 
              position="Founder & CEO" 
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <TeamMember 
              name="Sarah Johnson" 
              position="Head of Sales" 
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            />
            <TeamMember 
              name="Michael Kamara" 
              position="Property Development Manager" 
              image="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          </div>
        </div>
      </div>
      
      <CallToAction />
    </Layout>
  );
};

const ValueCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-fawaz-dark p-8 rounded-lg text-center">
      <h3 className="text-xl font-playfair font-semibold text-fawaz-gold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const DifferencePoint = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <CheckCircle size={24} className="text-fawaz-gold" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const TeamMember = ({ name, position, image }: { name: string; position: string; image: string }) => {
  return (
    <div className="text-center">
      <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-playfair font-semibold mb-1">{name}</h3>
      <p className="text-fawaz-gold">{position}</p>
    </div>
  );
};

export default About;
