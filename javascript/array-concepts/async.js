function orderPizza(callback) {
    setTimeout(() =>{
        const pizza = 'chicken pizza';
        callback(pizza)
    },2000)
}

function pizzaReady(pizza){
    console.log(`Eat the ${pizza}`)
}

console.log('Order Pizza')
console.log('Ordering Pizza')
orderPizza(pizzaReady);
console.log(`Call Raji`)


function thing1(callback){
    console.log('thing1')
    callback();
}
 
function thing2(callback){
    console.log('thing2')
    callback();
    
}

function thing3(){
    console.log('thing3')
    
}

thing1(()=>{
    thing2(()=>{
        thing3()
    })
})