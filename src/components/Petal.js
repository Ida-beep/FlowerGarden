import React, {useState} from 'react';

function Petal(props){
    //const [seeded, setSeeded] = useState(props.seeded);

    const petalStyle = {
        display:"flex",
        width: `${props.width}px`,
        height: `${props.height}px`,
        marginTop:"100px",
        borderRadius:"50%",
        transform:`rotate(${props.rotation}deg)`,
        transform:"scale(3)",
        background: props.color,
        background: `linear-gradient(${-props.rotation}deg, ${props.color} 0%, rgba(255,255,255,1) 100%)`,
        position:"absolute",
        zIndex:props.zIndex,
        opacity:"50%",
    }
    
    return(
    <div style={petalStyle}>{props.text}</div>
    );
}

export default Petal;