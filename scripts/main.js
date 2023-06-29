let toggleLabels = document.querySelectorAll('.toggle__label');

toggleLabels.forEach((label) => label.addEventListener("click", (e) => {
    const classes = label.classList;
    const toggleCheck = label.classList.contains('not-toggled');

    if (toggleCheck) {
        classes.add('toggled');
        classes.remove('not-toggled'); 
    }

    if (!toggleCheck) {
        classes.add('not-toggled');
        classes.remove('toggled');
    }  
}))

console.log('main.js connected')