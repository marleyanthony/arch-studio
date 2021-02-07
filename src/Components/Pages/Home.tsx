import Hero from '../Home/Hero';
import Welcome from '../Home/Welcome';
import AboutUs from '../Home/AboutUs';
import { HeroContent } from '../../Models/Hero';

const Home = () => {
   return (
      <div className="home-page">
         <Hero content={HeroContent} />
         <Welcome />
         <AboutUs />
      </div>
   )
}

export default Home
