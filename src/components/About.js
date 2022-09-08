import {Box, Container} from "./Elements";

export default function About () {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            flexGap="30px"
            flexWrap={{sm: 'wrap', md: 'nowrap', lg: 'nowrap'}}
        >
            <Box width={{sm: '100%', md: '50%', lg: '50%'}}>
                <Box><h3>About 1</h3></Box>
                <Box>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dignissimos ducimus esse et eum expedita facilis ipsam molestiae necessitatibus nihil odio, omnis praesentium quidem sed sit soluta tempora vitae voluptate!</Box>
            </Box>
            <Box width={{sm: '100%', md: '50%', lg: '50%'}}>
                <Box><h3>About 2</h3></Box>
                <Box>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dignissimos ducimus esse et eum expedita facilis ipsam molestiae necessitatibus nihil odio, omnis praesentium quidem sed sit soluta tempora vitae voluptate!</Box>
            </Box>
        </Box>
    )
}
