
const ProdResults = document.querySelector(".products");
const FlowerApi = "https://bluenord.no/wp-json/wc/store/products";

console.log(FlowerApi);

async function getFlowerProducts() {
    try {
        const response = await fetch(FlowerApi);
        const jsonres = await response.json();
        console.log(jsonres);
        ProdResults.innerHTML = "";
        const Products = jsonres;

        for (let i = 0; i < Products.length; i++) {
            ProdResults.innerHTML += `<h2>Name: ${Products[i].name}</h2>`
        }
    }
    catch(error) {
        console.log(error);
        ProdResults.innerHTML ="Obs, something whent wrong!"
    }
}

getFlowerProducts();