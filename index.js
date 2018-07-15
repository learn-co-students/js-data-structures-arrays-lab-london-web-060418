const drivers = ["Milo", "Otis", "Garfield"];

// DESTRUCTIVE:

function destructivelyAppendDriver(name){
  drivers.push(name);
}
destructivelyAppendDriver("Ralph");

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}
destructivelyPrependDriver("Bob");

function destructivelyRemoveLastDriver() {
  drivers.pop(name);
}
destructivelyRemoveLastDriver()

function destructivelyRemoveFirstDriver() {
  drivers.shift(name);
}
destructivelyRemoveFirstDriver();

// NON-DESTRUCTIVE:

function appendDriver(name) {
  driversNew = [...drivers, name];
  return driversNew;
}
appendDriver("Broom");

function prependDriver(name) {
  driversNew = [name, ...drivers];
  return driversNew;
}
prependDriver("Arnold");

function removeLastDriver() {
  return drivers.slice(0, -1);
}
removeLastDriver();

function removeFirstDriver() {
  return drivers.slice(1);
}
removeFirstDriver();
