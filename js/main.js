document.getElementById('logo').onclick = function() {
    document.forms.logo
    location.reload()
}


let toggle = true
document.querySelector('#soundIcon').addEventListener('click', event => {
    const clickedIcon = event.currentTarget
    if (toggle) {
        clickedIcon.querySelector('#a1').beginElement()
        clickedIcon.querySelector('#aa1').beginElement()
    } else {
        clickedIcon.querySelector('#a2').beginElement()
        clickedIcon.querySelector('#aa2').beginElement()
    }
    toggle = !toggle
})


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


const slider = document.querySelector('.slider')
const prevButton = document.querySelector('.str-l')
const nextButton = document.querySelector('.str-r')
const slides = Array.from(slider.querySelectorAll('.item'))
const slideCount = slides.length
let slideIndex = 0

prevButton.addEventListener('click', showPreviousSlide)
nextButton.addEventListener('click', showNextSlide)

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount
  updateSlider()
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount
  updateSlider()
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'flex'
        } else {
            slide.style.display = 'none'
        }
    })
}

updateSlider()