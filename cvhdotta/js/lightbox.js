const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-light')
const hamburger1 = document.querySelector('.hamb')



imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})


contenedorlight.addEventListener('click', (e)=>{
    if(e.target != imageneslight){
        contenedorlight.classList.toggle("show")
        imageneslight.classList.toggle("show-image")
        hamburger1.style.opacity ='1'
    }
})
const aparecerImagen = (imagen)=>{
    const nuevoSrc = imagen.replace(/(\.[\w\d_-]+)$/i, '-img$1');
    imageneslight.src = nuevoSrc;
    contenedorlight.classList.toggle("show")
    imageneslight.classList.toggle("show-image")
    hamburger1.style.opacity ='0'
}