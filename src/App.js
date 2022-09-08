import React, { Suspense, lazy } from 'react';
import {Routes, Route} from 'react-router-dom';
import {Body, Container, Header, HeaderNavigation, HeaderNavigationItem} from "./components/Elements";

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));

function App() {
    return (
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
                        <HeaderNavigationItem to="/contact">Contact Us</HeaderNavigationItem>
                    </HeaderNavigation>
                </Container>
            </Header>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </Suspense>
        </Body>
    );
}

export default App;
