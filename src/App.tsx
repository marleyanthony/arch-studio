import './Styles/main.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" component={Home} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
