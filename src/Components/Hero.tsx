type HeroProps = {
  content: {
    img: string,
    headingText: string,
    headingSummary: string
  }
}
const Hero: React.FC<HeroProps> = ({ content }) => {
  const { img, headingText, headingSummary } = content;
  return (
    <>
      <section className="about-contact">
        <div className="about-contact__overlay"></div>
        <img src={img} alt="hero" className="about-contact__hero-img" />
        <div className="about-contact__hero-text-wrapper">
          <h2 className="about-contact__heading-text">
            {headingText}
          </h2>
          <p className="about-contact__heading-summary">
            {headingSummary}
          </p>
        </div>
      </section>
      <hr className="about-contact__hr" />
    </>
  )
}

export default Hero
