//Import the boatInventory function from fishingboat.js
const {  boatInventory } = require("./fishingBoat.js")

//Create a mongerInventory function
const mongerInventory = () =>{
    let monger = []
    //The function should loop through the boatInventory
    for(fish of todaysCatch){
        //The monger will buy 10 of each fish if they are available. 
        //create an if statement to check if there are less than 10 \
        //The monger will not buy fish that costs more than $7.50 
        if (fish.price <= 7.50 && fish.amount >= 10){
        let newFishAmount = 10
        fish.amount = newFishAmount
        monger.push(fish)
        }
    }
    return monger
}

//Create a chefsInventory function that has two parameters (chefsPrice, mongerInventory)
    const chefsInventory = (chefsPrice, mongerInventory) => {
        chefsArr = []
        //iterate mongerInventory 
        for(fish of mongerInventory){
            //Check the chefsPrice against the mongerInventory.price
            if(fish.price <= chefsPrice){
                //change the mongerInventory to -50% 
                fish.amount = fish.amount / 2
                chefsArr.push(fish)
            }
        }
        //The function should filter and return the array of fish with the chefsPrice
        return chefsArr
    }
// export the functions
module.exports = {
   mongerInventory, chefsInventory
}