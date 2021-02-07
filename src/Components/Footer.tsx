import { Link } from 'react-router-dom';
import logo from '../Assets/logo.svg';
import { FooterLinks } from '../Models/navLinks';

const Footer = () => {
  return (
    <section className="footer">
      <img src={logo} alt="logo" className="footer__logo" />
      <div className="footer__nav-links-wrapper">
        {
          FooterLinks.map((link, index) => {
            return (
              <Link to={link.link} key={index} className="footer__nav-link">
                {link.label}
              </Link>
            )
          })
        }
      </div>
      <Link to="/portfolio">
        <button className="footer__button">
          See Our Portfolio
        <i className="fas fa-arrow-right hero__arrow"></i>
        </button>
      </Link>
    </section>
  )
}

export default Footer
