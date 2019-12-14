function init() {
    document.querySelectorAll(".school-header").forEach(item => item.addEventListener("click", showDescription));
    document.querySelectorAll(".navigation-menu-item").forEach(item => item.addEventListener("click", scrollToElement));
    
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
}

function showDescription(e) {
    const parent = e.target.parentElement;
    parent.classList.toggle("active");
}

function scrollToElement(e) {
    e.preventDefault();
    const element = document.querySelector("#" + e.target.dataset.name);
    if (!element) return;
    element.scrollIntoView({behavior: 'smooth'});
}

window.addEventListener("load", init);

