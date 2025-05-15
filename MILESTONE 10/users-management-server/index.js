const express = require('express');
const app = express();

const cors = require('cors');


const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Users server is running in browser')
});

const users = [
    {id: 1, name: "Shabana" , email: "shabana@gmail.com"},
    {id: 2, name: "Shabnur" , email: "shabnur@gmail.com"},
    {id: 3, name: "Sabila" , email: "sabila@gmail.com"}
]

app.post('/users', (req, res)=>{
    console.log('users post method');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;


    users.push(newUser);

    res.send(newUser); 
})


app.get('/users', (req, res)=>{
    res.send(users);
})


app.listen(port, ()=>{
    console.log(`Users server is Running on port : ${port}`);
})
