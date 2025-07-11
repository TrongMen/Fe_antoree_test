import { createContext, useState, useContext } from 'react';
const FavoriteContext = createContext();
export const useFavorites = () => useContext(FavoriteContext);
export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      if (prev.find((p) => p.id === product.id)) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };
  return <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>{children}</FavoriteContext.Provider>;
};