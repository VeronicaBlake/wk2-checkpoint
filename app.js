let feed = 0;
let modifiers = 1;
let boxMod = 1;
let bakerMod = 1;

let clickUpgrades = {
    Double:{
        price: 2,
        quantity: 0,
        multiplier: 2
    },
};

let autoUpgrades = {
    box:{
        price: 2,
        quantity: 0,
        multiplier: 2
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
        document.getElementById('double-cookies').innerText = modifiers
        update()
    }
}


function buyBox(){
    if (feed >= autoUpgrades.box.price){
        feed -= autoUpgrades.box.price
        autoUpgrades.box.quantity ++
        autoUpgrades.box.price = autoUpgrades.box.price*boxMod
        boxMod = boxMod*autoUpgrades.box.multiplier
        document.getElementById('box').innerText = autoUpgrades.box.quantity
        document.getElementById('box-cookies').innerText = autoUpgrades.box.multiplier
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
    feed = boxMod + feed 
    update()
}

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

function mine(){
    feed = modifiers + feed
    update()
}

function update(){
    document.getElementById('feed').innerText = feed
}