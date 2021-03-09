const hamb = document.querySelector('.menu-btn')
const sidebar = document.querySelector('.sidebar')
let click = false;

hamb.addEventListener('click', () => {
if (!click) {
    hamb.classList.add('open'),
    sidebar.classList.add('open'),
    click = true;
} else {
    hamb.classList.remove('open'),
    sidebar.classList.remove('open'),
    click = false;
}
})

const main = document.getElementById('home')

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }