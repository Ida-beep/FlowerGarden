import React from 'react';

function Footer(props){
    const footerStyle={
        //backgroundColor:"#FFE8D1",
        color:"grey",
        bottom:"0",
        margin:"0",
    }
    
    return(
        <div style={footerStyle}>
        <p>today it is {props.date}</p>
        </div>
    );
}

export default Footer;