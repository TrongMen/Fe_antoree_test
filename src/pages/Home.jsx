import { useEffect, useState } from "react";
import { getAllProducts } from "../api/fakeApi";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import SuggestionButton from "../components/SuggestionButton";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res);
      setFiltered(res);
    });
  }, []);

  return (
    <div className="p-4">
      <SearchBar products={products} setFiltered={setFiltered} />
      <Filter products={products} setFiltered={setFiltered} />
      <SuggestionButton setFiltered={setFiltered} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
