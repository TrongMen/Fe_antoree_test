import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import SuggestionSection from '../components/SuggestionSection';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try { 
        const response = await axios.get(
          'https://6871e3c576a5723aacd2fb84.mockapi.io/api/product'
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setSearchParams({ page: '1' });
  }, [search, priceFilter]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesPrice =
      priceFilter === 'all' ||
      (priceFilter === '<500k' && product.price < 500000) ||
      (priceFilter === '500k-1m' &&
        product.price >= 500000 &&
        product.price <= 1000000) ||
      (priceFilter === '>1m' && product.price > 1000000);
    return matchesSearch && matchesPrice;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div>
      <div className="flex flex-col items-center mb-6 bg-white shadow-md p-6 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">
          Chào mừng bạn đến với{' '}
          <span className="text-green-400 text-5xl">Antoree</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Khám phá các sản phẩm học tập và rèn luyện kỹ năng
        </p>
      </div>

      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
        >
          <option value="all">Tất cả mức giá</option>
          <option value="<500k">Dưới 500K</option>
          <option value="500k-1m">500K - 1 triệu</option>
          <option value=">1m">Trên 1 triệu</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white shadow-md p-6 rounded-lg">
        {currentProducts.length > 0 ? (
          currentProducts.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Không có sản phẩm nào phù hợp.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setSearchParams({ page: (index + 1).toString() })}
              className={`px-4 py-2 rounded border text-sm font-medium ${
                currentPage === index + 1
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
      <SuggestionSection userId="123" />
    </div>
  );
}
