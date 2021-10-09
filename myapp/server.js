const express = require('express');
const app = express();


const getValueFromQuery = (req) => {
    return {
        value1 : parseInt(req.query.value1),
        value2 : parseInt(req.query.value2)
    }
}


const addition = (req, res) => {

    const values = getValueFromQuery(req)
    
    let result = values.value1 + values.value2;
    res.send(result.toString())
}

const substraction = (req, res) => {
    
    const values = getValueFromQuery(req)

    let result = values.value1 - values.value2;
    res.send(result.toString())
}

const multiplication = (req, res) => {
    
    const values = getValueFromQuery(req)
    
    let result = values.value1 * values.value2;
    res.send(result.toString())
}

const division = (req, res) => {
    
    const values = getValueFromQuery(req)
    
    let result = values.value1 / values.value2;
    res.send(result.toString())
}

const getValueFromParams = (req) => {
    return {
        value1 : parseInt(req.params.value1),
        value2 : parseInt(req.params.value2)
    }
}

const addWithParams = (req, res) => {
    const values = getValueFromParams(req)

    let result = values.value1 + values.value2;
    res.send(result.toString())
}

const substractWithParams = (req, res) => {
    
    const values = getValueFromParams(req)
    

    let result = values.value1 - values.value2;
    res.send(result.toString())
}

const multiplyWithParams = (req, res) => {
    
    const values = getValueFromParams(req)
    
    let result = values.value1 * values.value2;
    res.send(result.toString())
}

const divideWithParams = (req, res) => {
    
    const values = getValueFromParams(req)

    let result = values.value1 / values.value2;
    res.send(result.toString())
}


app.get('/add', addition);
app.get('/substract', substraction);
app.get('/multiply', multiplication);
app.get('/divide', division);

app.get('/add/:value1/:value2', addWithParams);
app.get('/substract/:value1/:value2', substractWithParams);
app.get('/multiply/:value1/:value2', multiplyWithParams);
app.get('/divide/:value1/:value2', divideWithParams);

const myLogger = (req, res, next) => {
  const visitTime = new Date();
  console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
  next();
};
app.use(myLogger);

app.listen(3000, () => console.log("Server is up and running"))