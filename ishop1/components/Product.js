import React from "react";
import "./Product.css";

class Product extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="img-wrapper">
          <img src={this.props.url} alt="" />
          <div className="text-wrapper">
            <p className="product-name">{this.props.name}</p>
            <p className="price">{this.props.price}</p>
          </div>
        </div>
        <p className="instock">{this.props.instock} items left</p>
      </div>
    );
  }
}

export default Product;
