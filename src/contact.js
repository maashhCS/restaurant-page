function loadContactPage(){
    const content = document.querySelector('#content');

    const contentDiv = document.createElement('div');
    const headline = document.createElement('h1');
    const street = document.createElement('p');
    const state = document.createElement('p');
    const country = document.createElement('p');

    contentDiv.classList.add('content-div');

    headline.classList.add('headline');
    headline.innerText = 'Contact';

    street.classList.add('paragraph')
    street.innerText = "Fake Street 5";
    state.classList.add('paragraph')
    state.innerText = "Fake State";
    country.classList.add('paragraph')
    country.innerText = "Fake Country";
    
    content.appendChild(contentDiv);
    contentDiv.appendChild(headline);
    contentDiv.appendChild(street);
    contentDiv.appendChild(state);
    contentDiv.appendChild(country);
}

export {loadContactPage};