import React from 'react'
import Header from './components/header/Header'
import Shop from './components/Shop/Shop'
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';

import {
  Routes,
  Route,
  Navigate
  
} from "react-router-dom";

export default function App() {
  return (
 <Routes>
         <Route  path="/"  element={<Navigate to='/header'/>} />
        <Route  path="/header" element={<Header/>} />
        <Route  path="/shop" element={<Shop/>} />
        <Route  path="/review" element={<Review/>} />
        <Route path="/inventory" element={<Inventory/>} />
       <Route path='/product/:productKey' element={<ProductDetail/>} />
       <Route  path="*"  element={<NotFound/>} />
    
      
</Routes>  
  )
}


