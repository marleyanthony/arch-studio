import { Link } from 'react-router-dom'

type HeorProps = {
  content: {
    heading: string,
    subHeading?: string,
    buttonText: string,
    buttonLink: string
  }
}

const Hero: React.FC<HeorProps> = ({ content }) => {
  const { heading, subHeading, buttonText, buttonLink } = content;
  return (
    <section className="hero">
      <div className="hero__overlay"></div>
      <h1 className="hero__heading">
        {heading}
      </h1>
      <p className="hero__sub-heading">
        {subHeading}
      </p>
      <Link to={buttonLink} className="hero__button">
        {buttonText}
        <i className="fas fa-arrow-right hero__arrow"></i>
      </Link>
    </section>
  )
}

export default Hero
