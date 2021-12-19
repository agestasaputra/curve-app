import React from "react";
// import { NavLink } from "react-router-dom";
import { Container } from "./styles";
// import { P3 } from "app/components/font";

const Sidebar = () => {
  const refTitleComment = React.useRef();
  const refTitleTicket = React.useRef();
  const refTitleDocumentation = React.useRef();
  const refTitleVideo = React.useRef();
  const refTitleAbout = React.useRef();
  const refTitleShoppingCart = React.useRef();

  function onMouseOverHandler(type) {
    if (type === 'comment-button') {
      refTitleComment.current.classList.add("show")
    } if (type === 'ticket-button') {
      refTitleTicket.current.classList.add("show")
    } if (type === 'documentation-button') {
      refTitleDocumentation.current.classList.add("show")
    } if (type === 'video-button') {
      refTitleVideo.current.classList.add("show")
    } if (type === 'about-button') {
      refTitleAbout.current.classList.add("show")
    } if (type === 'shopping-cart-button') {
      refTitleShoppingCart.current.classList.add("show")
    }
  }

  function onMouseOutHandler(type) {
    if (type === 'comment-button') {
      refTitleComment.current.classList.remove("show")
    } if (type === 'ticket-button') {
      refTitleTicket.current.classList.remove("show")
    } if (type === 'documentation-button') {
      refTitleDocumentation.current.classList.remove("show")
    } if (type === 'video-button') {
      refTitleVideo.current.classList.remove("show")
    } if (type === 'about-button') {
      refTitleAbout.current.classList.remove("show")
    } if (type === 'shopping-cart-button') {
      refTitleShoppingCart.current.classList.remove("show")
    }
  }

  return (
    <Container>
      <div className="title-list">
        <div 
          className="title title-comment"
          ref={refTitleComment}
        >
          Presale Chat
        </div>
        <div 
          className="title title-ticket"
          ref={refTitleTicket}
        >
          Submit Support Ticket
        </div>
        <div 
          className="title title-documentation"
          ref={refTitleDocumentation}
        >
          Read Documentation
        </div>
        <div 
          className="title title-video"
          ref={refTitleVideo}
        >
          Start Video Call
        </div>
        <div 
          className="title title-about"
          ref={refTitleAbout}
        >
          About Us
        </div>
        <div 
          className="title title-shopping-cart"
          ref={refTitleShoppingCart}
        >
          Shopping Cart
        </div>
      </div>
      <div className="btn-group-vertical btn-group-lg">
        <span 
          className="btn"
          onMouseOver={() => onMouseOverHandler('comment-button')} 
          onMouseOut={() => onMouseOutHandler('comment-button')}
        >
          <i className="fa fa-comment" />
        </span>
        <span 
          className="btn"
          onMouseOver={() => onMouseOverHandler('ticket-button')} 
          onMouseOut={() => onMouseOutHandler('ticket-button')}
        >
          <i className="fa fa-life-ring" />
        </span>
        <span 
          className="btn"
          onMouseOver={() => onMouseOverHandler('documentation-button')} 
          onMouseOut={() => onMouseOutHandler('documentation-button')}
        >
          <i className="fa fa-file-text" />
        </span>
        <span 
          className="btn"
          onMouseOver={() => onMouseOverHandler('video-button')} 
          onMouseOut={() => onMouseOutHandler('video-button')}
        >
          <i className="fa fa-video-camera" />
        </span>
        <span 
          className="btn"
          onMouseOver={() => onMouseOverHandler('about-button')} 
          onMouseOut={() => onMouseOutHandler('about-button')}
        >
          <i className="fa fa-users" />
        </span>
        <span 
          className="btn"
          onMouseOver={() => onMouseOverHandler('shopping-cart-button')} 
          onMouseOut={() => onMouseOutHandler('shopping-cart-button')}
        >
          <i className="fa fa-shopping-cart" />
        </span>
      </div>
    </Container>
  );
};

export default Sidebar;
