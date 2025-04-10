
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { 
  ArrowLeft, 
  Bed, 
  Bath, 
  MapPin, 
  Home, 
  SquareFeet, 
  Calendar, 
  Tag, 
  Building,
  Phone,
  Mail
} from "lucide-react";
import CallToAction from "@/components/shared/CallToAction";
import { useEffect, useState } from "react";

// Mock data for properties (same as in Properties.tsx)
const allProperties = [
  {
    id: 1,
    title: "Luxury Villa with Ocean Views",
    location: "Aberdeen, Freetown",
    price: "$450,000",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    built: 2021,
    type: "House",
    description: "This stunning luxury villa offers breathtaking ocean views and modern living spaces. Featuring high-end finishes, a private pool, and spacious terraces, this property represents the pinnacle of coastal living in Sierra Leone. Located in the prestigious Aberdeen area, you'll enjoy proximity to beaches, restaurants, and international amenities.",
    features: [
      "Private swimming pool",
      "Ocean view terraces",
      "Modern kitchen with high-end appliances",
      "Master suite with walk-in closet",
      "Multiple reception areas",
      "Landscaped gardens",
      "Secure parking",
      "24/7 security"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7f34b5e0f01?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    id: 2,
    title: "Modern Office Space",
    location: "Hill Station, Freetown",
    price: "$250,000",
    bedrooms: 0,
    bathrooms: 2,
    sqft: 1800,
    built: 2020,
    type: "Commercial",
    description: "Premium office space in the heart of Hill Station, perfect for businesses looking for a prestigious address. This modern commercial property offers flexible layouts, high-speed internet infrastructure, and ample parking. The building features contemporary design with high ceilings and large windows providing excellent natural light.",
    features: [
      "Open plan layout",
      "High-speed internet ready",
      "Meeting rooms",
      "Reception area",
      "Kitchen facilities",
      "Secure access system",
      "Backup generator",
      "Dedicated parking spaces"
    ],
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    id: 3,
    title: "Beachfront Development Land",
    location: "Lumley Beach, Freetown",
    price: "$350,000",
    bedrooms: 0,
    bathrooms: 0,
    sqft: 5000,
    built: null,
    type: "Land",
    description: "Exceptional opportunity to acquire a prime beachfront plot on the prestigious Lumley Beach. This rare development land offers direct beach access and panoramic ocean views, perfect for building a luxury residence or boutique hospitality property. The land comes with clean title and all necessary permits for development.",
    features: [
      "Direct beach access",
      "Ocean views",
      "Flat terrain",
      "All utilities available",
      "Development permits in place",
      "Secure boundaries",
      "Road access",
      "Near to amenities"
    ],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1520116468816-95b69f847357?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    ]
  }
];

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<any | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // In a real app, you would fetch data from an API
    const foundProperty = allProperties.find(p => p.id === Number(id));
    
    if (foundProperty) {
      setProperty(foundProperty);
      setActiveImage(foundProperty.images[0]);
    }
    
    setLoading(false);
  }, [id]);
  
  if (loading) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <div className="w-12 h-12 border-4 border-fawaz-gold border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading property details...</p>
        </div>
      </Layout>
    );
  }
  
  if (!property) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">Property Not Found</h2>
          <p className="text-gray-300 mb-8">The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/properties" className="gold-btn">
            Browse All Properties
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="pt-16 pb-24">
        {/* Back Button */}
        <div className="container-custom mb-8">
          <Link to="/properties" className="flex items-center text-fawaz-gold hover:underline">
            <ArrowLeft size={20} className="mr-2" />
            Back to Properties
          </Link>
        </div>
        
        {/* Property Title and Price */}
        <div className="container-custom mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">
                {property.title}
              </h1>
              <div className="flex items-center text-gray-300">
                <MapPin size={18} className="mr-1" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-fawaz-gold text-2xl md:text-3xl font-playfair font-bold">
                {property.price}
              </div>
            </div>
          </div>
        </div>
        
        {/* Property Images */}
        <div className="container-custom mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-fawaz-darker">
                <img 
                  src={activeImage} 
                  alt={property.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto">
              {property.images.map((img: string, index: number) => (
                <div 
                  key={index}
                  className={`relative rounded-lg overflow-hidden cursor-pointer transition-all ${
                    activeImage === img ? "ring-2 ring-fawaz-gold" : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setActiveImage(img)}
                >
                  <div className="aspect-w-4 aspect-h-3">
                    <img 
                      src={img} 
                      alt={`${property.title} - Image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Property Details */}
        <div className="container-custom mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Details */}
            <div className="md:col-span-2">
              <div className="bg-fawaz-darker p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-playfair font-semibold mb-6">
                  Property Details
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                  <DetailItem 
                    icon={<Home size={20} className="text-fawaz-gold" />}
                    label="Property Type"
                    value={property.type}
                  />
                  {property.bedrooms > 0 && (
                    <DetailItem 
                      icon={<Bed size={20} className="text-fawaz-gold" />}
                      label="Bedrooms"
                      value={property.bedrooms.toString()}
                    />
                  )}
                  {property.bathrooms > 0 && (
                    <DetailItem 
                      icon={<Bath size={20} className="text-fawaz-gold" />}
                      label="Bathrooms"
                      value={property.bathrooms.toString()}
                    />
                  )}
                  {property.sqft > 0 && (
                    <DetailItem 
                      icon={<SquareFeet size={20} className="text-fawaz-gold" />}
                      label="Area"
                      value={`${property.sqft} sqft`}
                    />
                  )}
                  {property.built && (
                    <DetailItem 
                      icon={<Calendar size={20} className="text-fawaz-gold" />}
                      label="Year Built"
                      value={property.built.toString()}
                    />
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {property.description}
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-fawaz-gold rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Map placeholder */}
              <div className="bg-fawaz-darker p-8 rounded-lg">
                <h2 className="text-2xl font-playfair font-semibold mb-6">
                  Location
                </h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.47736349204!2d-13.2957592!3d8.4657805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04f71898239a8d%3A0xf2dc22523103899!2sFreetown%2C%20Sierra%20Leone!5e0!3m2!1sen!2sus!4v1713799608045!5m2!1sen!2sus" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Property Location"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Contact Agent */}
              <div className="bg-fawaz-darker p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-playfair font-semibold mb-6">
                  Interested in this property?
                </h2>
                
                <div className="mb-6">
                  <p className="text-gray-300 mb-4">
                    Contact our agents to schedule a viewing or get more information about this property.
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="tel:+23276000000" 
                      className="flex items-center justify-center gap-2 gold-btn w-full"
                    >
                      <Phone size={18} />
                      <span>Call Agent</span>
                    </a>
                    
                    <a 
                      href="https://wa.me/23276000000" 
                      className="flex items-center justify-center gap-2 dark-btn w-full"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="text-fawaz-gold"
                      >
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M9 14a5 5 0 0 0 6 0" />
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                    
                    <Link 
                      to="/contact" 
                      className="flex items-center justify-center gap-2 bg-fawaz-darker border border-fawaz-gold/50 text-fawaz-light py-3 px-6 rounded hover:bg-fawaz-gold/10 transition-colors w-full"
                    >
                      <Mail size={18} className="text-fawaz-gold" />
                      <span>Email Inquiry</span>
                    </Link>
                  </div>
                </div>
                
                <div className="border-t border-fawaz-gold/20 pt-6">
                  <p className="text-center text-gray-400 text-sm">
                    Reference ID: FWZPROP{property.id.toString().padStart(4, '0')}
                  </p>
                </div>
              </div>
              
              {/* Similar Properties */}
              <div className="bg-fawaz-darker p-8 rounded-lg">
                <h2 className="text-2xl font-playfair font-semibold mb-6">
                  Similar Properties
                </h2>
                
                <div className="space-y-4">
                  {allProperties
                    .filter(p => p.id !== property.id && p.type === property.type)
                    .slice(0, 2)
                    .map(p => (
                      <Link 
                        key={p.id} 
                        to={`/properties/${p.id}`}
                        className="flex gap-4 group"
                      >
                        <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={p.images[0]} 
                            alt={p.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1 group-hover:text-fawaz-gold transition-colors">{p.title}</h3>
                          <p className="text-gray-400 text-sm mb-1">{p.location}</p>
                          <p className="text-fawaz-gold font-semibold">{p.price}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CallToAction />
    </Layout>
  );
};

const DetailItem = ({ 
  icon, 
  label, 
  value 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string;
}) => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-2">
        {icon}
      </div>
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
};

export default PropertyDetails;
