const products = [
  { name: "Adidas Shoes", price: 500.00, id: 1, img: "/images/green.png", sizes: { 36: 2, 38: 0, 39: 1 } },
  { name: "Sting Energy Drink", price: 120.00, id: 2, quantity: 1, img: "/images/green.png", },
  { name: "Umbrella", price: 500.00, id: 3, quantity: 1, img: "/images/green.png", },
  { name: "Cat Food", price: 900.00, id: 4, quantity: 1, img: "/images/green.png", },
  { name: "T Shirt", price: 300.00, id: 5, quantity: 1, img: "/images/green.png" },
  { name: "Book", price: 100.00, id: 6, quantity: 1, img: "/images/green.png" },
  { name: "T Shirt", price: 300.00, id: 7, quantity: 1, img: "/images/green.png" },
  { name: "Book", price: 100.00, id: 8, quantity: 0, img: "/images/green.png" },
];

import db from "../scripts/database.js";

async function getProductFromDB() {
  db.query()
}

getProductFromDB()

function getProductByURL(url) {
  // Decodifica o URL para lidar com espaços codificados como '%20'
  const decodedUrl = decodeURIComponent(url);

  // Extrai o nome do produto do URL
  const productNameWithExtension = decodedUrl.split("/").pop().split(".")[0]; // Obtém "produto-Adidas Shoes"
  const productName = productNameWithExtension.split("-").slice(1).join(" "); // Remove "produto-" e obtém "Adidas Shoes"

  // Procura o produto na lista
  const product = products.find((prod) => prod.name === productName);
  return product;
}

function validarUrl() {
  const url = window.location.href;
  const product = getProductByURL(url);
  if (product) {
    console.log("Produto encontrado:", product);
    updateHtmlWithProduct(product);
  } else {
    console.log("Produto não encontrado.");
  }
}

function updateHtmlWithProduct(product) {
  if (product) {
    // Atualiza o HTML com as propriedades do produto
    document.getElementById("productName").innerText = product.name;
    const formattedPrice = product.price.toFixed(2);
    document.getElementById("productPrice").innerText = `${formattedPrice}€`;
    document.getElementById("productImage").src = product.img;
  } else {
    console.log("Produto não encontrado.");
  }
}

validarUrl(); // Chama a função que valida a URL ao carregar a página

function destacarLabels() {
  // Remove a classe 'clicked' de todas as labels
  document.querySelectorAll(".sizes label").forEach((label) => {
    label.classList.remove("clicked");
  });

  products.forEach((product) => {
    product.sizes && Object.entries(product.sizes).forEach(([size, quantity]) => {
      const label = document.querySelector(`.sizes label[data-size="${size}"]`);
      if (label) {
        if (quantity > 0) {
          label.style.cursor = "pointer"; // Mudar cursor para pointer quando a quantidade for maior que 0
          label.addEventListener("click", () => {
            // Remove a classe 'clicked' de todas as labels
            document.querySelectorAll(".sizes label").forEach((label) => {
              label.classList.remove("clicked");
            });
            // Adiciona a classe 'clicked' apenas à label clicada
            label.classList.add("clicked");
          });
        } else {
          label.style.opacity = "0.5";
          label.style.cursor = "not-allowed"; // Mudar cursor para not-allowed quando a quantidade for 0
        }
      }
    });
  });
}

function defaultSize() {
  // Mapeia todos os tamanhos disponíveis
  const availableSizes = products.flatMap((product) =>
    Object.keys(product.sizes || {})
      .map((size) => parseInt(size))
      .filter((size) => product.sizes[size] > 0)
  );

  // Verifica se há tamanhos disponíveis
  if (availableSizes.length > 0) {
    // Encontra o menor tamanho disponível
    const smallestSize = Math.min(...availableSizes);

    // Itera sobre os tamanhos disponíveis
    for (let i = 0; i < availableSizes.length; i++) {
      // Verifica se o tamanho atual é igual ao menor tamanho
      if (availableSizes[i] === smallestSize) {
        // Encontra o label correspondente ao menor tamanho
        const label = document.querySelector(`.sizes label[data-size="${smallestSize}"]`);

        // Verifica se o label foi encontrado
        if (label) {
          // Adiciona a classe "clicked" ao label
          label.classList.add("clicked");
        }
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  defaultSize();
});

destacarLabels();