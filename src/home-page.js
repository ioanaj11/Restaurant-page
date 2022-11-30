const main=document.getElementById('content');

function LoadHeader(){
    const header=document.createElement('div');
    header.classList.add('header');

    const title=document.createElement('h1');
    title.textContent='My wonderful restaurant';
    header.appendChild(title);

    const tabsList=document.createElement('ul');
   
    let tabsMenu=["Home", "Menu", "Contact"]

    for(let i=0; i<tabsMenu.length; i++){
        const tab=document.createElement('li');
        const tabBtn=document.createElement('button');
        tabBtn.textContent=`${tabsMenu[i]}`;
        tabBtn.classList.add(`${tabsMenu[i]}`);

        tab.appendChild(tabBtn);
        tabsList.appendChild(tab);
    }
    
    header.appendChild(tabsList);

    main.appendChild(header);

    const homeBtn=document.querySelector('.header>ul>li').firstChild;
    homeBtn.classList.add('Home','activeButton');
}

function LoadLogo(){
    const logoDiv=document.createElement('div');
    logoDiv.classList.add('logoDiv');

    const logoImg=document.createElement('img');
    logoImg.classList.add('logoImg');
    logoImg.setAttribute('src','./d1b5d369d00c00ee23e5.png');

    logoDiv.appendChild(logoImg);
    main.appendChild(logoDiv);
}

function LoadDescriptionDiv(){
    const mainDescriptionDiv=document.createElement('div');
    mainDescriptionDiv.classList.add('mainDescriptionDiv');

    const descriptionDiv=document.createElement('div');
    descriptionDiv.classList.add('descriptionDiv');

    const description=document.createElement('p');
    description.textContent='"My wonderful restaurant" was born out of love and respect for traditional Romanian culinary creations, met with a desire to bring quality ingredients to the table. Simply put, we’re here to bring you an experience you can feel good about.';
   
    descriptionDiv.appendChild(description);
    
    mainDescriptionDiv.appendChild(descriptionDiv);

    const mainImgDiv=document.createElement('div');
    mainImgDiv.classList.add('mainImgDiv');

    const mainImg=document.createElement('img');
    mainImg.classList.add('mainImg');
    mainImg.setAttribute('src', './c3f5555faef4a83386b0.webp');

    mainImgDiv.appendChild(mainImg);
    mainDescriptionDiv.appendChild(mainImgDiv);
    
    const mainDiv=document.createElement('div');
    mainDiv.classList.add('mainDiv');

    mainDiv.appendChild(mainDescriptionDiv);
   
    main.appendChild(mainDiv);

    const timetableDiv=document.createElement('div');
    timetableDiv.classList.add('timetableDiv');

    const timetable1=document.createElement('p');
    timetable1.textContent='Monday-Friday: 10.00-23.00';

    const timetable2=document.createElement('p');
    timetable2.textContent='Saturday-Sunday: 10.00-17.00';

    timetableDiv.appendChild(timetable1);
    timetableDiv.appendChild(timetable2);
    
    mainDescriptionDiv.appendChild(timetableDiv);

    }

function LoadFooter(){
    const footer=document.createElement('div');
    footer.classList.add('footer');

    const message=document.createElement('p');
    message.textContent='Thank you for being part of our journey!';

    footer.appendChild(message);

    main.appendChild(footer);
}

function LoadHomePage(){
    LoadHeader();
    LoadLogo();
    LoadDescriptionDiv();
    LoadFooter();
}

export{LoadHeader};
export{LoadLogo};
export{LoadDescriptionDiv};
export{LoadFooter};
export{LoadHomePage};