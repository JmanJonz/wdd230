function WindChill(){
    const temp = document.querySelector("#temp");
    const speed = document.querySelector("#speed");
    const chill = document.querySelector("#chill");

    const tempValue = parseInt(temp.innerHTML);
    console.log(tempValue);
    const speedValue = parseInt(speed.innerHTML);
    const chillValue = parseInt(chill.innerHTML);

    let windchill = 35.74 + (0.6215 * tempValue) - (35.75 * speedValue ** 0.16) + (0.4275 * tempValue * speedValue ** 0.16);

    if (tempValue <= 50 && speedValue > 3)
    { 
        chill.innerHTML = Math.round(windchill);
    }else{
        chill.innerHTML = "NA"
    }
}

setTimeout(WindChill, 3000);


