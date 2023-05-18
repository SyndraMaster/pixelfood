// import jsonData from '../js/data.json' assert {type : 'json'}
// console.log(jsonData);
let template = document.querySelector('template').content
const fragment = document.createDocumentFragment();
const items  = document.querySelector('.items');
// const fetchData = async () => {
//     try {
//         const res = await fetch('../js/data.json');
//         const data = await res.json();
//         console.log(data);
//         dibujarCard(data);  
//     } catch (error) {
//         console.log(error);
//     }
// }
// document.addEventListener('DOMContentLoaded', () => {
//     fetchData()
// })
const dibujarCard = () => {productos.forEach(producto => {
    template.querySelector('h4').textContent = producto.producto   
    template.querySelector('img').src = producto.asset   
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})
 items.appendChild(fragment)
};
dibujarCard(productos)
const shoppingCart = document.querySelector('.shopping-list');
const cart = document.querySelector('.cart');
const body = document.querySelector('body')
cart.addEventListener('click', () => {
    shoppingCart.classList.toggle('active')
    body.classList.toggle('no-scroll')
})
