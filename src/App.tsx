import './Styles/main.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Pages/Home';

function App() {
   return (
      <div className="App">
         <Router>
            <Header />
            <Route path="/" component={Home} />
         </Router>
      </div>
   );
}

export default App;
