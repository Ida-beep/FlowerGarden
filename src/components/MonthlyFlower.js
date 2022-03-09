import React from 'react';
import Circle from './Circle';
import Img from '../assets/Skærmbillede 2022-03-08 kl. 13.50.39.png';
import Img2 from '../assets/MicrosoftTeams-image copy 2.png';
import Img3 from '../assets/MicrosoftTeams-image copy.png';
import Img4 from '../assets/MicrosoftTeams-image.png'

function MonthlyFlower(){
    const container = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"600px",
        paddingBottom:"80px",
    }
    const week = {
        display:"flex",
        width:"50%",
        justifyContent:"center",
        transform:"scale(0.2)",
    }
    /* const rotate = {
        transform:"rotate(5deg)",
    } */
/*     const img={
        padd:"500px",
    } */
    const title = {
        marginBottom:"400px",
        zIndex:"100",
        position:"absolute",
        fontSize:"15px",
        fontStyle:"italic",
        color:"grey",
    }

    return(
        <div style={container}>
            <p style={title} >Monthly Garden</p>
        <div style={week}>
            <img src={Img} alt={"flower"}/>
            <img src={Img2} alt={"flower"}/>
            <img src={Img3} alt={"flower"}/>
            <img /* style={rotate} */src={Img4} alt={"flower"}/>
{/*             <Circle color={"grey"}hasPetal={false} marginTop={"0%"} zIndex={"0"} width={"300px"} height={"300px"}/>
            <Circle hasPetal={true} marginBottom={"20%"} marginLeft={"15%"} zIndex={"10"} width={"30px"} height={"30px"}/>
            <Circle hasPetal={true} marginRight={"15%"} marginBottom={"20%"} zIndex={"10"} width={"30px"} height={"30px"}/>

            <Circle hasPetal={true} marginLeft={"20%"} marginBottom={"5%"} zIndex={"10"} width={"30px"} height={"30px"}/>
            
            <Circle hasPetal={true} marginTop={"7%"} marginLeft={"15%"} zIndex={"10"} width={"30px"} height={"30px"}/>
            <Circle hasPetal={true} marginTop={"12%"} zIndex={"10"} width={"30px"} height={"30px"}/>
            <Circle hasPetal={true} marginTop={"7%"} marginRight={"15%"} zIndex={"10"} width={"30px"} height={"30px"}/>

            <Circle hasPetal={true} marginRight={"20%"} marginBottom={"5%"}zIndex={"10"} width={"30px"} height={"30px"}/> */}
        </div>
        </div>
    );
}

export default MonthlyFlower;