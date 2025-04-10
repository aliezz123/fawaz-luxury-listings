
import { useState } from 'react';
import { toast } from "sonner";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

interface CrawlResult {
  success: boolean;
  status?: string;
  completed?: number;
  total?: number;
  creditsUsed?: number;
  expiresAt?: string;
  data?: any[];
}

const WebsiteExtractor = () => {
  const [url, setUrl] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [crawlResult, setCrawlResult] = useState<CrawlResult | null>(null);
  const [showApiKeyForm, setShowApiKeyForm] = useState(!FirecrawlService.getApiKey());

  const handleApiKeySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const isValid = await FirecrawlService.testApiKey(apiKey);
      if (isValid) {
        FirecrawlService.saveApiKey(apiKey);
        setShowApiKeyForm(false);
        toast.success("API key saved successfully");
      } else {
        toast.error("Invalid API key");
      }
    } catch (error) {
      toast.error("Failed to validate API key");
    } finally {
      setIsLoading(false);
    }
  };

  const handleExtract = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setProgress(0);
    setCrawlResult(null);
    
    try {
      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 5, 90));
      }, 500);
      
      const result = await FirecrawlService.crawlWebsite(url);
      
      clearInterval(progressInterval);
      setProgress(100);
      
      if (result.success) {
        toast.success("Website extracted successfully");
        setCrawlResult(result.data);
      } else {
        toast.error(result.error || "Failed to extract website");
      }
    } catch (error) {
      console.error('Error extracting website:', error);
      toast.error("Failed to extract website");
    } finally {
      setIsLoading(false);
    }
  };

  if (showApiKeyForm) {
    return (
      <div className="container-custom py-12">
        <Card className="max-w-xl mx-auto p-6 bg-fawaz-darker border border-fawaz-gold/20">
          <h2 className="text-3xl font-playfair font-bold text-center mb-6">Website Extractor</h2>
          <p className="text-gray-300 mb-6">
            To use the website extractor, you need to provide your Firecrawl API key. 
            This key will be stored securely in your browser.
          </p>
          
          <form onSubmit={handleApiKeySubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Firecrawl API Key
              </label>
              <Input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="search-input w-full"
                placeholder="Enter your Firecrawl API key"
                required
              />
              <p className="text-sm text-gray-400">
                You can get your API key from the Firecrawl dashboard.
              </p>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="gold-btn w-full flex items-center justify-center gap-2"
            >
              {isLoading ? "Verifying..." : "Save API Key"}
            </button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      <Card className="max-w-4xl mx-auto p-6 bg-fawaz-darker border border-fawaz-gold/20">
        <h2 className="text-3xl font-playfair font-bold text-center mb-6">Website Extractor</h2>
        <p className="text-gray-300 mb-6 text-center">
          Enter a URL to extract content from a website. The extractor will crawl the website and return the content in structured format.
        </p>
        
        <form onSubmit={handleExtract} className="space-y-6 mb-8">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Website URL
            </label>
            <Input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="search-input w-full"
              placeholder="https://example.com"
              required
            />
          </div>
          
          {isLoading && (
            <div className="space-y-2">
              <Progress value={progress} className="w-full h-2" />
              <p className="text-sm text-gray-400 text-center">
                Extracting website content... This may take a minute.
              </p>
            </div>
          )}
          
          <button
            type="submit"
            disabled={isLoading}
            className="gold-btn w-full flex items-center justify-center gap-2"
          >
            {isLoading ? "Extracting..." : "Extract Website Content"}
          </button>
          
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowApiKeyForm(true)}
              className="text-fawaz-gold text-sm hover:underline"
            >
              Change API Key
            </button>
          </div>
        </form>
        
        {crawlResult && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b border-fawaz-gold/20 pb-2">Extraction Results</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-fawaz-dark/50 p-3 rounded-lg">
                <p className="font-medium mb-1">Status</p>
                <p className="text-gray-300">{crawlResult.status}</p>
              </div>
              <div className="bg-fawaz-dark/50 p-3 rounded-lg">
                <p className="font-medium mb-1">Pages Crawled</p>
                <p className="text-gray-300">{crawlResult.completed} / {crawlResult.total}</p>
              </div>
              <div className="bg-fawaz-dark/50 p-3 rounded-lg">
                <p className="font-medium mb-1">Credits Used</p>
                <p className="text-gray-300">{crawlResult.creditsUsed}</p>
              </div>
              <div className="bg-fawaz-dark/50 p-3 rounded-lg">
                <p className="font-medium mb-1">Expires</p>
                <p className="text-gray-300">{new Date(crawlResult.expiresAt || '').toLocaleString()}</p>
              </div>
            </div>
            
            {crawlResult.data && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold border-b border-fawaz-gold/20 pb-2 mb-4">Extracted Data</h3>
                <div className="bg-fawaz-dark/50 p-4 rounded-lg overflow-auto max-h-96">
                  <pre className="text-gray-300 text-sm whitespace-pre-wrap">
                    {JSON.stringify(crawlResult.data, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

export default WebsiteExtractor;
