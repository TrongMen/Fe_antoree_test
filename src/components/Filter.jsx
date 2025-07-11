export default function Filter({ products, setFiltered }) {
  const handleFilter = (range) => {
    let filtered = [];
    if (range === "Tất cả") filtered = products;
    else if (range === "<500K")
      filtered = products.filter((p) => p.price < 500000);
    else if (range === "500K–1 triệu")
      filtered = products.filter(
        (p) => p.price >= 500000 && p.price <= 1000000
      );
    else filtered = products.filter((p) => p.price > 1000000);
    setFiltered(filtered);
  };

  return (
    <div className="flex gap-2 mt-4">
      {["Tất cả", "<500K", "500K–1 triệu", ">1 triệu"].map((r) => (
        <button
          key={r}
          onClick={() => handleFilter(r)}
          className="px-4 py-1 border rounded-full text-sm hover:bg-indigo-100"
        >
          {r}
        </button>
      ))}
    </div>
  );
}
