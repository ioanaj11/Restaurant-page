import './style.css';
import RestaurantLogo from './restaurant-sign-clipart-xl.png';
import RestaurantBackground from './594c31fa298d4aab0f8b463d.webp';
import sarmalePicture from './sm_sarmale.jpg';

import { LoadHeader } from './home-page';
import {LoadLogo} from './home-page';
import {LoadDescriptionDiv} from './home-page';
import {LoadFooter} from './home-page';
import {LoadHomePage} from './home-page';
import { LoadMenu } from './menu-page';
import {LoadContactPage} from './contact-page.js';

LoadHomePage();

function clearPage(){
    const DivToRemove=document.querySelector('.mainDiv');
    const footer=document.querySelector('.footer');
    const main=document.getElementById('content');

    main.removeChild(DivToRemove);
    main.removeChild(footer);
}

function activateButton(button){
    const activeButton=document.querySelector(`.${button}`);
    activeButton.classList.toggle('activeButton');

}

function deactivateButtons(){
    const buttons=document.querySelectorAll('.header button');
    buttons.forEach(button=> button.classList.remove('activeButton'));
}

const headerBtns=document.querySelectorAll('.header>ul>li>button');
headerBtns.forEach(headerBtn => headerBtn.addEventListener('click', e => 
    { switch(e.target.textContent){
        case 'Home': 
            clearPage();
            LoadDescriptionDiv();
            deactivateButtons();
            activateButton(e.target.textContent);
            LoadFooter();
            break;
        case 'Menu': 
            clearPage();
            LoadMenu();
            deactivateButtons();
            activateButton(e.target.textContent);
            LoadFooter();
            break;
        case 'Contact':
            clearPage();
            LoadContactPage();
            deactivateButtons();
            activateButton(e.target.textContent);
            LoadFooter();
    }

    }
    ))

