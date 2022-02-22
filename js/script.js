let ListBtnTip = document.querySelectorAll(".btn-grid button");
let inputValue = document.getElementById("amount");
let inputPercent = document.getElementById("custom");
let inputPersonne = document.getElementById("person");
let nbpersonne = 0
let percentage = 0;
let TipAmount = 0;
let prix = 0;

ListBtnTip.forEach(e => {
    e.addEventListener('click', x => {
        percentage = e.innerHTML.replace("%", "")
        inputPercent.value = ""
        ListBtnTip.forEach(f => {if(f.classList.contains('active')){f.classList.remove('active')}})
        e.classList.add('active');
        TipAmount = calculateTip(prix, percentage)
    });
});

document.querySelector(".second-content button").addEventListener('click', x => {
    nbpersonne = 0
    percentage = 0;
    TipAmount = 0;
    prix = 0;
    document.querySelector(".second-content button").disabled = true;
    inputValue.value = "";
    inputPercent.value = "";
    inputPersonne.value = "";
    document.getElementById("txtTipPrice").innerText = "$0.00";
    document.getElementById("txtTotalPrice").innerText = "$0.00";
    ListBtnTip.forEach(f => {if(f.classList.contains('active')){f.classList.remove('active')}})
});

inputValue.addEventListener('keyup', x => {
    prix = inputValue.value;
    TipAmount = calculateTip(prix, percentage)
});

inputPercent.addEventListener('keyup', x => {
    ListBtnTip.forEach(f => {if(f.classList.contains('active')){f.classList.remove('active')}})
    percentage = inputPercent.value;
    TipAmount = calculateTip(prix, percentage)
});

inputPersonne.addEventListener('keyup', x => {
    nbpersonne = inputPersonne.value;
    TipAmount = calculateTip(prix, percentage)
});

function PrintPrice(tip, tipPerson){
    if(tipPerson && tip){
        document.getElementById("txtTipPrice").innerText = "$" + tip.toString();
        document.getElementById("txtTotalPrice").innerText = "$" + tipPerson.toString();
        if(tipPerson != 0 && tip != 0 && tipPerson != null && tip != null){
            document.querySelector(".second-content button").disabled = false;
        }else{
            document.querySelector(".second-content button").disabled = true;
        }
    }
}

function calculateTip(price, tip){
    let c_tip = tip * price / 100;
    let c_personn = Math.round(parseInt(price/nbpersonne) + c_tip / nbpersonne);
    PrintPrice(c_tip, c_personn)
    return c_tip;
}