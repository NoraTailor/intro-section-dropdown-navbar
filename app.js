
const navOpener = document.getElementById('open-navbar');
const nav = document.querySelector('.navbar')
const main = document.querySelector('main');
const header = document.querySelector('header img')

const miniNav = document.querySelectorAll('mini-nav-drop')
const inNavDropIcon = document.getElementsByClassName('drop-down-icon');

const drop = document.querySelectorAll('.drop')





navOpener.addEventListener('click', () => {
  nav.classList.toggle('menu-active');
  main.classList.toggle('fade-background');
  header.classList.toggle('fade-background');
  navOpener.classList.toggle('menu-active-icon')
})

// inNavDropIcon.addEventListener('click', (e) => {
//   console.log(e)
//   miniNav.classList.toggle('mini-nav-active');
//   drop.classList.toggle('drop-active');
// })

for ( var i = 0; i < inNavDropIcon.length; i++){
  inNavDropIcon[i].addEventListener('click', function () {
    this.classList.toggle("mini-nav-active");
    var dropDownContent = this.nextElementSibling;
    if(dropDownContent.style.display === "block"){
      dropDownContent.style.display = "none";
      drop.classList.add('drop')
    } else {
      dropDownContent.style.display = "block";
      drop.classList.remove('drop-active')
    }
  })
}