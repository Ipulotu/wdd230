


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