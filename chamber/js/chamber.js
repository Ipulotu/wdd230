
var opt = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', };
date =  (new Date)


document.getElementById('date').innerText = date.toLocaleDateString("en-US", opt)


function togglrMenu() {
    document.getElementById("primeryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}


const x = document.getElementById('hamburgerBtn')
x.onclick = togglrMenu;