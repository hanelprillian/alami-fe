import {Box} from "./Elements";
import {useContext} from "react";
import {GlobalContext} from "../context";

export default function Contact () {
    const { context } = useContext(GlobalContext)
    return (
        <Box>
            PT. ABC <br/>
            Jl. Setiabudi no 33 <br/>
            {context.GLOBAL.CONTACT_NUMBER}
        </Box>
    )
}
