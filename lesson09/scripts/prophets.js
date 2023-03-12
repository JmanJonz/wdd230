const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
async function GetProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    DisplayProphets(data.prophets)
}
GetProphetData();

function DisplayProphets(prophetData){
    const cards = document.querySelector("div.cards");

    prophetData.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let portrait = document.createElement("img");
        let birthDate = document.createElement("p");
        let pOfBirth = document.createElement("p");

        // Build the h2 content to show the prophet's full name - finish the temp string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        // Build the h3 content for the prophets birthdate
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthDate.classList.add("birth")

        // Build the h4 content for place of birth
        pOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Build the image portrait by setting all the relevant attrubute
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        // Append the sectkion card with the created elements
        card.appendChild(h2);
        card.append(birthDate);
        card.append(pOfBirth)
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}