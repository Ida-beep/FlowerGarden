import React, { useEffect, useState } from 'react';
import Circle from './Circle';
import Petal from './Petal';
/**
 * each slice of the flower is 51.4285714286 degrees
 */

function WeeklyFlower(){
    const [currentWeek,setCurrentWeek] = useState([]); // array of keys corresponding to dates within current week
    const [petals,setPetals] = useState([]);
    //const [petalsFetched,setPetalsFetched] = useState(false);
    const container = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"600px",
        paddingBottom:"80px",
    }

    /**
     * Loads all data from localStorage and sets state to array of strings.
     */
    useEffect(()=>{
        fetchPetals().then((e)=>{
            console.log("state when loading Weekly flower: ",petals);
        });
    },[]);
  
    /**
     * Calculates the current week
     */
    async function getThisWeek(){
        let curr = new Date();
        let week = [];
        for (let i = 1; i <= 7; i++) {
            let first = curr.getDate() - curr.getDay() + i;
            let day = new Date(curr.setDate(first)).toLocaleDateString();
            week.push(day);  
        }
        setCurrentWeek(week);
        //console.log("current week is: ",currentWeek);
    }


    async function fetchPetals(){
        getThisWeek().then((e)=>{
            let petalsarr = [];
            currentWeek.forEach(e => {
                //console.log("key is: ",e);
                let petal = localStorage.getItem(e);
                let splitPetal;
                if(petal !==null){
                    splitPetal = petal.split('%');
                }
                //console.log("petal is: ",petal);
                petalsarr.push(splitPetal); 
                //console.log(".then() gave this: ", e);
            });
            console.log(petalsarr);
            setPetals(petalsarr); // IMPORTANT
        })
    } 

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
         <p style={title} >Weekly Flower</p>
        <p></p>
        
        <Circle /* color={"grey"} */hasPetal={false} marginTop={"0%"} zIndex={"0"} width={"50"} height={"50"}/>
        <Circle hasPetal={true} petalColor={"purple"} marginBottom={"20%"} marginLeft={"8%"} zIndex={"10"} width={"30"} height={"30"}/>
        <Circle hasPetal={true} petalColor={"red"} marginRight={"8%"} marginBottom={"20%"} zIndex={"10"} width={"20"} height={"20"}/>

        <Circle hasPetal={true} petalColor={"blue"} marginLeft={"17%"} marginBottom={"8%"} zIndex={"10"} width={"90"} height={"90"}/>
        
        <Circle hasPetal={true} petalColor={"blue"} marginTop={"7%"} marginLeft={"12%"} zIndex={"10"} width={"70"} height={"70"}/>
        <Circle hasPetal={true} petalColor={"blue"} marginTop={"12%"} zIndex={"10"} width={"100"} height={"100"}/>
        <Circle hasPetal={true} petalColor={"purple"} marginTop={"7%"} marginRight={"12%"} zIndex={"10"} width={"100"} height={"100"}/>

        <Circle hasPetal={true} petalColor={"purple"} marginRight={"17%"} marginBottom={"8%"}zIndex={"10"} width={"80"} height={"50"}/>
    </div>
    );
}

export default WeeklyFlower;