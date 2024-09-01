const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', (e) => {
    console.log(e)
    const header = document.querySelector('.header')
    const navMobile = document.querySelector('.nav-mobile')
    const body = document.querySelector('body')
    const navMobileIcon = document.querySelector('.nav-mobile-icon')

    if (navMobile.classList.contains('active')) {
        header.classList.remove('active')
        navMobile.classList.remove('active')
        body.style.overflowY = 'auto'
        navMobileIcon.src = './images/icon-hamburger.svg'
    }else {
        header.classList.add('active')
        navMobile.classList.add('active')
        body.style.overflowY = 'hidden'
        navMobileIcon.src = './images/icon-close.svg'
    }
})