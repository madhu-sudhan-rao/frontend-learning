const users = [{
    id: 2,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    age: 34
},
{
    id: 3,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    age: 23
},
{
    id: 4,
    name: "demon slayer",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    age: 21
}
];
// console.log("🚀 ~ file: task-script.js:32 ~ users:", users)
const newUser = {
    id: 1,
    name: "John doe",
    username: "mrjohn",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    age: 34
}
// console.log("🚀 ~ file: task-script.js:42 ~ newUser:", newUser)

/*
Q1.Write a function to add a new record at the end of array users using spread operator,
    functions: addLast(users, temp)
*/
function addLast(users, newUser){
    users.push(...[newUser])
}
addLast(users,newUser)
console.log("~ users:", users)

/*
Q2.Write a function to add a new record at the begining of array users using spread operator,
functions: addFirst(users, temp)
*/
function addFirst(users,newUser){
    users.unshift(...[newUser])
}
addFirst(users,newUser)
console.log("~ users:", users)
/*
Q3. Write a  function to display all records only 3 fields id,name,username.
functions : display(users)
HINT : map
*/
function display(users){
    return users.map(user =>({
        id:user.id,
        name:user.name,
        username:user.username
    }))
}
console.log(display(users))

// Q4. Write a  function which will display all records  with name ==='demon'
// function Name ---> findNameEquals(users)
// HINT : Use filter.
const records = findNameEquals(users)
console.log("~ records with name demon:", records)
function findNameEquals(users){
    let word = 'demon';
    return users.filter(user=>user.name.includes(word))
}

// Q5. Write a  function which will display all the records starting with name 'B' or any character passed as parameter.
// function Name ---> findSpecificStartChar(users,'B')
// HINT : Use filter and string functions.
const recordsWithCharAtStart = findSpecificStartChar(users,'J')
console.log("~ recordsWithCharAtStart:", recordsWithCharAtStart)
function findSpecificStartChar(users,startChar){
    return users.filter(
        user => user.name.startsWith(startChar)
    )
}



// Q6. Write a  function which will display sum of all ages.
// function Name ---> findSumAges(users) .
// HINT : Use reduce functions.
const sumOfAges = findSumAges(users)
console.log("~ sumOfAges:", sumOfAges)
function findSumAges(users){
    return users.reduce((acc,user) => user.age+acc,0)
}

// Q7. Write a  function which will display all the records with only name & ages.
// function Name ---> findAll(users)
// HINT : Use map.
const allRecords = findAll(users);
console.log("~ allRecords:", allRecords)
function findAll(users){
    return users.map((user)=>({
        name:user.name,
        age:user.age
    }))
}


// Q8. Write a function to display sum of all ages of records having name starting with 'J'
const ageSumOfStartChar = findSumAgesWithStartChar(users);
console.log("~ ageSumOfStartChar:", ageSumOfStartChar)
function findSumAgesWithStartChar(users){
    return users
                .filter(user=>user.name.startsWith('J'))
                .reduce((sum,user)=> user.age+sum,0);
}


// Q9. Write a function which will display all the records in sorting according to names.
// function Name ---> Sorting(data,'ASC')
// ASC -> ASCENDING/ DESC -> DESCENDING
const sortedData = sorting(users,'ASC')
console.log("~ sortedData:", sortedData)
function sorting(users,order){
    users.sort((currentUser, nextUser) => {
      const currentUserName = currentUser.name.toLowerCase();
      const nextUserName = nextUser.name.toLowerCase();
  
      if (order === 'ASC') {
        if (currentUserName < nextUserName) return -1;
        if (currentUserName > nextUserName) return 1;
      } else if (order === 'DESC') {
        if (currentUserName > nextUserName) return -1;
        if (currentUserName < nextUserName) return 1;
      }
  
      return 0; 
    });
  
    return users;

}
// Q10 Delete an object with specific array index.
// HINT : splice
// function : deleteRecord(users,1) // 1 means delete object with index 1 in array.
let updatedUsers = deleteRecord(users,1);
console.log("~ updatedUsers:", updatedUsers)
function deleteRecord(users,index){
    users.splice(index,1);
    return users
}


// Q11. Insert an object at specific array index.
// HINT : splice
// function : InsertRecord(users,temp,1) // 1 means inset object at index 1 in array.
updatedUsers = insertRecord(users,newUser,1);
console.log("~ updatedUsers:", updatedUsers)
function insertRecord(users,newUser,index){
    users.splice(index,0,newUser);
    return users
}




