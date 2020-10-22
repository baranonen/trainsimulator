const debugMode = 1

var currentDistance = 0

var config = {
    type: Phaser.AUTO,
    width: 1100,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var speed = 0

function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function brake() {
    if (!(speed < 0.4)) {
        speed += -0.4
    } else {
        speed = 0
    }
}

function power() {
    if (kmspeed<50) {
        speed += 0.1
    } else {
        speed += scale(kmspeed, 100, 50, 0, 0.1)
    }
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

function findx(place) {
    x = place * 4071 - 3500
    return x
}

function preload() {
    this.load.image('tunnel', 'assets/tunnel.jpg');
    this.load.image('train', 'assets/train.png');
    this.load.image('taksim', 'assets/taksim.png');
    this.load.image('osmanbey', 'assets/osmanbey.jpg');
    this.load.image('sisli', 'assets/sisli.jpg');
    this.load.image('gayrettepe', 'assets/gayrettepe.png');
}

var taksim

function create() {
    taksim = this.add.image(findx(0), 235, 'taksim').setOrigin(0, 0);
    tunnel = this.add.image(findx(1), 235, 'tunnel').setOrigin(0, 0);
    tunnel2 = this.add.image(findx(2), 235, 'tunnel').setOrigin(0, 0);
    tunnel3 = this.add.image(findx(3), 235, 'tunnel').setOrigin(0, 0);
    tunnel4 = this.add.image(findx(4), 235, 'tunnel').setOrigin(0, 0);
    tunnel5 = this.add.image(findx(5), 235, 'tunnel').setOrigin(0, 0);
    osmanbey = this.add.image(findx(6), 235, 'osmanbey').setOrigin(0, 0);
    tunnel6 = this.add.image(findx(7), 235, 'tunnel').setOrigin(0, 0);
    tunnel7 = this.add.image(findx(8), 235, 'tunnel').setOrigin(0, 0);
    tunnel8 = this.add.image(findx(9), 235, 'tunnel').setOrigin(0, 0);
    tunnel9 = this.add.image(findx(10), 235, 'tunnel').setOrigin(0, 0);
    tunnel10 = this.add.image(findx(11), 235, 'tunnel').setOrigin(0, 0);
    sisli = this.add.image(findx(12), 235, 'sisli').setOrigin(0, 0);
    tunnel11 = this.add.image(findx(13), 235, 'tunnel').setOrigin(0, 0);
    tunnel12 = this.add.image(findx(14), 235, 'tunnel').setOrigin(0, 0);
    tunnel13 = this.add.image(findx(15), 235, 'tunnel').setOrigin(0, 0);
    tunnel14 = this.add.image(findx(16), 235, 'tunnel').setOrigin(0, 0);
    tunnel15 = this.add.image(findx(17), 235, 'tunnel').setOrigin(0, 0);
    gayrettepe = this.add.image(findx(18), 35, 'gayrettepe').setOrigin(0, 0);
    tunnel16 = this.add.image(findx(19), 235, 'tunnel').setOrigin(0, 0);
    tunnel17 = this.add.image(findx(20), 235, 'tunnel').setOrigin(0, 0);
    tunnel18 = this.add.image(findx(21), 235, 'tunnel').setOrigin(0, 0);
    tunnel19 = this.add.image(findx(22), 235, 'tunnel').setOrigin(0, 0);
    tunnel20 = this.add.image(findx(23), 235, 'tunnel').setOrigin(0, 0);
    taksim.setScale(0.5)
    let train = this.add.image(100, 368, 'train');
    train.setScale(0.2)
    speedometer = this.add.text(20, 510, Math.round(speed)+" km/h", { fontSize: "30px", fontFamily: '"--apple-system", "system-ui", Helvetica, "Arial", sans-serif', fill: "white" }).setOrigin(0, 0);
    maxspeed = this.add.text(20, 550, "Max speed: 80 km/h", { fontSize: "20px", fontFamily: '"--apple-system", "system-ui", Helvetica, "Arial", sans-serif', fill: "white" }).setOrigin(0, 0);
}

function update() {
    kmspeed = speed * 3.2
    speedometer.destroy()
    maxspeed.destroy()
    if (kmspeed<80) {
        maxspeed = this.add.text(20, 550, "Max: 80 km/h", { fontSize: "20px", fontFamily: '"--apple-system", "system-ui", Helvetica, "Arial", sans-serif', fill: "white" }).setOrigin(0, 0);
    } else {
        maxspeed = this.add.text(20, 550, "Max: 80 km/h", { fontSize: "20px", fontFamily: '"--apple-system", "system-ui", Helvetica, "Arial", sans-serif', fill: "red" }).setOrigin(0, 0);
    }
    speedometer = this.add.text(20, 510, Math.round(kmspeed)+" km/h", { fontSize: "30px", fontFamily: '"--apple-system", "system-ui", Helvetica, "Arial", sans-serif', fill: "white" }).setOrigin(0, 0);
    currentDistance += speed
    taksim.x += -1 * speed
    tunnel.x += -1 * speed
    tunnel2.x += -1 * speed
    tunnel3.x += -1 * speed
    tunnel4.x += -1 * speed
    osmanbey.x += -1 * speed
    tunnel5.x += -1 * speed
    tunnel6.x += -1 * speed
    tunnel7.x += -1 * speed
    tunnel8.x += -1 * speed
    sisli.x += -1 * speed
    tunnel9.x += -1 * speed
    tunnel10.x += -1 * speed
    tunnel11.x += -1 * speed
    tunnel12.x += -1 * speed
    gayrettepe.x += -1 * speed
    tunnel13.x += -1 * speed
    tunnel14.x += -1 * speed
    tunnel15.x += -1 * speed
    tunnel16.x += -1 * speed
}