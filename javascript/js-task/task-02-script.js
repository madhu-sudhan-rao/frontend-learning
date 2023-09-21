const data = [
    {
        name: "Butters",
        age: 3,
        type: "dog"
    },
    {
        name: "Lizzy",
        age: 6,
        type: "dog"
    },
    {
        name: "Red",
        age: 1,
        type: "cat"
    }, {
        name: "Joey",
        age: 3,
        type: "dog"
    }
];
console.log("~ data:", data)
// Q1.Write a promise
// function which will display all records with type === 'dog'
// function Name-- - > findAllDogs(data)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array
// HINT: Use filter.
function findAllDogs(data){
    return new Promise((resolve,reject)=>{
        const dogRecords = data.filter(record=>record.type==='dog')
        if(dogRecords.length === 0){
            reject('NO RECORDS FOUND');
        } else{
            resolve(dogRecords);
        }
    });
}

findAllDogs(data)
    .then(dogs=>console.log('~ Dogs:',dogs))
    .catch(error=>console.log('~ Error:',error))

// Q2.Write a promise
// function which will display all the records starting with name 'B'
// or any character passed as parameter.
// function Name-- - > findSpecificStartChar(data, 'B')
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT: Use filter and string functions.
function findSpecificStartChar(data,character){
    return new Promise((resolve,reject)=>{
        const records = data.filter(record=>record.name.toLowerCase().startsWith(character.toLowerCase()))
        if(records.length === 0){
            reject('NO RECORDS FOUND');
        } else {
            resolve(records)
        }
    });
}

findSpecificStartChar(data,'B')
    .then(records=>console.log('~ Records:', records))
    .catch(error=>console.log('~ Error:',error))


// Q3.Write a promise
// function which will display sum of all ages.
// function Name-- - > findSumAges(data)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT: Use reduce functions.
function findSumAges(data){
    return new Promise((resolve,reject)=>{
        const sum = data.reduce((acc,record)=>acc+=record.age,0)
        if(sum === 0){
            reject('NO RECORDS FOUND');
        } else {
            resolve(sum)
        }
    })
}

findSumAges(data)
    .then(sum=>console.log('~ Sum:',sum))
    .catch(error=>console.log('~ Error:',error))

// Q4.Write a promise
// function which will display all the records with only name & ages.
// function Name-- - > findAll(data)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT: Use map.
function findAll(data){
    return new Promise((resolve,reject)=>{
        const records = data.map(record=>({
            name:record.name,
            age:record.age
        }))
        if(records.length === 0){
            reject('NO RECORDS FOUND');
        } else {
            resolve(records)
        }
    });
}

findAll(data)
    .then(records=>console.log('~ Records:', records))
    .catch(error=>console.log('~ Error:',error))



// Q5.Write a
// function to display sum of all ages of records having type as dog.
// Use nesting promises
// function which first call Q1
// function its output will be given to Q3 and display total.
// HINT: nesting of promises.
findAllDogs(data)
    .then(dogRecords=>findSumAges(dogRecords))
    .then(sum=>console.log('~ Sum:',sum))
    .catch(error=>console.log('~ Error:',error))


// Q6.Write a promise
// function which will display all the records in sorting according to names.
// function Name-- - > Sorting(data, 'ASC')
// ASC - > ASCENDING / DESC - > DESCENDING
// If there are no records in array reject with message "NO RECORDS"
// If there are records in Array then according to sorting order display result and
// return inresolve of promises.
// HINT: sort on objects.
function sorting(data, order) {
    return new Promise((resolve, reject) => {
      if (data.length === 0) {
        reject('NO RECORDS');
      } else {
        const sortedData = [...data]; // Create a copy to avoid modifying the original data
  
        sortedData.sort((currentUser, nextUser) => {
            const currentUserName = currentUser.name.toLowerCase();
            const nextUserName = nextUser.name.toLowerCase();
  
          if (order === 'ASC') {
            if (currentUserName < nextUserName) return -1;
            if (currentUserName > nextUserName) return 1;
          } else if (order === 'DESC') {
            if (currentUserName > nextUserName) return -1;
            if (currentUserName < nextUserName) return 1;
          }
  
          return 0; // Names are equal
        });
  
        resolve(sortedData);
      }
    });
}

sorting(data, 'ASC')
  .then(sortedData =>console.log('~ Sorted in ascending order:', sortedData))
  .catch(error =>console.error('~ Error:', error));