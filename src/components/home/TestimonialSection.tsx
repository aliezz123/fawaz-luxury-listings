
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Fawaz Real Estate made buying my dream home in Sierra Leone simple and transparent. As a diaspora investor, I appreciated their honesty and guidance throughout the process.",
    author: "James Wilson",
    role: "Property Investor from UK"
  },
  {
    id: 2,
    text: "I've worked with several real estate agents in Freetown, but Fawaz stands out for their fair pricing and professionalism. No inflated prices, just quality properties.",
    author: "Aminata Kamara",
    role: "Local Business Owner"
  },
  {
    id: 3,
    text: "Finding commercial space for my restaurant was challenging until I contacted Fawaz. They understood my needs and helped me secure the perfect location.",
    author: "Michael Johnson",
    role: "Restaurant Owner"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20">
      <div className="container-custom">
        <h2 className="section-title">What Our Clients Say</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-6 left-0 text-fawaz-gold">
              <Quote size={60} />
            </div>
            
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 py-8 px-12 ${
                  index === currentIndex ? "opacity-100" : "opacity-0 absolute top-0 left-0"
                }`}
              >
                <p className="text-xl mb-6 text-gray-300">
                  {testimonial.text}
                </p>
                <div className="text-right">
                  <p className="text-fawaz-gold font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-fawaz-gold" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
