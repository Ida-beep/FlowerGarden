import React, { useEffect, useState } from 'react';
import DailyFlower from './DailyFlower';
import WeeklyFlower from './WeeklyFlower';
import MonthlyFlower from './MonthlyFlower';
import { ArrowUp} from 'react-bootstrap-icons';
import { ArrowDown } from 'react-bootstrap-icons';

function Body(){
    const [flowerStates,setFlowerStates] = useState([<DailyFlower/>,<WeeklyFlower/>,<MonthlyFlower/>]);
    const [clicked,setClicked] = useState(false);
    const bodyContainer = {
        margin:"70px",
    }
    useEffect(()=>{
        console.log("flowerState changed");
    },[flowerStates]);

    function handleUp(){
        shiftUp();
        setClicked(!clicked);
    }
    function handleDown(){
        //console.log("down");
        shiftDown();
        setClicked(!clicked);
    }

    function shiftDown(){
        //console.log("orginal: ", flowerStates);
        let arr = flowerStates;
        let firstNum = arr.shift();
        arr.splice(2,0,firstNum);
        setFlowerStates(arr);
        //console.log("after alterations: ", flowerStates[0].type);
    }

    function shiftUp(){
        //console.log("orginal: ", flowerStates);
        let arr = flowerStates;
        let lastNum = arr.pop();
        arr.splice(0,0,lastNum);
        setFlowerStates(arr);
        //console.log("after alterations: ", flowerStates[0].type);
    }
    
    return(
        <div style={bodyContainer}>
        <ArrowUp onClick={handleUp}/>
            {flowerStates[0]}
        <ArrowDown onClick={handleDown}/>
        </div>
    );
}

export default Body;