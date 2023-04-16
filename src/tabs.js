import { loadHomePage } from "./homepage";
import { loadMenuPage } from "./menu";
import { loadContactPage } from "./contact";

const contentDiv = document.querySelector('#content');

function loadTabs(){
    const buttonDiv = document.createElement('div');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');

    buttonDiv.classList.add('button-div');
    homeButton.classList.add('btn');
    menuButton.classList.add('btn');
    contactButton.classList.add('btn');

    homeButton.setAttribute('id', 'home-btn');
    menuButton.setAttribute('id', 'menu-btn');
    contactButton.setAttribute('id', 'contact-btn');

    homeButton.innerText = 'HOME';
    menuButton.innerText = 'MENU';
    contactButton.innerText = 'CONTACT';

    contentDiv.appendChild(buttonDiv);
    buttonDiv.appendChild(homeButton);
    buttonDiv.appendChild(menuButton);
    buttonDiv.appendChild(contactButton);

    const buttons = document.querySelectorAll('.button-div button');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(e.target.matches('#home-btn')){
                clearPage();
                loadTabs();
                loadHomePage();
            }

            if(e.target.matches('#menu-btn')){
                clearPage();
                loadTabs();
                loadMenuPage();
            }

            if(e.target.matches('#contact-btn')){
                clearPage();
                loadTabs();
                loadContactPage();
            }
        })
    })
}

function clearPage(){
    for(let i = 0; i < 2; i++){
        let delChildren = contentDiv.lastChild;
        contentDiv.removeChild(delChildren);
    }
}
export { loadTabs };