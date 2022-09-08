import {Box} from "./Elements";
import {useState, useContext} from "react";
import {GlobalContext} from "../context";

export default function FillPhone () {
    const [telp, setTelp] = useState('')
    const { context } = useContext(GlobalContext)

    function setNumber (event) {
        event.preventDefault()

        context.GLOBAL.SET_CONTACT_NUMBER(telp)
        setTelp('')
    }
    return (
        <Box>
            <label>No Telp</label>
            <form action="" onSubmit={(e) => setNumber(e)}>
                <input type="text" required value={telp} onChange={(e) => setTelp(e.target.value)}/>
                <button type="submit">Go</button>
            </form>
        </Box>
    )
}
