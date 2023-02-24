// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let elementosCarrito = []

const agregarCurso = (e) => {
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
        const card = e.target.parentElement;
        console.log(card);
        const id = e.target.getAttribute('data-id');
        const title = card.querySelector('h4').innerText;
        const precio = card.querySelector('.precio span').innerText;
        const imagenContainer = card.parentElement;
        const imagen = imagenContainer.querySelector('img').src;
        elementosCarrito.push({
            id: id,
            nombre: title,
            price: precio,
            imagen: imagen
        });
        llenarCarrito(elementosCarrito);
    }

}

const llenarCarrito = elementosCarrito =>{
    contenedorCarrito.innerHTML = '';
    elementosCarrito.forEach(item =>{
        const filaTabla = document.createElement('tr');
        const contfila = 
        `
        <td><img src='${item.image}' width=100></td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.cant}</td>
        <td>x</td>
        `;
        filaTabla.innerHTML= contFila;
        filaTabla.setAttribute('data-id', item.id) ;
        contenedorCarrito.appendChild(filaTabla);

    })
   
}

const eliminarCurso = (e) => {
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML();
    }
}

const vaciarCarrito = () => {
    
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

listaCursos.addEventListener('click', agregarCurso);