import buildPage from './build-page';
import buildHomeSection from './home';
import buildMenuSection from './menu';
import buildContactSection from './contact';
import './style.css';

buildPage();
buildHomeSection();

const content = document.querySelector('.middle');
const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactButton = document.querySelector('.contact');

homeButton.addEventListener('click', () => {
  content.innerHTML = '';
  buildHomeSection();
});

menuButton.addEventListener('click', () => {
  content.innerHTML = '';
  buildMenuSection();
});

contactButton.addEventListener('click', () => {
  content.innerHTML = '';
  buildContactSection();
});
