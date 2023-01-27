let bugVisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    if (cakLandTouch.getTouch(cakLandTouch.TouchPin.P12)) {
        bugVisits += 1
        basic.showNumber(bugVisits)
    }
})
