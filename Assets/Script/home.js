const prev = $('#prev')
const next = $('#next')
const imageEvents = $('.imageEvents')
const images = $('.imageEvents img')

const IMAGE_WIDTH = 500;

let currentImageIndex = 0;
let currentPosition = 0;

function main(){
    setPrevHandler();
    setNextHandler();
}

function setPrevHandler(){
    prev.on('click', () => {
        currentImageIndex--;

        if(currentImageIndex < 0){
            currentImageIndex = images.length - 1;
            currentPosition = -IMAGE_WIDTH * currentImageIndex;
        }
        else {
            currentPosition += IMAGE_WIDTH
        }

        updateImageSlider();
    });
}

function setNextHandler(){
    next.on('click', () => {
        currentImageIndex++;

        if(currentImageIndex >= images.length){
            currentImageIndex = 0;
            currentPosition = 0;
        }
        else{
            currentPosition -= IMAGE_WIDTH;
        }

        updateImageSlider();
    });
}

function updateImageSlider(){
    const prevElem = images.eq(0);
    prevElem.animate({ marginLeft: currentPosition })
}

main();