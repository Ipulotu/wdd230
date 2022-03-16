const spotlights = document.querySelector('#sectionGrid');

fetch("https://ipulotu.github.io/wdd230/lesson11/chamber/data/data.json")
.then(response => {
   return response.json();
})
.then(function (jsonObject) {
    const business = jsonObject.businesses; 
    displaybusinessCard(business[2]);
    displaybusinessCard(business[3]);
    displaybusinessCard(business[9]);
   
  });

  function displaybusinessCard(business) {
    // Create elements to add to the document
    let card = document.createElement('div');
    let h3 = document.createElement('h3');
    let portrait = document.createElement('img');
    let slogan = document.createElement('p');
    let display = document.createElement('p');
   
  
    // Change the textContent property of the h2 element to contain the business's full name
    h3.textContent = `${business.name}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', business.image);
    portrait.setAttribute('alt', `Business logo of ${business.name}`);
    portrait.setAttribute('loading', 'lazy');

    //Build solgan
    slogan.textContent =  `${business.slogan}`;


    display = `<p class ="border">contact@Treefort.com <br> ${business.phones} | <a href="${business.websites}">Website</a></p>`

    // Add/append the section(card) with the h3 element
    card.appendChild(h3);
    card.appendChild(portrait);
    card.appendChild(slogan);
    card.insertAdjacentHTML( 'beforeend', display );
    
    // Add/append the existing HTML div with the cards class with the section(card)
    spotlights.appendChild(card);
  }

  
