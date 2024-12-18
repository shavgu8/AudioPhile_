import { Route, Routes } from "react-router-dom"
import Home from "../page/Home"
import Product from "../page/product"
import Layout from "../components/layout/layout"
import Products from "../page/products"
import Auth, { AuthProvider } from "../components/singup/singup"

import React from 'react';
import { useAuth } from '../components/singup/singup';
import { Navigate } from 'react-router-dom';
import RouterGuard from "./routerguard/RouterGuard"

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return user ? <>{children}</> : <Navigate to="/login" />;
};





const Router  = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="*" element={<p>not found</p>}/>
            
           
              <Route path="login" element={<Auth/>}/>
          
            <Route element={<RouterGuard children={''}/>}>
            <Route path="/products/:productsname" element={<Layout/>}/> 
            <Route path="/products/:productsname/:productsId" element={<Products/>}/> 
            </Route>
            <Route/> 
        </Routes>
    )
}
export default Router