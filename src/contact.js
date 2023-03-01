import {
  addElementToDom,
  addTextContentToElement,
  addClassToElement,
} from './build-page';
import mapImg from './assets/map.png';

export default function buildContactSection() {
  const content = document.querySelector('.middle');
  const contactButton = document.querySelector('.contact');
  const navButtons = document.querySelectorAll('a');
  const phoneNumber = document.createElement('span');
  const address = document.createElement('span');
  const map = new Image();
  map.src = mapImg;

  navButtons.forEach((button) => button.classList.remove('active'));
  content.classList.remove('grid');

  addClassToElement('active', contactButton);
  addTextContentToElement('🏠 Raya Ubud, Ubud, Bali Indonesia', address);
  addTextContentToElement('📞 +62 361 2092288', phoneNumber);
  addClassToElement('map', map);
  addClassToElement('phone', phoneNumber);
  addClassToElement('address', address);

  addElementToDom(phoneNumber, content);
  addElementToDom(address, content);
  addElementToDom(map, content);
}
