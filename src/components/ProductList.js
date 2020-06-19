import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="col-10 mx-auto my-2 text-center text-title">
              <h2 className="text-capitalize font-weight-bold">
                our
                <strong className="text-red font-weight-bold"> products</strong>
              </h2>
            </div>
          </div>
          <div className="row">
            {/* product map */}
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
