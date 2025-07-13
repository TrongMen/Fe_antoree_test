import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function SuggestionSection({ userId = '123' }) {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSuggestions = async () => {
    setLoading(true);
    setError(null);
    try {
      // Giả lập API call với timeout
      await new Promise((res) => setTimeout(res, 1500));
      const mockData = [
        {
          id: 'sug1',
          name: 'Khóa học AI cho người mới',
          price: 750000,
          image: 'https://carly.com.vn/media/hojjg0ow/ai-courses.jpg?anchor=center&mode=crop&rnd=133803868323370000',
          description: 'Tìm hiểu AI cơ bản và ứng dụng trong đời sống.'
        },
        {
          id: 'sug2',
          name: 'Tiếng Anh giao tiếp với người bản xứ',
          price: 1200000,
          image: '	https://blog.olli.vn/wp-content/uploads/2024/08/luyen-noi-tieng-Anh-thumb-1160x773.png',
          description: 'Thực hành nói tiếng Anh với giáo viên nước ngoài.'
        }
      ];
      setSuggestions(mockData);
    } catch (err) {
      setError('Không thể lấy gợi ý lúc này.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">🔍 Gợi ý sản phẩm phù hợp</h2>
      <button
        onClick={fetchSuggestions}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Gợi ý ngay
      </button>

      {loading && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 ">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse bg-white p-4 rounded shadow ">
              <div className="h-40 bg-gray-200 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {!loading && !error && suggestions.length > 0 && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {suggestions.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
