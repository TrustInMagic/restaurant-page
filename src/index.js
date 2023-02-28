import buildPage from './build-page';
import buildHomeSection from './home';
import './style.css';

buildPage();
buildHomeSection();

const homeButton = document.querySelector('.home');
const content = document.querySelector('.middle')

homeButton.addEventListener('click', () => {
  content.innerHTML = '';
  buildHomeSection();
});
