import { useState } from "react";
import { getSuggestions } from "../api/fakeApi";

export default function SuggestionButton({ setFiltered }) {
  const [loading, setLoading] = useState(false);

  const fetchSuggestions = async () => {
    try {
      setLoading(true);
      const suggestions = await getSuggestions("user123");
      setFiltered(suggestions);
    } catch (err) {
      alert("Không thể lấy gợi ý lúc này!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={fetchSuggestions}
      className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
    >
      {loading ? "Đang gợi ý..." : "Gợi ý sản phẩm phù hợp"}
    </button>
  );
}
