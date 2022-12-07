function LoadContactPage(){
    const container=document.getElementById('content');

    const mainDiv=document.createElement('div');
    mainDiv.classList.add('mainDiv');
    container.appendChild(mainDiv);

    const title=document.createElement('h2');
    title.textContent='Contact us at:';

    const contactMainDiv=document.createElement('div');
    contactMainDiv.classList.add('contactMainDiv');

    contactMainDiv.appendChild(title);

    const contactDetailsDiv=document.createElement('div');
    contactDetailsDiv.classList.add('contactDetailsDiv');

    let contactDetails=[{
        icon: 'phone-call.png',
        detail: '1234 567 980',
        },
        {icon:'maps-and-flags.png',
        detail: 'Bulevardul Decebal, nr. 23, Oradea, Romania'},
        {icon: 'email.png',
        detail:'mywonderfulrestaurant@gmail.com'},
        {icon:'timer.png',
        detail:'Monday-Friday, 10:00-23:00; Saturday-Sunday 10:00-17:00'
        }
    ]
    
    for(let i=0; i<contactDetails.length; i++){
            const icon=document.createElement('img');
            icon.setAttribute('src', `${contactDetails[i].icon}`);
            
            contactDetailsDiv.appendChild(icon);

            const detail=document.createElement('p');
            detail.textContent=`${contactDetails[i].detail}`;

            contactDetailsDiv.appendChild(detail);
        
    }
   
    contactMainDiv.appendChild(contactDetailsDiv);

    mainDiv.appendChild(contactMainDiv);


}



export{LoadContactPage};