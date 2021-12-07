import "./assets/zass.png";
import "./assets/certificates_sathananthan.zip";
import "./assets/Sathananthan_Resume.pdf";

/*
 * index.scss is the master / main style file.
*/
import "./styles/index.scss";

// Variables
const navbarToggleBtn = document.querySelector('.navbar__toggle');
const navbarMenu= document.querySelector('.navbar__menu');
const navbarLinks = document.querySelectorAll('.navbar__link');
const sections = document.querySelectorAll('section');

// Event listeners
navbarToggleBtn.addEventListener('click', toggleNavbarMenu);
navbarLinks.forEach(link => link.addEventListener('click', toggleNavbarMenu));

// Functions
function toggleNavbarMenu () {
  navbarMenu.classList.toggle('active');
}

window.addEventListener('scroll', () => {
  let current="";
  sections.forEach( section => {
    const sectionTop = section.offsetTop - 20;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navbarLinks.forEach (link => {
    link.classList.remove('link-active');
    let linkName = link.dataset.name;
    
    if (linkName === current) {
      link.classList.add('link-active');
    }
  })
});

