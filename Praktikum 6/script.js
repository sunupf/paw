function toggleChat() {
    const chat = document.querySelector('.chat');

    // if (getComputedStyle(chat).display === 'none') {
    //     chat.style.display = 'block';
    // } else {
    //     chat.style.display = 'none';
    // }

    if (chat.classList.contains('chat--show')) {
        chat.classList.remove('chat--show')
        chat.classList.add('chat--hidden')
    } else {
        chat.classList.add('chat--show')
        chat.classList.remove('chat--hidden')
    }
}