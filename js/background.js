const images = [
    "0.jpg", 
    "1", 
    // "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    // "6.jpg",
    "7.jpg",
    // "9.jpg",
    "10.jpg",
    "11.jpg",
    // "12.jpg",
    "13.jpg",
    "14.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);



//you can do prependChild which puts the image at the top