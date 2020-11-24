let list: number[] = []
basic.forever(function () {
    list = [0, -1, 1, -2, 2]
    for (let value of list) {
        led.plot(2 + value, 2)
        led.plot(2, 2 + value)
        basic.pause(200)
    }
    basic.pause(200)
    basic.clearScreen()
})
