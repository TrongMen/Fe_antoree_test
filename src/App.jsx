import { Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingCircle from './components/LoadingCircle';
import React from 'react';
const ProductList = lazy(() => import('./pages/ProductList'));
const Favorites = lazy(() => import('./pages/Favorites'));
const History = lazy(() => import('./pages/History'));
const ChatBot = lazy(() => import('./pages/ChatBot'));

export default function App() {
  const [showChatBot, setShowChatBot] = React.useState(false);
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
          {/* <Link className="hover:text-indigo-600 transition" to="/chatbot">Chatbot</Link> */}
        </div>
      </nav>
      <div className="p-6 max-w-7xl mx-auto">
        <Suspense fallback={<LoadingCircle />}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/history" element={<History />} />
            {/* <Route path="/chatbot" element={<ChatBot />} /> */}
          </Routes>
        </Suspense>
      </div>
      <img
  onClick={() => setShowChatBot(!showChatBot)}
  src="https://www.shutterstock.com/image-vector/chat-bot-icon-design-robot-600nw-2476207303.jpg"
  alt="Chatbot Icon"
  className="fixed bottom-6 right-6 w-16 h-16 rounded-full cursor-pointer shadow-lg hover:scale-105 transition z-50"
/>

      {showChatBot && (
        <div className="fixed bottom-20 right-20 w-96 z-50">
          <Suspense fallback={<LoadingCircle />}>
            <ChatBot />
          </Suspense>
        </div>
      )}
    </div>
  );
}
