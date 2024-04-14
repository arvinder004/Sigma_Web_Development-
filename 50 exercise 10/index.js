/*create a business name generator by combining list of adjectives, shop name and another word

Adjectives:
    Crazy
    Amazing
    Fire

Shop name:
    Engine
    Foods
    Garments

Another Word:
    Bros
    Limited
    Hub
*/

let adj = {
    0 : "Crazy",
    1 : "Amazing",
    2 : "Fire"
}

let shop_name = {
    0 : "Engine",
    1 : "Foods",
    2 : "Garments"
}

let another_word = {
    0 : "Bros",
    1 : "Limited", 
    2 : "Hub"
}

function getrandom(max){
    return Math.floor(Math.random()*max);
}
for(let i=0;i<81;i++){
console.log(adj[getrandom(3)],shop_name[getrandom(3)],another_word[getrandom(3)])
}
