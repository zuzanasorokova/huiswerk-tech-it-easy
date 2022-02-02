//Opdracht 1
function tvWithAmbiLight(array) {
    const ambiLight = array.filter((product) => {
        return product.options.ambiLight === true;
    })
   return console.log(ambiLight);
}
const ambiLightTvs = document.getElementById("button-ambilight-tvs");
ambiLightTvs.addEventListener("click", () => {tvWithAmbiLight(inventory);});


function sortPrice(array) {
   const sorting = array.sort((a,b) => a.price - b.price )
    return console.log(sorting);
}
const buttonPrice = document.getElementById('button-sort-price');
buttonPrice.addEventListener("click", () => {sortPrice(inventory);});


function soldOutTvs(array) {
    const tvName =  array.filter((product) => {
        return product.sold === product.originalStock;
    })
    return console.log(tvName);
}
const soldOutTv = document.getElementById("button-sold-out-tv");
soldOutTv.addEventListener("click", () => {soldOutTvs(inventory);});

//Opdracht 2
function tvWithAmbiLight2(array) {
    const ambiLight = array.filter((product) => {
        return product.options.ambiLight === true;
    })
    const generateTvWithAmbiLight = document.getElementById("generate-ambilight");
    const listOfTvWithAmbiLight = document.createElement("p");
    listOfTvWithAmbiLight.textContent = ambiLight;
    return generateTvWithAmbiLight.appendChild(listOfTvWithAmbiLight);
}

const ambiLightTvs2 = document.getElementById("button-ambilight-tvs2");
ambiLightTvs2.addEventListener("click", () => {tvWithAmbiLight2(inventory)});

function listOfSortedTvs(array) {
    const sorting = array.sort((a,b) => a.price - b.price );
    const generateSorting = document.getElementById("generate-sorting");
    const listOfSortedTvs = document.createElement("p");
    listOfSortedTvs.textContent = sorting;
    return generateSorting.appendChild(listOfSortedTvs);
}
const buttonPrice2 = document.getElementById('button-sort-price2');
buttonPrice2.addEventListener("click", () => {listOfSortedTvs(inventory)});


function soldOutTvs2(array) {
    const tvName =  array.filter((product) => {
        return product.sold === product.originalStock;
    })
    const generateSoldOutTvs = document.getElementById("generate-sold-out");
    const listOfSoldOutTvs = document.createElement("p");
    listOfSoldOutTvs.textContent = tvName;
    return generateSoldOutTvs.appendChild(listOfSoldOutTvs);
}
const soldOutTv2 = document.getElementById("button-sold-out-tv2");
soldOutTv2.addEventListener("click", () => {soldOutTvs2(inventory);});


