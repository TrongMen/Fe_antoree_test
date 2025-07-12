import { useState , useEffect} from 'react';
// import products from '../data/products.json';
export default function ChatBot() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);

  // Fetch products from an API or use local data
   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://6871e3c576a5723aacd2fb84.mockapi.io/api/product');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const matches = products.filter((p) =>
      (p.name + p.shortDesc + p.longDesc).toLowerCase().includes(input.toLowerCase())
    );
    setResult(matches);
  };
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border px-3 py-2 rounded"
          placeholder="Tôi muốn học tiếng anh với người bản xứ..."
        />
        <button className="bg-indigo-500 text-white px-4 py-2 rounded">Tìm</button>
      </form>
      <div className="space-y-2">
        {result.map((p) => (
          <div key={p.id} className="p-3 border rounded">
            <strong>{p.name}</strong> - {p.price.toLocaleString()}đ
          </div>
        ))}
        {result.length === 0 && input && <p>Không tìm thấy sản phẩm phù hợp.</p>}
      </div>
    </div>
  );
}