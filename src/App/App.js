import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
