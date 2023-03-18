// Append HTML in DOM from JavaScript
const appendHtml = (el, str) => {
    var div = document.createElement('div')
    div.innerHTML = str
    while (div.children.length > 0) {
        el.appendChild(div.children[0])
    }
}

// form submit
const onSubmit = (e) => {
    e.preventDefault()
    
//     getting form data
    const formData = new FormData()
//     appending data
    formData.append('username', 'john')
    formData.append('email', 'john@example.com')
//     appending files
    const fileInput = document.querySelector('input[type="file"].outSideFile')
    const file = fileInput.files[0]
    formData.append('file', file)
    
//     XML request
    var xhr = new XMLHttpRequest()
    xhr.open('POST', API, true)
    xhr.onload = function () {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText)
        } else {
            console.log('Error: ' + xhr.status)
        }
    }
    xhr.send(formData)
}

// form submit JSON
fetch(API, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(data),
})
.then(res=>res.json())
.then((result)=>{})


// setting option to know when a section appears in screen
const appearOptions = {
    threshold: 0,
    rootMargin: "-250px 0px -250px 0px"
}

// document on loaded
document.addEventListener("DOMContentLoaded", function(event){
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
    
    // Scroll Based Animation Starter     
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
