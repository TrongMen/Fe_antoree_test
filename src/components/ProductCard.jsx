import { useState } from 'react';
import { useFavorites } from '../contexts/FavoriteContext';
import { useHistory } from '../contexts/HistoryContext';
import ProductModal from './ProductModal';
import toast from 'react-hot-toast';
export default function ProductCard({ product }) {
  const { toggleFavorite, favorites } = useFavorites();
  const { addToHistory } = useHistory();
  const [show, setShow] = useState(false);
  const isFavorite = favorites.some((p) => p.id === product.id);
  const handleDetail = () => {
    addToHistory(product);
    setShow(true);
  };
  const handleFavoriteClick = () => {
  toggleFavorite(product);
  const isNowFavorite = !isFavorite;
  toast.success(
    isNowFavorite
      ? 'Đã thêm vào danh sách yêu thích'
      : 'Đã xoá khỏi danh sách yêu thích'
  );
};
  return (
    <div className="bg-white rounded shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.shortDesc}</p>
        <p className="font-semibold text-indigo-600">{product.price.toLocaleString()}đ</p>
        <div className="flex justify-between">
          <button onClick={handleDetail} className="text-sm text-white bg-indigo-500 px-3 py-1 rounded">
            Xem chi tiết
          </button>
          <button
            onClick={() => handleFavoriteClick(product)}
            className={`text-sm px-3 py-1 rounded ${isFavorite ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}
          >
            {isFavorite ? '❤️ Đã thích' : '🤍 Yêu thích'}
          </button>
        </div>
      </div>
      {show && <ProductModal product={product} onClose={() => setShow(false)} />}
    </div>
  );
}