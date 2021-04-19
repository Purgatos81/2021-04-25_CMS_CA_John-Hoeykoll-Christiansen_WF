
const ProdResults = document.querySelector(".products");
const FlowerApi = "http://bluenord.no/wp-json/wc/store";

console.log(FlowerApi);

async function getFlowerProducts() {
    try {
        const response = await fetch(FlowerApi);
        const jsonres = await response.json();
        console.log(jsonres);

         {

        }
    }
    catch(error) {
        console.log(error);
        ProdResults.innerHTML ="Obs, something whent wrong!"
    }
}

getFlowerProducts();