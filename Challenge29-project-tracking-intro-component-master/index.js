const navMobileIcon = document.querySelector('.nav-mobile-icon')

navMobileIcon.addEventListener('click', () => {
    const navMobileImg = document.querySelector('.nav-mobile-image')
    const navMobile = document.querySelector('.nav-mobile')

    if (navMobile.classList.contains('close')) {
        navMobile.classList.remove('close')
        navMobileImg.src = './images/icon-close.svg'
    }else {
        navMobile.classList.add('close')
        navMobileImg.src = './images/icon-hamburger.svg'
    }
})