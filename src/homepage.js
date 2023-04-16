function loadHomePage(){
    const content = document.querySelector('#content');

    const contentDiv = document.createElement('div');
    const headline = document.createElement('h1');
    const paragraph = document.createElement('p');

    contentDiv.classList.add('content-div');

    headline.classList.add('headline');
    headline.innerText = 'Bistro du Chef';

    paragraph.classList.add('paragraph')
    paragraph.innerText = "Bistro du Chef is a fantastic restaurant with an elegant atmosphere and delicious cuisine. Their menu offers a wide range of high-quality dishes, including savory steaks, delicate seafood, and heavenly desserts. The friendly staff and extensive wine list complete the dining experience. Don't miss out on this must-visit spot for foodies!";
    
    content.appendChild(contentDiv);
    contentDiv.appendChild(headline);
    contentDiv.appendChild(paragraph);
}
export { loadHomePage };