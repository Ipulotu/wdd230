
function togglrMenu() {
    document.getElementById("primeryNav").classList.toggle("open");
    document.getElementById("hamburgerBtnNav").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtnNav')
x.onclick = togglrMenu;

year =  (new Date).getFullYear();

document.getElementById('year').innerText = `${ year }`;
document.getElementById('lastupdated').innerText = `${ document.lastModified }`;
