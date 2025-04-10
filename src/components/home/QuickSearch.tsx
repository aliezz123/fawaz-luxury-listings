import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const propertyTypes = ["House", "Apartment", "Land", "Commercial", "Office"];
const locations = ["Freetown", "Aberdeen", "Lumley", "Goderich", "Hill Station"];
const priceRanges = ["Under $50,000", "$50,000 - $100,000", "$100,000 - $200,000", "$200,000 - $500,000", "Over $500,000"];
const bedroomOptions = ["Any", "1", "2", "3", "4", "5+"];
const QuickSearch = () => {
  const [type, setType] = useState("House");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (type) params.append("type", type);
    if (location) params.append("location", location);
    if (priceRange) params.append("priceRange", priceRange);
    if (bedrooms) params.append("bedrooms", bedrooms);
    navigate(`/properties?${params.toString()}`);
  };
  return <div className="container-custom -mt-20 relative z-20">
      <div className="p-8 rounded shadow-lg bg-zinc-900">
        <h2 className="text-2xl font-playfair text-fawaz-gold mb-6">Quick Search</h2>
        
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="space-y-2">
            <label className="block text-fawaz-light text-sm">Property Type</label>
            <div className="relative">
              <select className="search-select w-full appearance-none pr-10" value={type} onChange={e => setType(e.target.value)}>
                {propertyTypes.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
              <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-fawaz-gold" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-fawaz-light text-sm">Location</label>
            <div className="relative">
              <select className="search-select w-full appearance-none pr-10" value={location} onChange={e => setLocation(e.target.value)}>
                <option value="">Any Location</option>
                {locations.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
              <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-fawaz-gold" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-fawaz-light text-sm">Price Range</label>
            <div className="relative">
              <select className="search-select w-full appearance-none pr-10" value={priceRange} onChange={e => setPriceRange(e.target.value)}>
                <option value="">Any Price</option>
                {priceRanges.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
              <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-fawaz-gold" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-fawaz-light text-sm">Bedrooms</label>
            <div className="relative">
              <select className="search-select w-full appearance-none pr-10" value={bedrooms} onChange={e => setBedrooms(e.target.value)}>
                <option value="">Any</option>
                {bedroomOptions.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
              <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-fawaz-gold" />
            </div>
          </div>
          
          <div className="flex items-end">
            <button type="submit" className="gold-btn w-full flex items-center justify-center gap-2">
              <Search size={20} />
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
    </div>;
};
export default QuickSearch;