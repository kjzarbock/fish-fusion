const { fishMenu } = require("./restaurant.js")
const { boatInventory } = require("./fishingBoat.js")
const { mongerInventory, chefsInventory } = require("./fishMonger.js")
//import the chefsInventory

const dailyPriceLimit = 3.99

let todaysCatch = boatInventory()
let monger = mongerInventory(todaysCatch)
let chef = chefsInventory(dailyPriceLimit, monger)
let menuHTML = fishMenu(chef)
console.log(menuHTML)
