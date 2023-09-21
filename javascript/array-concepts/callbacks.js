// fetch('http://50.19.24.41/api/admin/banner/bands')
//     .then(res => res.json)
//     .then(data => console.log(data))


const apiUrl = 'http://50.19.24.41/api/admin/banner/bands';
const clientId = '437920819fa89d19abe380073d28839c';
const clientSecret = '28649120bdf32812f433f428b15ab1a1';
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiYWRtaW5zdGFnZUB5b3BtYWlsLmNvbSIsImlhdCI6MTY5Mjg2NzMyMywiZXhwIjozMTcyMzczMDk3MjN9.inXOHZSwmjgLBZ2lGq-LJRF_rhXedjrr7qoNW0TPVRY';

const headers = {
    'Client-Id': clientId,
    'Client-Secret': clientSecret,
    'Authorization': `Bearer ${authToken}`
}

let resData= undefined;

const response = fetch(apiUrl,{
    method: 'GET',
    headers: headers
})

response.then(response =>{
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log(data);
    resData = data;
})



