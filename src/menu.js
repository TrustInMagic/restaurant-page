import {
  addElementToDom,
  addTextContentToElement,
  addClassToElement,
} from './build-page';
import firstItem from './assets/GomaShoyuTuna.png';
import secondItem from './assets/PonzuSalmon.png';
import thirdItem from './assets/SalmonChirashi.png';
import fourthItem from './assets/SearedAburiOtoro.png';
import fifthItem from './assets/SichuanChiliSalmon.png';
import sixthItem from './assets/SpicyHamachi.png';
import seventhItem from './assets/WasabiMayoTuna.png';
import eighthItem from './assets/YakiTofu*vegetarian.png';

function createCardElement(img, name) {
  const content = document.querySelector('.middle');
  const container = document.createElement('div');
  const itemName = document.createElement('span');
  const photo = new Image();
  photo.src = img;

  addTextContentToElement(name, itemName);
  addElementToDom(photo, container);
  addElementToDom(itemName, container);
  addElementToDom(container, content);
  addClassToElement('item', photo)
  addClassToElement('item-container', container)
}

export default function buildMenuSection() {
  const navButtons = document.querySelectorAll('a');
  const menuButton = document.querySelector('.menu');
  const content = document.querySelector('.middle');
  const body = document.querySelector('body')

  navButtons.forEach((button) => button.classList.remove('active'));

  addClassToElement('active', menuButton);
  addClassToElement('grid', content);
  addClassToElement('overflow', body)
  
  createCardElement(firstItem, 'Goma Shoyu Tuna');
  createCardElement(secondItem, 'Ponzu Salmon');
  createCardElement(thirdItem, 'Salmon Chirashi');
  createCardElement(fourthItem, 'Seared Aburi Otoro');
  createCardElement(fifthItem, 'Sichuan Chili Salmon');
  createCardElement(sixthItem, 'Spicy Hamachi');
  createCardElement(seventhItem, 'Wasabi Mayo Tuna');
  createCardElement(eighthItem, 'Yaki Tofu *vegetarian');
}
