

fetch("https://ipulotu.github.io/wdd230/lesson9/chamber/data/data.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));


//   function displayProphets(prophet) {
//     // Create elements to add to the document
//     let card = document.createElement('section');
//     let h2 = document.createElement('h2');
//     let portrait = document.createElement('img');
//     let DOB = document.createElement('p');
//     let POB = document.createElement('p');
  
//     // Change the textContent property of the h2 element to contain the prophet's full name
//     h2.textContent = `${prophet.name} ${prophet.lastname}`;

//     DOB.textContent =`Date of Birth ${prophet.birthdate}`;
//     POB.textContent =`Places of Birth  ${prophet.birthplace}`;
  
//     // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
//     portrait.setAttribute('src', prophet.imageurl);
//     portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - The ${prophet.order} Latter-day President`);
//     portrait.setAttribute('loading', 'lazy');
  
//     // Add/append the section(card) with the h2 element
//     card.appendChild(h2);
//     card.appendChild(DOB);
//     card.appendChild(POB);
//     card.appendChild(portrait);
  
//     // Add/append the existing HTML div with the cards class with the section(card)
//     cards.appendChild(card);
//   }