import React, { Component } from "react";

export default class CartTotals extends Component {
  render() {
    const {
      cartSubTotal,
      cartTax,
      cartTotal,
      cart,
      clearCart
    } = this.props.value;
    const emptyCart = cart.length === 0 ? true : false;
    return (
      <React.Fragment>
        {!emptyCart && (
          <div className="container">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                
                <h5>
                  <span className="text-title"> subtotal :</span>{" "}
                  <strong>$ {cartSubTotal} </strong>
                </h5>
                <h5>
                  <span className="text-title"> tax :</span>{" "}
                  <strong>$ {cartTax} </strong>
                </h5>
                <h5>
                  <span className="text-title"> total :</span>{" "}
                  <strong>$ {cartTotal} </strong>
                </h5>

                

                <h5>
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                  
                   <i className="fa  fa-trash " />
                    clear cart
                   </button>
                  </h5>

                <h5>
                  <button  className="btn btn-outline-success text-uppercase mb-3 px-5">
                    <i className="fa fa-credit-card " /> Stripe Pay
                  </button>
                 
                  OR

                  <button className="btn btn-outline-warning text-uppercase mb-3 px-5"> 
                    <i className="fa fa-home" />Cash in Delivery
                  </button>
                </h5>
             
               
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
