const bind1 = document.querySelector.bind(document)
const bind2 = document.querySelectorAll.bind(document)

const toggleNavMobile = () => {
    bind1('.soft-menu').classList.toggle('open')
    bind1('.soft-menu__list').classList.toggle('open')
}

bind2('.soft-menu__item').forEach((element) => {
  element.onclick = () => {
    toggleNavMobile()
  }
})

bind1('.scroll-to-top').onclick = () => {
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });
}

// handle animation number
function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)

    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval)
        } else {
            let inc = Math.ceil(finalNumber / (duration / 17))
            if (currentNumber + inc > finalNumber) {
                currentNumber = finalNumber
                clearInterval(interval)
            } else {
                currentNumber += inc
            }
            callback(currentNumber)
        }
    }
}

// loading animation
window.addEventListener('load', (event) => {
  setTimeout(() => {
    bind1('.loading').style.display = "none";
  }
  ,
  50
)
});

// SLIDER
var swiperUni = new Swiper(".uni-slide", {
  slidesPerView: 1,
    spaceBetween: 0,
  // auto
  autoplay: {
    delay: 500,
  },
  loop: true,
  speed: 2000,
});

var swiperProduct = new Swiper(".product-slide", {
    slidesPerView: 1,
      spaceBetween: 0,
    // auto
    autoplay: {
      delay: 500,
    },
    loop: true,
    speed: 2000,
});

var partnerProduct = new Swiper(".partner-slide", {
    slidesPerView: 2,
      spaceBetween: 0,
    // auto
    autoplay: {
      delay: 500,
    },
    loop: true,
    speed: 1000,
    breakpoints: {
        120: {
            slidesPerView: 2,
            spaceBetween: 2
        },
        740: {
            slidesPerView: 6,
            spaceBetween: 10
        },
        1023: {
            slidesPerView: 6,
            spaceBetween: 10
        }
    },
    navigation: {
        nextEl: ".partner-arrow-left",
        prevEl: ".partner-arrow-right",
    },
});
