import {useParams} from 'react-router-dom'
import { products } from '../data/products'
import { useState } from 'react'
import { useEffect } from 'react'

const DisplaySinlgeProduct = () => {
    const {id} = useParams()
    
    const [product,setProduct] = useState({})

    useEffect(()=>{
       const singleProduct= products.find((product)=>(product.id==id))
       setProduct(singleProduct)
       console.log(singleProduct)
    },[id])
  return (
    <>
        <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img 
                                src={product.image} 
                                className="card-img-top" 
                                alt={product.title} 
                                style={{ height: "200px", objectFit: "contain" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <h6 className="text-primary">${product.price}</h6>
                               
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary btn-block">Add to Cart</button>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default DisplaySinlgeProduct