var opt = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', };
date =  (new Date);
day = date.getDay();

document.getElementById('date').innerText = date.toLocaleDateString("en-US", opt) 

if (day == 2 || day == 3){
    document.getElementById("banner").classList.add("show");
}
else{
    document.getElementById("banner").classList.remove("show")
};


function togglrMenu() {
    document.getElementById("primeryNav").classList.toggle("open");
    document.getElementById("hamburgerBtnNav").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtnNav')
x.onclick = togglrMenu;




