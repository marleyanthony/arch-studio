import './Styles/main.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header';

function App() {
   return (
      <div className="App">
         <Router>
            <Header />
         </Router>
      </div>
   );
}

export default App;
