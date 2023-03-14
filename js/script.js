//  SLIDE 
//  `<div class="slide">
//     <img src="./img/01.webp" alt="img1">
// </div>`

// THUMBS
/* <div class="thumb deactive">
    <img src="./img/02.webp" alt="img2">
</div> */


// IMG ARRAY

const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
]

let currentIndex = 0;
let slide = '';
let thumb = '';

const thumbs = document.querySelector('.thumbs');
const slides = document.querySelector('.slides');

for(i = 0; i < images.length ; i++){
    
    slide += `
    <div class="slide d-none">
        <div class = "imgBox">
            <img src="./${images[i]}" alt="img${i}" class="img-fluid">
        </div>
    </div>`;

    thumb +=
    `
    <div class="thumb deactive">
        <img src="./${images[i]}" alt="img${i} class="img-fluid h-100">
    </div>
    `;
    
}

slides.innerHTML = slide;
document.querySelectorAll('.slide')[currentIndex].classList.remove('d-none');
thumbs.innerHTML += thumb;



// Buttons
document.getElementById("up").addEventListener('click',goUp);

document.getElementById("down").addEventListener('click',goDown);




