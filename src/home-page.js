const main=document.getElementById('content');

function LoadHeader(){
    const header=document.createElement('div');
    header.classList.add('header');

    const title=document.createElement('h1');
    title.textContent='My wonderful restaurant';
    header.appendChild(title);

    const tabsList=document.createElement('ul');
   
    const homeTab=document.createElement('li');
    homeTab.textContent="Home";
   
    const menuTab=document.createElement('li');
    menuTab.textContent="Menu";
    
    const contactTab=document.createElement('li');
    contactTab.textContent="Contact";

    tabsList.appendChild(homeTab);
    tabsList.appendChild(menuTab);
    tabsList.appendChild(contactTab);

    header.appendChild(tabsList);

    main.appendChild(header);
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

function LoadMainImg(){
    const mainImgDiv=document.createElement('div');
    mainImgDiv.classList.add('mainImgDiv');

    const descriptionDiv=document.createElement('div');
    descriptionDiv.classList.add('descriptionDiv');

    const description=document.createElement('p');
    description.textContent='"My wonderful restaurant" was born out of love and respect for humble deli creations, met with a desire to bring quality ingredients to the table. Simply put, we’re here to bring you an experience you can feel good about.';
   
    descriptionDiv.appendChild(description);
    
    mainImgDiv.appendChild(descriptionDiv);

    const mainImg=document.createElement('img');
    mainImg.classList.add('mainImg');
    mainImg.setAttribute('src', './c3f5555faef4a83386b0.webp');

    mainImgDiv.appendChild(mainImg);
    main.appendChild(mainImgDiv);

    const timetableDiv=document.createElement('div');
    timetableDiv.classList.add('timetableDiv');

    const timetable1=document.createElement('p');
    timetable1.textContent='Monday-Friday: 10.00-23.00';

    const timetable2=document.createElement('p');
    timetable2.textContent='Saturday-Sunday: 10.00-17.00';

    timetableDiv.appendChild(timetable1);
    timetableDiv.appendChild(timetable2);

    mainImgDiv.appendChild(timetableDiv);
}

function LoadFooter(){
    const footer=document.createElement('div');
    footer.classList.add('footer');

    main.appendChild(footer);
}

export{LoadHeader};
export{LoadLogo};
export{LoadMainImg};
export{LoadFooter};