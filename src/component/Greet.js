import React from 'react'

const Greet = () => {

    let colorData = {
        color: "",
        textAlign: ""
    }
    let curDate = new Date();
    let min = curDate.getHours();
    let greeting = ""
    if (min >= 1 && min < 12) {
        greeting = "Good Morning";
        colorData.color="green"
    }
    else if (min >= 12 && min < 19) {
        greeting = "Good Afternoon";
        colorData.color="Orange"
    }
    else {
        greeting = "Good Night's";
        colorData.color="#ea7c7c"
    }
    return (
        <div className='container'>
            <h1>Hello Sir ,<span style={colorData}> {greeting} </span>  </h1>
        </div>
    )
}

export default Greet
