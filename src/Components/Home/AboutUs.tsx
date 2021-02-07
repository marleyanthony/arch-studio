import { Link } from 'react-router-dom'
const AboutUs = () => {
   return (
      <section className="about-us">
         <div className="about-us__overlay"></div>
         <h2 className="about-us__heading">
            Small team, big ideas
         </h2>
         <Link to='/about-us'>
            About Us
            <i className="fas fa-arrow-right hero__arrow"></i>
         </Link>
      </section>
   )
}

export default AboutUs
