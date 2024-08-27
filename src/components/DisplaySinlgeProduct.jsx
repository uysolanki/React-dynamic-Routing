import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom'
const DisplaySinlgeProduct = () => {
  const { pid } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const singleProduct = products.find((product) => product.id == pid);
    setProduct(singleProduct);
    console.log(singleProduct);
  }, [pid]);

  if (!product) {
    return <div>Loading...</div>;
  }
  
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
          <div className="mt-auto">
            <span className="badge text-primary">
              Rating: {product?.rating?.rate}
            </span>
            <span className="text-muted ms-2">
              ({product?.rating?.count} reviews)
            </span>
          </div>
          <div className="card-footer">
          <Link to="/myapp1"><button className="btn btn-primary btn-block">Back</button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplaySinlgeProduct;
