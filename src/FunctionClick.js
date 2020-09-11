import React from 'react'

function functionClick() {
    function clickHandler (){
       var text =document.getElementById("input").value;
       var input = "1-111-111-1"
       if (text === input){
           document.getElementById("no").innerHTML=" <p>Name</p> <p>Joe Doe</>" ;
       }else{
        document.getElementById("no").innerHTML=" incorrect"; 
       };
    }
    return (
        <div>
            <button id="btn" onClick={clickHandler} >continue</button>
        </div>
    )
}

export default functionClick
