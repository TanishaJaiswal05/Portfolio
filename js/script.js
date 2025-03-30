const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    this.classList.toggle('bi-brightness-high-fill');
    body.classList.toggle('dark-mode');
});  
