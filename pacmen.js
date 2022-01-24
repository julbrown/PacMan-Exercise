var pos = 0;
let pageWidth = window.innerWidth;
const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];
// direction 0 is left to right, 1 is right to left
var direction = 0;
// mouth 0 is open, 1 is closed
var mouth = 0;

function run() {
    let img = document.getElementById('PacMan');
    let imgWidth = img.width;
    mouth = (mouth + 1) % 2;
    direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
    img.src = pacArray[direction][mouth];
    if(direction) {
        pos -= 20;
        img.style.left = pos + 'px';
    } else {
        pos += 20;
        img.style.left = pos + 'px';
    }
    setTimeout(run, 200);
}

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
    if(direction === 1 && pos < 20) {
        direction = 0;
    }
    if( direction === 0 & pos > pageWidth - imgWidth - 20) {
        direction = 1;
    }
    return direction;
}