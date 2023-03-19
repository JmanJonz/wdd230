//get date and make it update on site header
const today = new Date();
const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });
const date = today.getDate();
const month = today.toLocaleDateString('en-US', { month: 'long' });
const year = today.getUTCFullYear();
const formattedDate = `${dayOfWeek}, ${date} ${month} ${year}`;
const datee = document.querySelector("#date");
datee.innerHTML = formattedDate;

// Toggle menu open and closed
const toggle = document.querySelector("#toggle");
const menu = document.querySelector("#menu");

function DoIt()
{
    menu.classList.toggle("open");
}
toggle.addEventListener("click", DoIt );

// Last mod for website footer
const lastmod = document.lastModified;
document.querySelector("#lastmod").innerHTML = "Last Modified: " + lastmod;

// current year for copyright
document.querySelector("#copyyear").innerHTML = today.getFullYear();

// Show banner for mondays and tuesdays only
const banner = document.querySelector(".banner");
if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday")
{
    banner.id = "show"
}
else
{
    banner.id = "dontshow"
}

// make join buttons work

const joinbttn = document.querySelector(".jzuz");
joinbttn.style.cursor = "pointer";
joinbttn.addEventListener("click", ()=>{
    window.location.href = "../additionalpages/join.html"
})

const joinbttnn = document.querySelector(".jzuzz");
joinbttnn.style.cursor = "pointer";
joinbttnn.addEventListener("click", ()=>{
    window.location.href = "../additionalpages/join.html"
})


// Load Spotlight info onto the homepage of actual companies

const high1 = document.querySelector(".high1");
const h31 = high1.querySelector("h3");
const img1 = high1.querySelector("img");
const h41 = high1.querySelector("h4");
const p11 = high1.querySelector(".p1");
const p21 = high1.querySelector(".p2");

const high2 = document.querySelector(".high2");
const h32 = high2.querySelector("h3");
const img2 = high2.querySelector("img");
const h42 = high2.querySelector("h4");
const p12 = high2.querySelector(".p1");
const p22 = high2.querySelector(".p2");

const high3 = document.querySelector(".high3");
const h33 = high3.querySelector("h3");
const img3 = high3.querySelector("img");
const h43 = high3.querySelector("h4");
const p13 = high3.querySelector(".p1");
const p23 = high3.querySelector(".p2");

async function getBizzData(){
    returnedData = await fetch("../json_files/data.json");
    JSObject = await returnedData.json();
    return JSObject
}

async function LoadHighLights(){
    const bizData = await getBizzData();
    h31.textContent = bizData[0].name;
    img1.setAttribute("src", bizData[0].img);
    img1.style.width = "45px";
    h41.textContent = "Come Ski!";
    p11.textContent = bizData[0].website;
    p21.textContent = bizData[0].number;

    h32.textContent = bizData[4].name;
    img2.setAttribute("src", bizData[4].img);
    img2.style.width = "45px";
    h42.textContent = "Golf, Bike, Why not both?";
    p12.textContent = bizData[4].website;
    p22.textContent = bizData[4].number;

    h33.textContent = bizData[8].name;
    img3.setAttribute("src", bizData[8].img);
    img3.style.width = "45px";
    h43.textContent = "Unfrozen water sliding...";
    p13.textContent = bizData[8].website;
    p23.textContent = bizData[8].number;


}

LoadHighLights();


