let LED = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        if (LED) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            LED = 0
            basic.pause(500)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 1)
            LED = 1
            basic.pause(500)
        }
    }
})
