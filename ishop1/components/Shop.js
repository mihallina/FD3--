import React from "react";

import "./Shop.css";
import Product from "./Product";

class Shop extends React.Component {
  render() {
    const productCode = this.props.products.map((pr) => (
      <Product
        key={pr.key}
        url={pr.url}
        name={pr.name}
        price={pr.price}
        instock={pr.instock}
      />
    ));

    return (
      <div className="wrapper">
        <div className="logo">
          <h1 className="shop_name">{this.props.name}</h1>
          <p className="shop_address">{this.props.address}</p>
        </div>
        <div className="products">{productCode}</div>
      </div>
    );
  }
}

export default Shop;
