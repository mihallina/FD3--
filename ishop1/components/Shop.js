import React from 'react';

import './Shop.css';

class Shop extends React.Component {

  render() {
    return (
      <div className='wrapper'>
        <h1 className='shop_name'>{this.props.name}</h1>
        <p className='shop_address'>{this.props.address}</p>
      </div>
    );
  }

}

export default Shop;
