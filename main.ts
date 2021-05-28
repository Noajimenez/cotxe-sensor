let costat = 0
basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) > 1 && cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 30) {
        costat = randint(1, 2)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        if (costat == 1) {
            cuteBot.moveTime(cuteBot.Direction.right, -50, randint(0.1, 0.3))
        } else {
            cuteBot.moveTime(cuteBot.Direction.left, -50, randint(0.1, 0.3))
        }
    } else {
        cuteBot.motors(100, 100)
    }
})
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
})
