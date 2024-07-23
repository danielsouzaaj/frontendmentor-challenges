const ratingContainer = document.querySelector('.rating-state')
const thankYouContainer = document.querySelector('.thanks-state')
const submitBtn = document.querySelector('.btn-submit')
const rates = document.querySelectorAll('.btn')
const rating = document.querySelector('.result')


rates.forEach(rate => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.textContent
    })
})

submitBtn.addEventListener('click', () => {
    if (rating.innerHTML !== "") {
        ratingContainer.style.display = "none"
        thankYouContainer.style.display = "flex"
    }
})