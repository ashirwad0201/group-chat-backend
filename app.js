require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const adminRoutes = require('./routes/admin');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use('/admin',adminRoutes);

//sequelize.sync({force:true})
sequelize.sync()
.then(result=>{
    //console.log(result);
    app.listen(process.env.PORT_NO || 5000);
})
.catch(err=>console.log(err));
