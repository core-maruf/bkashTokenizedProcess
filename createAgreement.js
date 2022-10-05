const axios = require("axios");
// const refreshToken = require("../token/refreshToken");
const grantToken = require("../token/grantToken");
const dotenv = require("dotenv");
dotenv.config();


const createAgreement = async(req,res) =>{
    const response = await axios.post(
        'https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create',
        // '\n{\n     "mode": "0000",\n     "callbackURL": "http://localhost:3030/",\n     "payerReference": "01611156651"\n}\n',
        {
            'mode': '0000',
            'callbackURL': 'http://localhost:3030/',
            'payerReference': '01611156651'
        },
        {
            headers: {
                'Authorization': 'eyJraWQiOiJvTVJzNU9ZY0wrUnRXQ2o3ZEJtdlc5VDBEcytrckw5M1NzY0VqUzlERXVzPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlODNlMDkwMC1jY2ZmLTQzYTctODhiNy0wNjE5NDJkMTVmOTYiLCJhdWQiOiI2cDdhcWVzZmljZTAxazltNWdxZTJhMGlhaCIsImV2ZW50X2lkIjoiNzc4YzhlOTQtZTQ1Yy00NDJmLWJmYzQtMTE2OTc1MjJjMDliIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NjQ5OTM1MDgsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMV9yYTNuUFkzSlMiLCJjb2duaXRvOnVzZXJuYW1lIjoic2FuZGJveFRva2VuaXplZFVzZXIwMiIsImV4cCI6MTY2NDk5NzEwOCwiaWF0IjoxNjY0OTkzNTA4fQ.GX9rro6B0EREgbPH96vb4bbX72xdJn_-I4WPvVdoGxWpZvFmrfv_lUoIMAkLiEAT16-YNwkjxXjckHLkrjjslp5csFJ-3sb60eMwTcj_MU4YE03tpRXfE1GeBlgiRAk31g0YfgE1pgcPzO6JI6_v930d0i8ETw8hX31QklujYHtKSvKvIldyPw98J5zKFbluKAHyD3-XJFTFCUh16iXJ39PfRIGmZLwKPq63kCzhepUcECUzsW-3YUhCFpLGOI_SgGxqVingWcHFVwox7hjTo_-M6DBbh1opNkpd7T49qeiZY515L2yL14srikfoG8Mtu2b4xl6kqehMvKMGok2j8A',
                'X-APP-Key': process.env.APP_KEY,
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        }
    );
    console.log(response.data);
}

// console.log(grantToken());
module.exports = createAgreement;