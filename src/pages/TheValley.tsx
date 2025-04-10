
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TheValley = () => {
  return (
    <Layout>
      {/* Hero Section with Large Background Image */}
      <div className="relative h-[80vh] bg-zinc-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="public/lovable-uploads/c441e6d9-4686-4485-9c26-0aa53a790dcc.png" 
          alt="The Valley Development" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container-custom relative z-20 h-full flex items-center justify-center">
          <h1 className="text-7xl md:text-8xl font-playfair font-bold text-white text-center drop-shadow-lg">
            The Valley
          </h1>
        </div>
      </div>

      {/* Development Description Section */}
      <div className="py-16 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img 
                src="public/lovable-uploads/c441e6d9-4686-4485-9c26-0aa53a790dcc.png" 
                alt="The Valley Development View" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-playfair font-semibold text-fawaz-gold mb-6">
                Exclusive Valley Development
              </h2>
              <p className="text-fawaz-light text-lg mb-6">
                Explore acivillas, premium apartments, and breathtaking views 
                inexted in nature.
              </p>
              <p className="text-fawaz-light text-lg mb-8">
                Feature scieetic apactise rich aw geting rang of exntripbocting
                space stortic aciass of sciass funners deaptional naturizons,
                and natural surroundings int olum. nature.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <div className="bg-zinc-900 p-6 rounded-sm">
                  <h3 className="text-xl font-semibold text-fawaz-gold mb-2">Location</h3>
                  <p className="text-fawaz-light">Seneria Sterro, Hills View</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-sm">
                  <h3 className="text-xl font-semibold text-fawaz-gold mb-2">Property Type:</h3>
                  <p className="text-fawaz-light">Vilaa, apartments, penthouses</p>
                </div>
              </div>
              
              <div className="bg-zinc-900 p-6 rounded-sm mb-6">
                <h3 className="text-xl font-semibold text-fawaz-gold mb-2">Amenities</h3>
                <p className="text-fawaz-light">Cudthouse, pool, parks, 24/7 security</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 bg-black">
        <div className="container-custom">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">
            Valley Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-square overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                alt="Modern villa exterior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1551038247-3d9af20df552" 
                alt="Hillside development" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be" 
                alt="Property with pool" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-center">
        <div className="container-custom">
          <h2 className="text-5xl font-playfair font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-fawaz-light text-lg mb-10 max-w-2xl mx-auto">
            Connect with our experienced agents to explour rating purchasing option.
          </p>
          <Link to="/contact">
            <Button className="bg-fawaz-gold text-fawaz-darker hover:bg-fawaz-gold/90 py-6 px-10 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default TheValley;
