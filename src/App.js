
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BgParticles from './components/BgParticles/BgParticles';
import Footer from './components/Footer/Footer';

// AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AllProjects from './components/AllProjects/AllProjects';
// ..
AOS.init();


function App() {
  return (
    <div className="bg-green-100" >
      <Router>
        <Header></Header>

        <BgParticles/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          {/* <Route exact path="/#about">
            <Home />
          </Route>
          <Route exact path="/#projects">
            <Home />
          </Route>
          <Route exact path="/#skills">
            <Home />
          </Route>
         
          <Route exact path="/#contact">
            <Home />
          </Route> */}
          <Route  path="/moreProjects">
            <AllProjects />
          </Route>
        </Switch>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
