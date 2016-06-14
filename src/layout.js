import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="top-menu">
          <ul>
            <li>
              <Link to="/test">Test</Link>
            </li>
            <li>
              <Link to="/desc">Description</Link>
            </li>
          </ul>
        </div>

        {this.props.children}
      </div>
    )
  }
}
