const currencyFirst = document.getElementById("Currency-first");
const worthFirst = document.getElementById("worth-first");

const currencySecond = document.getElementById("Currency-second");
const worthSecond = document.getElementById("worth-second");

const exchangeRate = document.getElementById("exchange-rate");

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/3632e05b5d2f44b8c16b1002/latest/${currencyFirst.value}`)
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[currencySecond.value];

            exchangeRate.innerText =
                `1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`;

            worthSecond.value = (worthFirst.value * rate).toFixed(2);
        });
}

currencyFirst.addEventListener("change", updateRate);
currencySecond.addEventListener("change", updateRate);
worthFirst.addEventListener("input", updateRate);

updateRate();





              