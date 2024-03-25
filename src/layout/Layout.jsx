import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom' 
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import axios from '../axios'
import Hero from '../components/hero/Hero'
import DetailProduct from '../pages/DetailProduct';

const Layout = () => {
  const [products, setProducts] = useState(null);
  const location = useLocation();

  const getProducts = async () => {
    try {
      const { data } = await axios.get( ); 
      console.log(data);
      setProducts(data);
    } catch(err) {
      console.log(err);
      throw(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (products === null) {
    return <h1>Loading...</h1>
  }

  console.log(products);

  const renderHero = () => {
    if (location.pathname === '/' || location.pathname === '/home') {
      return <Hero />;
    }
    return null;
  };
  
  return (  
    <div>
      <Header/>
      {renderHero()}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop products={products}/>}/>
        <Route path="/detail/:id" element={<DetailProduct/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default Layout
