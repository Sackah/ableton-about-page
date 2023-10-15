"use strict";
const moreButton = document.querySelector('#more');
const minusButton = document.querySelector('.fa-minus');
const plusButton = document.querySelector('.fa-plus');
const moreLinks = document.querySelector('.more-links');
const dropdownMenu = document.querySelector('.dropdown-menu');
const menutogle1 = document.querySelector('.mnu-tgl1');
const menutogle2 = document.querySelector('.mnu-tgl2');
minusButton.style.display = 'none';
moreLinks.style.display = 'none';
moreButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (minusButton.style.display === 'none') {
        minusButton.style.display = 'inline';
        plusButton.style.display = 'none';
        moreLinks.style.display = 'block';
    }
    else {
        minusButton.style.display = 'none';
        plusButton.style.display = 'inline';
        moreLinks.style.display = 'none';
    }
});
menutogle1.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownMenu.classList.remove('hide');
});
menutogle2.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownMenu.classList.add('hide');
});
