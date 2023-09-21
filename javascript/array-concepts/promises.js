
function fun1(){
    console.log('Function1')
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('error')
        }, 100);
    })
}
function fun2(){
    console.log('Function2')
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('success')
        }, 100);
    })
}

function onSuccess(data){
    console.log(data)
}

function onError(data){
    console.log(data)
}

fun1()
    .then(fun2)
    .then(onSuccess)
    .catch(onError)