import React from "react";
// import { NavLink } from "react-router-dom";
import { Navbar, NavbarLeft, NavbarRight } from "./styles";
// import { P3 } from "app/components/font";

const Header = () => {
  const refPortofolioListMenu = React.useRef();

  function onMouseOverHandler(type) {
    if (type === 'portofolio-button') {
      refPortofolioListMenu.current.classList.add("show")
    }
  }

  function onMouseOutHandler(type) {
    if (type === 'portofolio-button') {
      refPortofolioListMenu.current.classList.remove("show")
    }
  }

  return (
    <Navbar>
      <NavbarLeft>
        <button className="btn">
          Demos
        </button>
        <button className="btn">
          Pages
        </button>
        <button 
          className="btn dropdown-toggle"
          onMouseOver={() => onMouseOverHandler('portofolio-button')} 
          onMouseOut={() => onMouseOutHandler('portofolio-button')}
        >
          Portofolio
        </button>
        <div 
          ref={refPortofolioListMenu} 
          className="portofolio-list-menu dropdown-menu"
          onMouseOver={() => onMouseOverHandler('portofolio-button')} 
          onMouseOut={() => onMouseOutHandler('portofolio-button')}
        >
          <ul title="Grid minimal">
            <li><span className="dropdown-item">2 columns</span></li>
            <li><span className="dropdown-item">3 columns</span></li>
            <li><span className="dropdown-item">4 columns</span></li>
            <li><span className="dropdown-item">full width</span></li>
          </ul>
          <ul title="Masonry minimal">
            <li><span className="dropdown-item">2 columns</span></li>
            <li><span className="dropdown-item">3 columns</span></li>
            <li><span className="dropdown-item">4 columns</span></li>
            <li><span className="dropdown-item">full width</span></li>
          </ul>
          <ul title="Grid detailed">
            <li><span className="dropdown-item">2 columns</span></li>
            <li><span className="dropdown-item">3 columns</span></li>
            <li><span className="dropdown-item">4 columns</span></li>
            <li><span className="dropdown-item">full width</span></li>
          </ul>
        </div>
      </NavbarLeft>
      <NavbarRight>
        <i className="fa fa-shopping-cart" />
        <i className="fa fa-search" />
        <input type="text" className="form-control" placeholder="Search" aria-label="Username" />
      </NavbarRight>
    </Navbar>
  );
};

export default Header;
