import React, { useEffect } from 'react';
import "./App.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import supabase from './supabase';
import { setUser } from './slices/userSlice';

const App = () => {
   const dispatch = useDispatch();

   const getUser = async()=>{
    const {data,error} = await supabase.auth.getSession();
      //console.log(data,error);
       if(data.session){
         dispatch(setUser(data.session.user));
       }
   };

   useEffect(()=>{
    getUser();
   },[]);

  return (
   
  
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}> </Route>
                    <Route path='/products' element={<Products />}> </Route>
                    <Route path='/productdetails/:id' element={<ProductDetails />}> </Route>
                    <Route path='/cart' element={<Cart />}> </Route>
                </Routes>
            </BrowserRouter>
      
      
    
  )
}

export default App;