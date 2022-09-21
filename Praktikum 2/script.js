function strikeOutText(element) {
    if (element.style.textDecoration === 'line-through') {
        element.style.textDecoration = 'none'
    } else {
        element.style.textDecoration = 'line-through'
    }
}