"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const moreButton = document.querySelector('#more');
const minusButton = document.querySelector('.fa-minus');
const plusButton = document.querySelector('.fa-plus');
const moreLinks = document.querySelector('.more-links');
const dropdownMenu = document.querySelector('.dropdown-menu');
const menutogle1 = document.querySelector('.mnu-tgl1');
const menutogle2 = document.querySelector('.mnu-tgl2');
const selectElement = document.querySelector('#location');
const apiKey = 'a175fd7929b987ccfc69e6cc22572cf02452e6db8250def2dc41bb09';
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
    dropdownMenu.style.display = 'block';
});
menutogle2.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownMenu.classList.add('hide');
});
const countries = ['Ghana', 'United States', 'United Kingdom', 'France', 'Japan', 'China', 'Spain'];
const getUserLocation = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://api.ipdata.co?api-key=${apiKey}`);
    const data = yield response.json();
    return data.country_name;
});
getUserLocation().then(userCountry => {
    const optionElement = document.createElement('option');
    optionElement.value = userCountry.split(' ').join('-').toLowerCase();
    optionElement.text = userCountry;
    selectElement.add(optionElement, selectElement.options[0]);
    for (const country of countries) {
        if (country !== userCountry) {
            const optionElement = document.createElement('option');
            optionElement.value = country.split(' ').join('-').toLowerCase();
            optionElement.text = country;
            selectElement.add(optionElement);
        }
    }
})
    .catch(e => {
    e;
    console.log(e.message);
});
