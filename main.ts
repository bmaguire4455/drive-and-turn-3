input.onButtonPressed(Button.A, function () {
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 100)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
    basic.pause(1000)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 100)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
    basic.pause(200)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 100)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
    basic.pause(1000)
    motobit.enable(MotorPower.Off)
})
motobit.invert(Motor.Left, true)
motobit.invert(Motor.Right, true)
