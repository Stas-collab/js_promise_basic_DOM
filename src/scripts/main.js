'use strict';

// write your code here
const logo = document.querySelector('.logo');
const promis1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});
const promis2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

async function promisOne() {
  try {
    await promis1;

    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  } catch {
    const div = document.createElement('div');

    div.classList.add('message');
    div.classList.add('error-message');
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  }
}

async function promisTwo() {
  try {
    await promis2;

    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  } catch {
    const div = document.createElement('div');

    div.classList.add('message');
    div.classList.add('error-message');
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  }
}
promisOne();
promisTwo();
