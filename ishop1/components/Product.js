import React from "react";
import "./Product.css";

class Product extends React.Component {
  render() {
    return (
      <div
        className={`card ${this.props.selected ? "selected" : ""}`}
        onClick={() => this.props.onSelect(this.props.id)}
      >
        <div className="img-wrapper">
          <img src={this.props.url} alt="" />
          <div className="text-wrapper">
            <p className="product-name">{this.props.name}</p>
            <p className="price">{this.props.price}</p>
          </div>
        </div>
        <div className="right">
          <p className="instock">{this.props.instock} items left</p>
          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              if (
                window.confirm("Are you sure you want to delete this product?")
              ) {
                this.props.onDelete(this.props.id);
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
