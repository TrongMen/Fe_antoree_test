import { useFavorites } from "../contexts/FavoriteContext";
import ProductCard from "../components/ProductCard";
export default function Favorites() {
  const { favorites } = useFavorites();
  return (
    <div>
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-2xl font-semibold mb-4 ">❤️ Danh sách yêu thích</h2>
      </div>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center">
          <p className="text-gray-500">Bạn chưa có sản phẩm yêu thích nào.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favorites.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
