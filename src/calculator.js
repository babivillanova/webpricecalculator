// Grab the things I need in the DOM
const priceInput = document.querySelector("[name=price]");
const quartosInput = document.querySelector("[name=quartos]");
const quartos2Input = document.querySelector("[name=quartos2]");
const banhosInput = document.querySelector("[name=banhos]");

const cidadeInput = document.querySelector("[name=cidade]");
//total
const total = document.querySelector(".total");
//labels
const quartosLabel = document.querySelector(".quartos-label");
const quartos2Label = document.querySelector(".quartos2-label");
const banhosLabel = document.querySelector(".banhos-label");





// Write the function here
function calculateCost() {

    const cidadeInputValue = cidadeInput.value;

    if(cidadeInputValue == "São Paulo"){
            cidade = 2
        }else if(cidadeInputValue == "Florianópolis"){
            cidade = 2
        }else if(cidadeInputValue == "Belo Horizonte"){
            cidade = 3}
     
    const price = priceInput.value;
    const quartos = quartosInput.value;
    const quartos2 = quartos2Input.value;
    const banhos = banhosInput.value;
    
    const cost = (quartos2*4750) + (quartos*4750) + (banhos*6000) + (price*1) * (1*cidade);

    total.innerText = "R$" + cost.toFixed(2);
}





function updateQuartosLabel(_argument) {
    const quartos = quartosInput.value;
    quartosLabel.innerText = quartos;
}

function updateQuartos2Label(_argument) {
    const quartos2 = quartos2Input.value;
    quartos2Label.innerText = quartos2Input;
}

function updateBanhosLabel(_argument) {
    const banhos = banhosInput.value;
    banhosLabel.innerText = banhos;
}

//on first run
calculateCost();

// Add Events Listeners
priceInput.addEventListener("input", calculateCost);
quartosInput.addEventListener("input", updateQuartosLabel);
quartosInput.addEventListener("input", calculateCost);

quartos2Input.addEventListener("input", calculateCost);
quartos2Input.addEventListener("input", updateQuartos2Label);
banhosInput.addEventListener("input", updateBanhosLabel);
banhosInput.addEventListener("input", calculateCost);
cidadeInput.addEventListener("select", calculateCost); //precisa corrigir o eventListener

