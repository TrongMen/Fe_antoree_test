import { useHistory } from "../contexts/HistoryContext";
import ProductCard from "../components/ProductCard";
export default function History() {
  const { history } = useHistory();
  return (
    <div>
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-2xl font-semibold mb-4">🕘 Lịch sử xem</h2>
      </div>
      {history.length === 0 ? (
        <div className="flex flex-col items-center">
          <p className="text-gray-500">Bạn chưa xem sản phẩm nào.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {history.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
