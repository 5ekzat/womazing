import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const [detail, setDetail] = useState(null);
  const params = useParams () ;
  const detailProduct = async (id) =>{
    const{data} = await axios.get("/" + id);
    console.log(data);
    setDetail(data)
  };
  useEffect( ()=>{
   detailProduct(params.id);
   }, [params.id]);
   if (detail === null) {
   return <h2> Loading...</h2>;
   }
  return (
    <div>
      <img width ={500} src={detail.images} alt="" />
      <h3>{detail.name}</h3>
      <h4>{detail.price}</h4>
      <button>add to cart</button>  
    </div>
  )
}

export default DetailProduct