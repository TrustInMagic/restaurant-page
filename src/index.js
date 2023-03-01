import buildPage from './build-page';
import buildHomeSection from './home';
import buildMenuSection from './menu';
import './style.css';

buildPage();
buildHomeSection();

const content = document.querySelector('.middle')
const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');

homeButton.addEventListener('click', () => {
  content.innerHTML = '';
  buildHomeSection();
});

menuButton.addEventListener('click', () => {
  content.innerHTML = '';
  buildMenuSection();
});