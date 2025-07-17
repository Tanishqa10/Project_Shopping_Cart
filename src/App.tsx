import React, { useState, useMemo } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import { products } from './data/products';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header 
          onSearchChange={setSearchQuery}
          onCartToggle={() => setIsCartOpen(true)}
        />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <ProductGrid products={filteredProducts} />
        </main>
        
        <Cart 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      </div>
    </CartProvider>
  );
}

export default App;