const express = require('express');
const app = express();

app.use(express.json());

app.post('/login',(req,res)=>{
    const {registerNo ,subjectCode} = req.body;

    if(!registerNo || !subjectCode){
        return res.status(400).json({error:'All fields are required!!!'});
    }

    const hallNumber = `H-${Math.floor(Math.random() * 10) + 1}`;
    const SeatNo = `S-${Math.floor(Math.random() * 100) + 1}`

    const responseData = {
        registerNo,
        subjectCode,
        hallNumber,
        SeatNo,
    }

    console.log('Recieved data: ',req.body);
    console.log('Generated response: ',responseData);

    res.json(responseData);
});

app.listen(3000,()=>{
    console.log('Server running on http://localhost:3000');
})