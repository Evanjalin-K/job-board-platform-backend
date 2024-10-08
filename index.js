const mongoose = require('mongoose')
const { MONGODB_URI, PORT } = require('./utils/config');
const app = require("./app");


console.log('Connecting to MongoDB....');

mongoose.connect(MONGODB_URI)

.then ((res) =>{
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
})
.catch((error) => {
    console.log('Error cannot connect to MongoDB', error);
})



