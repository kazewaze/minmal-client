import React from 'react';
import './Panel.css';
import { Link } from 'react-router-dom';

class Panel extends React.Component {
  render() {
    return (
      <div className="Panel">
        <ul>
          <li><Link to="/dashboard/home">Home</Link></li>
          <li><Link to="/dashboard/store">Store</Link></li>
          <li><Link to="/dashboard/orders">Orders</Link></li>
          <li><Link to="/dashboard/products">Products</Link></li>
          <li><Link to="/dashboard/customers">Customers</Link></li>
          <li><Link to="/dashboard/analytics">Analytics</Link></li>
        </ul>
      </div>
    );
  }
}

export default Panel;