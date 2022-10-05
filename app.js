const express = require("express");
const createAgreement = require("./agreement/createAgreement");
const grantToken = require("./token/grantToken")

const app = express();

app.use(express.json());


(async()=>{
    const getToken = await grantToken();
    console.log(getToken);
})();

createAgreement();

app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.listen(3030, ()=>{
    console.log("Listening on port 3000..");
});