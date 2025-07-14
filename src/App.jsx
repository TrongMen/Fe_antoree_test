import { Routes, Route, NavLink } from "react-router-dom";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import LoadingCircle from "./components/LoadingCircle";
import { FaUserCircle } from "react-icons/fa";

const ProductList = lazy(() => import("./pages/ProductList"));
const Favorites = lazy(() => import("./pages/Favorites"));
const History = lazy(() => import("./pages/History"));
const ChatBot = lazy(() => import("./pages/ChatBot"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  const [showChatBot, setShowChatBot] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
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
    <div className="min-h-screen bg-gradient-to-br from-white to-sky-50 font-sans">
      <nav className="bg-white shadow-md pt-3 pr-6 pb-3 pl-6 relative flex items-center justify-between sticky top-0 z-10">
        <h1
          onClick={() => (window.location.href = "/")}
          className="font-bold text-4xl text-green-500 tracking-tight cursor-pointer hover:opacity-80 transition"
        >
          Anto<span className="text-green-500">ree</span>
        </h1>
        {/* Web */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-6 text-lg text-gray-600 font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-green-400 font-semibold border-b-2 border-green-600"
                  : "text-gray-600 hover:text-green-600"
              }`
            }
          >
            Trang chủ
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-green-400 font-semibold border-b-2 border-green-600"
                  : "text-gray-600 hover:text-green-600"
              }`
            }
          >
            Yêu thích
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-green-400 font-semibold border-b-2 border-green-600"
                  : "text-gray-600 hover:text-green-600"
              }`
            }
          >
            Lịch sử
          </NavLink>
          <NavLink
              to="/about"
              className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-green-400 font-semibold border-b-2 border-green-600"
                  : "text-gray-600 hover:text-green-600"
              }`
            }
          >
              Giới thiệu
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-green-400 font-semibold border-b-2 border-green-600"
                  : "text-gray-600 hover:text-green-600"
              }`
            }
          >
              Liên hệ
            </NavLink>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden absolute w-full top-full left-0 bg-white shadow-lg rounded-b-lg px-6 py-4 space-y-3 z-50">
            <NavLink
              to="/"
              onClick={() => setShowMobileMenu(false)}
              className="block py-2 text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Trang chủ
            </NavLink>
            <NavLink
              to="/favorites"
              onClick={() => setShowMobileMenu(false)}
              className="block py-2 text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Yêu thích
            </NavLink>
            <NavLink
              to="/history"
              onClick={() => setShowMobileMenu(false)}
              className="block py-2 text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Lịch sử
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setShowMobileMenu(false)}
              className="block py-2 text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Giới thiệu
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setShowMobileMenu(false)}
              className="block py-2 text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Liên hệ
            </NavLink>
          </div>
        )}

        <div className="flex items-center space-x-4 text-md text-gray-600 font-bold relative">
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
          >
            <FaUserCircle className="text-2xl text-gray-700" />
            <span>{user.name}</span>
          </div>

          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute right-0 top-12 w-48 bg-white border rounded shadow-md z-50"
            >
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
      </nav>

      <div className="pr-6 pl-6 pb-6 pt-3 max-w-7xl mx-auto">
        <Suspense fallback={<LoadingCircle />}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/history" element={<History />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>

      {/* Nút Chatbot */}
      <img
        onClick={() => setShowChatBot(!showChatBot)}
        src="https://www.shutterstock.com/image-vector/chat-bot-icon-design-robot-600nw-2476207303.jpg"
        alt="Chatbot Icon"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full cursor-pointer shadow-lg hover:scale-105 transition z-50"
      />

      {/* Giao diện Chatbot */}
      {showChatBot && (
        <div className="fixed bottom-20 right-20 w-96 z-50 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-end p-2 border-b">
            <button
              onClick={() => setShowChatBot(false)}
              className="text-gray-500 hover:text-red-500 text-xl font-bold"
              title="Đóng"
            >
              &times;
            </button>
          </div>

          <div className="p-4">
            <Suspense fallback={<LoadingCircle />}>
              <ChatBot />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
}
