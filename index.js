

function produceDrivingRange(driverRange) {
  return function(startingPoint, endingPoint) {
    var distance
    if (parseInt(startingPoint,10) > parseInt(endingPoint,10)) {
      distance = parseInt(startingPoint,10) - parseInt(endingPoint,10)
    } else {
      distance = parseInt(endingPoint,10) - parseInt(startingPoint,10)
    }

    if (driverRange > distance) {
      return `within range by ${driverRange - distance}`
    }
    else {
      return `${distance - driverRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercentage) {
  return function(fare) {
    return fare * tipPercentage
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
