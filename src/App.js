// import logo from './logo.svg';
import { GoogleAuthProvider ,getAuth, signInWithPopup,} from "firebase/auth";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';
import About from "./component/About/About";
import Header from './component/Header/Header';
import Services from "./component/Services/Services";
import NotFound from "./component/NotFound/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from "./component/Contacts/Contacts";
import Home from "./component/Home/Home";
import Team from "./component/Team/Team";
import Footer from "./component/Footer/Footer";
import initializeAuthentication from "./Firebase/firebaseInitialize";

function App() {

  initializeAuthentication();
  const provider = new GoogleAuthProvider();

  return (
    <div className="App">
    <Router>
        <Header></Header>
          <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/services">
                <Services />
              </Route>
              <Route exact path="/team">
                <Team />
              </Route>
              <Route exact path="/contacts">
              <Contacts />
              </Route>
              <Route exact path="/home">
              <Home />
              </Route>
              <Route exact path="/">
              <Home />
              </Route>
              <Route exact path="*">
              <NotFound/>
              </Route>
        </Switch>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
