//used api https://app.exchangerate-api.com/

const currencyFirstEl = document.getElementById("currency-first");

const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();
getCurrencyAbbr();

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("inout", updateRate);

function getCurrencyAbbr() {
    fetch(`https://v6.exchangerate-api.com/v6/510849452eab2c37f185dd5a/codes/`)
        .then((res) => res.json())
        .then((data) => {
            const listCodes = data.supported_codes;
            listCodes.forEach((element) => {
                currencyFirstEl.innerHTML += `<option value=${element[0]}>${element[0]}</option>`;
                currencySecondEl.innerHTML += `<option value=${element[0]}>${element[0]}</option>`;
            });
            //console.log(listCodes);
        });
}

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/510849452eab2c37f185dd5a/latest/${currencyFirstEl.value}`)
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[currencySecondEl.value];
            console.log(rate);
            exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
            worthSecondEl.value = worthFirstEl.value * rate.toFixed(2);
        });
}
