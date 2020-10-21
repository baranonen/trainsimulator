const debugMode = 1

var currentDistance = 0

var config = {
    type: Phaser.AUTO,
    width: 1100,
    height: 500,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
};

var game = new Phaser.Game(config);

var speed = 0

function brake() {
    if (!(speed < 0.5)) {
        speed += -0.5
    } else {
        speed = 0
    }
}

function power() {
    speed += 0.2
}

function debugLog(m) {
    if (debugMode === 1) {
        console.log(m)
    }
}

document.onkeydown = function(e) { 
    switch (e.keyCode) { 
        case 37: 
            debugLog('Left Key pressed!') 
            break
        case 38: 
            power()
            debugLog(speed)
            break
        case 39: 
            debugLog('Right Key pressed!') 
            break; 
        case 40: 
            brake()
            debugLog(speed)
            break
    }
}

function preload() {
    this.load.image('train', 'assets/train.png');
    this.load.image('taksim', 'assets/taksim.png');
    this.load.image('osmanbey', 'assets/osmanbey.jpg');
    this.load.image('tunnel', 'assets/tunnel.jpg');
}

var taksim

function create() {
    taksim = this.add.image(0, 235, 'taksim').setOrigin(0, 0);
    tunnel = this.add.image(4071, 235, 'tunnel').setOrigin(0, 0);
    osmanbey = this.add.image(8143, 235, 'osmanbey').setOrigin(0, 0);
    tunnel2 = this.add.image(12214, 235, 'tunnel').setOrigin(0, 0);
    taksim.setScale(0.5)
    let train = this.add.image(100, 360, 'train');
    train.setScale(0.2)
}

function update() {
    currentDistance += speed
    taksim.x += -1 * speed
    tunnel.x += -1 * speed
    osmanbey.x += -1 * speed
    tunnel2.x += -1 * speed
}