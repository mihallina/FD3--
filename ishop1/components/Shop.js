import React from "react";

import "./Shop.css";
import Product from "./Product";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      selectedId: null,
    };
    this.deleteProduct = this.deleteProduct.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  deleteProduct(key) {
    this.setState({
      products: this.state.products.filter((el) => el.key !== key),
    });
  }

  changeColor(key) {
    this.setState((prevState) => {
      const newSelectedId = prevState.selectedId === key ? null : key;
      return { selectedId: newSelectedId };
    });
  }

  render() {
    const productCode = this.state.products.map((pr) => (
      <Product
        key={pr.key}
        id={pr.key}
        url={pr.url}
        name={pr.name}
        price={pr.price}
        instock={pr.instock}
        selected={this.state.selectedId === pr.key}
        onSelect={this.changeColor}
        onDelete={this.deleteProduct}
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
