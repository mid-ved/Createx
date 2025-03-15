document.getElementById('logo').onclick = function() {
    document.forms.logo
    location.reload()
}

document.addEventListener("DOMContentLoaded", () => {
    let goToTop = document.getElementById("go-to-top")

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
            goToTop.style.display = "block";
        } else {
            goTop.style.display = "none";
        }
    });
     
    // Плавная прокрутка при клике на кнопку
    goToTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
})


let subsButton = document.getElementById('subscribe')
let subsData = document.querySelector('.subscribe')
let cvButton = document.getElementById('cv')
let close = document.getElementById('close')
let main = document.querySelector('main')