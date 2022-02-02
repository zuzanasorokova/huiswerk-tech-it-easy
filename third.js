// Opdracht 3a
const listOfTv = document.getElementById("listOfTv");

inventory.map((product) => {
    const newListOfTv = document.createElement('li');
    newListOfTv.textContent = product.brand;
    return listOfTv.appendChild(newListOfTv);
});

// Opdracht 3b

function listOf(array) {
    const listOfTv = document.getElementById("listOfTv");

    array.map((product) => {
        const newListOfTv = document.createElement('li');
        newListOfTv.textContent = product.brand;
        return listOfTv.appendChild(newListOfTv);
    });
}

listOf(inventory);
