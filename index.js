const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/index');

const app = express();

app.use(cors());
app.options('*',cors());

app.use(bodyparser.json());

app.use('/',routes);

const port = 2000;

mongoose.connect('mongodb+srv://aakash:Aakash9464@cluster0.5zjcf.mongodb.net/HA?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(
    res => {
        console.log('Mongodb connection success')
        app.listen(process.env.PORT || port,() => {
            console.log(`server running on port number ${port}`)
        })
    }
).
catch(
    err => console.log(err)
)