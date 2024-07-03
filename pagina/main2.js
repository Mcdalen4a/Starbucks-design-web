document.addEventListener('DOMContentLoaded', function() {
    
    const cardData1 = [
        { imageUrl: './imagenes/cookies.png', text: 'Galleta' },
        { imageUrl: './imagenes/brownie cookies and cream.png', text: 'Brownie de oreo' },
        { imageUrl: './imagenes/cheescake de arandanos.png', text: 'Cheesecake de arándanos' },
        { imageUrl: './imagenes/buddin.png', text: 'Buddin' },
        { imageUrl: './imagenes/crossaint con crema de avellanas.png', text: 'Croissant con crema de avellanas' },
        { imageUrl: './imagenes/crossaint de jamon y queso.png', text: 'Croissant de jamón y queso' },
        { imageUrl: './imagenes/muffin de naranja.png', text: 'Muffin de naranja' }
    ];

    
   const cardData2 = [
        { imageUrl: './imagenes/cookies and cream.png', text: 'Frappé oreo' },
        { imageUrl: './imagenes/chocolate coockies and cream frappe.png', text: 'Frappé chocolate y oreo' },
        { imageUrl: './imagenes/dulce de leche latte helado.png', text: 'Latte de dulce de leche' },
        { imageUrl: './imagenes/dulce de leche frapuccino.png', text: 'Frapuccino dulce de leche' },
        { imageUrl: './imagenes/mocha blanco caffe helado.png', text: 'Mocha blanco helado' },
        { imageUrl: './imagenes/skinny vainila latte helado.png', text: 'Skinny vainilla latte' },
        { imageUrl: './imagenes/mocha caffé helado.png', text: 'Mocha común helado' },
        { imageUrl: './imagenes/vainilla latte helado alto.png', text: 'Vainila latte alto' },
        { imageUrl: './imagenes/triple mocha frapuccino.png', text: 'Triple mocha frapuccino' },
        { imageUrl: './imagenes/Vainilla cold brew.png', text: 'Vainilla cold brew' },
        { imageUrl: './imagenes/iced_avellana_shaken_expresso.png', text: 'Iced avellana shaken expresso' },
    ];

  
    const cardData3 = [
        { imageUrl: './imagenes/caramel machiato caliente.png', text: 'Caramel Machiato Caliente' },
        { imageUrl: './imagenes/dulce de leche latte.png', text: 'Dulce de Leche Latte' },
        { imageUrl: './imagenes/skinny vainilla latte caliente.png', text: 'Skinny Vainilla Latte' },
        { imageUrl: './imagenes/black and withe mocca.png', text: 'Black and White Mocca' },
        { imageUrl: './imagenes/mocha cafe.png', text: 'Mocha Café' },
        { imageUrl: './imagenes/café americano.png', text: 'Café Americano' },
        { imageUrl: './imagenes/machiatto caliente.png', text: 'Machiatto Caliente' }
    ];


    const cardData4 = [
        { imageUrl: './imagenes/DRAGON_DRINK_V2.png', text: 'Dragon Drink' },
        { imageUrl: './imagenes/mango dragonfruit frozen.png', text: 'Mango dragonfruito frozen' },
        { imageUrl: './imagenes/strawberry acai frozen.png', text: 'Strawberry acai frozen' },
        { imageUrl: './imagenes/STRAWBERRY_ACAI_LEMONADE_REFRESHER_V2.png', text: 'Strawberry acain lemonade' },
        { imageUrl: './imagenes/pink drink.png', text: 'Pink drink' },
    ];

    // Obtener los contenedores de las filas desde el HTML
    const firstRow = document.getElementById('firstRow');
    const secondRow = document.getElementById('secondRow');
    const thirdRow = document.getElementById('thirdRow');
    const fourthRow = document.getElementById('fourthRow');

   

    // Función para crear una tarjeta
    function createCard(imageUrl, text) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-lg-3', 'b-2'); // Clases de Bootstrap para columnas

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = imageUrl; // Asignar la URL de la imagen
        img.alt = 'Card image cap'; // Texto alternativo de la imagen

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = text; // Asignar texto dinámico

        // Construir la estructura de la tarjeta
        cardBody.appendChild(cardText);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);
        colDiv.appendChild(cardDiv);

        return colDiv;
    }

    // Agregar tarjetas del primer conjunto (cardData1) a la primera fila
    cardData1.forEach(function(item) {
        const cardElement = createCard(item.imageUrl, item.text);
        firstRow.appendChild(cardElement);
    });

    // Agregar tarjetas del segundo conjunto (cardData2) a la segunda fila
    cardData2.forEach(function(item) {
        const cardElement = createCard(item.imageUrl, item.text);
        secondRow.appendChild(cardElement);
    });

    // Agregar tarjetas del tercer conjunto (cardData3) a la tercera fila
    cardData3.forEach(function(item) {
        const cardElement = createCard(item.imageUrl, item.text);
        thirdRow.appendChild(cardElement);
    });

    // Agregar tarjetas del cuarto conjunto (cardData4) a la cuarta fila
    cardData4.forEach(function(item) {
        const cardElement = createCard(item.imageUrl, item.text);
        fourthRow.appendChild(cardElement);
    });
});

