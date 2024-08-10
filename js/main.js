// zero function

function zero(n) {
    return n < 10 ? '0' + n : n
}


// Modal

const ModalBtn = document.querySelectorAll('[data-modal]')
const modal = document.querySelector('.modal')
const ModalClear = document.querySelector('[data-close]')


ModalBtn.forEach((item) => {
    item.addEventListener('click', () => {
        modal.classList.add('show', "fade")
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
    })
})

ModalClear.addEventListener('click', () => {
    modal.classList.remove('show')
    modal.classList.add('hide')
    document.body.style.overflow = 'auto'
})

modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show')
        modal.classList.add('hide')
        document.body.style.overflow = 'auto'
    }
})


// Tabs

const tabContent = document.querySelectorAll('.tabcontent')
const tabHeader = document.querySelector('.tabheader')
const tabHeaderItems = document.querySelectorAll('.tabheader__item')

const hideTab = () => {
    tabContent.forEach(item => {
        item.classList.remove('show')
        item.classList.add('hide')
    })

    tabHeaderItems.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTab = (i = 0) => {
    tabContent[i].classList.remove('hide')
    tabContent[i].classList.add('show')
    tabHeaderItems[i].classList.add('tabheader__item_active')
}

tabHeader.addEventListener('click', () => {
    tabHeaderItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            hideTab()
            showTab(index)
        })
    })
})

hideTab()
showTab()


// Slider

const left = document.querySelector('.offer__slider-prev')
const right = document.querySelector('.offer__slider-next')
const sliderCounter = document.querySelector('#current')
const sliderTotal = document.querySelector('#total')
const slides = document.querySelectorAll('.offer__slide')


let sliderCount = 1
sliderCounter.innerHTML = zero(sliderCount)
sliderTotal.innerHTML = zero(slides.length)

const hideSlides = () => {
    slides.forEach(item => {
        item.classList.remove('show')
        item.classList.add('hide')
    })
}

const showSlides = (i = 0) => {
    hideSlides()
    slides[i].classList.remove('hide')
    slides[i].classList.add('show', 'fade')
}

hideSlides()
showSlides()

left.addEventListener('click', () => {
    if (sliderCount > 1) {
        sliderCount = sliderCounter.innerHTML
        sliderCount--
        sliderCounter.innerHTML = zero(sliderCount)
    } else {
        sliderCount = 4
        sliderCounter.innerHTML = zero(sliderCount)
    }
    showSlides(sliderCount - 1)
})

right.addEventListener('click', () => {
    if (sliderCount < sliderTotal.innerHTML) {
        sliderCount = sliderCounter.innerHTML
        sliderCount++
        sliderCounter.innerHTML = zero(sliderCount)
    } else {
        sliderCount = 1
        sliderCounter.innerHTML = zero(sliderCount)
    }

    showSlides(sliderCount - 1)
})


// Timer 

const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

let s = seconds.innerHTML
let m = minutes.innerHTML
let h = hours.innerHTML
let d = days.innerHTML
let inter

const Timer = () => {
    inter = setInterval(() => {

        if (s != 0) {
            s--
            seconds.innerHTML = zero(s)
        } else if (s == 0 && m != 0) {
            m--
            s = 59
            seconds.innerHTML = zero(s)
            minutes.innerHTML = zero(m)
        } else if (s == 0 && m == 0 && h != 0) {
            h--
            m = 59
            s = 59
            hours.innerHTML = zero(h)
            seconds.innerHTML = zero(s)
            minutes.innerHTML = zero(m)
        } else if (s == 0 && m == 0 && h == 0 && d != 0) {
            d--
            h = 23
            m = 59
            s = 59
            days.innerHTML = zero(d)
            hours.innerHTML = zero(h)
            seconds.innerHTML = zero(s)
            minutes.innerHTML = zero(m)
        } else {
            clearInterval(inter)
        }

    }, 1000)
}

Timer()
