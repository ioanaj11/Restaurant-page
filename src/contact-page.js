function LoadContactPage(){
    const container=document.getElementById('content');

    const mainDiv=document.createElement('div');
    mainDiv.classList.add('mainDiv');
    container.appendChild(mainDiv);

    const title=document.createElement('h2');
    title.textContent='Contact us at:';

    mainDiv.appendChild(title);

    const contactMainDiv=document.createElement('div');
    contactMainDiv.classList.add('contactMainDiv');

    const contactDetailsDiv=document.createElement('div');
    contactDetailsDiv.classList.add('contactDetailsDiv');
    
    const phoneIcon=document.createElement('img');
    phoneIcon.setAttribute('src','phone-call.png');
    contactDetailsDiv.appendChild(phoneIcon);

    contactDetailsDiv.appendChild(phoneIcon);
    
    const phone=document.createElement('p');
    phone.textContent='+40 123 456 789';

    contactDetailsDiv.appendChild(phone);

    contactMainDiv.appendChild(contactDetailsDiv);

    mainDiv.appendChild(contactMainDiv);
}

export{LoadContactPage};