let feed = 0;
let modifiers = 1;

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
        (feed -= autoUpgrades.box.price)
        autoUpgrades.box.quantity ++
        document.getElementById('box').innerText = autoUpgrades.box.quantity
    }
}

function mine(){
    feed = modifiers + feed
    update()
}

function update(){
    fed ++
    document.getElementById('fed').innerText = feed
}