import React from 'react';
import './DashBoard.css';
import Panel from '../../components/Panel/Panel';

class DashBoard extends React.Component {
  render() {
    return (
      <div className="DashBoard">
        <Panel />
      </div>
    );
  }
}

export default DashBoard;