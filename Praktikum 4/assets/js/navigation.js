function toggleMenu(el) {
    if(el.parentElement.classList.contains('nav--expanded')) {
        el.parentElement.classList.remove('nav--expanded')
        document.body.classList.remove('body--lock')
    } else {
        el.parentElement.classList.add('nav--expanded')
        document.body.classList.add('body--lock')
    }
}