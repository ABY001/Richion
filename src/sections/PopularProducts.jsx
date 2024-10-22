// import { products } from "../constants"
import { useEffect, useState } from "react";
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product data from API
  useEffect(() => {
    // Function to shuffle and pick the first 4 products
    const getRandomProducts = (productArray) => {
      return productArray
        .sort(() => Math.random() - 0.5) // Randomize array
        .slice(0, 4); // Select the first 4 products
    };

    const fetchProduct = async () => {
      try {
        const response = await fetch('https://api.richionstore.com/product');
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        const randomProducts = getRandomProducts(data.data);
        setProducts(randomProducts);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="products"
      className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-orange">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top notch quality and style with out sought-after selections. Discover a world of comfort, design and value.</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts