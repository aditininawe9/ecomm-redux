import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import Button from "react-bootstrap/Button";

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
        <div className="col-12">
          <div className="detail__img">
            <img src={`/images/${product.image}`} />
          </div>
        </div>
        <div className="detail__name">
          <h1>{product.name}</h1>
        </div>
        <div className="detail__description">{product.desc}</div>
        <div className="detail__price">
          <h1>{currencyFormatter.format(product.price, { code: "USD" })}</h1>
        </div>
        <div className="discount__price">
          <h1>
            {currencyFormatter.format(product.discountPrice, {
              code: "USD",
            })}
          </h1>
        </div>
      </div>
      <Button variant="primary">Add To Cart</Button>
    </div>
  );
};

export default Details;
