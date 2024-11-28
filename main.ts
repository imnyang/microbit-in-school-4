let rsp = 0
input.onGesture(Gesture.Shake, function () {
    rsp = randint(0, 2)
    if (rsp == 0) {
        basic.showIcon(IconNames.Scissors)
    } else if (rsp == 1) {
    	basic.showIcon(IconNames.Diamond)
    } else if (rsp == 2) {
    	basic.showIcon(IconNames.Square)
    } else {
        basic.clearScreen()
    }
})

input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
})

basic.forever(function () {
    
})
