//Import function from fish monger module
const { chefsInventory } = require("./fishMonger.js")


//The function must be named fishMenu
//make a function that has a parameter of chefsPrice builds and HTML version of their daily menu.   
// Should take the chefsInventory function result as an argument
const fishMenu = (chefsInventory) => {
    let menu = ''
    //The function must loop thru the daily menu and interpolate it into HTML
    for(fish of chefsInventory){
        // Chef creates three meals per fish - a soup, a grilled dinner, and a sandwich
         menu += `\n <h1>Menu</h1>
<article class="menu">
    <h2>${fish.species}</h2>
    <section class="menu__item">${fish.species} Soup</section>
    <section class="menu__item">${fish.species} Sandwich</section>
    <section class="menu__item">Grilled ${fish.species}</section>
</article> \n`
    }
    return menu
}
//The function should return the generated HTML string. 

//export fishMenu
module.exports = {
   fishMenu
}