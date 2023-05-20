//create an array to store multiple fish objects, 
//Each fish object should have the following properties:
    //Species
    //Weight
    //Price (prices range from $3.00 to $10.00 per fish)
    //Amount (how many of this species were caught today)
    const fishingBoat = [
      { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
      { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
      { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
      { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19 },
      { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1 },
      { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 },
      { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5 },
      { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52 }
  ]
  
  //create a boatInventory function to returns the fish array
/*const boatInventory = (fishingBoat) => {
      let todaysCatch = []
      //add a for loop that iterates through the array in order to return the array. 
      for(fish of fishingBoat){
          todaysCatch.push(fish)
      }
      return todaysCatch
  }*/
  
  const boatInventory = () => {
        return fishingBoat
  }
  // module.export at end
  module.exports = {
     boatInventory
  }
