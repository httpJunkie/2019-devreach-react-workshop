import React from 'react';
import { NavLink } from 'react-router-dom';
const Menu = () => {
  return (
    <ul style={{userSelect: 'none'}}>
      <li className="link">
        <NavLink tabIndex="2" exact activeClassName="active" to="/">Home</NavLink>
      </li>
      <li className="link">
        <NavLink tabIndex="3" activeClassName="active" to="/events">Events</NavLink>
      </li>
      <li className="link">
        <a tabIndex="4" href="https://github.com/httpJunkie/2019-devreach-react-workshop">
          Source Code <i className="k-icon k-i-hyperlink-open-sm"></i>
        </a>
      </li>
      <li className="menu"><i className="k-icon k-i-menu"></i></li>
    </ul>
  )
}
export default Menu;