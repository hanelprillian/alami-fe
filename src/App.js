import React, {Suspense, lazy, useState, useEffect, useMemo} from 'react';
import {Routes, Route} from 'react-router-dom';
import {Body, Box, Container, Header, HeaderNavigation, HeaderNavigationItem} from "./components/Elements";
import {GlobalContext} from "./context";

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));

function App() {
    const [contactNumber, setContactNumber] = useState('021-12345')
    const [context, setContext] = useState({
        GLOBAL: {
            CONTACT_NUMBER: contactNumber,
            SET_CONTACT_NUMBER: (value) => {
                setContactNumber(value)
            },
        }
    });

    const globalContextValue = useMemo(() => {
        let prepareContext = {...context}
        prepareContext.GLOBAL.CONTACT_NUMBER = contactNumber
        setContext(prepareContext)

        return {context, setContext}
    }, [contactNumber])

    return (
        <GlobalContext.Provider value={globalContextValue}>
            <Body>
                <Header>
                    <Container>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            flexGap="30px"
                            flexWrap={{sm: 'wrap', md: 'nowrap', lg: 'nowrap'}}
                        >
                            <Box width={{sm: '100%', md: '50%', lg: '50%'}}>
                                <div className="logo">Website Test</div>
                            </Box>
                            <Box width={{sm: '100%', md: 'auto', lg: 'auto'}}>
                                <HeaderNavigation>
                                    <HeaderNavigationItem to="/">Home</HeaderNavigationItem>
                                    <HeaderNavigationItem to="/about">About</HeaderNavigationItem>
                                    <HeaderNavigationItem to="/contact">Contact Us</HeaderNavigationItem>
                                </HeaderNavigation>
                            </Box>
                        </Box>
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
        </GlobalContext.Provider>
    );
}

export default App;
