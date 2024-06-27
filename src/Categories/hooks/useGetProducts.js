// import { useEffect, useState } from "react"
// import { getCategories } from "../utils"



// export const useGetProducts= async () =>{
//     const [products, setProducts] =useState([]);
//     const [error,setError] =useState('null');
//     // const [loading,setLoading]=useState(false);

//     useEffect(()=>{
//         const fetchProducts =async()=>{
//             try{
//                 // setLoading(true);
//                 const result = await getCategories();
//                 console.log({result});
//                 setProducts(result.products ||[] );
//                 // setLoading(false);
//             }
//             catch(error){
//                 setError(`Error:${error.message }`)
//                 // setLoading(false);
//             }
//         };
//         fetchProducts();
//     }, [] );
//     return {products,error}
// };
  
import React, { useState, useEffect } from 'react';
import { getCategories } from '../utils';
// import { useProducts } from '../utils';

// import { useEffect, useState } from 'react';
// import { getCategories } from '../utils';

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories();
        setProducts(data.products || []); // Ensure products is an array
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return { products, error };
};

