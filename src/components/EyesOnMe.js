// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    function focused(){
        console.log('Good!')
    }
    function blured(){
        console.log('Hey! Eyes on me!')
    }
    return(
    <button onFocus={focused} onBlur={blured}>Eyes on me</button>)
}

export default EyesOnMe;