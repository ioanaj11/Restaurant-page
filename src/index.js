import './style.css';
import RestaurantLogo from './restaurant-sign-clipart-xl.png';
import RestaurantBackground from './594c31fa298d4aab0f8b463d.webp';
import sarmalePicture from './sm_sarmale.jpg';

import { LoadHeader } from './home-page';
import {LoadLogo} from './home-page';
import {LoadMainDiv} from './home-page';
import {LoadFooter} from './home-page';
import {LoadHomePage} from './home-page';
import { LoadMenu } from './menu-page';

LoadHomePage();

function clearPage(){
    const mainDiv=document.querySelector('.mainDiv');
    const footer=document.querySelector('.footer');
    const main=document.getElementById('content');

    main.removeChild(mainDiv);
    main.removeChild(footer);
}

const headerBtns=document.querySelectorAll('.header>ul>li>button');
headerBtns.forEach(headerBtn => headerBtn.addEventListener('click', e => 
    { switch(e.target.textContent){
        case 'Home': 
            clearPage();
            LoadMainDiv();
            LoadFooter();
            break;
        case 'Menu': 
            clearPage();
            LoadMenu();
            LoadFooter();
            break;
        case 'Contact':
            clearPage();
    }

    }
    ))

