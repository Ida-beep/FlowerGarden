import React, {useEffect, useState} from 'react';
import { ChromePicker } from 'react-color';
import Petal from './Petal';
import RangeSlider from 'react-bootstrap-range-slider';
import Form from 'react-bootstrap/Form';
//import FlowerButton from './FlowerButton';
import Button from 'react-bootstrap/Button';

/**
 * Need to check if the component works, if no data is saved currently for today
 */

function DailyFlower(){
    const current = new Date();
    //const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [date,setDate] = useState();
    //const date = `${0 + current.getDate().slice(-2)}/${0 + (current.getMonth()+1).slice(-2)}/${current.getFullYear()}`;
    const [showColors,setShowColors] = useState(false);
    const [showShape,setShowShape] = useState(false);
    const [showText,setShowText] = useState(false);
    const [chosenColor,setChosenColor] = useState("rgb(0,0,0,0.5)");
    const [chosenWidth,setChosenWidth] = useState(100);
    const [chosenHeight,setChosenHeight] = useState(100);
    const [chosenRotation,setChosenRotation] = useState(0);
    const [chosenText,setChosenText] = useState("");
    const [showSave,setShowSave] = useState(false);
    //const flowerButtons = ["Color","Shape","Text","Save"];
    //const buttonsArr = flowerButtons.map((e)=>{<FlowerButton name={e}/>})
    /**
     * This useEffect get the current flower of today saved in localStorage
     */
    useEffect(()=>{
        determineDate();
        let todaysFlower = localStorage.getItem(date);
        //console.log(date);
        if(todaysFlower!==null){
            let petalData = todaysFlower.split('%');
            setChosenColor(petalData[0]);
            setChosenHeight(petalData[1]);
            setChosenRotation(petalData[2]);
            setChosenWidth(petalData[3]);
            setChosenText(petalData[4]);
        }
    },[])

    function determineDate(){
        let tempDate;
        let tempDay = current.getDate();
        let tempMonth = current.getMonth()+1;
        if(tempDay<10){
            tempDay = `0${tempDay}`;
        }
        if(tempMonth<10){
            tempMonth = `0${tempMonth}`;
        }
        tempDate = `${tempDay}/${tempMonth}/${current.getFullYear()}`;
        console.log(tempDate);
        setDate(tempDate);
    }

    function handleColor(){
        setShowColors(!showColors);
        setShowShape(false);
        setShowText(false);
        setShowSave(false);
    }
    function handleShape(){
        setShowShape(!showShape);
        setShowColors(false);
        setShowText(false);
        setShowSave(false);
    }
    function handleText(){
        setShowText(!showText);
        setShowColors(false);
        setShowShape(false);
        setShowSave(false);
    }

    function handleChangeComplete(color){
        let c = color.rgb;
        let colorString = `rgb(${c.r},${c.g},${c.b},${c.a})`;
        setChosenColor(colorString);
    }
    function handleSave(){
        setShowSave(!showSave);
        setShowShape(false);
        setShowText(false);
        setShowColors(false);
        console.log("petal saved");
        localStorage.setItem(`${date}`,`${chosenColor}%${chosenHeight}%${chosenRotation}%${chosenWidth}%${chosenText}`);
    }
    const container = {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        //alignContent:"center",
        width:"100%",
        height:"600px",
        //paddingBottom:"80px",
        paddingTop:"88px",
    }
    const subcontainer = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"30%",
        marginLeft:"100px",
    }
    const leftsubcontainer = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width:"30%",
    }
    const buttons = {
        marginBottom:"50px",
        display:"flex",
        flexDirection:"row",
    }
    const buttonContainer = {
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-end",
    }
     const button = {
        marginLeft:"40px",
        border:"none",
        padding:"15px",
        borderRadius:"50%",
        backgroundColor:"rgb(50,0,170,0.2)",
    }
    const tools = {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        height:"300px",
    }
    const title = {
        marginBottom:"390px",
        zIndex:"100",
        position:"absolute",
        fontWeight:"20",
        fontSize:"15px",
        fontStyle:"italic",
        //fontFamily: "'Pacifico', cursive",
        color:"grey",
    }

    return(
        <div style={container}>
            <p style={title} >Daily Petal</p>
        <section style={leftsubcontainer}>
            <section style={buttons}>
                <div style={buttonContainer}>
                    <h5>Water</h5>
                    <Button style={button} onClick={handleColor}></Button>
                </div>
                <div style={buttonContainer}>
                    <h5>Trim</h5>
                    <Button style={button} onClick={handleShape}></Button>
                </div>
                <div style={buttonContainer}>
                    <h5>Feed</h5>
                    <Button style={button} onClick={handleText}></Button>
                </div>
                <div style={buttonContainer}>
                    <h5>Seed</h5>
                    <Button style={button} onClick={handleSave}></Button>
                </div>
            </section>
            <section style={tools}>
            {showColors?
            <ChromePicker
                color={chosenColor}
                onChangeComplete = {handleChangeComplete}
            /> : <></>}
            {showShape?
            <div>
                <p>Width</p>
                <RangeSlider
                    value={chosenWidth}
                    onChange={changeEvent => setChosenWidth(changeEvent.target.value)}
                />
                <p>Height</p>
                <RangeSlider
                    value={chosenHeight}
                    onChange={changeEvent => setChosenHeight(changeEvent.target.value)}
                />
                <p>Rotation</p>
                <RangeSlider
                    value={chosenRotation}
                    onChange={changeEvent => setChosenRotation(changeEvent.target.value)}
                />
            </div>
            : <></>}
            {showText?
            <div>
            <Form>
                <p>How are you today?</p>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" value={chosenText} rows={15} onChange={changeEvent => setChosenText(changeEvent.target.value)}/>
            </Form.Group>
            </Form>
            </div>
            : <></>}
            {showSave?
            <p>Saved!</p>
            :
            <></>}
            </section>
        </section>
        <section style={subcontainer}>
            <Petal width={chosenWidth} height={chosenHeight} color={chosenColor} rotation={chosenRotation}/>
        </section>
        </div>
    );
}

export default DailyFlower;