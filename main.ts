function slowServo3 (deg3: number) {
    if (deg3 > servoDeg3) {
        servoDeg3 += 1
        robotbit.Servo(robotbit.Servos.S3, servoDeg3)
    } else if (deg3 < servoDeg3) {
        servoDeg3 += -1
        robotbit.Servo(robotbit.Servos.S3, servoDeg3)
    } else {
    	
    }
}
function slowServo4 (deg4: number) {
    if (deg4 > servoDeg4) {
        servoDeg4 += 1
        robotbit.Servo(robotbit.Servos.S4, servoDeg4)
    } else if (deg4 < servoDeg4) {
        servoDeg4 += -1
        robotbit.Servo(robotbit.Servos.S4, servoDeg4)
    } else {
    	
    }
}
microbitApp.onButtonUpOption(ButtonOption.Up, function () {
    robotbit.Servo(robotbit.Servos.S5, 180)
})
microbitApp.onButtonOption(ButtonOption.Up, function () {
    robotbit.Servo(robotbit.Servos.S5, 75)
})
function slowServo2 (deg2: number) {
    if (deg2 > servoDeg2) {
        servoDeg2 += 1
        robotbit.Servo(robotbit.Servos.S2, servoDeg2)
    } else if (deg2 < servoDeg2) {
        servoDeg2 += -1
        robotbit.Servo(robotbit.Servos.S2, servoDeg2)
    } else {
    	
    }
}
let servoDeg4 = 0
let servoDeg3 = 0
let servoDeg2 = 0
robotbit.Servo(robotbit.Servos.S2, 0)
robotbit.Servo(robotbit.Servos.S3, 0)
robotbit.Servo(robotbit.Servos.S4, 0)
servoDeg2 = 0
servoDeg3 = 0
servoDeg4 = 0
basic.forever(function () {
    slowServo2(microbitApp.getSliderX())
    slowServo3(microbitApp.getSliderY())
    slowServo4(microbitApp.getSliderZ())
})
