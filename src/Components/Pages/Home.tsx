import Hero from '../Home/Hero';
import Welcome from '../Home/Welcome';
import AboutUs from '../Home/AboutUs';
import Featured from '../Home/Featured';
import { HeroContent } from '../../Models/Hero';

const Home = () => {
  return (
    <div className="home-page">
      <h2 className="home-page__home-graphic"><span>Home</span></h2>
      <Hero content={HeroContent} />
      <Welcome />
      <AboutUs />
      <Featured />
    </div>
  )
}

export default Home
