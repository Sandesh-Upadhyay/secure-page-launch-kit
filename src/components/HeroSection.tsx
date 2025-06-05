import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  const products = [
    {
      name: "McAfee AntiVirus",
      subtitle: "1-Year / 3-PCS",
      originalPrice: 26.99,
      salePrice: 22.99,
      image: "/mcafee-antivirus-2.webp",
      link: "/product/mcafee-antivirus-1-year-3-pcs",
    },
    {
      name: "Avast Premium Security",
      subtitle: "10 Devices, 1 Year, Global",
      originalPrice: 109.0,
      salePrice: 99.0,
      image: "/Avast-320x320.png",
      link: "/product/avast-premium-security-10-devices-1-year",
    },
    {
      name: "Bitdefender Antivirus Plus",
      subtitle: "2 Years | 1 Device | Windows | Downloadable",
      originalPrice: 89.99,
      salePrice: 47.99,
      image: "/bit-av-1-600x600.png",
      link: "/product/bitdefender-antivirus-plus-2-years-1-device",
    },
    {
      name: "McAfee Internet Security",
      subtitle: "1-Year / 3-Devices",
      originalPrice: 44.99,
      salePrice: 34.99,
      image: "/mcafee-internet-security.webp",
      link: "/product/mcafee-internet-security-1-year-3-devices",
    },
  ];

  const handleProductClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white p-6 pt-10 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
              onClick={() => handleProductClick(product.link)}
            >
              <div className="absolute -top-2 right-4 bg-red-500 text-white text-sm px-3 py-1.5 rounded-full z-10">
                SALE
              </div>
              <div className="aspect-square relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.subtitle}</p>
                <div className="flex justify-center items-center gap-2 mb-4">
                  <span className="text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-xl font-bold">
                    ${product.salePrice.toFixed(2)}
                  </span>
                </div>
                <Button
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-white text-sm px-3 py-1.5 rounded-full z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to cart logic here
                  }}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>


     <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white p-6 pt-10 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
              onClick={() => handleProductClick(product.link)}
            >
              <div className="absolute -top-2 right-4 bg-red-500 text-white text-sm px-3 py-1.5 rounded-full z-10">
                SALE
              </div>
              <div className="aspect-square relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.subtitle}</p>
                <div className="flex justify-center items-center gap-2 mb-4">
                  <span className="text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-xl font-bold">
                    ${product.salePrice.toFixed(2)}
                  </span>
                </div>
                <Button
                  className="w-full bg-zinc-800 hover:bg-zinc-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to cart logic here
                  }}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white p-6 pt-10 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
              onClick={() => handleProductClick(product.link)}
            >
              <div className="absolute -top-2 right-4 bg-red-500 text-white text-sm px-3 py-1.5 rounded-full z-10">
                SALE
              </div>
              <div className="aspect-square relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.subtitle}</p>
                <div className="flex justify-center items-center gap-2 mb-4">
                  <span className="text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-xl font-bold">
                    ${product.salePrice.toFixed(2)}
                  </span>
                </div>
                <Button
                  className="w-full bg-zinc-800 hover:bg-zinc-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to cart logic here
                  }}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white p-6 pt-10 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
              onClick={() => handleProductClick(product.link)}
            >
              <div className="absolute -top-2 right-4 bg-red-500 text-white text-sm px-3 py-1.5 rounded-full z-10">
                SALE
              </div>
              <div className="aspect-square relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.subtitle}</p>
                <div className="flex justify-center items-center gap-2 mb-4">
                  <span className="text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-xl font-bold">
                    ${product.salePrice.toFixed(2)}
                  </span>
                </div>
                <Button
                  className="w-full bg-zinc-800 hover:bg-zinc-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to cart logic here
                  }}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white p-6 pt-10 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
              onClick={() => handleProductClick(product.link)}
            >
              <div className="absolute -top-2 right-4 bg-red-500 text-white text-sm px-3 py-1.5 rounded-full z-10">
                SALE
              </div>
              <div className="aspect-square relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.subtitle}</p>
                <div className="flex justify-center items-center gap-2 mb-4">
                  <span className="text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-xl font-bold">
                    ${product.salePrice.toFixed(2)}
                  </span>
                </div>
                <Button
                  className="w-full bg-zinc-800 hover:bg-zinc-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to cart logic here
                  }}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </section>
  );
};

export default HeroSection;
