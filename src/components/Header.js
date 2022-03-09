import React from 'react';

function Header(){
    const title = {
        fontFamily: "'Pacifico', cursive",
        fontSize:"50px",
        background: "rgb(2,0,36)",
        background: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(86,86,194,1) 0%, rgba(255,255,255,1) 100%)",
        color:"white",
        margin:"0",
        padding:"30px",
    }
    const background = {
        width:"100%",
        height:"100px",
    }
    
    return(
        <>
        <div style={background}>
            <h1 style={title}>Flower</h1>
        </div>
        </>
    );
}

export default Header;