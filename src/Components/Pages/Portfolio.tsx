import { PortfolioCardsContent } from '../../Models/Portfolio';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__cards-wrapper">
        {
          PortfolioCardsContent.map((card, index) => {
            return (
              <div className={card.cardClass} key={index}>
                <div className="portfolio__overlay"></div>
                <h5 className="portfolio__card-title">
                  {card.title}
                </h5>
                <p className="portfolio__card-date">
                  {card.date}
                </p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
