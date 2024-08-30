import React, { useEffect } from "react";
//import { products } from "../data/products";
import { Link } from "react-router-dom";
import Navlist from "./navbar/navlist/Navlist";
import { useState } from "react";
import DropDownList from "../shared/DropDownList";
import axios from 'axios'

const DisplayAllProducts = () => {
  const [products, setProducts] = useState([]);  //4
  const [productBu, setProductsBu] = useState([]); //20

  // async function loadData()
  // {
  //   fetch('https://fakestoreapi.com/products')
  //   .then(response=>response.json())
  //   .then(response=>{
  //       setProducts(response)
  //       setProductsBu(response)})
  //   .catch((error)=>{console.log(error)})
  // }

  // async function loadData()
  // {
  //      const productsObjectFromAxios =await axios.get('https://fakestoreapi.com/products')
  //      console.log(productsObjectFromAxios)
  //      const myProducts=productsObjectFromAxios.data
  //      console.log(myProducts)
  //      setProducts(myProducts)
  //      setProductsBu(myProducts)
  // }

  async function loadData()
  {
    const objectReceivedFromAxios= await axios.get('https://fakestoreapi.com/products')
    console.log(objectReceivedFromAxios)
    const myProducts=objectReceivedFromAxios.data
    console.log(myProducts)
    setProducts(myProducts)
    setProductsBu(myProducts)
  }



  useEffect(()=>{
    loadData()
  },[])
  // const links = [
  //   { name: "men's clothing" },
  //   { name: "women's clothing" },
  //   { name: "jewelery" },
  //   { name: "electronics" },
  //   { name: "kid's clothing" },
  //   { name: "All" },
  // ];

//const categories=[...new Set(products.map((product)=>(product.category)))].map((cat)=>({name:cat}))
  const allcategoreis=productBu.map((product)=>(product.category))
//console.log(allcategoreis)

  const uniqueCategories= new Set(allcategoreis)
//console.log(uniqueCategories)

  const categoryKeyValuePairs=[...uniqueCategories].map((uc)=>({name:uc}))
 //console.log(categoryKeyValuePairs)

 const categoryKeyValuePairsWithAll=[...categoryKeyValuePairs,{name:"All"}]
 //console.log(categoryKeyValuePairsWithAll)

  function handleCategory(category) {  //Electronics
 //console.log(category);

    if(category!="All")
    {
      const filteredProducts=productBu.filter((product)=>product.category===category);
      setProducts(filteredProducts);
    }
    else{
      setProducts(productBu);
    }
  }

  function filterProduct(event)
  {
    const productTitle=event.target.value;
    console.log(productTitle)
    const searchedProduct = productBu?.filter((product)=>(product.title.includes(productTitle)))
    setProducts(searchedProduct);
  }
  return (
    <>
      <Navlist text={categoryKeyValuePairsWithAll} handleCategory={handleCategory}/>
      <DropDownList text={categoryKeyValuePairsWithAll} handleCategory={handleCategory} />
      <input type="text" placeholder="search product.." onChange={filterProduct}/>
      
      <div className="container mt-5">
        <div className="row">
          {products?.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <Link to={`/singleproduct/${product.id}`}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                </Link>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    {product.description.substring(0, 100)}...
                  </p>
                  <h6 className="text-primary">${product.price}</h6>
                  <h6 className="text-primary">{product.category}</h6>
                  <div className="mt-auto">
                    <span className="badge text-primary">
                      Rating: {product.rating.rate}
                    </span>
                    <span className="text-muted ms-2">
                      ({product.rating.count} reviews)
                    </span>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary btn-block">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayAllProducts;
