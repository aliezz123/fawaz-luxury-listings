
import Layout from "@/components/layout/Layout";

const WebsiteExtractionPage = () => {
  const htmlCode = `<!DOCTYPE html>
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
          <img alt="Fawaz Real Estate Logo" class="h-12 object-contain" src="/lovable-uploads/7a8e7e7b-9a15-4fb7-a05d-544b8e1676e9.png" />
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

          <!-- Additional property cards would be here -->
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
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a54f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a54f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 14a8 8 0 0 1-8 8v-4a4 4 0 0 0 4-4h4Z"></path><path d="M18 14V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="M6 10h8"></path><path d="M6 14h4"></path></svg>
            </div>
            <h3 class="text-xl font-semibold mb-1">WhatsApp</h3>
            <p class="text-gray-400">Quick Chat</p>
          </a>
          
          <!-- Email Box -->
          <div class="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex flex-col items-center">
            <div class="bg-transparent w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a54f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
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
          <img alt="Fawaz Real Estate Logo" class="h-12 object-contain mb-4" src="/lovable-uploads/3639a075-5165-46c2-a033-916f9c002ea9.png" />
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
        <p>&copy; 2025 Fawaz Real Estate. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`;

  return (
    <Layout>
      <div className="container-custom py-12">
        <h1 className="text-4xl font-playfair font-bold mb-8 text-center">
          HTML Website Code
        </h1>
        
        <div className="bg-fawaz-darker p-6 rounded-lg mb-8">
          <p className="mb-6 text-gray-300">
            Below is the complete HTML code for the Fawaz Real Estate website. You can copy this code, 
            save it as "index.html" and open it in any web browser. Note that some resources like images 
            might not display correctly outside of this environment unless you download them separately.
          </p>
          
          <div className="flex justify-end mb-4">
            <button 
              onClick={() => {
                navigator.clipboard.writeText(htmlCode);
                alert("HTML code copied to clipboard!");
              }}
              className="gold-btn flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Copy HTML Code
            </button>
          </div>
          
          <div className="bg-black p-4 rounded-md overflow-auto max-h-[500px]">
            <pre className="text-gray-300 text-sm whitespace-pre-wrap">
              {htmlCode}
            </pre>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">How to use this code:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Copy the entire code above</li>
              <li>Create a new file on your computer and name it "index.html"</li>
              <li>Paste the code into this file and save it</li>
              <li>Double-click the file to open it in your web browser</li>
              <li>For images to display correctly, you'll need to download them separately and update the image paths</li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WebsiteExtractionPage;
