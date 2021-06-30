import React from 'react';
// Import Pages
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import MyWork from './pages/MyWork';
import MovieDetail from './pages/MovieDetail';
// Import Components
import Nav from './components/Nav';
// Import Global Style
import GlobalStyle from './components/GlobalStyle';
// Import Router
import {Switch, Route, useLocation} from 'react-router-dom';
// Animation
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  console.log(location);
  return (
   <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutMe />
          </Route>
          <Route path="/work" exact>
            <MyWork />
          </Route>
          <Route path="/work/:id"> 
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
        </Switch>
      </AnimatePresence>
   </div>
  );
}

export default App;