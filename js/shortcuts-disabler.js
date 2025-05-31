document.addEventListener('keydown', function(e) {
    // ctrl + u
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }

    // ctrl + s
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
    }

    // ctrl + shift + i
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
    }

    // f12
    if (e.keyCode === 123) {
        e.preventDefault();
    }
});