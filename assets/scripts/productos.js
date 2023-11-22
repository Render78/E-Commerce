import { products } from "./data/products-data.js";

const productListDiv = document.getElementById('productList');

function renderProducts(productArray) {
    productListDiv.innerHTML = '';

    productArray.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Precio: $${product.price}</p>
            <p>${product.description}</p>
            ${product.sale ? '<p>¡En oferta!</p>' : ''}
            <button>Añadir al carrito</button>
        `;

        productListDiv.appendChild(productDiv);
    });
}
renderProducts(products);

document.getElementById('filterSelect').addEventListener('change', (event) => {
    const filterValue = event.target.value;

    let filteredProducts = [...products];

    if (filterValue === '1') {
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filterValue === '2') {
        filteredProducts = products.filter(product => product.sale); // Filtrar por oferta
    } else if (filterValue === '3') {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    renderProducts(filteredProducts);
});
