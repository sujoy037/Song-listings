import { Sequelize } from "sequelize";
import db from "../config/database.js";

 
const { DataTypes } = Sequelize;
 
const User=db.define('user',{
    user_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    }
   
},{
    freezeTableName: true    
})
await User.sync();
console.log("The table for the User model was just (re)created!");
 
export default User;