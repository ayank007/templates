document.addEventListener("DOMContentLoaded", function(event){
  
    // Append HTML in DOM from JavaScript
    const appendHtml = (el, str) => {
        var div = document.createElement('div')
        div.innerHTML = str
        while (div.children.length > 0) {
            el.appendChild(div.children[0])
        }
    }

    // setting option to know when a section appears in screen
    const appearOptions = {
        threshold: 0,
        rootMargin: "-250px 0px -250px 0px"
    }

    // swiper slider
    const swiper = new Swiper(".portfolioSlider", {
        slidesPerView: 1,
        spaceBetween: 50,
        keyboard: {
            enabled: true,
        },
        autoplay: {
            delay:20000,
            disableOnInteraction: false,
        },
        preventClicks:false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>"
            },
        },
        breakpoints: {
            // screen size is more than 700px
            700: {
                slidesPerView: 2,
                spaceBetweenSlides: 50
            }
        }
    })
    
    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
        ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // entry.target.classList.add("appear")
                swiper.slideNext()
                appearOnScroll.unobserve(entry.target) // keeping the observation for one time
            }
        })
    }, appearOptions)
    
    appearOnScroll.observe(swiper)
  
})
