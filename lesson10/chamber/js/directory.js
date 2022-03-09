
const cards = document.querySelector('#cards');
const table = document.querySelector('#table');

fetch("https://ipulotu.github.io/wdd230/lesson9/chamber/data/data.json")
.then(response => {
   return response.json();
})
.then(function (jsonObject) {
    const business  = jsonObject.businesses; 
  business.forEach(displaybusinessCard);
  business.forEach(displaybusinessTable);
  });


  function displaybusinessCard(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let addresse = document.createElement('p');
    let phoen = document.createElement('p');
    let website = document.createElement('a');
  
    // Change the textContent property of the h2 element to contain the business's full name
    h2.textContent = `${business.name}`;

    addresse.textContent =`${business.addresses}`;
    phoen.textContent =`${business.phones}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', business.image);
    portrait.setAttribute('alt', `Business logo of ${business.name}`);
    portrait.setAttribute('loading', 'lazy');

    //Build link
    website.href = business.websites
    website.textContent = business.websites;

    // Add/append the section(card) with the h2 element
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(addresse);
    card.appendChild(phoen);
    card.appendChild(website);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }

  function displaybusinessTable(business) {
    // Create elements to add to the document
    let tr = document.createElement('tr');
    let name = document.createElement('td');
    let address = document.createElement('td');
    let phone = document.createElement('td');
    let website = document.createElement('a');

    // Change the textContent property of the h2 element to contain the business's full name
    name.textContent = `${business.name}`;

    address.textContent =`${business.addresses}`;
    phone.textContent =`${business.phones}`;

    //Build link
    website.href = business.websites
    website.textContent = business.websites;

    tr.appendChild(name);
    tr.appendChild(address);
    tr.appendChild(phone);
    tr.appendChild(website);

    table.appendChild(tr);
  }

  
function togglrDirectory(elementToShow, elementToHide) {
  if (elementToHide.classList.contains("hide")){
    elementToHide.classList.remove("hide");
  }
  if (!elementToShow.classList.contains("hide")){
    elementToShow.classList.toggle("hide");
  }
}

const cardsBnt = document.getElementById('hamburgerBtnCards')
const tableBnt = document.getElementById('hamburgerBtnTable')

cardsBnt.onclick = function(){togglrDirectory(cards, table);}
tableBnt.onclick = function(){togglrDirectory(table, cards);}