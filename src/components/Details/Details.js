import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "./Details.css";
import currencyFormatter from "currency-formatter";
import { Button } from "@material-ui/core";

const Details = () => {
  const { id } = useParams();
  console.log("details", id);
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductReducer);
  console.log(product);
  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={`/images/${product.image}`} />
        </div>
        <div className="col">
          <h1>{product.name}</h1>
          <p>{product.desc}</p>
          <div className="row">
            <div className="col-md-6 original__price">
              <h1>
                {currencyFormatter.format(product.price, { code: "USD" })}
              </h1>
            </div>
            <div className="col-md-6">
              <h1>
                {currencyFormatter.format(product.discountPrice, {
                  code: "USD",
                })}
              </h1>
            </div>
          </div>
          <Button
            variant="contained"
            color="secondary"
            className="button__cart"
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
