function loadMenuPage(){
    const content = document.querySelector('#content');

    const contentDiv = document.createElement('div');
    const headline = document.createElement('h1');
    const paragraph = document.createElement('p');

    contentDiv.classList.add('content-div');

    headline.classList.add('headline');
    headline.innerText = 'Menu';

    paragraph.classList.add('paragraph')
    paragraph.innerText = "Food";
    
    content.appendChild(contentDiv);
    contentDiv.appendChild(headline);
    contentDiv.appendChild(paragraph);
}
export { loadMenuPage };