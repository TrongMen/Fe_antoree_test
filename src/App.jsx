import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Favorites from './pages/Favorites';
import History from './pages/History';
import ChatBot from './pages/ChatBot';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sky-50 font-sans">
      <nav className="bg-white shadow-md p-6 flex justify-between items-center sticky top-0 z-10">
        <h1 className="font-bold text-4xl text-green-500 tracking-tight">
          Anto<span className="text-green-500">ree</span>
        </h1>
        <div className="space-x-4 text-lg text-gray-600 font-bold">
          <Link className="hover:text-indigo-600 transition" to="/">Trang chủ</Link>
          <Link className="hover:text-indigo-600 transition" to="/favorites">Yêu thích</Link>
          <Link className="hover:text-indigo-600 transition" to="/history">Lịch sử</Link>
          <Link className="hover:text-indigo-600 transition" to="/chatbot">Chatbot</Link>
        </div>
      </nav>
      <div className="p-6 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/history" element={<History />} />
          <Route path="/chatbot" element={<ChatBot />} />
        </Routes>
      </div>
    </div>
  );
}