import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import CartProvider from '../src/Context/ContProvide.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <CartProvider>
   <App />

   </CartProvider>
  </BrowserRouter>
  
)
