export default function SearchBar({ products, setFiltered }) {
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setFiltered(products.filter(p => p.name.toLowerCase().includes(value)));
  };

  return (
    <input 
      onChange={handleSearch}
      className="w-full border border-gray-300 rounded-md px-4 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Tìm kiếm sản phẩm..."
    />
  );
}
