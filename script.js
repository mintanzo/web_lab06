"use strict";
async function fetchInfo() {
  // Get the container element
  const container = document.getElementById("container");
  // Clear the container's content
  container.innerHTML = "";
 
  // Fetch random user data 5 times
  for (let i = 0; i < 5; i++) {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    const personInfo = data.results["0"];
 
    // Create a person box element
    const personBox = document.createElement("div");
    personBox.className = "personBox";
 
    // Create and append an image element
    const image = document.createElement("img");
    image.src = personInfo.picture.large;
    personBox.appendChild(image);
 
    // Create and append a name element
    const name = document.createElement("p");
    name.innerText = `Name: ${personInfo.name.title} ${personInfo.name.first} ${personInfo.name.last}`;
    personBox.appendChild(name);
 
    // Create and append a city element
    const city = document.createElement("p");
    city.innerText = `City: ${personInfo.location.city}`;
    personBox.appendChild(city);
 
    // Create and append a postal code element
    const postCode = document.createElement("p");
    postCode.innerText = `Postal Code: ${personInfo.location.postcode}`;
    personBox.appendChild(postCode);
 
    // Create and append a phone element
    const phone = document.createElement("p");
    phone.innerText = `Phone: ${personInfo.phone}`;
    personBox.appendChild(phone);
 
    // Append the person box to the container
    container.appendChild(personBox);
  }
}