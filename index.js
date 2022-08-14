import fetch from 'node-fetch';
//const fetch = require('node-fetch');

const data = { "userId": 2 };

const initGet = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
};

const initPatch = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Archived',
    })
};

//need to add GET and PATCH here
/*
fetch('https://jsonplaceholder.typicode.com/posts', initGet)
    .then(response => response.json())
    .then(data => {
        let dataArray = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].userId === 2) {
                dataArray.push(data[i].body);
            }
        }
        return dataArray; //doesn't return
    })
*/

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].userId === 2) {
                console.log(data[i].body)
            }
        }
    })

fetch('https://jsonplaceholder.typicode.com/posts', initPatch)
    .then(response => response.json())
    .then(data => {
        data = "Archived"
        console.log(data);
    })

