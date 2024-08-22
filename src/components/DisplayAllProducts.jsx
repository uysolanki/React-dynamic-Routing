import React from 'react'
import { products } from '../data/products'
import {Link} from 'react-router-dom'

const DisplayAllProducts = () => {
    console.log(products)

    return (
        <div className="container mt-5">
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card h-100">
                            <Link to={`/singleproduct/${product.id}`}><img 
                                src={product.image} 
                                className="card-img-top" 
                                alt={product.title} 
                                style={{ height: "200px", objectFit: "contain" }}
                            /></Link>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description.substring(0, 100)}...</p>
                                <h6 className="text-primary">${product.price}</h6>
                                <div className="mt-auto">
                                    <span className="badge badge-secondary">
                                        Rating: {product.rating.rate}
                                    </span>
                                    <span className="text-muted ms-2">({product.rating.count} reviews)</span>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary btn-block">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayAllProducts;