
import React, { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { 
  Home,
  Building,
  Briefcase, 
  Users,
  MapPin
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CallToAction from "@/components/shared/CallToAction";

const TheValley = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays when component mounts
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          // Add a small delay to ensure DOM is fully loaded
          await new Promise(resolve => setTimeout(resolve, 100));
          await videoRef.current.play();
          console.log("Video playback started successfully");
        } catch (error) {
          console.error("Error attempting to play video:", error);
          
          // Try again with user interaction simulation
          document.addEventListener('click', () => {
            videoRef.current?.play().catch(e => 
              console.error("Failed to play on user interaction:", e)
            );
          }, { once: true });
        }
      }
    };
    
    playVideo();
    
    // Add visibility change listener to resume playback when tab becomes visible
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && videoRef.current) {
        videoRef.current.play().catch(err => 
          console.error("Failed to resume on visibility change:", err)
        );
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section with Background Video and Overlay */}
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="auto"
        >
          <source src="/lovable-uploads/valley 2-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback image in case video fails to load */}
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          alt="The Valley" 
          className="absolute inset-0 w-full h-full object-cover opacity-0"
          onError={(e) => {
            if (videoRef.current?.error) {
              console.log("Video failed, showing fallback image");
              e.currentTarget.classList.remove('opacity-0');
            }
          }}
        />
        
        <div className="container-custom relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-white mb-6 drop-shadow-lg">
            The Valley
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
            A modern, luxurious community of villas, apartments, offices, and conference facilities.
          </p>
        </div>
      </div>

      {/* Property Types Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4 text-white">
            Explore Our Spaces
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Discover our diverse range of premium spaces designed to meet your needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Luxury Villas Card */}
            <Card className="bg-zinc-900 border-zinc-800 hover:border-fawaz-gold/30 transition-all overflow-hidden rounded-sm">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227" 
                  alt="Luxury Villa" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/70 p-2 rounded-full">
                  <Home className="text-fawaz-gold h-5 w-5" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-fawaz-gold mb-2">Luxury Villas</h3>
                <p className="text-gray-300 text-sm">
                  Spacious, architect-designed homes with private gardens and premium finishes.
                </p>
              </CardContent>
            </Card>
            
            {/* Premium Apartments Card */}
            <Card className="bg-zinc-900 border-zinc-800 hover:border-fawaz-gold/30 transition-all overflow-hidden rounded-sm">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00" 
                  alt="Premium Apartment" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/70 p-2 rounded-full">
                  <Building className="text-fawaz-gold h-5 w-5" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-fawaz-gold mb-2">Premium Apartments</h3>
                <p className="text-gray-300 text-sm">
                  Elegant living spaces with panoramic views and modern amenities.
                </p>
              </CardContent>
            </Card>
            
            {/* Office Spaces Card */}
            <Card className="bg-zinc-900 border-zinc-800 hover:border-fawaz-gold/30 transition-all overflow-hidden rounded-sm">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72" 
                  alt="Office Space" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/70 p-2 rounded-full">
                  <Briefcase className="text-fawaz-gold h-5 w-5" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-fawaz-gold mb-2">Office Spaces</h3>
                <p className="text-gray-300 text-sm">
                  Professional environments designed for productivity and collaboration.
                </p>
              </CardContent>
            </Card>
            
            {/* Conference Facilities Card */}
            <Card className="bg-zinc-900 border-zinc-800 hover:border-fawaz-gold/30 transition-all overflow-hidden rounded-sm">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205" 
                  alt="Conference Facility" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/70 p-2 rounded-full">
                  <Users className="text-fawaz-gold h-5 w-5" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-fawaz-gold mb-2">Conference Facilities</h3>
                <p className="text-gray-300 text-sm">
                  State-of-the-art meeting spaces equipped with the latest technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
            Valley Project Gallery
          </h2>
          
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="aspect-square overflow-hidden rounded-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" 
                      alt="Modern villa exterior" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="aspect-square overflow-hidden rounded-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea" 
                      alt="Luxury apartment interior" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="aspect-square overflow-hidden rounded-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" 
                      alt="Modern kitchen design" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="aspect-square overflow-hidden rounded-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1600607687644-c7171b42498f" 
                      alt="Living room with view" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="aspect-square overflow-hidden rounded-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" 
                      alt="Modern bathroom" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-black/50 border-fawaz-gold/50 text-fawaz-gold hover:bg-black/70" />
            <CarouselNext className="right-2 bg-black/50 border-fawaz-gold/50 text-fawaz-gold hover:bg-black/70" />
          </Carousel>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold mb-6 text-white">
                Find Us
              </h2>
              <p className="text-gray-300 mb-8">
                The Valley is strategically located in the heart of Seneria Sterro with easy access to major highways, shopping centers, and entertainment venues.
              </p>
              
              <div className="flex items-center mb-4">
                <MapPin className="text-fawaz-gold mr-3" />
                <span className="text-white">Seneria Sterro, Hills View</span>
              </div>
              
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center border border-fawaz-gold text-fawaz-gold px-6 py-3 rounded-sm hover:bg-fawaz-gold hover:text-black transition-colors">
                  Get Directions
                </Link>
              </div>
            </div>
            
            <div className="rounded-sm overflow-hidden border border-zinc-800">
              <img 
                src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d" 
                alt="The Valley location" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Using the shared component */}
      <CallToAction />
    </Layout>
  );
};

export default TheValley;
