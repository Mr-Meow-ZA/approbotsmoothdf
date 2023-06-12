function slowServo3 (deg3: number) {
    if (deg3 > servoDeg3) {
        servoDeg3 += 1
        robotbit.Servo(robotbit.Servos.S3, servoDeg3)
        basic.pause(10)
    } else if (deg3 < servoDeg3) {
        servoDeg3 += -1
        robotbit.Servo(robotbit.Servos.S3, servoDeg3)
        basic.pause(10)
    } else {
    	
    }
}
function slowServo1 (deg1: number) {
    if (deg1 > servoDeg1) {
        servoDeg1 += 1
        robotbit.Servo(robotbit.Servos.S1, servoDeg1)
        basic.pause(10)
    } else if (deg1 < servoDeg1) {
        servoDeg1 += -1
        robotbit.Servo(robotbit.Servos.S1, servoDeg1)
        basic.pause(10)
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
	
})
function slowServo4 (deg4: number) {
    if (deg4 > servoDeg4) {
        servoDeg4 += 1
        robotbit.Servo(robotbit.Servos.S4, servoDeg4)
        basic.pause(10)
    } else if (deg4 < servoDeg4) {
        servoDeg4 += -1
        robotbit.Servo(robotbit.Servos.S4, servoDeg4)
        basic.pause(10)
    } else {
    	
    }
}
microbitApp.onButtonUpOption(ButtonOption.Up, function () {
    robotbit.Servo(robotbit.Servos.S4, 180)
})
microbitApp.onButtonOption(ButtonOption.Up, function () {
    robotbit.Servo(robotbit.Servos.S4, 75)
})
input.onButtonPressed(Button.B, function () {
	
})
function slowServo2 (deg2: number) {
    if (deg2 > servoDeg2) {
        servoDeg2 += 1
        robotbit.Servo(robotbit.Servos.S2, servoDeg2)
        basic.pause(10)
    } else if (deg2 < servoDeg2) {
        servoDeg2 += -1
        robotbit.Servo(robotbit.Servos.S2, servoDeg2)
        basic.pause(10)
    } else {
    	
    }
}
let servoDeg2 = 0
let servoDeg4 = 0
let servoDeg3 = 0
let servoDeg1 = 0
robotbit.Servo(robotbit.Servos.S1, 90)
robotbit.Servo(robotbit.Servos.S2, 90)
robotbit.Servo(robotbit.Servos.S3, 90)
robotbit.Servo(robotbit.Servos.S4, 90)
servoDeg1 = 90
basic.forever(function () {
    slowServo1(microbitApp.getSliderX())
    slowServo2(microbitApp.getSliderY())
    slowServo3(microbitApp.getSliderZ())
})
