//^giris

let dizelBtn = document.querySelector(".dizelBtn");
let benzinBtn = document.querySelector(".benzinBtn");
let premiumBtn = document.querySelector(".premiumBtn");
let confrim = document.querySelector(".confrim");

let headerSection = document.querySelector(".headerSection");

let qiymetInput = document.querySelector(".qiymetInput");
let litrInput = document.querySelector(".litrInput");

//^ SUAL

let meblegSual = document.querySelector(".meblegSual");
let litrSual = document.querySelector(".litrSual");

let confrimBtn = document.querySelector(".confrimBtn");
let mainSection = document.querySelector(".mainSection");

let dizel = 1;
let benzin = 1.1;
let premium = 1.6;





let currentFuelRate;
let intervalId;

function showMainSection(fuelRate) {
    currentFuelRate = fuelRate;
    headerSection.style.display = "none";
    mainSection.style.display = "block";
    qiymetInput.value = "";
    litrInput.value = "";
    meblegSual.value = "";
    litrSual.value = "";
}

function startIncrementing(targetAmount, targetLiters) {
    let currentAmount = 0;
    let currentLiters = 0;

    clearInterval(intervalId);

    intervalId = setInterval(function () {
        if (currentAmount < targetAmount || currentLiters < targetLiters) {
            if (currentAmount < targetAmount) currentAmount += 0.1;
            if (currentLiters < targetLiters) currentLiters += 0.1;

            qiymetInput.value = `${currentAmount.toFixed(2)} AZN`;
            litrInput.value = `${currentLiters.toFixed(2)} LITR`;
        } else {
            clearInterval(intervalId);
        }
    }, 20);
}

dizelBtn.addEventListener("click", function () {
    showMainSection(dizel);
});

benzinBtn.addEventListener("click", function () {
    showMainSection(benzin);
});

premiumBtn.addEventListener("click", function () {
    showMainSection(premium);
});

confrimBtn.addEventListener("click", function () {
    headerSection.style.display = "block";
    mainSection.style.display = "none";

    let meblegValue = parseFloat(meblegSual.value);
    let litrValue = parseFloat(litrSual.value);

    let targetAmount = 0;
    let targetLiters = 0;

    if (!isNaN(meblegValue)) {
        targetAmount = meblegValue;
        targetLiters = meblegValue / currentFuelRate;
    } else if (!isNaN(litrValue)) {
        targetLiters = litrValue;
        targetAmount = litrValue * currentFuelRate;
    } else {
        qiymetInput.value = "Invalid input";
        return;
    }

    startIncrementing(targetAmount, targetLiters);
});