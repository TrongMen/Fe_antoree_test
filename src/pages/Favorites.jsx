import { useFavorites } from '../contexts/FavoriteContext';
import ProductCard from '../components/ProductCard';
export default function Favorites() {
  const { favorites } = useFavorites();
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">❤️ Danh sách yêu thích</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {favorites.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}