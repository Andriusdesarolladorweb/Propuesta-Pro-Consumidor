const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const image_list = document.querySelector('.image-list')

prev.addEventListener('click', () => {
    console.log('Botón left clickeado');
    image_list.scrollLeft -= 400;
})

next.addEventListener('click', () => {
    console.log('Botón right clickeado');
    image_list.scrollLeft -= 300;
})