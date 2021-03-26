let feed = 0;
let modifiers = 1;
let autoMod = 1;

let clickUpgrades = {
    Double:{
        price: 1,
        quantity: 0,
        multiplier: 2
    },
};

let autoUpgrades = {
    box:{
        price: 5,
        quantity: 0,
        multiplier: 12
    },
    baker:{
        price: 10,
        quantity: 0,
        multiplier: 24
    }
}

function buyDouble(){
    if (feed >= clickUpgrades.Double.price){
        (feed -= clickUpgrades.Double.price)
        clickUpgrades.Double.quantity ++
        document.getElementById('double').innerText = clickUpgrades.Double.quantity
        modifiers = modifiers* clickUpgrades.Double.multiplier 
        clickUpgrades.Double.price = clickUpgrades.Double.price*modifiers
        update()
    }
}

function buyBox(){
    if (feed >= autoUpgrades.box.price){
        feed -= autoUpgrades.box.price
        autoUpgrades.box.quantity ++
        autoMod = modifiers*autoUpgrades.box.multiplier
        document.getElementById('box').innerText = autoUpgrades.box.quantity
        startInterval()
        update()
    }
}

function buyBaker(){
    if (feed >= autoUpgrades.baker.price){
        feed -= autoUpgrades.baker.price
        autoUpgrades.baker.quantity ++
        document.getElementById('baker').innerText = autoUpgrades.baker.quantity
        startInterval()
        update()
    }
}

function collectAutoUpgrades(){
    feed = autoMod + feed
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
    document.getElementById('fed').innerText = feed
}