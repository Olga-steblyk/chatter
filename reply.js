export function reply(message){
    let reply = `${message} to you to`;
    if (message.includes("Sushi" && "sushi")){
        reply = "Oh you mentioned sushi, would you like to order Sushi?";
    }
    if (message.toLowerCase().includes("Pizza") || message.toLowerCase().includes("Pizzas")){
        reply = "We heard you like pizza, would you want to order some pizza?";
        if (message.includes("Pizza is a good idea")){
            reply = `get a lovely large 3-topping pizza for $17 and pair it with 2 drinks for a total of <b>$20.00</b>`;
        }
    }
    if (message.toLowerCase().includes("Pasta")){
        reply = "ooo Pasta, very yummy, i think you should order that and what better places than to order it here";
        if (message.includes("Pasta?, Yes!")){
            reply = `treat yourself at a low pricy of <b>$9.95</b>`;
        }
    }
    return reply; 
    //`${message} to you too`;
}