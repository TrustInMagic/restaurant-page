import {
  addElementToDom,
  addTextContentToElement,
  addClassToElement,
} from './build-page';
import Icon from './assets/girl-chef.png';

export default function buildHomeSection() {
  const navButtons = document.querySelectorAll('a');
  const content = document.querySelector('.middle');
  const homeButton = document.querySelector('.home');
  const firstSpan = document.createElement('span');
  const secondSpan = document.createElement('span');
  const thirdSpan = document.createElement('span');
  const photo = new Image();
  photo.src = Icon;

  navButtons.forEach((button) => button.classList.remove('active'));
  content.classList.remove('grid');

  addElementToDom(firstSpan, content);
  addElementToDom(secondSpan, content);
  addElementToDom(photo, content);
  addElementToDom(thirdSpan, content);
  addClassToElement('active', homeButton);
  addTextContentToElement(
    'The best Japanese Bowls you have ever tried',
    firstSpan
  );
  addTextContentToElement('Made with love since 1930', secondSpan);
  addTextContentToElement('Order online or visit us!', thirdSpan);
}
