import React, { useState, useEffect, Fragment } from 'react';

import logo from '../assets/img/jowei.png'

function Header({ children, className, ...rest }){
  const [isScroll, setScroll] = useState(false);

    useEffect(() => {
      return () => {
          window.removeEventListener("scroll", () => handleScroll);
      };
    }, []);

    const handleScroll = () => {
        document.body.scrollTop > 650 || document.documentElement.scrollTop > 650
        ? setScroll(true)
        : setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

  return (
    <header className={className + (isScroll ? " isScroll" : "")} {...rest}>
      {children}
    </header>
  )
}

const Navbar = () => {
  return(
    <Fragment>
      <Header className="header">
        <div className="header-top">
          <p>Black Lives Matter. <a target="blank" href="https://support.eji.org/give/153413/#!/donation/checkout">Support the Equal Justice Initiative.</a></p>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="navbar-brand">
            <img src={logo} alt="logo" width="100%" height="100%" />
          </div>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon">
                <i className="fa fa-bars"></i>
              </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav">
                  <a href="#" className="nav-item nav-link menu">Home</a>
                  <a href="#" className="nav-item nav-link menu">About</a>
                  <a href="#" className="nav-item nav-link menu">Services</a>
                  <a href="#" className="nav-item nav-link menu">Industry Focus</a>
              </div>
              <div className="navbar-nav ml-auto">
                <a className="nav-item nav-link search">
                  <input type="text"  placeholder="Search me. . . " />
                  {/* <input type="text"  placeholder="Search me. . .🚀 " /> */}
                  <i className="fa fa-search"/>
                </a>
                <a href="#" className="nav-item nav-link login">Login</a>
                <a href="#" className="nav-item nav-link sign-in">Sign up <i className="fa fa-hand-spock-o"/></a>
              </div>
          </div>
        </nav>
      </Header>

      <div className="img-background">
        <div className="img-container">
          <div className="sogan">
            <h5>Welcome to Our</h5>
            <h1>Solution to your Business</h1>
            <p></p>
            <a href="#" className="contact-link"><i className="fa fa-life-ring"></i>  Contact Us</a>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

  export default Navbar;