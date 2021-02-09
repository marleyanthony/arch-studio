import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FeaturedCardsContent } from '../../Models/Home';

const Featured = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [windowWidth])
  // console.log(window.innerWidth)
  return (
    <section className="featured">
      <div className="featured__tablet-flex-wrapper">
        <h2 className="featured__heading">
          Featured
        </h2>
        <button className="featured__see-more-button featured__see-more-button--tablet-btn">
          See All
        <i className="fas fa-arrow-right hero__arrow"></i>
        </button>
      </div>
      <div className="featured__cards-wrapper">
        {
          FeaturedCardsContent.map((card, index) => {
            return (
              <div className={
                windowWidth < 767
                  ? card.cardClass
                  : windowWidth > 768
                    ? card.cardClassTablet
                    : card.cardClassDesktop
              }
                key={index}>
                <div className="featured__overlay"></div>
                <h5 className="featured__card-title">
                  {card.title}
                </h5>
                <Link to="/projects" className="featured__view-all">
                  View All Projects
                </Link>
                <p className="featured__card-number">{index + 1}</p>
              </div>
            )
          })
        }
      </div>
      <button className="featured__see-more-button featured__see-more-button--mobile-btn">
        See All
        <i className="fas fa-arrow-right hero__arrow"></i>
      </button>
    </section>
  )
}

export default Featured
