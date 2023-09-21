const numbers = [1,2,3,4,5];
const numbersDoubled = numbers.map(number=>{
   return number*2
})

console.log(numbersDoubled)

const products = [
    {
        name:'laptop',
        price:10000,
        count:5
    },
    {
        name:'mobile',
        price:8000,
        count:3
    },
    {
        name:'airpods',
        price:5000,
        count:6
    }
]
console.log(products)

const totalProductsValue = products.map((product)=> {
    return product.price * product.count;
})
console.log(totalProductsValue)

const totalProductsNameValue = products.map((product)=>({
    name:product.name,
    total:product.price* product.count
}))
console.log(totalProductsNameValue)