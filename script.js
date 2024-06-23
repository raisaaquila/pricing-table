// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buy-now');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Button Clicked: ' + this.previousElementSibling.previousElementSibling.innerText);
        });
    });
});
