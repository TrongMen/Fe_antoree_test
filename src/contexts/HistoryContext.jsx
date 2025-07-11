import { createContext, useState, useContext } from 'react';
const HistoryContext = createContext();
export const useHistory = () => useContext(HistoryContext);
export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const addToHistory = (product) => {
    setHistory((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev;
      return [product, ...prev.slice(0, 9)];
    });
  };
  return <HistoryContext.Provider value={{ history, addToHistory }}>{children}</HistoryContext.Provider>;
};