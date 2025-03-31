import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import LogoLight from "../assets/images/icon.png";
import LogoDark from "../assets/images/icon.png";

export default function Navbar(props) {
  const { navClass, topnavClass, tagLine } = props;

  let [toggle, setToggle] = useState(false);
  let [manu, setManu] = useState('');
  let [scroll, setScroll] = useState(false)

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    let current = location.pathname
    setManu(current)

    let windowScroll = () => {
      setScroll(window.scrollY > 50);
    }
    window.addEventListener('scroll', windowScroll)

    return () => {
      window.removeEventListener('scroll', windowScroll)
    }
  }, [location.pathname])

  return (
    <React.Fragment>
      <nav id="topnav" className={`defaultscroll is-sticky ${scroll ? 'nav-sticky' : ''} ${tagLine ? 'tagline-height' : ''} ${topnavClass ? topnavClass : ''} 
            `} >
        <div className={`${topnavClass !== '' && topnavClass !== undefined ? 'container-fluid md:px-8 px-3' : 'container w-full'}`}>
          {/* <!-- Logo container--> */}
          {navClass === '' || navClass === undefined ?
            <Link className="logo flex items-end" to="/">
              <img src={LogoDark} className="inline-block dark:hidden" alt="" />
              <img src={LogoLight} className="hidden dark:inline-block" alt="" />
              <h2>FractMarket</h2>
            </Link> :
            <Link className="logo" to="#">
              <span className="inline-block dark:hidden">
                <img src={LogoDark} className="l-dark" height="24" alt="" />
                <img src={LogoLight} className="l-light" height="24" alt="" />
              </span>
              <img src={LogoLight} height="24" className="hidden dark:inline-block" alt="" />
            </Link>
          }
          {/* <!-- End Logo container--> */}

          {/* <!-- Start Mobile Toggle --> */}
          <div className="menu-extras">
            <div className="menu-item">
              <Link to="#" className={`${toggle ? 'open' : ''} navbar-toggle`} id="isToggle" onClick={() => setToggle(!toggle)} >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>
          {/* <!-- End Mobile Toggle --> */}

          <div id="navigation" style={{ display: toggle ? 'block' : 'none' }}>
            {/* <!-- Navigation Menu--> */}
            <ul className={`navigation-menu  ${navClass === '' || navClass === undefined ? '' : 'nav-light'}   ${topnavClass !== '' && topnavClass !== undefined ? 'justify-center' : 'justify-end'}`}>
              <li className={manu === "/contact" ? "active" : ''}><Link to="/contact" className="sub-menu-item">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar  */}
    </React.Fragment>
  );

}
