import { OurHeritageContent, TheLeadersContent } from '../../Models/About';
import linkedInIcon from '../../Assets/icons/icon-linkedin.svg';
import twitterIcon from '../../Assets/icons/icon-twitter.svg';

const OurHeritage = () => {
  return (
    <section className="our-heritage">
      <h2 className="our-heritage__heading">
        {OurHeritageContent.heading}
      </h2>
      {
        OurHeritageContent.content.map((paragraph, index) => {
          return (
            <p className="our-heritage__text" key={index}>
              {paragraph}
            </p>
          )
        })
      }
      <h2 className="our-heritage__heading our-heritage__heading--leaders">
        The Leaders
      </h2>
      {
        TheLeadersContent.map((person, index) => {
          return (
            <div className="our-heritage__leader-wrapper" key={index}>
              <img src={person.img} alt={`${person.name} + img`} className="our-heritage__img" />
              <p className="our-heritage__name">
                {person.name}
              </p>
              <p className="our-heritage__position">
                {person.position}
              </p>
              <div className="our-heritage__icon-wrapper">
                <img src={linkedInIcon} alt="linkedIn icon" className="our-heritage__social-icon" />
                <img src={twitterIcon} alt="twitter icon" className="our-heritage__social-icon" />
              </div>
            </div>
          )
        })
      }
    </section>
  )
}

export default OurHeritage
