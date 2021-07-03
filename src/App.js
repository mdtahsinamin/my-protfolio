
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import NewContact from "./components/Contact/NewContact";
import Home from './components/Home/Home';
import NavigationBar from './components/Share/NavigationBar/NavigationBar';
import TeamProjects from './components/Share/TeamProjects/TeamProjects';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
          <Route path="/home">
                 <Home></Home>
            </Route>
            
            <Route path="/work">
                <Work></Work>
            </Route>
            <Route path="/team-project">
                <NavigationBar></NavigationBar>
                <TeamProjects></TeamProjects>
            </Route>
            <Route path="/blog">
                <Blog></Blog>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
            
            <Route path="/contact">
                <NewContact/> 
            </Route>

            <Route exact path="/">
                <Home></Home>
            </Route>
           

          </Switch>
        </Router>
    </div>
  );
}

export default App;

/*
!<Route path="/contact"> <Contact></Contact></Route>
*/