const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');

let users = [
    { login: 'Macha', password:'qwe' },
    { login: 'Boris', password:'asd' }
];

const app = express();

app.use(bodyParser());
app.use(express.static(join(__dirname, 'dist')));

app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.put('/user', (req, res) => {
    console.log('прило для регистрации', req.body);
    users.push(req.body);
    console.log('итого элементов', users);

    res.sendStatus(200);
});

app.post('/user', (req, res) => {
    //console.log( {users.filter(elem => elem.login !== req.body.login)} );
   // users.filter(elem => elem.login !== req.body.login);
    users.forEach(elem => {
    //console.log('POSTzxczxczxczxczxzxcz', req.body);
    //console.log('POSTzxczxczxczxczxzxcz', elem);
        if (elem.login === req.body.login && elem.password === req.body.password) {
            console.log('dddfdfdfg');
            res.send('aaaaaaaa');
        } else {
            console.log('error');
        }
    });
    res.send('error');
});

app.listen(3000, () => console.log('port 3000'));
