const axios = require('axios');
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question('Enter your register number: ',(registerNo)=>{
    r1.question('Enter your subject code: ',(subjectCode)=>{
        const studentData = {
            registerNo,
            subjectCode,
        };

        console.log('Sending data to the server..');

        axios.post('http://localhost:3000/login',studentData)
            .then((response)=>{
                console.log('Server response: ',response.data);
            })
            .catch((error)=>{
                console.log('Error: ',error.message);
            })
            .finally(()=>{
                r1.close;
            });
    });
});