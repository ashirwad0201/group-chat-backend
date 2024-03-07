require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const adminRoutes = require('./routes/admin');
const messagesRoutes = require('./routes/messages');
const groupRoutes = require('./routes/group');
const User=require('./models/user')
const Usergroup=require('./models/usergroup')
const Group=require('./models/group')
const Message=require('./models/message')
const cors = require('cors');
const app = express();

app.use(cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET","POST","PUT","DELETE"]
}));
app.use(bodyParser.json({ extended: false }));

app.use('/admin',adminRoutes);
app.use('/chat',messagesRoutes);
app.use('/group',groupRoutes);


Group.belongsToMany(User, {through: Usergroup});
User.belongsToMany(Group,{through: Usergroup});

Message.belongsTo(User);
Message.belongsTo(Group);

//sequelize.sync({force:true})
sequelize.sync()
.then(result=>{
    //console.log(result);
    app.listen(process.env.PORT_NO || 5000);
})
.catch(err=>console.log(err));
