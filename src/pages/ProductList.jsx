import { useState } from 'react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import SuggestionSection from '../components/SuggestionSection';

export default function ProductList() {
  const [search, setSearch] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesPrice =
      priceFilter === 'all' ||
      (priceFilter === '<500k' && product.price < 500000) ||
      (priceFilter === '500k-1m' && product.price >= 500000 && product.price <= 1000000) ||
      (priceFilter === '>1m' && product.price > 1000000);
    return matchesSearch && matchesPrice;
  });

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Chào mừng bạn đến với Antoree</h1>
      </div>
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="all">Tất cả mức giá</option>
          <option value="<500k">Dưới 500K</option>
          <option value="500k-1m">500K - 1 triệu</option>
          <option value=">1m">Trên 1 triệu</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <SuggestionSection userId="123" />
    </div>
  );
}