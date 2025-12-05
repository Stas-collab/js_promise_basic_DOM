'use strict';

// write your code here
const logo = document.querySelector('.logo');

function promis1() {
  return new Promise((resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  });
}

function promis2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(Error);
    }, 3000);
  });
}

async function promisOne() {
  try {
    await promis1();

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
    await promis2();

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
