import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Dcard from "../Components/Dcard";

const Deshboard = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/products")
    .then((res)=>res.json())
    .then((data)=>setProducts(data));
  })
  useEffect(()=>{
    fetch("http://localhost:5000/get-user")
    .then((res)=>res.json())
    .then((data)=>setUser(data));
  })
 
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  return (
    <div className="w-full">
      <div className="w-full flex">
        <div className="w-1/2 bg-[#4cd9ef] m-5 p-5 rounded-lg text-white"><span className="font-bold ">Total products:</span> {products.length}</div>
        <div className="w-1/2 bg-[#4cef8d] m-5 p-5 rounded-lg text-white"><span className="font-bold ">Total Users:</span> {user.length}</div>
         
      </div>
      <div className="flex flex-wrap gap-5 m-5 justify-center">
      {products.map((singleProduct) => (
        <Dcard key={products._id} product={singleProduct} onDelete={handleDeleteProduct} />
      ))}
    </div>
    </div>
  );
};

export default Deshboard;
