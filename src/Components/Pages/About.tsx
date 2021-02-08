import Hero from '../Hero';
import { AboutPageHero } from '../../Models/About';
import OurHeritage from '../About/OurHeritage';

const About = () => {
  return (
    <div className="about-page">
      <Hero content={AboutPageHero} />
      <OurHeritage />
    </div>
  )
}

export default About
