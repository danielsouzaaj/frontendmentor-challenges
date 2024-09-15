const input = document.querySelector('input[type="checkbox"]')

input.addEventListener('change', (e) => {
    const monthly = document.querySelectorAll('.monthly')
    const annually = document.querySelectorAll('.annually')
    
    if(e.target.checked) {
        monthly.forEach(item => item.style.display = 'flex')
        annually.forEach(item => item.style.display = 'none')
    }else {
        monthly.forEach(item => item.style.display = 'none')
        annually.forEach(item => item.style.display = 'flex')
    }
})