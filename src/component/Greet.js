import React from 'react'

const Greet = () => {


    // function play() {
    //     var audio = new Audio('https://www.soundjay.com/buttons/sounds/beep-02.mp3');
    //     audio.play();
    // }


    let colorData = {
        color: "",
        textAlign: ""
    }
    let curDate = new Date();
    let min = curDate.getHours();
    let greeting = ""
    if (min >= 1 && min < 12) {
        greeting = "Good Morning";
        colorData.color = "green";
        // setTimeout(() => {
        //     play()
        // }, 1000)
    }
    else if (min >= 12 && min < 19) {
        greeting = "Good Afternoon";
        colorData.color = "Orange";
        // setTimeout(() => {
        //     play()
        // }, 1000)
    }
    else {
        greeting = "Good Night's";
        colorData.color = "#ea7c7c";
        // setTimeout(() => {
        //     play()
        // }, 1000)
    }
    return (
        <div className='container'>
            <h1>Hello Sir ,<span style={colorData}> {greeting} </span>  </h1>
        </div>
    )
}

export default Greet
