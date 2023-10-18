const moreButton = document.querySelector('#more') as HTMLAnchorElement;
const minusButton = document.querySelector('.fa-minus') as HTMLElement;
const plusButton = document.querySelector('.fa-plus') as HTMLElement;
const moreLinks = document.querySelector('.more-links') as HTMLElement;
const dropdownMenu = document.querySelector('.dropdown-menu') as HTMLElement;
const menutogle1 = document.querySelector('.mnu-tgl1') as HTMLElement;
const menutogle2 = document.querySelector('.mnu-tgl2') as HTMLElement;
const selectElement = document.querySelector('#location') as HTMLSelectElement;
const apiKey: string = 'a175fd7929b987ccfc69e6cc22572cf02452e6db8250def2dc41bb09';

minusButton.style.display = 'none';
moreLinks.style.display = 'none';


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
    dropdownMenu.classList.remove('hide');
    dropdownMenu.style.display = 'block';
})

menutogle2.addEventListener('click', (e: Event) => {
    e.preventDefault();
    dropdownMenu.classList.add('hide');
})

const countries = ['Ghana', 'United States', 'United Kingdom', 'France', 'Japan', 'China', 'Spain'];

interface ipdataResponse {
    ip: string;
    is_eu: boolean;
    city: string;
    region: string;
    country_name: string;
}

const getUserLocation = async () => {
    const response = await fetch(`https://api.ipdata.co?api-key=${apiKey}`);
    const data: ipdataResponse = await response.json();
    return data.country_name;
}
        
getUserLocation().then(userCountry => {
    const optionElement = document.createElement('option');
    optionElement.value = userCountry.split(' ').join('-').toLowerCase();
    optionElement.text = userCountry;
    selectElement.add(optionElement, selectElement.options[0]);

    for (const country of countries){
        if (country !== userCountry){
            const optionElement = document.createElement('option');
            optionElement.value = country.split(' ').join('-').toLowerCase();
            optionElement.text = country;
            selectElement.add(optionElement);
        }
    }
})
.catch(e => {
    e as Error;
    console.log(e.message);
});




