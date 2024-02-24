const products = [
  {name: "Adidas Shoes", price: 500, id: 1, quantity: 1, img: "/images/green.png",},
  {name: "Sting Energy Drink", price: 120, id: 2, quantity: 1, img: "/images/green.png",},
  {name: "Umbrella", price: 500, id: 3, quantity: 1, img: "/images/green.png",},
  {name: "Cat Food", price: 900, id: 4, quantity: 1, img: "/images/green.png",},
  { name: "T Shirt", price: 300, id: 5, quantity: 1, img: "/images/green.png" },
  { name: "Book", price: 100, id: 6, quantity: 1, img: "/images/green.png" },
  { name: "T Shirt", price: 300, id: 7, quantity: 1, img: "/images/green.png" },
  { name: "Book", price: 100, id: 8, quantity: 0, img: "/images/green.png" },
];

function createProductHTML(product, targetId, targetName) {
  if (product.quantity > 0) {
    const productIdWithName = product.id === targetId && product.name === targetName;
    if (productIdWithName) {
      return `
    <a href="/produto-${product.name}" style="text-decoration: none;">
    <div class="card">
        <div class="image">
            <img src="${product.img}" alt="${product.name}">
        </div>
        <div class="products_text">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
        </div>
    </div>
    `;
    }
  }
  return null;
}

function renderProducts(products) {
  const productsContainer = document.querySelector(".box");
  if (!productsContainer) return;

  productsContainer.innerHTML = ""; // Limpa qualquer conteúdo existente

  products.forEach((product, index) => {
    const productHTML = createProductHTML(product, index + 1 ,product.name);
    if (productHTML !== null) { // verifica se o resultado do produto não é igual a null
      productsContainer.innerHTML += productHTML;
    }
  });
}

// Chamada da função para renderizar os produtos quando a página for carregada
renderProducts(products);
