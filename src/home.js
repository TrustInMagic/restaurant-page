import {
  addElementToDom,
  addTextContentToElement,
  addClassToElement,
} from './build-page';
import Icon from './assets/girl-chef.png';

export default function buildHomeSection() {
  const content = document.querySelector('.middle');
  const firstSpan = document.createElement('span');
  const secondSpan = document.createElement('span');
  const thirdSpan = document.createElement('span');
  const photo = new Image();

  addElementToDom(firstSpan, content);
  addElementToDom(secondSpan, content);
  addElementToDom(photo, content);
  addElementToDom(thirdSpan, content);

  photo.src = Icon;
  firstSpan.textContent = 'The best Japanese Bowls you have ever tried'
  secondSpan.textContent = 'Made with love since 1930'
  thirdSpan.textContent = 'Order online or visit us!';
}
