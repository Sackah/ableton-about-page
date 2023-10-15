const moreButton = document.querySelector('#more') as HTMLAnchorElement;
const minusButton = document.querySelector('.fa-minus') as HTMLElement;
const plusButton = document.querySelector('.fa-plus') as HTMLElement;
const moreLinks = document.querySelector('.more-links') as HTMLElement;
const dropdownMenu = document.querySelector('.dropdown-menu') as HTMLElement;
const menutogle1 = document.querySelector('.mnu-tgl1') as HTMLElement;
const menutogle2 = document.querySelector('.mnu-tgl2') as HTMLElement;

minusButton.style.display = 'none';
moreLinks.style.display = 'none';
dropdownMenu.style.display = 'none';

moreButton.addEventListener('click', (e: Event) => {
    e.preventDefault();

    if(minusButton.style.display === 'none'){
        minusButton.style.display = 'inline';
        plusButton.style.display = 'none';
        moreLinks.style.display = 'block'
    }else {
        minusButton.style.display = 'none';
        plusButton.style.display = 'inline';
        moreLinks.style.display = 'none';
    }
})

menutogle1.addEventListener('click', (e: Event) => {
    e.preventDefault();
    dropdownMenu.style.display = 'block';
    dropdownMenu.classList.remove('hide');
})

menutogle2.addEventListener('click', (e: Event) => {
    e.preventDefault();
    dropdownMenu.style.display = 'none';
    dropdownMenu.classList.add('hide');
})



