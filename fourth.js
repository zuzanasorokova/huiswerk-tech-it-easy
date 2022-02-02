let i = 0;
//Opdracht 4a
function tvGenerator(array) {
   return array.brand + " " + array.type + " " + "-" + " " + array.name;
}
console.log(tvGenerator(inventory[0]));
console.log(tvGenerator(inventory[6]));

//Opdracht 4b
let price = inventory[7].price;
function tvPrice1(price) {
    return "€" + price + ",-";
}

console.log(tvPrice1(price));

function tvPrice(array) {
    return "€" + array.price + ",-";
}

console.log(tvPrice(inventory[7]));

//Opdracht 4c
function tvSize(array) {
    let sizeInInch = array.availableSizes.map((inch) => {
            return " " + inch + " inch" + " " + "(" + Math.round(inch * 2.54) + " cm)"
        });
    return sizeInInch.join(" |");
}

console.log(tvSize(inventory[3]));


//Opdracht 4d
const generatorOfTv = document.createElement("p");
generatorOfTv.textContent = tvGenerator(inventory[4]);
const priceOfTv = document.createElement("p");
priceOfTv.textContent = tvPrice(inventory[4]);
const sizeOfTv = document.createElement("p");
sizeOfTv.textContent = tvSize(inventory[4]);
const descriptionTv = document.getElementById("description-tv");
descriptionTv.appendChild(generatorOfTv);
descriptionTv.appendChild(priceOfTv);
descriptionTv.appendChild(sizeOfTv);

//Opdracht 4e
function allTvGenerator(array) {
    for (let i = 0; i < array.length; i++) {
        const generatorOfTv = document.createElement("p");
        generatorOfTv.textContent = tvGenerator(array[i]);
        const priceOfTv = document.createElement("p");
        priceOfTv.textContent = tvPrice(array[i]);
        const sizeOfTv = document.createElement("p");
        sizeOfTv.textContent = tvSize(array[i]);
        const descriptionTv = document.getElementById("description-tv");
        descriptionTv.appendChild(generatorOfTv);
        descriptionTv.appendChild(priceOfTv);
        descriptionTv.appendChild(sizeOfTv);
    }
}

allTvGenerator(inventory);