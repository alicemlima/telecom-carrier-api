const express = require('express');
var cors = require('cors')
const req = require('express/lib/request');
const app = express();

app.use(express.json());
app.use(cors())

function telephoneNumber() {
    var leftNumbers = Math.floor(Math.random() * 9000) + 1000;
    var rightNumbers = Math.floor(Math.random() * 9000) + 1000;
    var DDD =  Math.floor(Math.random() * 90) + 10;
    return (`+55 ${DDD} ${leftNumbers}-${rightNumbers}`);
}
    
function createObject(i){
    return {
        id: i,
        value: telephoneNumber(),
        monthyPrice: (Math.random() * 10).toFixed(2),
        monthySetupPrice: (Math.random() * 10).toFixed(2),
        currency: "R$"
    };
}

let data = [];

for(let itr = 1; itr <= 100; itr++) {
    data.push(createObject(itr));
}

app.get('/data', (req,res) => {
    return res.json(data);
});

app.listen(process.env.PORT || 3000, () =>
    console.log(
        `Server started at http://localhost:3000/data`
    )
);