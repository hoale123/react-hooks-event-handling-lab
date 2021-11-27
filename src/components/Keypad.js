// Code Keypad Component Here
import React from "react";
function Keypad() {
    function handleChange(){
        console.log('Entering password...')
    }
    //render input

    return(
        <input type="password" onChange={handleChange} />
    )
}

export default Keypad;