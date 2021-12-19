import React from "react";
// import { NavLink } from "react-router-dom";
import { Container, Navbar, NavbarLeft, NavbarRight } from "./styles";
// import { P3 } from "app/components/font";

const Header = () => {
  const [isShowPortofolioListMenuMobile, setIsShowPortofolioListMenuMobile] = React.useState(true);

  const refPortofolioListMenuDesktop = React.useRef();
  const refPortofolioListMenuMobile = React.useRef();

  function onMouseOverHandler(type) {
    if (type === 'portofolio-button') {
      refPortofolioListMenuDesktop.current.classList.add("show")
    }
  }

  function onMouseOutHandler(type) {
    if (type === 'portofolio-button') {
      refPortofolioListMenuDesktop.current.classList.remove("show")
    }
  }

  function onToggleButtonClicked(type) {
    if (type === 'portofolio-button') {
      setIsShowPortofolioListMenuMobile(!isShowPortofolioListMenuMobile)
    }
  }

  React.useEffect(() => {
    if (isShowPortofolioListMenuMobile) {
      refPortofolioListMenuMobile.current.classList.remove("show")
    } else {
      refPortofolioListMenuMobile.current.classList.add("show")
    }
  }, [isShowPortofolioListMenuMobile])

  return (
    <Container>
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
            ref={refPortofolioListMenuDesktop} 
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
          <i className="fa fa-bars" onClick={() => onToggleButtonClicked('portofolio-button')}/>
        </NavbarRight>
      </Navbar>
      <ul 
        ref={refPortofolioListMenuMobile} 
        className="portofolio-list-menu-mobile dropdown-menu"
      >
          <li><span className="dropdown-item"> Done </span></li>
          <li><span className="dropdown-item"> Pages </span></li>
          <li><span className="dropdown-item"> Portofolio </span></li>
      </ul>
    </Container>
  );
};

export default Header;
