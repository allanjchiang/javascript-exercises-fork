const container = document.querySelector('#container');

const p = document.createElement('p');
p.textContent = 'Hey I\'m red!'
p.style.color = 'red';
container.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style.color = 'blue';
container.appendChild(h3);

const div = document.createElement('div');
div.style.cssText = 'border: black 1px solid; background-color: pink;';

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div!';

const pInDiv = document.createElement('p');
pInDiv.textContent = 'ME TOO!';

div.appendChild(h1);
div.appendChild(pInDiv);
container.appendChild(div);