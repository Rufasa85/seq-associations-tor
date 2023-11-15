const sequelize = require("../config/connection");
const {User,Boat} = require("../models");

const userData = [
    {
        username:"joe",
        email:"joe@joe.joe",
        password:"password"
    },
    {
        username:"whitewhalehunter",
        email:"ishmael@pequod.org",
        password:"whitewhale"
    }
]

const boatData = [
    {
        name:"The bluenose",
        type:"schooner",
        length:143,
        crewSize:12,
        UserId:1
    },
    {
        name:"Just for the halibut",
        type:"sail",
        length:40,
        crewSize:2,
        UserId:1
    },
    {
        name:"The pequod",
        type:"whaling",
        length:100,
        crewSize:8,
        UserId:2
    }
]

const seedMe = async ()=>{
    await sequelize.sync({force:true});
    const users = await User.bulkCreate(userData,{
        individualHooks:true
    });
    console.log(users);
    const boats = await Boat.bulkCreate(boatData);
    console.log(boats);
    console.log("seeding complete!")
    process.exit(0)
}

seedMe();