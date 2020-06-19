import React, { Component } from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <div className="container p-5">
                    <div className="col-10 mx-auto my-2 text-center text-title">
                      <h2 className="text-capitalize font-weight-bold">
                        your
                        <strong className="text-red font-weight-bold">
                          {" "}
                          cart
                        </strong>
                      </h2>
                    </div>
                  </div>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}

          {/*  */}
        </ProductConsumer>
      </section>
    );
  }
}
