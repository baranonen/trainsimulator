const debugMode = 0

var currentDistance = 0

var config = {
    type: Phaser.AUTO,
    width: 1100,
    height: 350,
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

var doorstate = "closed"

function doors() {
    debugLog("start")
    if (speed === 0) {
        if (doorstate === "closed") {
            document.getElementById("doorbtn").innerHTML = '<i class="fas fa-angle-right"></i><i class="fas fa-angle-left"></i>'
            leftdoor.x = 99
            rightdoor.x = 249
            doorstate = "open"
            debugLog("opened")
        } else {
            document.getElementById("doorbtn").innerHTML = '<i class="fas fa-angle-left"></i><i class="fas fa-angle-right"></i>'
            leftdoor.x = 149
            rightdoor.x = 199
            doorstate = "closed"
            debugLog("closed")
        }
    }
}

function atpbrake() {
    speed += -0.1
}

function power() {
    if (doorstate == "closed") {
        if (kmspeed<50) {
            speed += 0.02
        } else {
            speed += scale(kmspeed, 100, 50, 0, 0.02)
        }
    }
}

currentpower = 0

function accelerate() {
    currentpower = 1
}

function decelerate() {
    currentpower = -1
}

function neutral() {
    currentpower = 0
}


function debugLog(m) {
    if (debugMode === 1) {
        console.log(m)
    }
}

document.onkeyup = function() {
    neutral()
}

document.onkeydown = function(e) { 
    switch (e.keyCode) { 
        case 37: 
            debugLog('Left Key pressed!') 
            break
        case 38: 
            accelerate()
            break
        case 39: 
            debugLog('Right Key pressed!') 
            break
        case 40: 
            brake()
            debugLog(speed)
            break
        case 81:
            accelerate()
            break
        case 65: 
            brake()
            debugLog(speed)
            break 
        case 87:
            accelerate()
            break  
        case 83: 
            brake()
            debugLog(speed)
            break
        case 13:
            doors()
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
    this.load.image('door', 'assets/door.png');
    this.load.image('taksim', 'assets/taksim.png');
    this.load.image('osmanbey', 'assets/osmanbey.jpg');
    this.load.image('sisli', 'assets/sisli.jpg');
    this.load.image('gayrettepe', 'assets/gayrettepe.png');
    this.load.image('levent', 'assets/levent.png');
    this.load.image('levent4', 'assets/4levent.jpg');
}

function create() {
    speedprot = 0
    maxkmspeed = 80
    taksim = this.add.image(findx(0), 0, 'taksim').setOrigin(0, 0);
    tunnel = this.add.image(findx(1), 0, 'tunnel').setOrigin(0, 0);
    tunnel2 = this.add.image(findx(2), 0, 'tunnel').setOrigin(0, 0);
    tunnel3 = this.add.image(findx(3), 0, 'tunnel').setOrigin(0, 0);
    tunnel4 = this.add.image(findx(4), 0, 'tunnel').setOrigin(0, 0);
    tunnel5 = this.add.image(findx(5), 0, 'tunnel').setOrigin(0, 0);
    osmanbey = this.add.image(findx(6), 0, 'osmanbey').setOrigin(0, 0);
    tunnel6 = this.add.image(findx(7), 0, 'tunnel').setOrigin(0, 0);
    tunnel7 = this.add.image(findx(8), 0, 'tunnel').setOrigin(0, 0);
    tunnel8 = this.add.image(findx(9), 0, 'tunnel').setOrigin(0, 0);
    tunnel9 = this.add.image(findx(10), 0, 'tunnel').setOrigin(0, 0);
    tunnel10 = this.add.image(findx(11), 0, 'tunnel').setOrigin(0, 0);
    sisli = this.add.image(findx(12), 0, 'sisli').setOrigin(0, 0);
    tunnel11 = this.add.image(findx(13), 0, 'tunnel').setOrigin(0, 0);
    tunnel12 = this.add.image(findx(14), 0, 'tunnel').setOrigin(0, 0);
    tunnel13 = this.add.image(findx(15), 0, 'tunnel').setOrigin(0, 0);
    tunnel14 = this.add.image(findx(16), 0, 'tunnel').setOrigin(0, 0);
    tunnel15 = this.add.image(findx(17), 0, 'tunnel').setOrigin(0, 0);
    gayrettepe = this.add.image(findx(18), -200, 'gayrettepe').setOrigin(0, 0);
    tunnel16 = this.add.image(findx(19), 0, 'tunnel').setOrigin(0, 0);
    tunnel17 = this.add.image(findx(20), 0, 'tunnel').setOrigin(0, 0);
    tunnel18 = this.add.image(findx(21), 0, 'tunnel').setOrigin(0, 0);
    tunnel19 = this.add.image(findx(22), 0, 'tunnel').setOrigin(0, 0);
    tunnel20 = this.add.image(findx(23), 0, 'tunnel').setOrigin(0, 0);
    levent = this.add.image(findx(24), -200, 'levent').setOrigin(0, 0);
    tunnel21 = this.add.image(findx(25), 0, 'tunnel').setOrigin(0, 0);
    tunnel22 = this.add.image(findx(26), 0, 'tunnel').setOrigin(0, 0);
    tunnel23 = this.add.image(findx(27), 0, 'tunnel').setOrigin(0, 0);
    tunnel24 = this.add.image(findx(28), 0, 'tunnel').setOrigin(0, 0);
    tunnel25 = this.add.image(findx(29), 0, 'tunnel').setOrigin(0, 0);
    levent4 = this.add.image(findx(30), 0, 'levent4').setOrigin(0, 0);
    tunnel26 = this.add.image(findx(31), 0, 'tunnel').setOrigin(0, 0);
    taksim.setScale(0.5)
    leftdoor = this.add.image(149, 64, 'door').setOrigin(0, 0);
    rightdoor = this.add.image(199, 64, 'door').setOrigin(0, 0);
    train = this.add.image(100, 133, 'train');
    train.setScale(0.2)
    leftdoor.setScale(0.2)
    rightdoor.setScale(0.2)
    speedometer = this.add.text(20, 275, "0 km/h", { fontSize: "30px", fontFamily: 'Helvetica, "Arial", sans-serif', fill: "white" }).setOrigin(0, 0);
    maxspeed = this.add.text(20, 550, "Max speed: 80 km/h", { fontSize: "20px", fontFamily: 'Helvetica, "Arial", sans-serif', fill: "white" }).setOrigin(0, 0);
    modeint = this.add.text(200, 275, "ATP", { fontSize: "30px", fontFamily: 'Helvetica, "Arial", sans-serif', fill: "black" }).setOrigin(0, 0);
    //currentDistanceInd = this.add.text(1000, 275, "0 km", { fontSize: "30px", fontFamily: 'Helvetica, "Arial", sans-serif', fill: "white" }).setOrigin(0, 0);
}

function update() {
    kmspeed = Math.round(speed * 3.2)
    currentDistance += speed
    //kmCurrentDistance = Math.round(currentDistance) / 3.2
    speedometer.destroy()
    maxspeed.destroy()
    //currentDistanceInd.destroy()
    modeint.destroy()
    if (currentpower == 1) {
        power()
    }
    if (currentpower == -1) {
        if (!(speed < 0.05)) {
            speed += -0.05
        } else {
            speed = 0
        }
    }
    if (speedprot === 1) {
        speedometer = this.add.text(20, 275, kmspeed+" km/h", { fontSize: "30px", fontFamily: 'Helvetica, "Arial", sans-serif', fill: "red" }).setOrigin(0, 0);
        modeint = this.add.text(200, 275, "ATP EB", { fontSize: "30px", fontFamily: 'Helvetica, "Arial", sans-serif', fill: "red" }).setOrigin(0, 0);
        if (kmspeed > maxkmspeed) {
            atpbrake()
        } else {
            speedprot = 0
        }
    } else if (kmspeed < maxkmspeed) {
        speedometer = this.add.text(20, 275, kmspeed+" km/h", { fontSize: "30px", fontFamily: 'Helvetica, "Arial", sans-serif', fill: "white" }).setOrigin(0, 0);
    } else if (kmspeed < maxkmspeed + 11) {
        speedometer = this.add.text(20, 275, kmspeed+" km/h", { fontSize: "30px", fontFamily: 'Helvetica, "Arial", sans-serif', fill: "yellow" }).setOrigin(0, 0);
    } else if (kmspeed >= maxkmspeed + 10) {
        debugLog("overspeed")
        speedprot = 1
    }
    maxspeed = this.add.text(20, 315, "Max: 80 km/h", { fontSize: "20px", fontFamily: 'Helvetica, "Arial", sans-serif', fill: "white" }).setOrigin(0, 0);
    //currentDistanceInd = this.add.text(1000, 275, kmCurrentDistance + " km", { fontSize: "30px", fontFamily: 'Helvetica, "Arial", sans-serif', fill: "white" }).setOrigin(0, 0);
    taksim.x += -1 * speed
    tunnel.x += -1 * speed
    tunnel2.x += -1 * speed
    tunnel3.x += -1 * speed
    tunnel4.x += -1 * speed
    tunnel5.x += -1 * speed
    osmanbey.x += -1 * speed
    tunnel6.x += -1 * speed
    tunnel7.x += -1 * speed
    tunnel8.x += -1 * speed
    tunnel9.x += -1 * speed
    tunnel10.x += -1 * speed
    sisli.x += -1 * speed
    tunnel11.x += -1 * speed
    tunnel12.x += -1 * speed
    tunnel13.x += -1 * speed
    tunnel14.x += -1 * speed
    tunnel15.x += -1 * speed
    gayrettepe.x += -1 * speed
    tunnel16.x += -1 * speed
    tunnel17.x += -1 * speed
    tunnel18.x += -1 * speed
    tunnel19.x += -1 * speed
    tunnel20.x += -1 * speed
    levent.x += -1 * speed
    tunnel21.x += -1 * speed
    tunnel22.x += -1 * speed
    tunnel23.x += -1 * speed
    tunnel24.x += -1 * speed
    tunnel25.x += -1 * speed
    levent4.x += -1 * speed
    tunnel26.x += -1 * speed
}