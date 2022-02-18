
/* Lazy loder  */

let imagesToLoad = document.querySelectorAll('img[data-src]');

function loadImages(image){
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};


/* Setting up observer options */
const imageOption = {
    threshold:1,
    rootMargin: " 0px 0px 100px 0px"

};

/* Setting up observer  */
const observer = new IntersectionObserver((items, observer) =>{
    items.forEach((item) => {
        if (!item.isIntersecting){
            return;}
        else{
            loadImages(item.target);
            observer.unobserve(item.target);
        }
    })
} ,imageOption );  

/* Calling  observer  */
imagesToLoad.forEach((img) => {
    observer.observe(img)
  });



  
visit = Date.now()

lastVisit = localStorage.getItem("last visit")
localStorage.setItem("last visit", visit)

var Difference_In_Time = visit - parseInt(lastVisit);
var Difference_In_Days = (Difference_In_Time / (1000 * 3600 * 24)).toFixed(1);

if(Difference_In_Days > 1 ){
    output = (Difference_In_Days +" days");
}
else if(Difference_In_Time > 3600000 ){
    output = ("It's been "+ (Difference_In_Time/3600000).toFixed(2) +" hours since your last visit")
}
else if(Difference_In_Time > 600000  ){
    output = ("It's been "+ (Difference_In_Time/60000).toFixed(2) +" minues since your last visit")
}
else{
    output = ("This is your first visit!")
}

document.getElementById('visits').innerText = output;


