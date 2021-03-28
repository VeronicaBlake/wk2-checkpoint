let feed = 0;
let modifiers = 1;
let boxMod = 1;
let bakerMod = 1;

let clickUpgrades = {
    Double:{
        price: 20,
        quantity: 0,
        multiplier: 2
    },
    triple:{
        price: 30,
        quantity: 0,
        multiplier: 3
    },
};

let autoUpgrades = {
    box:{
        price: 100,
        quantity: 0,
        multiplier: 12
    },
    baker:{
        price: 500,
        quantity: 0,
        multiplier: 13
    }
}

function buyDouble(){
    if (feed >= clickUpgrades.Double.price){
        (feed -= clickUpgrades.Double.price)
        clickUpgrades.Double.quantity ++
        modifiers = modifiers* clickUpgrades.Double.multiplier 
        document.getElementById('double').innerText = clickUpgrades.Double.quantity
        clickUpgrades.Double.price = clickUpgrades.Double.price*modifiers
        document.getElementById('double-cookies').innerText = modifiers
        update()
    }
}

function buyTriple(){
    if (feed >= clickUpgrades.triple.price){
        (feed -= clickUpgrades.triple.price)
        clickUpgrades.triple.quantity ++
        modifiers = modifiers* clickUpgrades.triple.multiplier 
        document.getElementById('triple').innerText = clickUpgrades.triple.quantity
        clickUpgrades.triple.price = clickUpgrades.triple.price*modifiers
        document.getElementById('triple-cookies').innerText = modifiers
        update()
    }
}


function buyBox(){
    if (feed >= autoUpgrades.box.price){
        feed -= autoUpgrades.box.price
        autoUpgrades.box.quantity ++
        boxMod = boxMod*autoUpgrades.box.multiplier
        document.getElementById('box').innerText = autoUpgrades.box.quantity
        autoUpgrades.box.price = autoUpgrades.box.price*boxMod
        document.getElementById('box-cookies').innerText = boxMod
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
        autoUpgrades.baker.price = autoUpgrades.baker.price*bakerMod
        document.getElementById('baker-bonus').innerText = bakerMod
        startIntervalBaker()
        update()
    }
}

// function popPrice{
//     document.getElementById('baker-price').innerText = autoUpgrades.baker.price
//     document.getElementById('box-price').innerText = autoUpgrades.box.price
//     document.getElementById('double-price').innerText = clickUpgrades.Double.price
// }

function collectAutoUpgrades(){
    feed = boxMod + feed 
    update()
}

function collectAutoUpgradesBaker(){
    feed = bakerMod + feed 
    update()
}

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

function startIntervalBaker() {
    collectionInterval = setInterval(collectAutoUpgradesBaker, 5000);
}

function mine(){
    feed = modifiers + feed
    update()
}

function update(){
    document.getElementById('feed').innerText = feed
}