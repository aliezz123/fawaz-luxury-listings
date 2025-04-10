
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import CallToAction from "@/components/shared/CallToAction";

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Buying Land in Sierra Leone: What You Must Know First",
    excerpt: "Essential legal guidelines, documentation requirements, and common pitfalls to avoid when purchasing land in Sierra Leone.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    author: "Ahmed Fawaz",
    date: "April 5, 2025",
    readTime: "8 min read",
    category: "Investment Guide"
  },
  {
    id: 2,
    title: "Why We Only Accept Realistic Property Listings",
    excerpt: "Our commitment to fair pricing and how it benefits both buyers and sellers in Sierra Leone's evolving real estate market.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80",
    author: "Sarah Johnson",
    date: "March 22, 2025",
    readTime: "6 min read",
    category: "Company Values"
  },
  {
    id: 3,
    title: "Top Neighborhoods for Investment in Freetown",
    excerpt: "Analysis of emerging areas, established communities, and potential ROI for real estate investors in Sierra Leone's capital.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    author: "Michael Kamara",
    date: "March 15, 2025",
    readTime: "10 min read",
    category: "Market Analysis"
  },
  {
    id: 4,
    title: "How to Spot an Overpriced Property",
    excerpt: "Expert techniques to identify inflated property listings and secure fair deals in Sierra Leone's competitive real estate market.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80",
    author: "Ahmed Fawaz",
    date: "March 1, 2025",
    readTime: "7 min read",
    category: "Buyer's Guide"
  },
  {
    id: 5,
    title: "The Rise of Luxury Real Estate in Sierra Leone",
    excerpt: "Trends, developments, and opportunities in Sierra Leone's growing luxury property market.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: "Sarah Johnson",
    date: "February 20, 2025",
    readTime: "9 min read",
    category: "Market Trends"
  }
];

const Blog = () => {
  return (
    <Layout>
      <div className="pt-16 pb-24">
        {/* Page Header */}
        <div className="container-custom mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-center">
            Real Estate Insights
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Expert advice, market analysis, and practical guides for property investment in Sierra Leone.
          </p>
        </div>
        
        {/* Featured Post */}
        <div className="container-custom mb-20">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={blogPosts[0].image} 
              alt={blogPosts[0].title} 
              className="w-full h-[60vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end">
              <div className="p-8 md:p-12 w-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-fawaz-gold/90 text-fawaz-darker px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-300 text-sm flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {blogPosts[0].date}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-white">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-gray-200 mb-6 max-w-3xl">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-fawaz-gold/20 flex items-center justify-center text-fawaz-gold mr-3">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">{blogPosts[0].author}</p>
                      <p className="text-gray-400 text-sm flex items-center">
                        <Clock size={14} className="mr-1" />
                        {blogPosts[0].readTime}
                      </p>
                    </div>
                  </div>
                  
                  <Link to={`/blog/${blogPosts[0].id}`} className="flex items-center text-fawaz-gold hover:underline">
                    Read Article <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      
      <CallToAction />
    </Layout>
  );
};

const BlogCard = ({ post }: { post: any }) => {
  return (
    <div className="bg-fawaz-darker rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-56">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-fawaz-gold/90 text-fawaz-darker px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-3 text-sm text-gray-400">
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <Clock size={14} className="mr-1" />
            {post.readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-playfair font-semibold mb-3">{post.title}</h3>
        
        <p className="text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-fawaz-gold/20 flex items-center justify-center text-fawaz-gold mr-2">
              <User size={16} />
            </div>
            <span className="text-gray-300 text-sm">{post.author}</span>
          </div>
          
          <Link to={`/blog/${post.id}`} className="text-fawaz-gold text-sm hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
