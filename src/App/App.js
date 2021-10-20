import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from '../Context/Auth/AuthProvider';
import NotFoundPage from '../Pages/Error/NotFoundPage';
import Services from '../Pages/Home/Components/Services/Services';
import Home from '../Pages/Home/Home';
import Service from '../Pages/Service/Service';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import './Styles/App.css';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <PrivetRoute exact path="/services/:id">
            <Service></Service>
          </PrivetRoute>
          <Route path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>

  );
}

export default App;
