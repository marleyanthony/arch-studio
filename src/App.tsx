import './Styles/main.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import Portfolio from './Components/Pages/Portfolio';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
