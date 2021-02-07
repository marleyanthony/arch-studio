import { Link } from 'react-router-dom'
import { FeaturedCardsContent } from '../../Models/Home'

const Featured = () => {
  return (
    <section className="featured">
      <h2 className="featured__heading">
        Featured
     </h2>
      <div className="featured__cards-wrapper">
        {
          FeaturedCardsContent.map((card, index) => {
            return (
              <div className={card.cardClass} key={index}>
                <div className="featured__overlay"></div>
                <h5 className="featured__card-title">
                  {card.title}
                </h5>
                <Link to="/projects" className="featured__view-all">
                  View All Projects
                </Link>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Featured
