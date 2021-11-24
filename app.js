let express = require("express");
let app = express();
let bmi = require('./bmiCal');
let value = require('./value.json');
app.use(express.json());

app.post('/', (req, res, next) => {
    res.send(bmi(req.body));
});

app.listen(3000,()=>{
    console.log("in listen 3000")
})