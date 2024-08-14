const express = require('express');

const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

// app.use('/'+ express.static(path.join(__dirname, '/react-app/build')));

// app.use('/website'+ express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public/web')));



app.get('/api', (req, res) =>{
    res.json(`HTTP GET request received`);
})







app.listen(port, () =>{
    console.log(`App listening on port ${port}`);
})