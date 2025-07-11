export default function ProductModal({ product, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <img src={product.image} alt={product.name} className="w-full h-52 object-cover rounded mb-3" />
        <p className="text-gray-700 mb-2">{product.longDesc}</p>
        <p className="text-indigo-600 font-bold mb-4">Giá: {product.price.toLocaleString()}đ</p>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Đóng
        </button>
      </div>
    </div>
  );
}
