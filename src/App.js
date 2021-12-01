import { BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import MyProjects from './Pages/MyProjects/MyProjects';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/myprojects">
          <MyProjects></MyProjects>
        </Route>
        <Route path="/aboutme">
          <AboutMe></AboutMe>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
