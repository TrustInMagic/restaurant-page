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

  addElementToDom(header, content);
  addElementToDom(middle, content);
  addElementToDom(title, header);
  addElementToDom(nav, header);
  addElementToDom(firstLink, nav);
  addElementToDom(secondLink, nav);
  addElementToDom(thirdLink, nav);

  addTextContentToElement('Sun Bowl', title);
  addTextContentToElement('Home', firstLink);
  addTextContentToElement('Menu', secondLink);
  addTextContentToElement('Contact', thirdLink);

  addClassToElement('header', header);
  addClassToElement('nav', nav);
  addClassToElement('middle', middle);
  addClassToElement('home', firstLink);
  addClassToElement('menu', secondLink);
  addClassToElement('contact', thirdLink);
}
