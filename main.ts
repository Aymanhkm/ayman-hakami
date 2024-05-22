input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    Grade = 45
    if (Grade >= 90) {
        basic.showString("Excellent")
    } else {
        if (Grade >= 50) {
            basic.showString("Pass")
        }
        basic.showString("Fail")
    }
})
input.onButtonPressed(Button.B, function () {
    Var += 1
    basic.showNumber(Var)
})
input.onGesture(Gesture.Shake, function () {
    for (let Var = 0; Var <= 10; Var++) {
        basic.showNumber(Var)
    }
})
let Var = 0
let Grade = 0
basic.showString("Hello!")
basic.forever(function () {
	
})
