import { Routes, Route, Link, NavLink } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingCircle from "./components/LoadingCircle";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
const ProductList = lazy(() => import("./pages/ProductList"));
const Favorites = lazy(() => import("./pages/Favorites"));
const History = lazy(() => import("./pages/History"));
const ChatBot = lazy(() => import("./pages/ChatBot"));

export default function App() {
  const [showChatBot, setShowChatBot] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  const user = {
    name: "Trọng Mến",
    avatar: "",
  };

  const handleLogout = () => {
    alert("Đã đăng xuất");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sky-50 font-sans"
    // style={{ backgroundImage: "url('https://mega.com.vn/media/news/2406_hinh-nen-green-4k26.jpg')" }}
    >
      <nav className="bg-white shadow-md pt-3 pr-6 pb-3 pl-6 flex justify-between items-center sticky top-0 z-10">
        <h1
          onClick={() => (window.location.href = "/")}
          className="font-bold text-4xl text-green-500 tracking-tight cursor-pointer hover:opacity-80 transition "
        >
          Anto<span className="text-green-500">ree</span>
        </h1>

        <div className="flex items-center space-x-6 text-lg text-gray-600 font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              }`
            }
          >
            Trang chủ
          </NavLink>

          <NavLink className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              }`
            } to="/favorites">
            Yêu thích
          </NavLink>
          <NavLink className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              }`
            } to="/history">
            Lịch sử
          </NavLink>
          <div className="relative">
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
            >
              <FaUserCircle className="text-2xl text-gray-700" />
              <span>{user.name}</span>
            </div>

            {showDropdown && (
              <div
              ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-50">
                <div className="px-4 py-2 border-b text-gray-800 hover:bg-gray-50 cursor-pointer">
                  Thông tin cá nhân
                </div>
                <div
                  onClick={handleLogout}
                  className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                >
                  Đăng xuất
                </div>
              </div>
            )}
          </div>
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
