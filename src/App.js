import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Body, Container, Header, HeaderNavigation, HeaderNavigationItem} from "./components/Elements";

const Home = lazy(() => import('./pages/home.js'));
const About = lazy(() => import('./pages/about.js'));

function App() {
  return (
      <Router>
          <Body>
              <Header>
                  <Container
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                  >
                      <div className="logo">Website Test</div>
                      <HeaderNavigation>
                          <HeaderNavigationItem to="/">Home</HeaderNavigationItem>
                          <HeaderNavigationItem to="/about">About</HeaderNavigationItem>
                      </HeaderNavigation>
                  </Container>
              </Header>
              <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/about" element={<About/>} />
                  </Routes>
              </Suspense>

          </Body>
      </Router>
  );
}

export default App;
