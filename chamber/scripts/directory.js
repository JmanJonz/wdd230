const cards = document.querySelector("main.directory");
async function loadJSON(){
    const response = await fetch("../json_files/data.json");
    const json = await response.json();
    const array = jsonToArray(json);
    CreateAndAddBusinessCards(array);
    changeView();
}
function jsonToArray(json) {
    let array = [];
    for (let i = 0; i < json.length; i++) {
      array.push(json[i]);
    }
    return array;
  }
loadJSON();

function CreateAndAddBusinessCards(bizArray){
    bizArray.forEach((biznass)=>{
      // Create the DOM elements to add to the main section of the directory is the way that they are to be used.
      const card = document.createElement("section");
      card.setAttribute("class", "discov");

      const image = document.createElement("img");
      image.setAttribute("class", "discov");
      image.setAttribute("src", biznass.img);
      image.setAttribute("alt", "Missing Image");
      image.setAttribute("loading", "lazy");

      const name = document.createElement("h2");
      name.setAttribute("class", "discov");
      name.textContent = biznass.name;

      const number = document.createElement("a");
      number.setAttribute("class", "discov");
      number.setAttribute("href", "tel:" + biznass.number);
      number.textContent = biznass.number;

      const website = document.createElement("a");
      website.setAttribute("class", "discov");
      website.setAttribute("href", biznass.website);
      website.setAttribute("target", "_blank");
      website.textContent = biznass.website;

      const address = document.createElement("p");
      address.setAttribute("class", "discov");
      address.textContent = biznass.address;

      // Build biz card
      card.append(name, number, website, image);

      // Build the actually page
      cards.append(card);
    });
}

// Add button functionality to change the view from grid to l"ist and from list to grid

function changeView(){
  const gridBtn = document.querySelector(".directory_grid");
  const listBtn = document.querySelector(".directory_list");
  const allElements = document.querySelectorAll("main.directory *");

  gridBtn.addEventListener("click", ()=>{
    allElements.forEach(function(element){
        element.classList.remove("list_view");
        element.classList.add("discov");
    })
    cards.classList.remove("list_view");
    cards.classList.add("discov");

  })

  listBtn.addEventListener("click", ()=>{
    allElements.forEach((element)=>{
        element.classList.add("list_view");
        element.classList.remove("discov");
    })
    cards.classList.add("list_view");
    cards.classList.remove("discov");
  })
}

