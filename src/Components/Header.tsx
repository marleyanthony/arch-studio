import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo-dark.svg';
import { NavItems } from '../Models/navLinks';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  }

  return (
    <div className="header">
      <div className="header__nav-wrapper">
        <Link to="/">
          <img src={Logo} alt="site logo" className="header__logo" />
        </Link>
        <button
          aria-label='hamburger nav'
          className={
            showNav
              ? 'header__hamburger-btn header__hamburger-btn--active'
              : 'header__hamburger-btn'
          }
          onClick={toggleNav}
        >
          <span className="header__hamburger-line-1"></span>
          <span className="header__hamburger-line-2"></span>
        </button>
      </div>
      <section
        className={
          showNav
            ? 'header__responsive-nav header__responsive-nav--active'
            : 'header__responsive-nav'
        }>
        <div
          className={
            showNav
              ? 'header__main-nav header__main-nav--responsive'
              : 'header__main-nav'
          }
        >
          {
            NavItems.map((navItem, index) => {
              return (
                <Link
                  to={navItem.link}
                  key={index}
                  className="header__nav-item"
                >
                  {navItem.label}
                </Link>
              )
            })
          }
        </div>
      </section>

      {/* // ! tablet & desktop nav */}
      <section
        className="header__nav"
      >
        <div className="header__nav-item-wrapper">
          {
            NavItems.map((navItem, index) => {
              return (
                <Link
                  to={navItem.link}
                  key={index}
                  className="header__nav-item header__nav-item--tablet"
                >
                  {navItem.label}
                </Link>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Header
