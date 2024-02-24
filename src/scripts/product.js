const products = [
    {name: "Adidas Shoes", price: 500, id: 1, img: "/images/green.png", sizes: {36: 2, 38: 0, 39: 1}},
    {name: "Sting Energy Drink", price: 120, id: 2, quantity: 1, img: "/images/green.png",},
    {name: "Umbrella", price: 500, id: 3, quantity: 1, img: "/images/green.png",},
    {name: "Cat Food", price: 900, id: 4, quantity: 1, img: "/images/green.png",},
    {name: "T Shirt", price: 300, id: 5, quantity: 1, img: "/images/green.png" },
    {name: "Book", price: 100, id: 6, quantity: 1, img: "/images/green.png" },
    {name: "T Shirt", price: 300, id: 7, quantity: 1, img: "/images/green.png" },
    {name: "Book", price: 100, id: 8, quantity: 0, img: "/images/green.png" },
];

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
    updateHtmlWithProduct(product)
  } else {
    console.log("Produto não encontrado.");
  }
}

function updateHtmlWithProduct(product) {
  if (product) {
    // Atualiza o HTML com as propriedades do produto
    document.getElementById("productName").innerText = product.name;
    document.getElementById("productPrice").innerText = `Price: $${product.price}`;
    document.getElementById("productImage").src = product.img;
  } else {
    console.log("Produto não encontrado.");
  }
}

validarUrl(); // Chama a função que valida a URL ao carregar a página

function destacarLabels() {
    products.forEach(product => {
        product.sizes && Object.entries(product.sizes).forEach(([size, quantity]) => {
            const label = document.querySelector(`.sizes label[data-size="${size}"]`);
            if (label) {
                if (quantity > 0) {
                    label.classList.add('yellow');
                    label.style.cursor = 'pointer'; // Mudar cursor para pointer quando a quantidade for maior que 0
                } else {
                    label.classList.add('gray');
                    label.style.cursor = 'not-allowed'; // Mudar cursor para not-allowed quando a quantidade for 0
                }
            }
        });
    });
}

// Chame esta função depois que a página carregar para destacar as labels corretamente
destacarLabels();