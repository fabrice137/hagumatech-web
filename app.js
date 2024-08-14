const express = require('express');

const path = require('path');

const app = express();



// app.use('/'+ express.static(path.join(__dirname, '/react-app/build')));

// app.use('/website'+ express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public')));



app.get('/api', (req, res) =>{
    res.json(`HTTP GET request received`);
})







app.listen(3000, () =>{
    console.log("App listening on port 3000");
})