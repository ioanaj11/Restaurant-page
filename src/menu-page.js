function LoadMenu(){
    const mainDiv=document.createElement('div');
    mainDiv.classList.add('mainDiv');
    
    let menu=[{
        Name: 'Sarmale',
        Description: "Romanian stuffed cabbage rolls traditionally served on Christmas and New Year's Eve but also served throughout the year at weddings, baptism parties, and other large celebrations.",
        Ingredients: 'vegetable oil, onion, rice, ground pork, cabbage leaves, bacon, tomato juice',
        Weight: '300gr',
        'No of calories': '560 kcal',
        Price: '20 lei',
        image: 'c69071597fdd147d8401.jpg'
    },
        {   
        Name: 'Sarmale',
        Description: "Romanian stuffed cabbage rolls traditionally served on Christmas and New Year's Eve but also served throughout the year at weddings, baptism parties, and other large celebrations.",
        Ingredients: 'vegetable oil, onion, rice, ground pork, cabbage leaves, bacon, tomato juice',
        Weight: '300gr',
        'No of calories': '560 kcal',
        Price: '20 lei',
        image: 'c69071597fdd147d8401.jpg'
        },
        {
        Name: 'Sarmale',
        Description: "Romanian stuffed cabbage rolls traditionally served on Christmas and New Year's Eve but also served throughout the year at weddings, baptism parties, and other large celebrations.",
        Ingredients: 'vegetable oil, onion, rice, ground pork, cabbage leaves, bacon, tomato juice',
        Weight: '300gr',
        'No of calories': '560 kcal',
        Price: '20 lei',
        image: 'c69071597fdd147d8401.jpg'
        },
        {
            Name: 'Sarmale',
            Description: "Romanian stuffed cabbage rolls traditionally served on Christmas and New Year's Eve but also served throughout the year at weddings, baptism parties, and other large celebrations.",
            Ingredients: 'vegetable oil, onion, rice, ground pork, cabbage leaves, bacon, tomato juice',
            Weight: '300gr',
            'No of calories': '560 kcal',
            Price: '20 lei',
            image: 'c69071597fdd147d8401.jpg'
            }]

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
                    const detail=document.createElement('p');
                    detail.textContent=`${prop}:  ${menu[i][prop]}`;

                    detailsDiv.appendChild(detail);
                    break;
                case 'Price':
                    const price=document.createElement('p');
                    price.classList.add('price');
                   
                    price.textContent=`${prop}:  ${menu[i][prop]}`;

                    detailsDiv.appendChild(price);
            }
        }

        itemDiv.appendChild(detailsDiv);
        mainDiv.appendChild(itemDiv);
    }

    const mainContainer=document.getElementById('content');
    mainContainer.appendChild(mainDiv);
}

export {LoadMenu};