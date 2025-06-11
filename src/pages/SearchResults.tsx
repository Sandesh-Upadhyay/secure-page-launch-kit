import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  originalPrice?: number;
}

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<Product[]>([]);
  const { addItem } = useCart();

  useEffect(() => {
    const searchProducts = async () => {
      setLoading(true);
      try {
        const mockResults = [
          {
            id: 'essential-security',
            name: "AVSafe Solutions Essential Security",
            description: "Essential security protection for your devices",
            price: 22.99,
            originalPrice: 26.99,
            image: "/mcafee-antivirus-2.webp"
          },
          {
            id: 'premium-protection',
            name: "AVSafe Solutions Premium Protection",
            description: "Complete premium security suite",
            price: 99.0,
            originalPrice: 109.0,
            image: "/Avast-320x320.png"
          }
        ].filter(product => 
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
        );

        setResults(mockResults);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setLoading(false);
      }
    };

    searchProducts();
  }, [query]);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        <p className="text-slate-400">
          Showing results for "{query}"
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
        </div>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-orange-500/10 transition-all"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-slate-400 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-orange-500">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-slate-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button
                    onClick={() => window.open(`https://wa.me/+18775933166?text=Hi%20I%20want%20to%20buy%20${encodeURIComponent(product.name)}`, '_blank')}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Search className="h-12 w-12 mx-auto mb-4 text-slate-400" />
          <h2 className="text-2xl font-semibold mb-2">No results found</h2>
          <p className="text-slate-400">
            Try adjusting your search terms or browse our categories
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchResults;