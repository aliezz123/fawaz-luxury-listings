
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WebsiteExtractionPage = () => {
  const [copied, setCopied] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const handleCopy = (htmlCode: string) => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <div className="container-custom py-16">
        <h1 className="text-4xl font-playfair font-bold mb-8">HTML Code Extractor</h1>
        <p className="mb-8 text-gray-300">
          Copy the HTML code for the page you want to save as a standalone HTML file.
          <br />
          <span className="text-yellow-500 mt-2 block">
            Note: Make sure to update the image URLs when using these files locally.
          </span>
        </p>

        <Tabs defaultValue="home" value={activePage} onValueChange={setActivePage}>
          <TabsList className="mb-8">
            <TabsTrigger value="home">Home Page</TabsTrigger>
            <TabsTrigger value="about">About Us</TabsTrigger>
            <TabsTrigger value="properties">Properties</TabsTrigger>
            <TabsTrigger value="valley">The Valley</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
          </TabsList>
          
          <TabsContent value="home">
            <div className="mb-4 flex justify-end">
              <Button onClick={() => handleCopy(homePageHtml)} className="gold-btn">
                {copied && activePage === "home" ? "Copied!" : "Copy HTML"}
              </Button>
            </div>
            <div className="bg-black/50 p-4 rounded-lg overflow-auto max-h-[60vh]">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                {homePageHtml}
              </pre>
            </div>
          </TabsContent>
          
          <TabsContent value="about">
            <div className="mb-4 flex justify-end">
              <Button onClick={() => handleCopy(aboutPageHtml)} className="gold-btn">
                {copied && activePage === "about" ? "Copied!" : "Copy HTML"}
              </Button>
            </div>
            <div className="bg-black/50 p-4 rounded-lg overflow-auto max-h-[60vh]">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                {aboutPageHtml}
              </pre>
            </div>
          </TabsContent>
          
          <TabsContent value="properties">
            <div className="mb-4 flex justify-end">
              <Button onClick={() => handleCopy(propertiesPageHtml)} className="gold-btn">
                {copied && activePage === "properties" ? "Copied!" : "Copy HTML"}
              </Button>
            </div>
            <div className="bg-black/50 p-4 rounded-lg overflow-auto max-h-[60vh]">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                {propertiesPageHtml}
              </pre>
            </div>
          </TabsContent>
          
          <TabsContent value="valley">
            <div className="mb-4 flex justify-end">
              <Button onClick={() => handleCopy(valleyPageHtml)} className="gold-btn">
                {copied && activePage === "valley" ? "Copied!" : "Copy HTML"}
              </Button>
            </div>
            <div className="bg-black/50 p-4 rounded-lg overflow-auto max-h-[60vh]">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                {valleyPageHtml}
              </pre>
            </div>
          </TabsContent>
          
          <TabsContent value="contact">
            <div className="mb-4 flex justify-end">
              <Button onClick={() => handleCopy(contactPageHtml)} className="gold-btn">
                {copied && activePage === "contact" ? "Copied!" : "Copy HTML"}
              </Button>
            </div>
            <div className="bg-black/50 p-4 rounded-lg overflow-auto max-h-[60vh]">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                {contactPageHtml}
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

// HTML code for the home page
const homePageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fawaz Real Estate - Premium Properties in Sierra Leone</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <!-- Font imports -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      background-color: #0d0d0d;
      color: #f5f5f5;
      font-family: 'Open Sans', sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Playfair Display', serif;
    }
    .container-custom {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .bg-fawaz-darker {
      background-color: #070707;
    }
    .bg-fawaz-dark {
      background-color: #0d0d0d;
    }
    .text-fawaz-gold {
      color: #c9a54f;
    }
    .text-fawaz-light {
      color: #f5f5f5;
    }
    .gold-btn {
      background-color: #c9a54f;
      color: #070707;
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      transition: all 0.2s;
      display: inline-block;
    }
    .gold-btn:hover {
      opacity: 0.9;
    }
    .dark-btn {
      background-color: #070707;
      color: #c9a54f;
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      border: 1px solid #c9a54f;
      transition: all 0.2s;
      display: inline-block;
    }
    .dark-btn:hover {
      background-color: #0d0d0d;
    }
    .search-input, .search-select {
      background-color: #070707;
      color: #f5f5f5;
      border: none;
      border-radius: 0.25rem;
      padding: 0.75rem 1rem;
    }
    .search-input:focus, .search-select:focus {
      outline: none;
      box-shadow: 0 0 0 1px #c9a54f;
    }
    .section-title {
      font-size: 2.5rem;
      line-height: 1.2;
      font-weight: 700;
      text-align: center;
      margin-bottom: 4rem;
      font-family: 'Playfair Display', serif;
    }
    @media (min-width: 768px) {
      .section-title {
        font-size: 3rem;
      }
    }
  </style>
</head>
<body>
  <!-- Navbar -->
  <nav class="bg-fawaz-darker py-4">
    <div class="container-custom flex flex-col md:flex-row justify-between items-center">
      <a href="/" class="flex items-center mb-4 md:mb-0">
        <div class="flex items-center">
          <img alt="Fawaz Real Estate Logo" class="h-12 object-contain" src="https://your-domain.com/assets/logo.png" />
        </div>
      </a>
      <div class="flex space-x-8">
        <a href="/" class="text-lg transition-colors text-fawaz-gold">Home</a>
        <a href="/about" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">About Us</a>
        <a href="/properties" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">Properties</a>
        <a href="/the-valley" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">The Valley</a>
        <a href="/contact" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">Contact Us</a>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="flex-grow">
    <!-- Hero Section -->
    <section class="relative h-[80vh] flex items-center bg-gradient-to-b from-black/60 to-black/20">
      <div class="absolute inset-0 z-0">
        <img
          src="https://your-domain.com/assets/hero-image.jpg"
          alt="Luxury Properties in Sierra Leone"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6">
            Find Your Perfect Property in Sierra Leone
          </h1>
          <p class="text-xl text-fawaz-light mb-8">
            Residential, commercial, and land listings 
            backed by the trusted Fawaz name.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="/properties" class="gold-btn">
              Browse Properties
            </a>
            <a href="/contact" class="dark-btn">
              Talk to an Agent
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Search -->
    <div class="container-custom -mt-20 relative z-20">
      <div class="p-8 rounded shadow-lg bg-zinc-900">
        <h2 class="text-2xl font-playfair text-fawaz-gold mb-6">Quick Search</h2>
        
        <form class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div class="space-y-2">
            <label class="block text-fawaz-light text-sm">Property Type</label>
            <div class="relative">
              <select class="search-select w-full appearance-none pr-10">
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Land">Land</option>
                <option value="Commercial">Commercial</option>
                <option value="Office">Office</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute right-3 top-1/2 -translate-y-1/2 text-fawaz-gold"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
          
          <div class="space-y-2">
            <label class="block text-fawaz-light text-sm">Location</label>
            <div class="relative">
              <select class="search-select w-full appearance-none pr-10">
                <option value="">Any Location</option>
                <option value="Freetown">Freetown</option>
                <option value="Aberdeen">Aberdeen</option>
                <option value="Lumley">Lumley</option>
                <option value="Goderich">Goderich</option>
                <option value="Hill Station">Hill Station</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute right-3 top-1/2 -translate-y-1/2 text-fawaz-gold"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
          
          <div class="space-y-2">
            <label class="block text-fawaz-light text-sm">Price Range</label>
            <div class="relative">
              <select class="search-select w-full appearance-none pr-10">
                <option value="">Any Price</option>
                <option value="Under $50,000">Under $50,000</option>
                <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                <option value="$100,000 - $200,000">$100,000 - $200,000</option>
                <option value="$200,000 - $500,000">$200,000 - $500,000</option>
                <option value="Over $500,000">Over $500,000</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute right-3 top-1/2 -translate-y-1/2 text-fawaz-gold"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
          
          <div class="space-y-2">
            <label class="block text-fawaz-light text-sm">Bedrooms</label>
            <div class="relative">
              <select class="search-select w-full appearance-none pr-10">
                <option value="">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute right-3 top-1/2 -translate-y-1/2 text-fawaz-gold"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
          
          <div class="flex items-end">
            <button type="submit" class="gold-btn w-full flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Why Choose Us -->
    <section class="py-20">
      <div class="container-custom">
        <h2 class="section-title">Why Choose Fawaz Real Estate</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div class="text-center p-6 rounded-lg">
            <div class="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3 class="text-xl font-playfair font-semibold mb-3">Trusted Developer with Local Expertise</h3>
            <p class="text-gray-400">We understand the Sierra Leone market and provide you with accurate, reliable information and guidance every step of the way.</p>
          </div>
          
          <div class="text-center p-6 rounded-lg">
            <div class="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <h3 class="text-xl font-playfair font-semibold mb-3">Wide Range of Quality Properties</h3>
            <p class="text-gray-400">Browse our selection of premium properties that are fairly priced and meet high standards of quality and location.</p>
          </div>
          
          <div class="text-center p-6 rounded-lg">
            <div class="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><line x1="12" x2="12.01" y1="18" y2="18"></line></svg>
            </div>
            <h3 class="text-xl font-playfair font-semibold mb-3">Easy Viewing and Transparent Process</h3>
            <p class="text-gray-400">We make it simple to view properties and provide clear information about every aspect of your real estate transaction.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Properties -->
    <section class="py-20 bg-fawaz-darker">
      <div class="container-custom">
        <div class="flex justify-between items-center mb-12">
          <h2 class="text-3xl font-playfair font-bold">Featured Properties</h2>
          <a href="/properties" class="flex items-center text-fawaz-gold hover:underline">
            View All 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Property Card 1 -->
          <a href="/properties/1" class="bg-fawaz-dark rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <div class="relative h-60">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Luxury Villa with Ocean Views" 
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4 bg-fawaz-gold text-fawaz-darker px-3 py-1 rounded text-sm font-medium">
                Residential
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-playfair font-semibold mb-2">Luxury Villa with Ocean Views</h3>
              
              <div class="flex items-center text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span class="text-sm">Aberdeen, Freetown</span>
              </div>
              
              <div class="flex justify-between items-center mb-4">
                <div class="flex space-x-4 text-gray-400">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M2 9V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v4"></path><path d="M2 13h20"></path><path d="M15 13v9"></path><path d="M9 13v9"></path><path d="M2 9h20"></path></svg>
                    <span>4</span>
                  </div>
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M9 5H5a2 2 0 0 0-2 2v14"></path><path d="M19 21V3"></path><path d="M9 5c0 2.8.7 5 2 5s2-2.2 2-5"></path><path d="M12 10v11"></path></svg>
                    <span>3</span>
                  </div>
                </div>
                <div class="text-fawaz-gold text-xl font-semibold">$450,000</div>
              </div>
            </div>
          </a>

          <!-- Property Card 2 -->
          <a href="/properties/2" class="bg-fawaz-dark rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <div class="relative h-60">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Modern Office Space" 
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4 bg-fawaz-gold text-fawaz-darker px-3 py-1 rounded text-sm font-medium">
                Commercial
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-playfair font-semibold mb-2">Modern Office Space</h3>
              
              <div class="flex items-center text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span class="text-sm">Hill Station, Freetown</span>
              </div>
              
              <div class="flex justify-between items-center mb-4">
                <div class="flex space-x-4 text-gray-400">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M9 5H5a2 2 0 0 0-2 2v14"></path><path d="M19 21V3"></path><path d="M9 5c0 2.8.7 5 2 5s2-2.2 2-5"></path><path d="M12 10v11"></path></svg>
                    <span>2</span>
                  </div>
                </div>
                <div class="text-fawaz-gold text-xl font-semibold">$250,000</div>
              </div>
            </div>
          </a>

          <!-- Property Card 3 -->
          <a href="/properties/3" class="bg-fawaz-dark rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <div class="relative h-60">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Beachfront Development Land" 
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4 bg-fawaz-gold text-fawaz-darker px-3 py-1 rounded text-sm font-medium">
                Land
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-playfair font-semibold mb-2">Beachfront Development Land</h3>
              
              <div class="flex items-center text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span class="text-sm">Lumley Beach, Freetown</span>
              </div>
              
              <div class="flex justify-between items-center mb-4">
                <div class="flex space-x-4 text-gray-400">
                </div>
                <div class="text-fawaz-gold text-xl font-semibold">$350,000</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20">
      <div class="container-custom">
        <h2 class="section-title">What Our Clients Say</h2>
        
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <div class="absolute -top-6 left-0 text-fawaz-gold">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
            </div>
            
            <div class="py-8 px-12">
              <p class="text-xl mb-6 text-gray-300">
                Fawaz Real Estate made buying my dream home in Sierra Leone simple and transparent. As a diaspora investor, I appreciated their honesty and guidance throughout the process.
              </p>
              <div class="text-right">
                <p class="text-fawaz-gold font-semibold">James Wilson</p>
                <p class="text-gray-400 text-sm">Property Investor from UK</p>
              </div>
            </div>
          </div>
          
          <div class="flex justify-center mt-8 space-x-2">
            <button class="w-3 h-3 rounded-full bg-fawaz-gold"></button>
            <button class="w-3 h-3 rounded-full bg-gray-600"></button>
            <button class="w-3 h-3 rounded-full bg-gray-600"></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-black">
      <div class="container-custom text-center">
        <h2 class="text-4xl md:text-5xl font-playfair font-bold mb-6">
          Ready to Find Your Dream Property?
        </h2>
        <p class="text-gray-300 max-w-2xl mx-auto mb-12">
          Our team of experienced agents is ready to assist you with finding the perfect property
          that meets your needs and budget.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          <!-- Call Us Box -->
          <div class="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex flex-col items-center">
            <div class="bg-transparent w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <h3 class="text-xl font-semibold mb-1">Call Us</h3>
            <p class="text-fawaz-gold">+232 74 155 291</p>
          </div>
          
          <!-- WhatsApp Box -->
          <a 
            href="https://wa.me/447747417544?text=Hello%2C%20I%27m%20interested%20in%20a%20property.%20Could%20you%20please%20help%20me%20find%20more%20details%3F" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex flex-col items-center hover:border-fawaz-gold/30 transition-colors"
          >
            <div class="bg-transparent w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <h3 class="text-xl font-semibold mb-1">WhatsApp</h3>
            <p class="text-gray-400">Quick Chat</p>
          </a>
          
          <!-- Email Box -->
          <div class="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex flex-col items-center">
            <div class="bg-transparent w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </div>
            <h3 class="text-xl font-semibold mb-1">Email</h3>
            <p class="text-gray-300">info@fawazrealestate.com</p>
          </div>
        </div>
        
        <a href="/contact" class="gold-btn inline-block">
          Contact Us
        </a>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-fawaz-darker text-fawaz-light py-12 mt-12 border-t border-fawaz-gold/20">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img alt="Fawaz Real Estate Logo" class="h-12 object-contain mb-4" src="https://your-domain.com/assets/logo-light.png" />
          <p class="text-gray-400 mb-4">
            Discover premium residential, commercial, and land listings in Sierra Leone 
            backed by the trusted Fawaz name.
          </p>
          <div class="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
              <span class="text-fawaz-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
              <span class="text-fawaz-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
              <span class="text-fawaz-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </span>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-playfair font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a href="/" class="text-gray-400 hover:text-fawaz-gold transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" class="text-gray-400 hover:text-fawaz-gold transition-colors">About Us</a>
            </li>
            <li>
              <a href="/properties" class="text-gray-400 hover:text-fawaz-gold transition-colors">Properties</a>
            </li>
            <li>
              <a href="/contact" class="text-gray-400 hover:text-fawaz-gold transition-colors">Contact Us</a>
            </li>
            <li>
              <a href="/blog" class="text-gray-400 hover:text-fawaz-gold transition-colors">Blog</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-playfair font-semibold mb-4">Contact Information</h3>
          <div class="space-y-3">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <p>+232 74 155 291</p>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold mr-2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              <p>info@fawazrealestate.com</p>
            </div>
            <address class="not-italic text-gray-400">
              Freetown, Sierra Leone
            </address>
          </div>
        </div>
      </div>
      
      <div class="border-t border-fawaz-gold/20 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; ${new Date().getFullYear()} Fawaz Real Estate. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`;

// HTML code for the about page
const aboutPageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Us - Fawaz Real Estate</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <!-- Font imports -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      background-color: #0d0d0d;
      color: #f5f5f5;
      font-family: 'Open Sans', sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Playfair Display', serif;
    }
    .container-custom {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .bg-fawaz-darker {
      background-color: #070707;
    }
    .bg-fawaz-dark {
      background-color: #0d0d0d;
    }
    .text-fawaz-gold {
      color: #c9a54f;
    }
    .text-fawaz-light {
      color: #f5f5f5;
    }
    .gold-btn {
      background-color: #c9a54f;
      color: #070707;
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      transition: all 0.2s;
      display: inline-block;
    }
    .gold-btn:hover {
      opacity: 0.9;
    }
    .dark-btn {
      background-color: #070707;
      color: #c9a54f;
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      border: 1px solid #c9a54f;
      transition: all 0.2s;
      display: inline-block;
    }
    .dark-btn:hover {
      background-color: #0d0d0d;
    }
  </style>
</head>
<body>
  <!-- Navbar -->
  <nav class="bg-fawaz-darker py-4">
    <div class="container-custom flex flex-col md:flex-row justify-between items-center">
      <a href="/" class="flex items-center mb-4 md:mb-0">
        <div class="flex items-center">
          <img alt="Fawaz Real Estate Logo" class="h-12 object-contain" src="https://your-domain.com/assets/logo.png" />
        </div>
      </a>
      <div class="flex space-x-8">
        <a href="/" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">Home</a>
        <a href="/about" class="text-lg transition-colors text-fawaz-gold">About Us</a>
        <a href="/properties" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">Properties</a>
        <a href="/the-valley" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">The Valley</a>
        <a href="/contact" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">Contact Us</a>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="flex-grow">
    <div class="pt-16 pb-24">
      <!-- Hero Section -->
      <div class="container-custom mb-20">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-playfair font-bold mb-6">About Fawaz Real Estate</h1>
          <p class="text-xl text-gray-300">
            The premier real estate company in Sierra Leone, focused on delivering premium properties and exceptional service.
          </p>
        </div>
      </div>
      
      <!-- Company Story -->
      <div class="container-custom mb-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-playfair font-bold mb-6">Our Story</h2>
            <p class="text-gray-300 mb-4">
              Founded with a vision to transform the real estate landscape in Sierra Leone, 
              Fawaz Real Estate has established itself as a trusted name in premium property development and sales.
            </p>
            <p class="text-gray-300 mb-4">
              As part of the Fawaz Group, we leverage decades of experience in construction and development 
              to deliver properties that meet international standards while understanding local needs.
            </p>
            <p class="text-gray-300">
              Our commitment to transparency, fairness in pricing, and exceptional customer service 
              sets us apart in the Sierra Leone real estate market.
            </p>
          </div>
          <div class="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
              alt="Fawaz Real Estate Team" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <!-- Our Values -->
      <div class="bg-fawaz-darker py-20 mb-20">
        <div class="container-custom">
          <h2 class="text-3xl font-playfair font-bold text-center mb-16">Our Values</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-fawaz-dark p-8 rounded-lg text-center">
              <h3 class="text-xl font-playfair font-semibold text-fawaz-gold mb-4">Integrity</h3>
              <p class="text-gray-300">We are committed to honesty and transparency in every aspect of our business, from accurate property listings to fair pricing.</p>
            </div>
            <div class="bg-fawaz-dark p-8 rounded-lg text-center">
              <h3 class="text-xl font-playfair font-semibold text-fawaz-gold mb-4">Excellence</h3>
              <p class="text-gray-300">We strive for excellence in our service, properties, and client relationships, exceeding expectations at every opportunity.</p>
            </div>
            <div class="bg-fawaz-dark p-8 rounded-lg text-center">
              <h3 class="text-xl font-playfair font-semibold text-fawaz-gold mb-4">Innovation</h3>
              <p class="text-gray-300">We embrace innovation in our approach to real estate, using modern technology and practices to enhance the client experience.</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Why We're Different -->
      <div class="container-custom mb-20">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-playfair font-bold text-center mb-10">Why We're Different</h2>
          
          <div class="space-y-6">
            <div class="flex">
              <div class="flex-shrink-0 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">We Only List Fairly Priced Properties</h3>
                <p class="text-gray-300">Unlike competitors who list overpriced properties, we reject listings with unrealistic prices, ensuring our clients get genuine value.</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex-shrink-0 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Local Expertise with International Standards</h3>
                <p class="text-gray-300">We combine deep knowledge of the Sierra Leone market with international real estate best practices.</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex-shrink-0 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Transparency at Every Step</h3>
                <p class="text-gray-300">From property viewing to final purchase, we maintain complete transparency, with no hidden fees or surprises.</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex-shrink-0 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Dedicated Client Support</h3>
                <p class="text-gray-300">Our team provides personalized support throughout your real estate journey, whether you're local or investing from abroad.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Team Section -->
      <div class="container-custom mb-20">
        <h2 class="text-3xl font-playfair font-bold text-center mb-16">Our Leadership Team</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div class="text-center">
            <div class="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Ahmed Fawaz" 
                class="w-full h-full object-cover" />
            </div>
            <h3 class="text-xl font-playfair font-semibold mb-1">Ahmed Fawaz</h3>
            <p class="text-fawaz-gold">Founder & CEO</p>
          </div>
          <div class="text-center">
            <div class="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
                alt="Sarah Johnson" 
                class="w-full h-full object-cover" />
            </div>
            <h3 class="text-xl font-playfair font-semibold mb-1">Sarah Johnson</h3>
            <p class="text-fawaz-gold">Head of Sales</p>
          </div>
          <div class="text-center">
            <div class="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
              <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Michael Kamara" 
                class="w-full h-full object-cover" />
            </div>
            <h3 class="text-xl font-playfair font-semibold mb-1">Michael Kamara</h3>
            <p class="text-fawaz-gold">Property Development Manager</p>
          </div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <section class="py-20 bg-black">
        <div class="container-custom text-center">
          <h2 class="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p class="text-gray-300 max-w-2xl mx-auto mb-12">
            Our team of experienced agents is ready to assist you with finding the perfect property
            that meets your needs and budget.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            <!-- Call Us Box -->
            <div class="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex flex-col items-center">
              <div class="bg-transparent w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h3 class="text-xl font-semibold mb-1">Call Us</h3>
              <p class="text-fawaz-gold">+232 74 155 291</p>
            </div>
            
            <!-- WhatsApp Box -->
            <a 
              href="https://wa.me/447747417544?text=Hello%2C%20I%27m%20interested%20in%20a%20property.%20Could%20you%20please%20help%20me%20find%20more%20details%3F" 
              target="_blank" 
              rel="noopener noreferrer"
              class="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex flex-col items-center hover:border-fawaz-gold/30 transition-colors"
            >
              <div class="bg-transparent w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h3 class="text-xl font-semibold mb-1">WhatsApp</h3>
              <p class="text-gray-400">Quick Chat</p>
            </a>
            
            <!-- Email Box -->
            <div class="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex flex-col items-center">
              <div class="bg-transparent w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <h3 class="text-xl font-semibold mb-1">Email</h3>
              <p class="text-gray-300">info@fawazrealestate.com</p>
            </div>
          </div>
          
          <a href="/contact" class="gold-btn inline-block">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-fawaz-darker text-fawaz-light py-12 mt-12 border-t border-fawaz-gold/20">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img alt="Fawaz Real Estate Logo" class="h-12 object-contain mb-4" src="https://your-domain.com/assets/logo-light.png" />
          <p class="text-gray-400 mb-4">
            Discover premium residential, commercial, and land listings in Sierra Leone 
            backed by the trusted Fawaz name.
          </p>
          <div class="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
              <span class="text-fawaz-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
              <span class="text-fawaz-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
              <span class="text-fawaz-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </span>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-playfair font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a href="/" class="text-gray-400 hover:text-fawaz-gold transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" class="text-gray-400 hover:text-fawaz-gold transition-colors">About Us</a>
            </li>
            <li>
              <a href="/properties" class="text-gray-400 hover:text-fawaz-gold transition-colors">Properties</a>
            </li>
            <li>
              <a href="/contact" class="text-gray-400 hover:text-fawaz-gold transition-colors">Contact Us</a>
            </li>
            <li>
              <a href="/blog" class="text-gray-400 hover:text-fawaz-gold transition-colors">Blog</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-playfair font-semibold mb-4">Contact Information</h3>
          <div class="space-y-3">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <p>+232 74 155 291</p>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold mr-2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              <p>info@fawazrealestate.com</p>
            </div>
            <address class="not-italic text-gray-400">
              Freetown, Sierra Leone
            </address>
          </div>
        </div>
      </div>
      
      <div class="border-t border-fawaz-gold/20 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; ${new Date().getFullYear()} Fawaz Real Estate. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`;

// HTML code for the properties page
const propertiesPageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Properties - Fawaz Real Estate</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <!-- Font imports -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      background-color: #0d0d0d;
      color: #f5f5f5;
      font-family: 'Open Sans', sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Playfair Display', serif;
    }
    .container-custom {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .bg-fawaz-darker {
      background-color: #070707;
    }
    .bg-fawaz-dark {
      background-color: #0d0d0d;
    }
    .text-fawaz-gold {
      color: #c9a54f;
    }
    .text-fawaz-light {
      color: #f5f5f5;
    }
    .gold-btn {
      background-color: #c9a54f;
      color: #070707;
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      transition: all 0.2s;
    }
    .gold-btn:hover {
      opacity: 0.9;
    }
    .dark-btn {
      background-color: #070707;
      color: #c9a54f;
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      border: 1px solid #c9a54f;
      transition: all 0.2s;
    }
    .dark-btn:hover {
      background-color: #0d0d0d;
    }
    .search-input, .search-select {
      background-color: #070707;
      color: #f5f5f5;
      border: none;
      border-radius: 0.25rem;
      padding: 0.75rem 1rem;
    }
    .search-input:focus, .search-select:focus {
      outline: none;
      box-shadow: 0 0 0 1px #c9a54f;
    }
  </style>
</head>
<body>
  <!-- Navbar -->
  <nav class="bg-fawaz-darker py-4">
    <div class="container-custom flex flex-col md:flex-row justify-between items-center">
      <a href="/" class="flex items-center mb-4 md:mb-0">
        <div class="flex items-center">
          <img alt="Fawaz Real Estate Logo" class="h-12 object-contain" src="https://your-domain.com/assets/logo.png" />
        </div>
      </a>
      <div class="flex space-x-8">
        <a href="/" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">Home</a>
        <a href="/about" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">About Us</a>
        <a href="/properties" class="text-lg transition-colors text-fawaz-gold">Properties</a>
        <a href="/the-valley" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">The Valley</a>
        <a href="/contact" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">Contact Us</a>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="flex-grow">
    <div class="pt-16 pb-24">
      <!-- Page Header -->
      <div class="container-custom mb-12">
        <h1 class="text-4xl md:text-5xl font-playfair font-bold mb-6 text-center">
          Browse Our Properties
        </h1>
        <p class="text-xl text-gray-300 text-center max-w-3xl mx-auto">
          Discover our selection of premium properties in Sierra Leone, all fairly priced and meeting high standards of quality.
        </p>
      </div>
      
      <!-- Search and Filter Section -->
      <div class="container-custom mb-12">
        <div class="bg-fawaz-darker p-6 rounded-lg">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-playfair">Search Properties</h2>
            <button class="flex items-center text-fawaz-gold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              Show Filters
            </button>
          </div>
          
          <form>
            <div class="flex flex-col md:flex-row gap-4 mb-4">
              <div class="flex-1">
                <div class="relative">
                  <input 
                    type="text"
                    placeholder="Search by property name or location"
                    class="search-input w-full"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
              </div>
              <button type="submit" class="gold-btn md:w-auto">
                Search
              </button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              <div class="space-y-2">
                <label class="block text-fawaz-light text-sm">Property Type</label>
                <div class="relative">
                  <select class="search-select w-full appearance-none pr-10">
                    <option value="All Types">All Types</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Land">Land</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Office">Office</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute right-3 top-1/2 -translate-y-1/2 text-fawaz-gold"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
              
              <div class="space-y-2">
                <label class="block text-fawaz-light text-sm">Location</label>
                <div class="relative">
                  <select class="search-select w-full appearance-none pr-10">
                    <option value="All Locations">All Locations</option>
                    <option value="Freetown">Freetown</option>
                    <option value="Aberdeen">Aberdeen</option>
                    <option value="Lumley">Lumley</option>
                    <option value="Goderich">Goderich</option>
                    <option value="Hill Station">Hill Station</option>
                    <option value="Downtown Freetown">Downtown Freetown</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute right-3 top-1/2 -translate-y-1/2 text-fawaz-gold"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
              
              <div class="space-y-2">
                <label class="block text-fawaz-light text-sm">Price Range</label>
                <div class="relative">
                  <select class="search-select w-full appearance-none pr-10">
                    <option value="Any Price">Any Price</option>
                    <option value="Under $50,000">Under $50,000</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                    <option value="$100,000 - $200,000">$100,000 - $200,000</option>
                    <option value="$200,000 - $500,000">$200,000 - $500,000</option>
                    <option value="Over $500,000">Over $500,000</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute right-3 top-1/2 -translate-y-1/2 text-fawaz-gold"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
              
              <div class="space-y-2">
                <label class="block text-fawaz-light text-sm">Bedrooms</label>
                <div class="relative">
                  <select class="search-select w-full appearance-none pr-10">
                    <option value="Any">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute right-3 top-1/2 -translate-y-1/2 text-fawaz-gold"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      <!-- Properties Grid -->
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Property Card 1 -->
          <a href="/properties/1" class="bg-fawaz-dark rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <div class="relative h-60">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Luxury Villa with Ocean Views" 
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4 bg-fawaz-gold text-fawaz-darker px-3 py-1 rounded text-sm font-medium">
                House
              </div>
              <div class="absolute top-4 right-4 bg-black/80 text-fawaz-gold px-3 py-1 rounded text-sm font-medium">
                Featured
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-playfair font-semibold mb-2">Luxury Villa with Ocean Views</h3>
              
              <div class="flex items-center text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span class="text-sm">Aberdeen, Freetown</span>
              </div>
              
              <div class="flex justify-between items-center mb-4">
                <div class="flex space-x-4 text-gray-400">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M2 9V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v4"></path><path d="M2 13h20"></path><path d="M15 13v9"></path><path d="M9 13v9"></path><path d="M2 9h20"></path></svg>
                    <span>4</span>
                  </div>
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M9 5H5a2 2 0 0 0-2 2v14"></path><path d="M19 21V3"></path><path d="M9 5c0 2.8.7 5 2 5s2-2.2 2-5"></path><path d="M12 10v11"></path></svg>
                    <span>3</span>
                  </div>
                </div>
                <div class="text-fawaz-gold text-xl font-semibold">$450,000</div>
              </div>
            </div>
          </a>

          <!-- Property Card 2 -->
          <a href="/properties/2" class="bg-fawaz-dark rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <div class="relative h-60">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Modern Office Space" 
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4 bg-fawaz-gold text-fawaz-darker px-3 py-1 rounded text-sm font-medium">
                Commercial
              </div>
              <div class="absolute top-4 right-4 bg-black/80 text-fawaz-gold px-3 py-1 rounded text-sm font-medium">
                Featured
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-playfair font-semibold mb-2">Modern Office Space</h3>
              
              <div class="flex items-center text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span class="text-sm">Hill Station, Freetown</span>
              </div>
              
              <div class="flex justify-between items-center mb-4">
                <div class="flex space-x-4 text-gray-400">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M9 5H5a2 2 0 0 0-2 2v14"></path><path d="M19 21V3"></path><path d="M9 5c0 2.8.7 5 2 5s2-2.2 2-5"></path><path d="M12 10v11"></path></svg>
                    <span>2</span>
                  </div>
                </div>
                <div class="text-fawaz-gold text-xl font-semibold">$250,000</div>
              </div>
            </div>
          </a>

          <!-- Property Card 3 -->
          <a href="/properties/3" class="bg-fawaz-dark rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <div class="relative h-60">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Beachfront Development Land" 
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4 bg-fawaz-gold text-fawaz-darker px-3 py-1 rounded text-sm font-medium">
                Land
              </div>
              <div class="absolute top-4 right-4 bg-black/80 text-fawaz-gold px-3 py-1 rounded text-sm font-medium">
                Featured
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-playfair font-semibold mb-2">Beachfront Development Land</h3>
              
              <div class="flex items-center text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span class="text-sm">Lumley Beach, Freetown</span>
              </div>
              
              <div class="flex justify-between items-center mb-4">
                <div class="flex space-x-4 text-gray-400">
                </div>
                <div class="text-fawaz-gold text-xl font-semibold">$350,000</div>
              </div>
            </div>
          </a>

          <!-- Property Card 4 -->
          <a href="/properties/4" class="bg-fawaz-dark rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <div class="relative h-60">
              <img 
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Elegant Family Home" 
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4 bg-fawaz-gold text-fawaz-darker px-3 py-1 rounded text-sm font-medium">
                House
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-playfair font-semibold mb-2">Elegant Family Home</h3>
              
              <div class="flex items-center text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span class="text-sm">Goderich, Freetown</span>
              </div>
              
              <div class="flex justify-between items-center mb-4">
                <div class="flex space-x-4 text-gray-400">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M2 9V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v4"></path><path d="M2 13h20"></path><path d="M15 13v9"></path><path d="M9 13v9"></path><path d="M2 9h20"></path></svg>
                    <span>3</span>
                  </div>
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M9 5H5a2 2 0 0 0-2 2v14"></path><path d="M19 21V3"></path><path d="M9 5c0 2.8.7 5 2 5s2-2.2 2-5"></path><path d="M12 10v11"></path></svg>
                    <span>2</span>
                  </div>
                </div>
                <div class="text-fawaz-gold text-xl font-semibold">$320,000</div>
              </div>
            </div>
          </a>

          <!-- Property Card 5 -->
          <a href="/properties/5" class="bg-fawaz-dark rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <div class="relative h-60">
              <img 
                src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80" 
                alt="Waterfront Apartment" 
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4 bg-fawaz-gold text-fawaz-darker px-3 py-1 rounded text-sm font-medium">
                Apartment
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-playfair font-semibold mb-2">Waterfront Apartment</h3>
              
              <div class="flex items-center text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span class="text-sm">Aberdeen, Freetown</span>
              </div>
              
              <div class="flex justify-between items-center mb-4">
                <div class="flex space-x-4 text-gray-400">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M2 9V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v4"></path><path d="M2 13h20"></path><path d="M15 13v9"></path><path d="M9 13v9"></path><path d="M2 9h20"></path></svg>
                    <span>2</span>
                  </div>
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M9 5H5a2 2 0 0 0-2 2v14"></path><path d="M19 21V3"></path><path d="M9 5c0 2.8.7 5 2 5s2-2.2 2-5"></path><path d="M12 10v11"></path></svg>
                    <span>2</span>
                  </div>
                </div>
                <div class="text-fawaz-gold text-xl font-semibold">$180,000</div>
              </div>
            </div>
          </a>

          <!-- Property Card 6 -->
          <a href="/properties/6" class="bg-fawaz-dark rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <div class="relative h-60">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80" 
                alt="Retail Space in Prime Location" 
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4 bg-fawaz-gold text-fawaz-darker px-3 py-1 rounded text-sm font-medium">
                Commercial
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-playfair font-semibold mb-2">Retail Space in Prime Location</h3>
              
              <div class="flex items-center text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span class="text-sm">Downtown Freetown</span>
              </div>
              
              <div class="flex justify-between items-center mb-4">
                <div class="flex space-x-4 text-gray-400">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M9 5H5a2 2 0 0 0-2 2v14"></path><path d="M19 21V3"></path><path d="M9 5c0 2.8.7 5 2 5s2-2.2 2-5"></path><path d="M12 10v11"></path></svg>
                    <span>1</span>
                  </div>
                </div>
                <div class="text-fawaz-gold text-xl font-semibold">$200,000</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Call to Action -->
    <section class="py-20 bg-black">
      <div class="container-custom text-center">
        <h2 class="text-4xl md:text-5xl font-playfair font-bold mb-6">
          Ready to Find Your Dream Property?
        </h2>
        <p class="text-gray-300 max-w-2xl mx-auto mb-12">
          Our team of experienced agents is ready to assist you with finding the perfect property
          that meets your needs and budget.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          <!-- Call Us Box -->
          <div class="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex flex-col items-center">
            <div class="bg-transparent w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <h3 class="text-xl font-semibold mb-1">Call Us</h3>
            <p class="text-fawaz-gold">+232 74 155 291</p>
          </div>
          
          <!-- WhatsApp Box -->
          <a 
            href="https://wa.me/447747417544?text=Hello%2C%20I%27m%20interested%20in%20a%20property.%20Could%20you%20please%20help%20me%20find%20more%20details%3F" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex flex-col items-center hover:border-fawaz-gold/30 transition-colors"
          >
            <div class="bg-transparent w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <h3 class="text-xl font-semibold mb-1">WhatsApp</h3>
            <p class="text-gray-400">Quick Chat</p>
          </a>
          
          <!-- Email Box -->
          <div class="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex flex-col items-center">
            <div class="bg-transparent w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </div>
            <h3 class="text-xl font-semibold mb-1">Email</h3>
            <p class="text-gray-300">info@fawazrealestate.com</p>
          </div>
        </div>
        
        <a href="/contact" class="gold-btn inline-block">
          Contact Us
        </a>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-fawaz-darker text-fawaz-light py-12 mt-12 border-t border-fawaz-gold/20">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img alt="Fawaz Real Estate Logo" class="h-12 object-contain mb-4" src="https://your-domain.com/assets/logo-light.png" />
          <p class="text-gray-400 mb-4">
            Discover premium residential, commercial, and land listings in Sierra Leone 
            backed by the trusted Fawaz name.
          </p>
          <div class="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
              <span class="text-fawaz-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
              <span class="text-fawaz-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
              <span class="text-fawaz-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </span>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-playfair font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a href="/" class="text-gray-400 hover:text-fawaz-gold transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" class="text-gray-400 hover:text-fawaz-gold transition-colors">About Us</a>
            </li>
            <li>
              <a href="/properties" class="text-gray-400 hover:text-fawaz-gold transition-colors">Properties</a>
            </li>
            <li>
              <a href="/contact" class="text-gray-400 hover:text-fawaz-gold transition-colors">Contact Us</a>
            </li>
            <li>
              <a href="/blog" class="text-gray-400 hover:text-fawaz-gold transition-colors">Blog</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-playfair font-semibold mb-4">Contact Information</h3>
          <div class="space-y-3">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <p>+232 74 155 291</p>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold mr-2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              <p>info@fawazrealestate.com</p>
            </div>
            <address class="not-italic text-gray-400">
              Freetown, Sierra Leone
            </address>
          </div>
        </div>
      </div>
      
      <div class="border-t border-fawaz-gold/20 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; ${new Date().getFullYear()} Fawaz Real Estate. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`;

// HTML code for The Valley page
const valleyPageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The Valley - Fawaz Real Estate</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <!-- Font imports -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      background-color: #0d0d0d;
      color: #f5f5f5;
      font-family: 'Open Sans', sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Playfair Display', serif;
    }
    .container-custom {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .bg-fawaz-darker {
      background-color: #070707;
    }
    .bg-fawaz-dark {
      background-color: #0d0d0d;
    }
    .text-fawaz-gold {
      color: #c9a54f;
    }
    .text-fawaz-light {
      color: #f5f5f5;
    }
    .gold-btn {
      background-color: #c9a54f;
      color: #070707;
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      transition: all 0.2s;
      display: inline-block;
    }
    .gold-btn:hover {
      opacity: 0.9;
    }
    .dark-btn {
      background-color: #070707;
      color: #c9a54f;
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      border: 1px solid #c9a54f;
      transition: all 0.2s;
      display: inline-block;
    }
    .dark-btn:hover {
      background-color: #0d0d0d;
    }
  </style>
</head>
<body>
  <!-- Navbar -->
  <nav class="bg-fawaz-darker py-4">
    <div class="container-custom flex flex-col md:flex-row justify-between items-center">
      <a href="/" class="flex items-center mb-4 md:mb-0">
        <div class="flex items-center">
          <img alt="Fawaz Real Estate Logo" class="h-12 object-contain" src="https://your-domain.com/assets/logo.png" />
        </div>
      </a>
      <div class="flex space-x-8">
        <a href="/" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">Home</a>
        <a href="/about" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">About Us</a>
        <a href="/properties" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">Properties</a>
        <a href="/the-valley" class="text-lg transition-colors text-fawaz-gold">The Valley</a>
        <a href="/contact" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">Contact Us</a>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="flex-grow">
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] flex items-center">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
          alt="The Valley Development" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div class="container-custom relative z-10 py-20">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-6xl font-playfair font-bold mb-6">
            The Valley
          </h1>
          <p class="text-xl mb-8">
            Sierra Leone's Premier Gated Community by Fawaz Real Estate
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#overview" class="gold-btn">
              Learn More
            </a>
            <a href="#contact" class="dark-btn">
              Inquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Overview Section -->
    <section id="overview" class="py-20">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-playfair font-bold mb-6">A New Standard of Living</h2>
            <p class="text-gray-300 mb-6">
              The Valley is Sierra Leone's premier gated community, designed to provide a luxurious and secure living environment with breathtaking views and world-class amenities.
            </p>
            <p class="text-gray-300 mb-6">
              Located just 20 minutes from downtown Freetown, The Valley offers the perfect balance of accessibility and tranquility, with 24/7 security to ensure your peace of mind.
            </p>
            <div class="grid grid-cols-2 gap-4 mt-8">
              <div class="bg-fawaz-darker p-4 rounded-lg text-center">
                <h3 class="text-fawaz-gold text-xl font-semibold mb-1">24/7</h3>
                <p class="text-sm text-gray-300">Security</p>
              </div>
              <div class="bg-fawaz-darker p-4 rounded-lg text-center">
                <h3 class="text-fawaz-gold text-xl font-semibold mb-1">20 min</h3>
                <p class="text-sm text-gray-300">From Freetown</p>
              </div>
              <div class="bg-fawaz-darker p-4 rounded-lg text-center">
                <h3 class="text-fawaz-gold text-xl font-semibold mb-1">300+</h3>
                <p class="text-sm text-gray-300">Acres</p>
              </div>
              <div class="bg-fawaz-darker p-4 rounded-lg text-center">
                <h3 class="text-fawaz-gold text-xl font-semibold mb-1">5+</h3>
                <p class="text-sm text-gray-300">Home Designs</p>
              </div>
            </div>
          </div>
          <div class="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80" 
              alt="The Valley Overview" 
              class="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="py-20 bg-fawaz-darker">
      <div class="container-custom">
        <h2 class="text-3xl font-playfair font-bold text-center mb-16">Features & Amenities</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-fawaz-dark p-6 rounded-lg">
            <div class="w-12 h-12 bg-fawaz-gold/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Central Utilities</h3>
            <p class="text-gray-400">Reliable water supply, electricity, and high-speed internet connectivity throughout the community.</p>
          </div>
          
          <div class="bg-fawaz-dark p-6 rounded-lg">
            <div class="w-12 h-12 bg-fawaz-gold/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M7 11V7a5 5 0 0 1 10 0v4"></path><rect width="20" height="13" x="2" y="11" rx="2" ry="2"></rect><path d="M12 19v-4"></path></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Gated Security</h3>
            <p class="text-gray-400">24/7 security personnel, CCTV surveillance, and controlled access points for your safety and peace of mind.</p>
          </div>
          
          <div class="bg-fawaz-dark p-6 rounded-lg">
            <div class="w-12 h-12 bg-fawaz-gold/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Premium Construction</h3>
            <p class="text-gray-400">Built to international standards with high-quality materials and expert craftsmanship by Fawaz Construction.</p>
          </div>
          
          <div class="bg-fawaz-dark p-6 rounded-lg">
            <div class="w-12 h-12 bg-fawaz-gold/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M2 12h20"></path><path d="M2 12a10 10 0 0 1 20 0"></path><path d="M2 12a10 10 0 0 0 20 0"></path><path d="M4 12a8 8 0 0 1 16 0"></path><path d="M4 12a8 8 0 0 0 16 0"></path></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Recreational Facilities</h3>
            <p class="text-gray-400">Swimming pool, tennis courts, and a fully-equipped fitness center for an active and healthy lifestyle.</p>
          </div>
          
          <div class="bg-fawaz-dark p-6 rounded-lg">
            <div class="w-12 h-12 bg-fawaz-gold/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M10 3.2C10 2.1 8.9 1 7.8 1 6.7 1 5.6 2.1 5.6 3.2c0 1.1-1.1 2.2-2.2 2.2C2.3 5.4 1.2 6.5 1.2 7.6c0 1.1 1.1 2.2 2.2 2.2 1.1 0 2.2 1.1 2.2 2.2 0 1.1 1.1 2.2 2.2 2.2 1.1 0 2.2-1.1 2.2-2.2 0-1.1 1.1-2.2 2.2-2.2 1.1 0 2.2-1.1 2.2-2.2 0-1.1-1.1-2.2-2.2-2.2-1.1 0-2.2-1.1-2.2-2.2z"></path><path d="M17.4 14.3c0-1.1 1.1-2.2 2.2-2.2 1.1 0 2.2-1.1 2.2-2.2 0-1.1-1.1-2.2-2.2-2.2-1.1 0-2.2-1.1-2.2-2.2 0-1.1-1.1-2.2-2.2-2.2-1.1 0-2.2 1.1-2.2 2.2 0 1.1-1.1 2.2-2.2 2.2-1.1 0-2.2 1.1-2.2 2.2 0 1.1 1.1 2.2 2.2 2.2 1.1 0 2.2 1.1 2.2 2.2 0 1.1 1.1 2.2 2.2 2.2 1.1 0 2.2-1.1 2.2-2.2z"></path></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Community Spaces</h3>
            <p class="text-gray-400">Community clubhouse, green parks, and walking trails for social gatherings and outdoor activities.</p>
          </div>
          
          <div class="bg-fawaz-dark p-6 rounded-lg">
            <div class="w-12 h-12 bg-fawaz-gold/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M12 22s8-2 8-10V6l-8-4-8 4v6c0 8 8 10 8 10Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Stunning Views</h3>
            <p class="text-gray-400">Properties positioned to maximize the natural beauty with stunning views of the surrounding landscape.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Home Designs Section -->
    <section class="py-20">
      <div class="container-custom">
        <h2 class="text-3xl font-playfair font-bold text-center mb-6">Home Designs</h2>
        <p class="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Choose from a variety of thoughtfully designed homes that combine elegance, comfort, and functionality.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- House Design 1 -->
          <div class="bg-fawaz-dark rounded-lg overflow-hidden shadow-lg">
            <div class="h-60">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="The Olive Villa" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-playfair font-semibold mb-2">The Olive Villa</h3>
              <p class="text-gray-400 mb-4">Modern 3-bedroom villa with spacious living areas and a private garden.</p>
              <div class="grid grid-cols-3 gap-3 mb-4">
                <div class="text-center border border-fawaz-gold/30 p-2 rounded-sm">
                  <span class="block text-sm text-gray-400">Area</span>
                  <span class="text-fawaz-gold font-semibold">280 m²</span>
                </div>
                <div class="text-center border border-fawaz-gold/30 p-2 rounded-sm">
                  <span class="block text-sm text-gray-400">Bedrooms</span>
                  <span class="text-fawaz-gold font-semibold">3</span>
                </div>
                <div class="text-center border border-fawaz-gold/30 p-2 rounded-sm">
                  <span class="block text-sm text-gray-400">Bathrooms</span>
                  <span class="text-fawaz-gold font-semibold">2</span>
                </div>
              </div>
              <a href="#contact" class="dark-btn block text-center w-full">Inquire Now</a>
            </div>
          </div>
          
          <!-- House Design 2 -->
          <div class="bg-fawaz-dark rounded-lg overflow-hidden shadow-lg">
            <div class="h-60">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="The Palm Residence" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-playfair font-semibold mb-2">The Palm Residence</h3>
              <p class="text-gray-400 mb-4">Elegant 4-bedroom home with a modern kitchen and spacious master suite.</p>
              <div class="grid grid-cols-3 gap-3 mb-4">
                <div class="text-center border border-fawaz-gold/30 p-2 rounded-sm">
                  <span class="block text-sm text-gray-400">Area</span>
                  <span class="text-fawaz-gold font-semibold">320 m²</span>
                </div>
                <div class="text-center border border-fawaz-gold/30 p-2 rounded-sm">
                  <span class="block text-sm text-gray-400">Bedrooms</span>
                  <span class="text-fawaz-gold font-semibold">4</span>
                </div>
                <div class="text-center border border-fawaz-gold/30 p-2 rounded-sm">
                  <span class="block text-sm text-gray-400">Bathrooms</span>
                  <span class="text-fawaz-gold font-semibold">3</span>
                </div>
              </div>
              <a href="#contact" class="dark-btn block text-center w-full">Inquire Now</a>
            </div>
          </div>
          
          <!-- House Design 3 -->
          <div class="bg-fawaz-dark rounded-lg overflow-hidden shadow-lg">
            <div class="h-60">
              <img 
                src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="The Baobab Manor" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-playfair font-semibold mb-2">The Baobab Manor</h3>
              <p class="text-gray-400 mb-4">Luxurious 5-bedroom residence with premium finishes and a private pool.</p>
              <div class="grid grid-cols-3 gap-3 mb-4">
                <div class="text-center border border-fawaz-gold/30 p-2 rounded-sm">
                  <span class="block text-sm text-gray-400">Area</span>
                  <span class="text-fawaz-gold font-semibold">450 m²</span>
                </div>
                <div class="text-center border border-fawaz-gold/30 p-2 rounded-sm">
                  <span class="block text-sm text-gray-400">Bedrooms</span>
                  <span class="text-fawaz-gold font-semibold">5</span>
                </div>
                <div class="text-center border border-fawaz-gold/30 p-2 rounded-sm">
                  <span class="block text-sm text-gray-400">Bathrooms</span>
                  <span class="text-fawaz-gold font-semibold">4</span>
                </div>
              </div>
              <a href="#contact" class="dark-btn block text-center w-full">Inquire Now</a>
            </div>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <a href="#contact" class="gold-btn">
            Request Full Brochure
          </a>
        </div>
      </div>
    </section>
    
    <!-- Video Section - Using image placeholder instead of actual video for HTML version -->
    <section class="py-20 bg-fawaz-darker">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-playfair font-bold mb-6">Take a Virtual Tour</h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Experience The Valley through our virtual tour. See the beautiful surroundings and get a feel for your potential new home.
        </p>
        
        <div class="max-w-4xl mx-auto relative bg-fawaz-dark rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
            alt="The Valley Video Tour" 
            class="w-full aspect-video object-cover"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="rounded-full w-20 h-20 bg-fawaz-gold flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Inquiry Form -->
    <section id="contact" class="py-20">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto bg-fawaz-darker p-8 rounded-lg">
          <h2 class="text-3xl font-playfair font-bold text-center mb-6">Interested in The Valley?</h2>
          <p class="text-xl text-gray-300 text-center mb-12">
            Complete the form below to receive more information or schedule a personal tour.
          </p>
          
          <form>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                <input 
                  type="text" 
                  class="bg-black border border-gray-700 rounded-md w-full px-4 py-3 text-white" 
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  class="bg-black border border-gray-700 rounded-md w-full px-4 py-3 text-white" 
                  required
                />
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  class="bg-black border border-gray-700 rounded-md w-full px-4 py-3 text-white" 
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Preferred House Type</label>
                <select class="bg-black border border-gray-700 rounded-md w-full px-4 py-3 text-white">
                  <option value="">Select a house type</option>
                  <option value="olive">The Olive Villa</option>
                  <option value="palm">The Palm Residence</option>
                  <option value="baobab">The Baobab Manor</option>
                  <option value="custom">Custom Design</option>
                  <option value="undecided">Undecided - Need More Info</option>
                </select>
              </div>
            </div>
            
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
              <textarea 
                rows="5" 
                class="bg-black border border-gray-700 rounded-md w-full px-4 py-3 text-white"
                placeholder="Please let us know any specific questions or requirements..."
              ></textarea>
            </div>
            
            <div class="flex justify-center">
              <button type="submit" class="gold-btn px-8 py-3">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section class="py-20 bg-black">
      <div class="container-custom text-center">
        <h2 class="text-4xl md:text-5xl font-playfair font-bold mb-6">
          Your Dream Home Awaits at The Valley
        </h2>
        <p class="text-gray-300 max-w-2xl mx-auto mb-12">
          Secure your place in Sierra Leone's premier gated community today.
          Limited plots and homes available.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          <!-- Call Us Box -->
          <div class="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex flex-col items-center">
            <div class="bg-transparent w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <h3 class="text-xl font-semibold mb-1">Call Us</h3>
            <p class="text-fawaz-gold">+232 74 155 291</p>
          </div>
          
          <!-- WhatsApp Box -->
          <a 
            href="https://wa.me/447747417544?text=Hello%2C%20I%27m%20interested%20in%20The%20Valley.%20Could%20you%20please%20provide%20more%20information%3F" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex flex-col items-center hover:border-fawaz-gold/30 transition-colors"
          >
            <div class="bg-transparent w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <h3 class="text-xl font-semibold mb-1">WhatsApp</h3>
            <p class="text-gray-400">Quick Chat</p>
          </a>
          
          <!-- Email Box -->
          <div class="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex flex-col items-center">
            <div class="bg-transparent w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </div>
            <h3 class="text-xl font-semibold mb-1">Email</h3>
            <p class="text-gray-300">info@fawazrealestate.com</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-fawaz-darker text-fawaz-light py-12 mt-12 border-t border-fawaz-gold/20">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img alt="Fawaz Real Estate Logo" class="h-12 object-contain mb-4" src="https://your-domain.com/assets/logo-light.png" />
          <p class="text-gray-400 mb-4">
            Discover premium residential, commercial, and land listings in Sierra Leone 
            backed by the trusted Fawaz name.
          </p>
          <div class="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
              <span class="text-fawaz-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
              <span class="text-fawaz-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
              <span class="text-fawaz-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </span>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-playfair font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a href="/" class="text-gray-400 hover:text-fawaz-gold transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" class="text-gray-400 hover:text-fawaz-gold transition-colors">About Us</a>
            </li>
            <li>
              <a href="/properties" class="text-gray-400 hover:text-fawaz-gold transition-colors">Properties</a>
            </li>
            <li>
              <a href="/contact" class="text-gray-400 hover:text-fawaz-gold transition-colors">Contact Us</a>
            </li>
            <li>
              <a href="/blog" class="text-gray-400 hover:text-fawaz-gold transition-colors">Blog</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-playfair font-semibold mb-4">Contact Information</h3>
          <div class="space-y-3">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <p>+232 74 155 291</p>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold mr-2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              <p>info@fawazrealestate.com</p>
            </div>
            <address class="not-italic text-gray-400">
              Freetown, Sierra Leone
            </address>
          </div>
        </div>
      </div>
      
      <div class="border-t border-fawaz-gold/20 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; ${new Date().getFullYear()} Fawaz Real Estate. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`;

