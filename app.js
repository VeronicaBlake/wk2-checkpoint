let feed = 0;
let modifiers = 1;
let plusMod = 0;
let boxMod = 1;
let bakerMod = 1;

let clickUpgrades = {
    Double:{
        price: 2,
        quantity: 0,
        multiplier: 2
    },
    plusMod:{
        price: 2,
        quantity: 0,
        multiplier: 2
    }
};

let autoUpgrades = {
    box:{
        price: 5,
        quantity: 0,
        multiplier: 5
    },
    baker:{
        price: 10,
        quantity: 0,
        multiplier: 10
    }
}

function buyDouble(){
    if (feed >= clickUpgrades.Double.price){
        (feed -= clickUpgrades.Double.price)
        clickUpgrades.Double.quantity ++
        modifiers = modifiers* clickUpgrades.Double.multiplier 
        document.getElementById('double').innerText = clickUpgrades.Double.quantity
        clickUpgrades.Double.price = clickUpgrades.Double.price*modifiers
        update()
    }
}

function plusOne(){
    if (feed >= clickUpgrades.plusMod.price){
        (feed -= clickUpgrades.plusMod.price)
        clickUpgrades.plusMod.quantity ++
        plusMod = plusMod+clickUpgrades.plusMod.quantity 
        document.getElementById('plusOne').innerText = clickUpgrades.plusMod.quantity
        clickUpgrades.plusMod.price = clickUpgrades.plusMod.price*plusMod
        update()
    }
}

function buyBox(){
    if (feed >= autoUpgrades.box.price){
        feed -= autoUpgrades.box.price
        autoUpgrades.box.quantity ++
        boxMod = boxMod*autoUpgrades.box.multiplier
        document.getElementById('box').innerText = autoUpgrades.box.quantity
        startInterval()
        update()
    }
}

function buyBaker(){
    if (feed >= autoUpgrades.baker.price){
        feed -= autoUpgrades.baker.price
        autoUpgrades.baker.quantity ++
        bakerMod = bakerMod*autoUpgrades.baker.multiplier
        document.getElementById('baker').innerText = autoUpgrades.baker.quantity
        startInterval()
        update()
    }
}

function collectAutoUpgrades(){
    feed = boxMod + feed + bakerMod
    update()
}

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

function mine(){
    feed = modifiers + feed + plusMod
    update()
}

function update(){
    document.getElementById('feed').innerText = feed
}