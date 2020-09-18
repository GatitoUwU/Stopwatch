let time = 0
input.onButtonPressed(Button.A, function () {
    time = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(time)
})
basic.forever(function () {
    time += 1
    basic.pause(1000)
})
