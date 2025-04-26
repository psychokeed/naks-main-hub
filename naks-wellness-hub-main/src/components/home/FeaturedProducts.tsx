
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProductCard from "../ui/ProductCard";

const FeaturedProducts = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      title: "Omega-3 Fish Oil",
      description: "High-quality omega-3 fatty acids for heart and brain health.",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      category: "Essential Fatty Acids",
    },
    {
      id: 2,
      title: "Multivitamin Complex",
      description: "Complete daily vitamin and mineral supplement for optimal health.",
      price: 24.95,
      image: "https://images.unsplash.com/photo-1584308074727-e93b865ae390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      category: "Vitamins & Minerals",
    },
    {
      id: 3,
      title: "Whey Protein Isolate",
      description: "Premium protein supplement for muscle recovery and growth.",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      category: "Proteins & Sports Supplements",
    },
    {
      id: 4,
      title: "Probiotic Formula",
      description: "Supports digestive health with beneficial bacteria.",
      price: 36.50,
      image: "https://images.unsplash.com/photo-1626197031507-c9c6db473923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      category: "Probiotics",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="mt-2 text-gray-600">
              Premium supplements to support your health and wellness journey.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
