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