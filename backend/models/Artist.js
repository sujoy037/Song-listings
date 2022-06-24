import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Artist=db.define('artist',{
    artist_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING
    },
    dob:{
        type: DataTypes.STRING
    },
    bio:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true    
})
await Artist.sync();
console.log("The table for the Artist model was just (re)created!");
 
export default Artist;