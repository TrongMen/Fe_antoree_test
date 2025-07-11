import { useHistory } from '../contexts/HistoryContext';
import ProductCard from '../components/ProductCard';
export default function History() {
  const { history } = useHistory();
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">🕘 Lịch sử xem</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {history.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}