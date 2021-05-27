basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) <= 10) {
        cuteBot.moveTime(cuteBot.Direction.backward, 70, randint(0.1, 0.5))
    } else if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 2) {
        cuteBot.moveTime(cuteBot.Direction.backward, 50, randint(0.7, 1.3))
    } else {
        cuteBot.motors(50, 50)
    }
})
