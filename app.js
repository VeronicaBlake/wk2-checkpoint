let feed = 0;

let clickUpgrades = {
    Double:{
        price: 5,
        quantity: 0,
        multiplier: 2
    },
    Triple:{
        price: 10,
        quantity: 0,
        multiplier: 3
    }
};

let autoUpgrades = {
    boxD:{
        price: 1000,
        quantity: 0,
        multiplier: 5
    },
    bakerD:{
        price: 13000,
        quantity: 0,
        multiplier: 5
    }
}

function buyDouble(){
    if (feed >= clickUpgrades.Double.price){
        feed -= 5
        update()
        clickUpgrades.Double.quantity ++
    }
    document.getElementById('double').innerText = clickUpgrades.Double.quantity
}

function buyTriple(){
    if (feed >= clickUpgrades.Triple.price){
        feed -= 10
        update()
        clickUpgrades.Triple.quantity ++
    }
    document.getElementById('triple').innerText = clickUpgrades.Double.quantity
}

function mine(){
    feed ++;
    update()
}

function update(){
    fed ++
    document.getElementById('fed').innerText = feed
}