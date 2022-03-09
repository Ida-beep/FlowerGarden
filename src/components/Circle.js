import React, {useState, useEffect} from 'react';
import Petal from './Petal';

function Circle(props){
    const [petalData,setPetalData] = useState();
/*     const [petalDataFetched,setPetalDataFetched] = useState(false);
    const [chosenColor,setChosenColor] = useState("rgb(0,0,0,0.5)");
    const [chosenWidth,setChosenWidth] = useState(100);
    const [chosenHeight,setChosenHeight] = useState(100);
    const [chosenRotation,setChosenRotation] = useState(0);
    const [chosenText,setChosenText] = useState(""); */
    /**
     * Fetches individual petalinfo to be rendered
     */
/*     useEffect(()=>{
        setPetalDataFetched(true);   
        setPetalData(props.petal);
        console.log("inside circle components:",petalData);
        if(petalData !== 'undefined'){
            if(petalData!== null){
                //console.log("petal is not null")
                let petal = petalData.split('%');
                setChosenColor(petal[0]);
                setChosenHeight(petal[1]);
                setChosenRotation(petal[2]);
                setChosenWidth(petal[3]);
                setChosenText(petal[4]);
            }
            //console.log("these petals are not undefined");
        }
    },[]); */

/*     useEffect(()=>{
        if(petalDataFetched){
            console.log("now registered that the data is fetched"); 
        }
        setPetalDataFetched(false);
    },[petalDataFetched]); */

    const cicle = {
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:props.width,
            height:props.height,
            border:`solid ${props.color} 0.5px`,
            borderRadius:"50%",
            margin:props.margin,
            zIndex:props.zIndex,
            position:"absolute",
            marginLeft:props.marginLeft,
            marginRight:props.marginRight,
            marginTop:props.marginTop,
            marginBottom:props.marginBottom,
    }
    
    return(
        <>
        <div style={cicle}>
            {
            props.hasPetal? 
            <>
            <Petal width={props.width} height={props.height} color={props.petalColor} rotation={"30"}/>
            </>
            :
            <></>
            }
            </div>
        </>
    );
}

export default Circle;