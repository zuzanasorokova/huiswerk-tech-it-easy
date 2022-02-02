// opdracht 2a
let totalSoldTv = 0;
for(let i = 0; i < inventory.length; i++) {
    totalSoldTv = totalSoldTv + inventory[i].sold;
}

console.log(totalSoldTv);

// opdracht 2b
const soldTv = document.getElementById("soldTv");
const titleSoldTv = document.createElement('h3');
titleSoldTv.textContent = "Total verkochte TV's.";
const numberOfSoldTv = document.createElement('h4');
numberOfSoldTv.textContent = totalSoldTv;
numberOfSoldTv.setAttribute('id', 'green-number');
soldTv.appendChild(titleSoldTv);
soldTv.appendChild(numberOfSoldTv);

// opdracht 2c
let totalPurchasedTv = 0;
for(let i = 0; i < inventory.length; i++) {
    totalPurchasedTv = totalPurchasedTv + inventory[i].originalStock;
}

console.log(totalPurchasedTv);

// opdracht 2d
const purchasedTv = document.getElementById('purchasedTv');
const titlePurchasedTv = document.createElement('h3');
titlePurchasedTv.textContent = "Total ingekochte TV's.";
const numberOfPurchasedTv = document.createElement('h4');
numberOfPurchasedTv.textContent = totalPurchasedTv;
numberOfPurchasedTv.setAttribute('id', 'blue-number');
purchasedTv.appendChild(titlePurchasedTv).appendChild(numberOfPurchasedTv);

// opdracht 2e
const totalStillToSellTv = totalPurchasedTv - totalSoldTv
console.log(totalStillToSellTv);
const stillToSellTv = document.getElementById('stillToSell');
const titleStillToSellTv = document.createElement('h3')
titleStillToSellTv.textContent = "Nog te koop!";
const numberOfStillToSellTv = document.createElement('h4');
numberOfStillToSellTv.textContent = totalStillToSellTv;
numberOfStillToSellTv.setAttribute('id', 'red-number');
stillToSellTv.appendChild(titleStillToSellTv).appendChild(numberOfStillToSellTv);

