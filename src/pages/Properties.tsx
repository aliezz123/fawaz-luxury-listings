
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ChevronDown, Filter, Bed, Bath, MapPin, Search } from "lucide-react";
import CallToAction from "@/components/shared/CallToAction";

// Mock data for properties
const allProperties = [
  {
    id: 1,
    title: "Luxury Villa with Ocean Views",
    location: "Aberdeen, Freetown",
    price: "$450,000",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    type: "House",
    featured: true
  },
  {
    id: 2,
    title: "Modern Office Space",
    location: "Hill Station, Freetown",
    price: "$250,000",
    bedrooms: 0,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    type: "Commercial",
    featured: true
  },
  {
    id: 3,
    title: "Beachfront Development Land",
    location: "Lumley Beach, Freetown",
    price: "$350,000",
    bedrooms: 0,
    bathrooms: 0,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    type: "Land",
    featured: true
  },
  {
    id: 4,
    title: "Elegant Family Home",
    location: "Goderich, Freetown",
    price: "$320,000",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    type: "House",
    featured: false
  },
  {
    id: 5,
    title: "Waterfront Apartment",
    location: "Aberdeen, Freetown",
    price: "$180,000",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80",
    type: "Apartment",
    featured: false
  },
  {
    id: 6,
    title: "Retail Space in Prime Location",
    location: "Downtown Freetown",
    price: "$200,000",
    bedrooms: 0,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80",
    type: "Commercial",
    featured: false
  },
  {
    id: 7,
    title: "Modern Villa with Pool",
    location: "Hill Station, Freetown",
    price: "$480,000",
    bedrooms: 5,
    bathrooms: 4,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    type: "House",
    featured: false
  },
  {
    id: 8,
    title: "Development Land with Planning Permission",
    location: "Goderich, Freetown",
    price: "$150,000",
    bedrooms: 0,
    bathrooms: 0,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    type: "Land",
    featured: false
  }
];

const propertyTypes = ["All Types", "House", "Apartment", "Land", "Commercial", "Office"];
const locations = ["All Locations", "Freetown", "Aberdeen", "Lumley", "Goderich", "Hill Station", "Downtown Freetown"];
const priceRanges = [
  "Any Price",
  "Under $50,000",
  "$50,000 - $100,000",
  "$100,000 - $200,000",
  "$200,000 - $500,000",
  "Over $500,000",
];
const bedroomOptions = ["Any", "1", "2", "3", "4", "5+"];

const Properties = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [properties, setProperties] = useState(allProperties);
  const [filters, setFilters] = useState({
    type: searchParams.get("type") || "All Types",
    location: searchParams.get("location") || "All Locations",
    priceRange: searchParams.get("priceRange") || "Any Price",
    bedrooms: searchParams.get("bedrooms") || "Any",
    searchQuery: ""
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  useEffect(() => {
    let filtered = allProperties;
    
    if (filters.type && filters.type !== "All Types") {
      filtered = filtered.filter(property => property.type === filters.type);
    }
    
    if (filters.location && filters.location !== "All Locations") {
      filtered = filtered.filter(property => property.location.includes(filters.location));
    }
    
    if (filters.bedrooms && filters.bedrooms !== "Any") {
      if (filters.bedrooms === "5+") {
        filtered = filtered.filter(property => property.bedrooms >= 5);
      } else {
        filtered = filtered.filter(property => property.bedrooms === parseInt(filters.bedrooms));
      }
    }
    
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(property => 
        property.title.toLowerCase().includes(query) || 
        property.location.toLowerCase().includes(query)
      );
    }
    
    setProperties(filtered);
  }, [filters]);
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSearchParams();
  };
  
  const updateSearchParams = () => {
    const params = new URLSearchParams();
    if (filters.type !== "All Types") params.set("type", filters.type);
    if (filters.location !== "All Locations") params.set("location", filters.location);
    if (filters.priceRange !== "Any Price") params.set("priceRange", filters.priceRange);
    if (filters.bedrooms !== "Any") params.set("bedrooms", filters.bedrooms);
    
    setSearchParams(params);
  };
  
  return (
    <Layout>
      <div className="pt-16 pb-24">
        {/* Page Header */}
        <div className="container-custom mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-center">
            Browse Our Properties
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Discover our selection of premium properties in Sierra Leone, all fairly priced and meeting high standards of quality.
          </p>
        </div>
        
        {/* Search and Filter Section */}
        <div className="container-custom mb-12">
          <div className="bg-fawaz-darker p-6 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-playfair">Search Properties</h2>
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center text-fawaz-gold"
              >
                <Filter size={20} className="mr-2" />
                {isFilterOpen ? "Hide Filters" : "Show Filters"}
              </button>
            </div>
            
            <form onSubmit={handleSearchSubmit}>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <div className="relative">
                    <input 
                      type="text"
                      placeholder="Search by property name or location"
                      className="search-input w-full"
                      value={filters.searchQuery}
                      onChange={(e) => setFilters({...filters, searchQuery: e.target.value})}
                    />
                    <Search size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <button type="submit" className="gold-btn md:w-auto">
                  Search
                </button>
              </div>
              
              {isFilterOpen && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                  <FilterSelect 
                    label="Property Type"
                    options={propertyTypes}
                    value={filters.type}
                    onChange={(value) => setFilters({...filters, type: value})}
                  />
                  <FilterSelect 
                    label="Location"
                    options={locations}
                    value={filters.location}
                    onChange={(value) => setFilters({...filters, location: value})}
                  />
                  <FilterSelect 
                    label="Price Range"
                    options={priceRanges}
                    value={filters.priceRange}
                    onChange={(value) => setFilters({...filters, priceRange: value})}
                  />
                  <FilterSelect 
                    label="Bedrooms"
                    options={bedroomOptions}
                    value={filters.bedrooms}
                    onChange={(value) => setFilters({...filters, bedrooms: value})}
                  />
                </div>
              )}
            </form>
          </div>
        </div>
        
        {/* Properties Grid */}
        <div className="container-custom">
          {properties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-playfair font-semibold mb-4">No properties found</h3>
              <p className="text-gray-400 mb-6">
                No properties match your current search criteria. Try adjusting your filters or search terms.
              </p>
              <button 
                onClick={() => {
                  setFilters({
                    type: "All Types",
                    location: "All Locations",
                    priceRange: "Any Price",
                    bedrooms: "Any",
                    searchQuery: ""
                  });
                  setSearchParams({});
                }}
                className="dark-btn"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
      
      <CallToAction />
    </Layout>
  );
};

const FilterSelect = ({ 
  label, 
  options, 
  value, 
  onChange 
}: { 
  label: string; 
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-fawaz-light text-sm">{label}</label>
      <div className="relative">
        <select 
          className="search-select w-full appearance-none pr-10"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-fawaz-gold" />
      </div>
    </div>
  );
};

const PropertyCard = ({ property }: { property: any }) => {
  return (
    <a href={`/properties/${property.id}`} className="bg-fawaz-dark rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
      <div className="relative h-60">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-fawaz-gold text-fawaz-darker px-3 py-1 rounded text-sm font-medium">
          {property.type}
        </div>
        {property.featured && (
          <div className="absolute top-4 right-4 bg-black/80 text-fawaz-gold px-3 py-1 rounded text-sm font-medium">
            Featured
          </div>
        )}
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
    </a>
  );
};

export default Properties;
