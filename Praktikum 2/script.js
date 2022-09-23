function strikeOutText(event, element) {
    console.log(event.type)
    if (element.classList.contains('todo--done')) {
        element.classList.remove('todo--done')
    } else {
        element.classList.add('todo--done')
    }
}