var mobil = [
    ["All New Avanza", "AT/MT", "300.000", "Bensin", "7", "images/avanza.png", "https://wa.me/+6285343968624?text=Halo%2C%20saya%20ingin%20memesan%20*ALL NEW AVANZA*%20. Apakah%20mobil%20tersedia%3F", "Lepas kunci"],
    ["Brio", "AT/MT", "250.000", "Bensin", "5", "images/brio.png", "https://wa.me/+6285343968624?text=Halo%2C%20saya%20ingin%20memesan%20*BRIO*%20. Apakah%20mobil%20tersedia%3F", "Lepas kunci"],
    ["Terios", "AT/MT", "300.000", "Bensin", "7", "images/terios.png", "https://wa.me/+6285343968624?text=Halo%2C%20saya%20ingin%20memesan%20*TERIOS*%20. Apakah%20mobil%20tersedia%3F", "Lepas kunci"],
    ["Innova", "AT/MT", "500.000", "Bensin/Solar", "8", "images/innova.png", "https://wa.me/+6285343968624?text=Halo%2C%20saya%20ingin%20memesan%20*INNOVA*%20. Apakah%20mobil%20tersedia%3F", "Lepas kunci"],
    ["Xpander", "AT/MT", "300.000", "Bensin", "8", "images/xpander.png", "https://wa.me/+6285343968624?text=Halo%2C%20saya%20ingin%20memesan%20*XPANDER*%20. Apakah%20mobil%20tersedia%3F", "Lepas kunci"],
    ["Pajero", "AT/MT", "950.000", "Solar", "8", "images/pajero.png", "https://wa.me/+6285343968624?text=Halo%2C%20saya%20ingin%20memesan%20*PAJERO*%20. Apakah%20mobil%20tersedia%3F", "Lepas kunci"],
    ["Hiace", "-", "1.500.000", "Solar", "9-15", "images/hiace.png", "https://wa.me/+6285343968624?text=Halo%2C%20saya%20ingin%20memesan%20*HIACE*%20. Apakah%20mobil%20tersedia%3F", "Dengan driver"],
    ["Bus Pariwisata full AC", "-", "1.500.000", "Solar", "30-35", "images/bus.png", "https://wa.me/+6285343968624?text=Halo%2C%20saya%20ingin%20memesan%20*BUS PARIWISATA*%20. Apakah%20mobil%20tersedia%3F", "Dengan driver"],
];

var cardContainer = document.getElementById('card-container');

mobil.forEach(function (car) {
    // Create a new card element
    var card = document.createElement('div');
    card.className = 'bg-prim-y text-white w-56 rounded-lg grid hover:scale-110 transition-transform p-2';

    var linkWrapper = document.createElement('a');
    linkWrapper.href = car[6]; // Use the URL with query parameters
    linkWrapper.className = 'no-underline';
    linkWrapper.target = '_blank';

    // Add the image container
    var imgContainer = document.createElement('div');
    imgContainer.className = 'bg-white rounded-xl flex items-center justify-center';
    var img = document.createElement('img');
    img.src = car[5];  // Use the image source from the data array
    img.alt = car[0];
    img.className = 'overflow-hidden max-h-28';
    imgContainer.appendChild(img);
    card.appendChild(imgContainer);

    // Add the text container
    var textContainer = document.createElement('div');
    textContainer.className = 'grid mt-2';
    var namaMobil = document.createElement('span');
    namaMobil.id = 'namamobil';
    namaMobil.textContent = car[0];
    namaMobil.className = 'font-bold pb-2'; 
    var harga = document.createElement('span');
    harga.id = 'harga';
    harga.textContent = "Rp " + car[2] + " /hari";

    // Create transmission container with icon
    var transmisiContainer = document.createElement('div');
    transmisiContainer.className = 'flex items-center';
    var transmisiLogo = document.createElement('img');
    transmisiLogo.src = 'images/transmisi.png';  
    transmisiLogo.alt = 'Transmission Logo';
    transmisiLogo.className = 'white-image h-4 w-4 mr-1'; 
    var transmisi = document.createElement('span');
    transmisi.id = 'transmisi';
    transmisi.textContent = car[1];
    transmisiContainer.appendChild(transmisiLogo);
    transmisiContainer.appendChild(transmisi);

    // Create fuel type container with icon
    var fuelContainer = document.createElement('div');
    fuelContainer.className = 'flex items-center mt-1';
    var fuelLogo = document.createElement('img');
    fuelLogo.src = 'images/bensin.png';  
    fuelLogo.alt = 'Fuel Icon';
    fuelLogo.className = 'white-image h-4 w-4 mr-1';  
    var fuelType = document.createElement('span');
    fuelType.id = 'fueltype';
    fuelType.textContent = car[3];
    fuelContainer.appendChild(fuelLogo);
    fuelContainer.appendChild(fuelType);

    var seatContainer = document.createElement('div');
    seatContainer.className = 'flex items-center mt-1';
    var seatLogo = document.createElement('img');
    seatLogo.src = 'images/seats.png';  
    seatLogo.alt = 'Seat Icon';
    seatLogo.className = 'white-image h-4 w-4 mr-1';  
    var seatType = document.createElement('span');
    seatType.id = 'seattype';
    seatType.textContent = car[4] + ' penumpang';
    seatContainer.appendChild(seatLogo);
    seatContainer.appendChild(seatType);

    var keyContainer = document.createElement('div');
    keyContainer.className = 'flex items-center mt-1';
    var keyLogo = document.createElement('img');
    keyLogo.src = 'images/key.png';  
    keyLogo.alt = 'Seat Icon';
    keyLogo.className = 'white-image h-4 w-4 mr-1';  
    var keyType = document.createElement('span');
    keyType.id = 'seattype';
    keyType.textContent = car[7];
    keyContainer.appendChild(keyLogo);
    keyContainer.appendChild(keyType);

    textContainer.appendChild(namaMobil);
    textContainer.appendChild(harga);
    textContainer.appendChild(transmisiContainer);
    textContainer.appendChild(seatContainer);
    textContainer.appendChild(fuelContainer);
    textContainer.appendChild(keyContainer);
    card.appendChild(textContainer);

    // Append card to link wrapper
    linkWrapper.appendChild(card);

    // Add the link wrapper to the container
    cardContainer.appendChild(linkWrapper);
});


var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px",
        cursor.style.top = e.clientY + "px";
});

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        const title = document.getElementById('title');
        title.classList.add('animate-fadeIn');
        title.style.opacity = '1'; // Set opacity to 1
    }, 1180); // Delay the animation by 2 seconds (2000 milliseconds)
});

function isDesktopView() {
    return window.innerWidth >= 768;
}

function changeWidth() {
    if (isDesktopView()) {
        var scroll = window.pageYOffset;
        var scaleFactor = Math.min(1 + (scroll / 500), 1.5); // Adjust as needed
        document.getElementById('logo').style.transform = 'scale(' + scaleFactor + ')';
    }
}

window.addEventListener('scroll', function () {
    if (isDesktopView()) {
        requestAnimationFrame(changeWidth);
    }
});
