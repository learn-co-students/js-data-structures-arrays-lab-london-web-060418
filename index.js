// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

const destructivelyAppendDriver = (name) => {
  drivers.push(name)
}


const destructivelyPrependDriver = (name) => {
  drivers.unshift(name)
}

const destructivelyRemoveLastDriver = (name) => {
  drivers.pop(name)
}


const destructivelyRemoveFirstDriver = (name) => {
  drivers.shift(name)
}

const appendDriver = (name) => {
  let newDrivers = drivers.slice()
  newDrivers.push(name)
  return newDrivers
}

const prependDriver = (name) => {
  let newDrivers = drivers.slice()
  newDrivers.unshift(name)
  return newDrivers
}

const removeFirstDriver = (name) => {
  let newDrivers = drivers.slice()
  newDrivers.shift(name)
  return newDrivers
}

const removeLastDriver = (name) => {
  let newDrivers = drivers.slice()
  newDrivers.pop(name)
  return newDrivers
}
