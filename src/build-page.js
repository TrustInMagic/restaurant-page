import icon from './assets/icon.png';

export function addElementToDom(newElement, parent) {
  parent.appendChild(newElement);
}

export function addTextContentToElement(text, element) {
  element.textContent = text;
}

export function addClassToElement(cls, element) {
  element.classList.add(cls);
}

export default function buildPage() {
  const content = document.querySelector('#content');
  const header = document.createElement('div');
  const nav = document.createElement('div');
  const middle = document.createElement('div');
  const title = document.createElement('h1');
  const firstLink = document.createElement('a');
  const secondLink = document.createElement('a');
  const thirdLink = document.createElement('a');
  const footer = document.createElement('div');
  const footerInfo = document.createElement('span');
  const footerIcon = new Image();
  footerIcon.src = icon;

  addElementToDom(header, content);
  addElementToDom(middle, content);
  addElementToDom(title, header);
  addElementToDom(nav, header);
  addElementToDom(firstLink, nav);
  addElementToDom(secondLink, nav);
  addElementToDom(thirdLink, nav);
  addElementToDom(footer, content);
  addElementToDom(footerIcon, footer);
  addElementToDom(footerInfo, footer);

  addTextContentToElement('Sun Bowl', title);
  addTextContentToElement('Home', firstLink);
  addTextContentToElement('Menu', secondLink);
  addTextContentToElement('Contact', thirdLink);
  addTextContentToElement('info@sun-bowl.com', footerInfo)

  addClassToElement('header', header);
  addClassToElement('nav', nav);
  addClassToElement('middle', middle);
  addClassToElement('home', firstLink);
  addClassToElement('menu', secondLink);
  addClassToElement('contact', thirdLink);
  addClassToElement('footer', footer);
  addClassToElement('icon', footerIcon);
  addClassToElement('info', footerInfo)
}
