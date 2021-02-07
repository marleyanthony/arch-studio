import { Link } from 'react-router-dom'
const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us__overlay"></div>
      <div className="about-us__content-wrapper">
        <h2 className="about-us__heading">
          Small team, big ideas
         </h2>
        <Link to='/about-us' className="about-us__button">
          About Us
            <i className="fas fa-arrow-right hero__arrow"></i>
        </Link>
      </div>
    </section>
  )
}

export default AboutUs
