import{mainDishMenu} from './menu.js';
import {startersMenu} from './menu.js';
import {dessertsMenu} from './menu.js';

function LoadMenu(){
    const container=document.getElementById('content');

    const mainDiv=document.createElement('div');
    mainDiv.classList.add('mainDiv');
    container.appendChild(mainDiv);

    const starterDishesTitle=document.createElement('h2');
    starterDishesTitle.textContent='Starters:';
    mainDiv.appendChild(starterDishesTitle);
    
    const startersMenuDiv=document.createElement('div');
    startersMenuDiv.appendChild(displayMenuContent(startersMenu));

    mainDiv.appendChild(startersMenuDiv);

    const mainDishesTitle=document.createElement('h2');
    mainDishesTitle.textContent='Main dishes:';
    mainDiv.appendChild(mainDishesTitle);

    const mainDishDiv=document.createElement('div');
    mainDishDiv.appendChild(displayMenuContent(mainDishMenu));

    mainDiv.appendChild(mainDishDiv);

    const dessertsTitle=document.createElement('h2');
    dessertsTitle.textContent="Desserts:";
    mainDiv.appendChild(dessertsTitle);
    
    const dessertsDiv=document.createElement('div');
    dessertsDiv.appendChild(displayMenuContent(dessertsMenu));

    mainDiv.appendChild(dessertsDiv);
    
    container.appendChild(mainDiv);


function displayMenuContent(menu){
    const divTodisplay=document.createElement('div');
    divTodisplay.classList.add('menuDisplay');
    
    for(let i=0; i<menu.length; i++){
        const itemDiv=document.createElement('div');
        itemDiv.classList.add('itemDiv');

        const itemImg=document.createElement('img');
        itemImg.setAttribute('src', `${menu[i].image}`);

        itemDiv.appendChild(itemImg);

        const detailsDiv=document.createElement('div');
        detailsDiv.classList.add('detailsDiv');

        for(let prop in menu[i]){
            switch (prop){
                case 'Name':
                    const name=document.createElement('h2');
                    name.textContent=`${menu[i][prop]}`;
                    detailsDiv.appendChild(name);
                    break;
                case 'Description':                    
                case 'Ingredients':
                case 'Weight':
                case 'No of calories':
                    const detailName=document.createElement('h4');
                    detailName.textContent=`${prop}:  `;

                    const detailDescription=document.createElement('p');
                    detailDescription.textContent= `${menu[i][prop]}`;

                    detailsDiv.appendChild(detailName);
                    detailsDiv.appendChild(detailDescription);

                    const newline=document.createElement('br');
                    detailsDiv.appendChild(newline);

                    break;
                case 'Price':
                    const price=document.createElement('p');
                    price.classList.add('price');

                    price.textContent=`${prop}:  ${menu[i][prop]}`;

                    detailsDiv.appendChild(price);
            }
        }

    itemDiv.appendChild(detailsDiv);
    divTodisplay.appendChild(itemDiv);
    }

    return divTodisplay;
}
} 
    


export {LoadMenu};