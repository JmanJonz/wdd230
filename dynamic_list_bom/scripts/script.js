const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function(){
    if (input.value !== "")
    {
        let li = document.createElement("li");
        let deleteButton = document.createElement("button");
        li.innerHTML = input.value;
        deleteButton.innerHTML = "❌";
        li.appendChild(deleteButton);
        list.appendChild(li);
        deleteButton.addEventListener("click", function(){
            li.remove();
            input.focus();
            input.value = "";


        })
    }
    
})