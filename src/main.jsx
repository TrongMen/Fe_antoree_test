import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { HistoryProvider } from './contexts/HistoryContext';
import { FavoriteProvider } from './contexts/FavoriteContext';
import { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoriteProvider>
        <HistoryProvider>
          <App />
          <Toaster  />
        </HistoryProvider>
      </FavoriteProvider>
    </BrowserRouter>
  </React.StrictMode>
);