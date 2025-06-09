import { useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/CartContext'

const SearchResults = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const query = searchParams.get('q') || ''
  const { addItem } = useCart()

  // Mock search results - replace with actual search logic
  const mockResults = [
    {
      id: 'essential-security',
      name: "AVSafe Solutions Essential Security",
      price: 22.99,
      originalPrice: 26.99,
      image: "/mcafee-antivirus-2.webp"
    },
    {
      id: 'premium-protection',
      name: "AVSafe Solutions Premium Protection", 
      price: 99.0,
      originalPrice: 109.0,
      image: "/Avast-320x320.png"
    }
  ]

  const filteredResults = mockResults.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Search Results for "{query}"
      </h1>

      {filteredResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <Button 
                onClick={() => window.open(`https://wa.me/+18775933166?text=Hi%20I%20want%20to%20buy%20${encodeURIComponent(product.name)}`, '_blank')}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Buy Now
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl">No products found matching "{query}"</p>
          <p className="text-gray-600 mt-2">Try different search terms</p>
        </div>
      )}
    </div>
  )
}

export default SearchResults
