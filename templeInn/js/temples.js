
const cards = document.querySelector('#cards');

fetch("https://ipulotu.github.io/wdd230/templeinn/data/temples.json")
.then(response => {
   return response.json();
})
.then(function (jsonObject) {
    const temples  = jsonObject.temples; 
  temples.forEach(displaybusinessCard);
  });


  function displaybusinessCard(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let dedicated = document.createElement('p');
    let addresse = document.createElement('p');
    let button = document.createElement('button');

    
    h2.textContent = `${temple.name}`;
    portrait.setAttribute('src', temple.image);
    portrait.setAttribute('alt', `Business logo of ${temple.name}`);
    portrait.setAttribute('loading', 'lazy');
    dedicated.textContent =`Dedicated: ${temple.dedicated}`;
    addresse.textContent =`${temple.Address}`;

    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(addresse);
    card.appendChild(button);

    
    cards.appendChild(card);


    // let div = document.createElement('div');
    // let phone = document.createElement('p');
    // let website = document.createElement('a');
    // phone.textContent = `${temple.phones}`
    // website.href = temple.websites
    // website.textContent = temple.websites;
    // card.appendChild(phoen);
    // card.appendChild(website);
    
  
  }