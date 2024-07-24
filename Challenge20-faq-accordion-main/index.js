const accordion = document.querySelectorAll('.accordion')

accordion.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')

        let panel = item.nextElementSibling
        
        if (panel.style.display === 'block') {
            panel.style.display = 'none'
        }else {
            panel.style.display = 'block'
        }
    })
})