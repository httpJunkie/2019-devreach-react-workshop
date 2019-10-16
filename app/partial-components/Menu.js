import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from "../context/AppContext";

const Menu = () => {
  const context = useContext(AppContext);

  return (
    <ul style={{userSelect: 'none'}}>
      <li className="link">
        <NavLink className="text_link" tabIndex="2" exact activeClassName="active" to="/">Home</NavLink>
      </li>
      <li className="link">
        <NavLink className="text_link" tabIndex="3" activeClassName="active" to="/events">Events</NavLink>
      </li>
      <li className="link">
        <a className="text_link" tabIndex="4" href="https://github.com/httpJunkie/2019-devreach-react-workshop">
          Source Code <i className="k-icon k-i-hyperlink-open-sm"></i>
        </a>
      </li>
      <li className="menu">
        <i className="k-icon k-i-menu"
          onKeyPress={event => {
            if (event.key === "Enter") {
              context.toggleSidenav(!context.navOpen);
            }
          }}
          onClick={() => {
            context.toggleSidenav(!context.navOpen);
          }}
        ></i>
      </li>
    </ul>
  )
}

export default Menu;