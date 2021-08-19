import React from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import "./Home.css";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Home = () => {
  const { products } = useSelector((state) => state.ProductReducer);
  console.log(products);
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <div className="product__img">
                <Link to={`/details/${product.id}`}>
                  <img src={`/images/${product.image}`} className="image" />
                </Link>
              </div>
              <div className="product__name">
                <h4>{product.name}</h4>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="product__price">
                    <h6>
                      {" "}
                      {currencyFormatter.format(product.price, { code: "USD" })}
                    </h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="product__discount__price">
                    <h6>
                      {currencyFormatter.format(product.discountPrice, {
                        code: "USD",
                      })}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="button__cart">
                <Button variant="contained" color="secondary">
                  Add To Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
