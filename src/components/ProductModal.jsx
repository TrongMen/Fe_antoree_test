import { useState } from 'react';

export default function ProductModal({ product, onClose }) {
  const [rating, setRating] = useState(0); 
  const [hover, setHover] = useState(0);   

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <img src={product.image} alt={product.name} className="w-full h-52 object-cover rounded mb-3" />
        <p className="text-gray-700 mb-2">{product.longDesc}</p>
        <p className="text-indigo-600 font-bold mb-4">Giá: {product.price.toLocaleString()}đ</p>

        <div className="mb-4">
          <p className="font-medium text-gray-700 mb-1">Đánh giá của bạn:</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                className={`text-2xl transition-colors ${
                  star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ★
              </button>
            ))}
          </div>
          {rating > 0 && <p className="text-sm text-gray-500 mt-1">Bạn đã đánh giá {rating} sao</p>}
        </div>

        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Đóng
        </button>
      </div>
    </div>
  );
}
