import {Box, Container} from "../components/Elements";
import About from "../components/About";
import Contact from "../components/Contact";
import FillPhone from "../components/FillPhone";

export default function Home () {
    return (
        <Container>
            <h2>HOMEPAGE</h2>
            <Box mb="30px">
                <About/>
            </Box>
            <Box display="flex" flexGap="30px" mb="50px">
                <FillPhone/>
                <Contact/>
            </Box>
        </Container>
    )
}
