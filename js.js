function init() {
document.querySelectorAll(".school-header").forEach(item => item.addEventListener("click", showDescription));
}

function showDescription(e){
const parent = e.target.parentElement;
parent.classList.toggle("active");
}

window.addEventListener("load", init);