// HTML code for the contact page
const contactPageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Us - Fawaz Real Estate</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <!-- Font imports -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      background-color: #0d0d0d;
      color: #f5f5f5;
      font-family: 'Open Sans', sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Playfair Display', serif;
    }
    .container-custom {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .bg-fawaz-darker {
      background-color: #070707;
    }
    .bg-fawaz-dark {
      background-color: #0d0d0d;
    }
    .text-fawaz-gold {
      color: #c9a54f;
    }
    .text-fawaz-light {
      color: #f5f5f5;
    }
    .gold-btn {
      background-color: #c9a54f;
      color: #070707;
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      transition: all 0.2s;
      display: inline-block;
    }
    .gold-btn:hover {
      opacity: 0.9;
    }
    .dark-btn {
      background-color: #070707;
      color: #c9a54f;
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      border: 1px solid #c9a54f;
      transition: all 0.2s;
      display: inline-block;
    }
    .dark-btn:hover {
      background-color: #0d0d0d;
    }
    .search-input, .search-select {
      background-color: #070707;
      color: #f5f5f5;
      border: none;
      border-radius: 0.25rem;
      padding: 0.75rem 1rem;
    }
    .search-input:focus, .search-select:focus {
      outline: none;
      box-shadow: 0 0 0 1px #c9a54f;
    }
  </style>
</head>
<body>
  <!-- Navbar -->
  <nav class="bg-fawaz-darker py-4">
    <div class="container-custom flex flex-col md:flex-row justify-between items-center">
      <a href="/" class="flex items-center mb-4 md:mb-0">
        <div class="flex items-center">
          <img alt="Fawaz Real Estate Logo" class="h-12 object-contain" src="https://your-domain.com/assets/logo.png" />
        </div>
      </a>
      <div class="flex space-x-8">
        <a href="/" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">Home</a>
        <a href="/about" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">About Us</a>
        <a href="/properties" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">Properties</a>
        <a href="/the-valley" class="text-lg transition-colors text-fawaz-light hover:text-fawaz-gold">The Valley</a>
        <a href="/contact" class="text-lg transition-colors text-fawaz-gold">Contact Us</a>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="flex-grow">
    <div class="pt-16 pb-24">
      <!-- Page Header -->
      <div class="container-custom mb-16">
        <h1 class="text-4xl md:text-5xl font-playfair font-bold mb-6 text-center">
          Contact Us
        </h1>
        <p class="text-xl text-gray-300 text-center max-w-3xl mx-auto">
          Have questions about a property or need guidance? Our team is ready to assist you in finding your perfect property in Sierra Leone.
        </p>
      </div>
      
      <!-- Contact Information and Form -->
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <div class="bg-fawaz-darker p-8 rounded-lg mb-8">
              <h2 class="text-2xl font-playfair font-semibold mb-6">Contact Information</h2>
              
              <div class="space-y-6">
                <div class="flex items-center">
                  <div class="flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold mb-1">Phone</h3>
                    <p class="text-gray-300">+232 76 000000</p>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <div class="flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold mb-1">Email</h3>
                    <p class="text-gray-300">info@fawazrealestate.com</p>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <div class="flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold mb-1">Office</h3>
                    <p class="text-gray-300">Freetown, Sierra Leone</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-fawaz-darker p-8 rounded-lg">
              <h2 class="text-2xl font-playfair font-semibold mb-6">Connect With Us</h2>
              
              <div class="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
                  <span class="text-fawaz-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
                  <span class="text-fawaz-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  </span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
                  <span class="text-fawaz-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </span>
                </a>
              </div>
              
              <div class="mt-8">
                <p class="text-gray-300 mb-4">
                  Follow us on social media for the latest property updates, real estate tips, and news about Sierra Leone's property market.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="bg-fawaz-darker p-8 rounded-lg">
            <h2 class="text-2xl font-playfair font-semibold mb-6">Send Us a Message</h2>
            
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    class="search-input w-full"
                    required
                  />
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="search-input w-full"
                    required
                  />
                </div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-gray-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    class="search-input w-full"
                  />
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <select
                    name="subject"
                    class="search-select w-full"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="property-inquiry">Property Inquiry</option>
                    <option value="viewing-request">Viewing Request</option>
                    <option value="investment-advice">Investment Advice</option>
                    <option value="general-question">General Question</option>
                  </select>
                </div>
              </div>
              
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  class="search-input w-full"
                  required
                ></textarea>
              </div>
              
              <button type="submit" class="gold-btn w-full flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
        
        <!-- Map Section -->
        <div class="container-custom mt-16">
          <div class="bg-fawaz-darker p-4 rounded-lg">
            <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.47736349204!2d-13.2957592!3d8.4657805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04f71898239a8d%3A0xf2dc22523103899!2sFreetown%2C%20Sierra%20Leone!5e0!3m2!1sen!2sus!4v1713799608045!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style="border: 0;" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Fawaz Real Estate Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-fawaz-darker text-fawaz-light py-12 mt-12 border-t border-fawaz-gold/20">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img alt="Fawaz Real Estate Logo" class="h-12 object-contain mb-4" src="https://your-domain.com/assets/logo-light.png" />
          <p class="text-gray-400 mb-4">
            Discover premium residential, commercial, and land listings in Sierra Leone 
            backed by the trusted Fawaz name.
          </p>
          <div class="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
              <span class="text-fawaz-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
              <span class="text-fawaz-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-fawaz-gold/10 flex items-center justify-center hover:bg-fawaz-gold/20 transition-colors">
              <span class="text-fawaz-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </span>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-playfair font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a href="/" class="text-gray-400 hover:text-fawaz-gold transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" class="text-gray-400 hover:text-fawaz-gold transition-colors">About Us</a>
            </li>
            <li>
              <a href="/properties" class="text-gray-400 hover:text-fawaz-gold transition-colors">Properties</a>
            </li>
            <li>
              <a href="/contact" class="text-gray-400 hover:text-fawaz-gold transition-colors">Contact Us</a>
            </li>
            <li>
              <a href="/blog" class="text-gray-400 hover:text-fawaz-gold transition-colors">Blog</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-playfair font-semibold mb-4">Contact Information</h3>
          <div class="space-y-3">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <p>+232 74 155 291</p>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fawaz-gold mr-2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              <p>info@fawazrealestate.com</p>
            </div>
            <address class="not-italic text-gray-400">
              Freetown, Sierra Leone
            </address>
          </div>
        </div>
      </div>
      
      <div class="border-t border-fawaz-gold/20 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; ${new Date().getFullYear()} Fawaz Real Estate. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`;

export default WebsiteExtractionPage;
