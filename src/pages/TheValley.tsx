
import React from "react";
import Layout from "@/components/layout/Layout";
import CallToAction from "@/components/shared/CallToAction";

const TheValley = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-zinc-900">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-8">
            The Valley
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img 
                src="/lovable-uploads/7d01a74f-876b-4561-9c53-b57f81e16036.png" 
                alt="The Valley" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold text-fawaz-gold mb-4">
                Exclusive Valley Development
              </h2>
              <p className="text-fawaz-light text-lg mb-6">
                Discover our exclusive development project located in the most scenic valley of Sierra Leone. 
                Nestled between lush mountains and offering breathtaking views, The Valley represents 
                luxury living in harmony with nature.
              </p>
              <p className="text-fawaz-light text-lg mb-6">
                This premium development features custom-designed homes with modern amenities while 
                preserving the natural beauty of the surrounding landscape.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-zinc-800 p-4 rounded-sm">
                  <h3 className="text-xl font-semibold text-fawaz-gold mb-2">Location</h3>
                  <p className="text-fawaz-light">Scenic valley in the Western Area, Sierra Leone</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-sm">
                  <h3 className="text-xl font-semibold text-fawaz-gold mb-2">Property Types</h3>
                  <p className="text-fawaz-light">Luxury villas and premium apartments</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-sm">
                  <h3 className="text-xl font-semibold text-fawaz-gold mb-2">Amenities</h3>
                  <p className="text-fawaz-light">Swimming pools, gardens, 24/7 security</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-sm">
                  <h3 className="text-xl font-semibold text-fawaz-gold mb-2">Status</h3>
                  <p className="text-fawaz-light">Under development, pre-sales available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-16 bg-black">
        <div className="container-custom">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">
            Valley Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-square bg-zinc-800 rounded-sm flex items-center justify-center">
              <p className="text-fawaz-light italic">Project Image 1</p>
            </div>
            <div className="aspect-square bg-zinc-800 rounded-sm flex items-center justify-center">
              <p className="text-fawaz-light italic">Project Image 2</p>
            </div>
            <div className="aspect-square bg-zinc-800 rounded-sm flex items-center justify-center">
              <p className="text-fawaz-light italic">Project Image 3</p>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </Layout>
  );
};

export default TheValley;
