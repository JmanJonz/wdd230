//get date and make it update on site header
const today = new Date();
const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });
const date = today.getUTCDate() - 1;
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
toggle.addEventListener("click", DoIt )
