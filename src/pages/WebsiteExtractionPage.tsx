
import Layout from "@/components/layout/Layout";
import WebsiteExtractor from "@/components/extraction/WebsiteExtractor";

const WebsiteExtractionPage = () => {
  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container-custom mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-center">
            Website Extraction Tool
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Extract content from any website with our advanced web scraping tool
          </p>
        </div>
        
        <WebsiteExtractor />
      </div>
    </Layout>
  );
};

export default WebsiteExtractionPage;
