const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paraRed = document.createElement('p');
paraRed.textContent = 'Hey I\'m red!';
paraRed.style.color = 'red';
container.appendChild(paraRed);

const h3Blue = document.createElement('h3');
h3Blue.textContent = 'I\'m a blue h3!';
h3Blue.style.color = 'blue';
container.appendChild(h3Blue);

const divContainer = document.createElement('div');
divContainer.style.borderColor = 'black';
divContainer.style.backgroundColor = 'pink';
container.appendChild(divContainer);

const h1Text = document.createElement('h1');
h1Text.textContent = 'I\'m in a div';
divContainer.appendChild(h1Text);

const paraMeToo = document.createElement('p');
paraMeToo.textContent = 'ME TOO!';
divContainer.appendChild(paraMeToo);