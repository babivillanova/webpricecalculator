// Grab the things I need in the DOM
const priceInput = document.querySelector("[name=price]");
const quantityInput = document.querySelector("[name=quantity]");
const quartosInput = document.querySelector("[name=quartos]");
const banhosInput = document.querySelector("[name=banhos]");

const cidadeInput = document.querySelector("[name=cidade]");
//total
const total = document.querySelector(".total");
//labels
const quantityLabel = document.querySelector(".quantity-label");
const quartosLabel = document.querySelector(".quartos-label");
const banhosLabel = document.querySelector(".banhos-label");

cidadeInputValue = cidadeInput.value;

if(cidadeInputValue == "São Paulo"){
    cidade = 1
}else if(cidadeInputValue == "Florianópolis"){
    cidade = 2
}else if(cidadeInputValue == "Belo Horizonte"){
    cidade = 3}



// Write the function here
function calculateCost() {
     
    const price = priceInput.value;
    const quantity = quantityInput.value;
    const quartos = quartosInput.value;
    const banhos = banhosInput.value;
    
    const cost = quantity * (quartos*4750) + (banhos*6000);
    total.innerText = "R$" + cost.toFixed(2);

}





function updateQuantityLabel(_argument) {
    const quantity = quantityInput.value;
    quantityLabel.innerText = quantity;
}

function updateQuartosLabel(_argument) {
    const quartos = quartosInput.value;
    quartosLabel.innerText = quartos;
}

function updateBanhosLabel(_argument) {
    const banhos = banhosInput.value;
    banhosLabel.innerText = banhos;
}

//on first run
calculateCost();

// Add Events Listeners
priceInput.addEventListener("input", calculateCost);
quantityInput.addEventListener("input", calculateCost);
quantityInput.addEventListener("input", updateQuantityLabel);
quartosInput.addEventListener("input", updateQuartosLabel);
quartosInput.addEventListener("input", calculateCost);
banhosInput.addEventListener("input", updateBanhosLabel);
banhosInput.addEventListener("input", calculateCost);
cidadeInput.addEventListener("selectcidade", calculateCost);

