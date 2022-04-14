const express = require('express');
const req = require('express/lib/request');
const app = express();

app.use(express.json());

function telephoneNumber() {
    var leftNumbers = Math.random(); //devem ser inteiros de 1000 a 9999
    var rightNumbers = Math.random();
    var DDD = Math.random(); //Numero aleatorio de 20 a 99
    return leftNumbers;
}
    
function createObject(i){
    return {
        id: i,
        value: telephoneNumber(),
        monthyPrice: Math.floor(Math.random() * 11),
        monthySetupPrice: Math.floor(Math.random() * 11),
        currency: "R$"
    };
}

let data = [];

for(let itr = 1; itr <= 800; itr++) {
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