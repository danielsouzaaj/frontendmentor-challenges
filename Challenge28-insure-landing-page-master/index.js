const navMobileBtn = document.querySelector('.nav-mobile-btn')

function handleBtn() {
    const navMobileIcon = document.querySelector('.nav-mobile-icon')
    const navMobile = document.querySelector('.nav-mobile')

    if (navMobile.classList.contains('open')) {
        navMobile.classList.remove('open')
        navMobileIcon.src = './images/icon-hamburger.svg'
    }else {
        navMobile.classList.add('open')
        navMobileIcon.src = './images/icon-close.svg'
    }
}

navMobileBtn.addEventListener('click', handleBtn)