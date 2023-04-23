let pageViews = document.querySelector(".firstPartHeading");
let priceAdjuster = document.querySelector(".priceAdjuster");
let slideSwitch = document.querySelector("#switch");
let price = document.querySelector(".price");
let priceDesktop = document.querySelector(".priceDesktop");
let greenLine = document.querySelector(".greenLine");


let priceValue = 0;
let moneyAmount = 16;
let discountedAmount = "";


priceAdjuster.addEventListener("input", priceAdjusterFun);
slideSwitch.addEventListener("click", slideSwitchFun);
priceAdjuster.addEventListener("input", assignValues);


function priceAdjusterFun() {
    priceValue = priceAdjuster.value;
}


function assignValues() {
    if (priceAdjuster.value == 0) {
        greenLine.style.width = "0%";
        pageViews.innerHTML = "10K Pageviews";
        moneyAmount = 8;
        slideSwitchFun();

    } else if (priceAdjuster.value == 1) {
        greenLine.style.width = "25%";
        pageViews.innerHTML = "50K Pageviews";
        moneyAmount = 12;
        slideSwitchFun();

    } else if (priceAdjuster.value == 2) {
        greenLine.style.width = "50%";
        pageViews.innerHTML = "100K Pageviews";
        moneyAmount = 16;
        slideSwitchFun();

    } else if (priceAdjuster.value == 3) {
        greenLine.style.width = "75%";
        pageViews.innerHTML = "500K Pageviews";
        moneyAmount = 24;
        slideSwitchFun();

    } else if (priceAdjuster.value == 4) {
        greenLine.style.width = "100%";
        pageViews.innerHTML = "1M Pageviews";
        moneyAmount = 36;
        slideSwitchFun();
    }
}


function slideSwitchFun() {
    if (slideSwitch.checked == true) {
        discountedAmount = (moneyAmount * 0.75);
        updateDiscountedPrice();
    } else {
        updatePrices();
    }
}


function updatePrices() {
    price.innerHTML = "$" + moneyAmount.toFixed(2);
    priceDesktop.innerHTML = "$" + moneyAmount.toFixed(2);
}


function updateDiscountedPrice() {
    price.innerHTML = "$" + discountedAmount.toFixed(2);
    priceDesktop.innerHTML = "$" +discountedAmount.toFixed(2);
}