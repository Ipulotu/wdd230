
const cards = document.querySelector('#cards');

  fetch("https://raw.githubusercontent.com/Ipulotu/wdd230/main/templeInn/data/temples.json")
  .then( response => {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples  = jsonObject.temples; 
    let i = 0  
    temples.forEach(temple => {
      displaybusinessCard(temple,i);
      i++;
    });
  });



function displaybusinessCard(temple, id) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let dedicated = document.createElement('p');
    let addresse = document.createElement('p');
    let button = document.createElement('button');
    let div = document.createElement('div');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let history = document.createElement('ul');
    let heading2 = document.createElement('h3');
    let exit = document.createElement('span');


    
    h2.textContent = `${temple.name}`;
    portrait.setAttribute('src', temple.image);
    portrait.setAttribute('alt', `Business logo of ${temple.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('onclick', "this.nextSibling.nextSibling.nextSibling.nextSibling.style.display = 'block';");

    dedicated.textContent =`Dedicated: ${temple.dedicated}`;
    addresse.textContent =`${temple.Address}`;
    button.textContent = "like";
    button.setAttribute('id', `temple${id}`);
    button.setAttribute('onclick', `togglrLike${id}()`);
    liked = localStorage.getItem(`temple${id}`)
    if (liked == "1"){
      button.setAttribute('class', `liked`);
    }
    

    temple.history.forEach(item =>{
      li = document.createElement('li');
      li.textContent = item 
    history.appendChild(li)
    });

    

    exit.setAttribute('onclick', "this.parentElement.style.display = 'none';");
    exit.textContent = `X`
    heading2.textContent = "Milestones"
    phone.textContent = `${temple.phones}`
    website.href = temple.websites
    website.textContent = temple.websites;
    div.setAttribute('class', "hideTemple")


    div.appendChild(exit);
    div.appendChild(phone);
    div.appendChild(website);
    div.appendChild(heading2);
    div.appendChild(history);



    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(addresse);
    card.appendChild(button);
    card.appendChild(div);

    cards.appendChild(card);


    
    
    
  
  }

  function togglrLike0() {
    document.querySelector('#temple0').classList.toggle("liked");
    liked = localStorage.getItem('temple0')
    if (liked == "0"){
    localStorage.setItem('temple0', "1")
    }else{
      localStorage.setItem('temple0', "0")
    }
  }

  function togglrLike1() {
    document.querySelector('#temple1').classList.toggle("liked");
    liked = localStorage.getItem('temple1')
    if (liked == "0"){
    localStorage.setItem('temple1', "1")
    }else{
      localStorage.setItem('temple1', "0")
    }
  }

  function togglrLike2() {
    document.querySelector('#temple2').classList.toggle("liked");
    liked = localStorage.getItem('temple2')
    if (liked == "0"){
    localStorage.setItem('temple2', "1")
    }else{
      localStorage.setItem('temple2', "0")
    }
  }

  function togglrLike3() {
    document.querySelector('#temple3').classList.toggle("liked");
    liked = localStorage.getItem('temple3')
    if (liked == "0"){
    localStorage.setItem('temple3', "1")
    }else{
      localStorage.setItem('temple3', "0")
    }
  }

  function togglrLike4() {
    document.querySelector('#temple4').classList.toggle("liked");
    liked = localStorage.getItem('temple4')
    if (liked == "0"){
    localStorage.setItem('temple4', "1")
    }else{
      localStorage.setItem('temple4', "0")
    }
  }

 


