
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/ui/ProductCard";

const ShopPage = () => {
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
    {
      id: 5,
      title: "Iron Supplement",
      description: "Helps prevent iron deficiency and maintains energy levels.",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1586822349716-fc3303839f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      category: "Vitamins & Minerals",
    },
    {
      id: 6,
      title: "Echinacea Immune Support",
      description: "Herbal supplement that helps boost your immune system.",
      price: 18.95,
      image: "https://images.unsplash.com/photo-1600695268275-1a6468700bd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      category: "Herbs",
    },
  ];

  // Available categories
  const categories = [
    "All Products",
    "Vitamins & Minerals",
    "Essential Fatty Acids",
    "Proteins & Sports Supplements",
    "Herbs",
    "Probiotics",
    "Blood Booster Supplements",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const filteredProducts = selectedCategory === "All Products" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Health & Wellness Shop</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our selection of premium health supplements and wellness products 
            to support your journey to optimal health.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <Separator className="mb-4" />
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                {selectedCategory} <span className="text-gray-500">({filteredProducts.length})</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ShopPage;
