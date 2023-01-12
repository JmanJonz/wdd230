const sect = document.querySelector("section")
const para = document.createElement("p");
para.textContent = "We hope you had fun";
sect.appendChild(para);
const text = document.createTextNode("Not sure why we are adding this text or where it goes");
const linkPara = document.querySelector('p');
linkPara.appendChild(text);