const Hero = () => {
   return (
      <section className="hero">
         <div className="hero__overlay"></div>
         <h1 className="hero__heading">
            Project Paramour
         </h1>
         <p className="hero__sub-heading">
            Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.
         </p>
         <button className="hero__button">
            See Our Portfolio
            <i className="fas fa-arrow-right hero__arrow"></i>
         </button>
      </section>
   )
}

export default Hero
