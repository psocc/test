input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # . .
        # . . . .
        # # # . .
        # . . . .
        # . . . .
        `)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    70,
    SuperBit.enMotors.M2,
    70
    )
})
basic.showIcon(IconNames.Square)
basic.forever(function () {
	
})
