
import { Link } from "react-router-dom";
import { Bed, Bath, MapPin, ArrowRight } from "lucide-react";

// Mock data for featured properties
const featuredProperties = [
  {
    id: 1,
    title: "Luxury Villa with Ocean Views",
    location: "Aberdeen, Freetown",
    price: "$450,000",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    type: "Residential"
  },
  {
    id: 2,
    title: "Modern Office Space",
    location: "Hill Station, Freetown",
    price: "$250,000",
    bedrooms: 0,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    type: "Commercial"
  },
  {
    id: 3,
    title: "Beachfront Development Land",
    location: "Lumley Beach, Freetown",
    price: "$350,000",
    bedrooms: 0,
    bathrooms: 0,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    type: "Land"
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-fawaz-darker">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-playfair font-bold">Featured Properties</h2>
          <Link to="/properties" className="flex items-center text-fawaz-gold hover:underline">
            View All <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PropertyCard = ({ property }: { property: any }) => {
  return (
    <Link to={`/properties/${property.id}`} className="bg-fawaz-dark rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
      <div className="relative h-60">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-fawaz-gold text-fawaz-darker px-3 py-1 rounded text-sm font-medium">
          {property.type}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-playfair font-semibold mb-2">{property.title}</h3>
        
        <div className="flex items-center text-gray-400 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          {(property.bedrooms > 0 || property.bathrooms > 0) && (
            <div className="flex space-x-4 text-gray-400">
              {property.bedrooms > 0 && (
                <div className="flex items-center">
                  <Bed size={16} className="mr-1" />
                  <span>{property.bedrooms}</span>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="flex items-center">
                  <Bath size={16} className="mr-1" />
                  <span>{property.bathrooms}</span>
                </div>
              )}
            </div>
          )}
          <div className="text-fawaz-gold text-xl font-semibold">{property.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProperties;
