const numbers = [1,2,3,4,5];

// WAY 1
numbers.forEach(consoleItem);

function consoleItem(index, item,arr){
    console.log(index,item,arr)
}

// WAY 2
numbers.forEach((item,index, arr)=>{
    console.log(index,item,arr)
});

// PRACTICE

const letters = ['a', 'b', 'c', 'a', 'a','b','b', 'd','e'];
let count= {};
letters.forEach(letter=>{
    if(count[letter]){
        count[letter]++;
    } else{
        count[letter]=1;
    }
});

console.log(count)