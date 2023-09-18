const button = document.querySelector('#btn');

button.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', () => {
    alert('Hello World!');
});

function alertFunction() {
    alert('YAY YOU DID IT!');
}