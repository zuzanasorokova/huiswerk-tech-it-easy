// opdracht 1a
const tvName = inventory.map((product) => {
    return product.name;
});

console.log(tvName);

// opdracht 1b
const soldOut = inventory.filter((product) => {
    return product.sold === product.originalStock;
})

console.log(soldOut);

// opdracht 1c
const ambiLightTv = inventory.filter((product) => {
    return product.options.ambiLight === true;
})

console.log(ambiLightTv);

// opdracht 1d

function sortTv(array){
    return array.sort((a,b) => a.price - b.price )
};

console.log(sortTv(inventory));