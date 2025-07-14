import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import SuggestionSection from '../components/SuggestionSection';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all'); // ✅ Thêm state lọc theo loại

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
  }, [search, priceFilter, typeFilter]); // ✅ Thêm typeFilter vào dependency

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesPrice =
      priceFilter === 'all' ||
      (priceFilter === '<500k' && product.price < 500000) ||
      (priceFilter === '500k-1m' &&
        product.price >= 500000 &&
        product.price <= 1000000) ||
      (priceFilter === '>1m' && product.price > 1000000);
    const matchesType =
      typeFilter === 'all' || product.type?.toLowerCase() === typeFilter.toLowerCase(); // ✅ Thêm điều kiện lọc theo type

    return matchesSearch && matchesPrice && matchesType;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div>
      <div className="flex flex-col items-center mb-3 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-green-400">
          Antoree
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-2 italic">
          Khóa học chất lượng - Học viên chọn, chuyên gia dạy!
        </p>
      </div>

      
      <div className="mb-3 flex flex-col md:flex-row gap-4 justify-between items-center flex-wrap">
        
        <div className="relative w-full md:w-3/5">
  <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
      />
    </svg>
  </span>
  <input
    type="text"
    placeholder="Tìm kiếm sản phẩm..."
    className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

        <div className="flex gap-4 mb-4 md:mb-0 flex-wrap">
        {/* Price */}
        
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="border border-gray-300 rounded w-40 md:w-48 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
        >
          <option value="all">Tất cả mức giá</option>
          <option value="<500k">Dưới 500K</option>
          <option value="500k-1m">500K - 1 triệu</option>
          <option value=">1m">Trên 1 triệu</option>
        </select>
        {/* Type */}
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border border-gray-300 rounded w-40 md:w-48 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
        >
          <option value="all">Tất cả loại</option>
          <option value="Lập trình">Lập trình</option>
          <option value="Thiết kế">Thiết kế</option>
          <option value="Tiếng anh">Tiếng anh</option>
        </select>
      </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white shadow-lg p-6 rounded-lg">
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
