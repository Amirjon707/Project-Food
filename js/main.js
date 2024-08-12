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

let deadLine = '2024-09-01'

function getDate(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date());

    const days = Math.floor(t / (1000 * 60 * 60 * 24))
    const hours = Math.floor(t / (1000 * 60 * 60) % 24)
    const minutes = Math.floor(t / (1000 * 60) % 60)
    const seconds = Math.floor(t / 1000 % 60)

    return {
        total: t,
        days,
        hours,
        minutes,
        seconds
    }
}

getDate(deadLine)

function setTime(selector, endTime) {
    const timer = document.querySelector(selector);

    const days = timer.querySelector('#days')
    const hours = timer.querySelector('#hours')
    const minutes = timer.querySelector('#minutes')
    const seconds = timer.querySelector('#seconds')
    Time()

    let inter = setInterval(Time, 1000)

    function Time() {
        let t = getDate(deadLine)
        if (t.total == 0) {
            clearInterval(inter)
        } else {
            days.innerHTML = zero(t.days)
            hours.innerHTML = zero(t.hours)
            minutes.innerHTML = zero(t.minutes)
            seconds.innerHTML = zero(t.seconds)
        }

    }
}

setTime('.timer', deadLine)