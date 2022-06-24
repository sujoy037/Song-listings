import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Song from "./Song.js";
import User from "./User.js";

 
const { DataTypes } = Sequelize;
 
const Rating=db.define('rating',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    value:{
        type:DataTypes.INTEGER
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'User',
            key:'user_id'
        }
    },
    song_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'Song',
            key:'song_id'
        }
    }
   
},{
    freezeTableName: true    
})
User.hasMany(Rating,{foreignKey:'user_id',foreignKeyConstraint:true})
Song.hasMany(Rating,{foreignKey:'song_id',foreignKeyConstraint:true})
// Rating.associate = models => {
//     Rating.belongsTo(models.User, {
//       foreignKey: 'user_id'
//     });
//     Rating.belongsTo(models.Song, {
//       foreignKey: 'song_id'
//     });
//   }
await Rating.sync();
console.log("The table for the Rating model was just (re)created!");
 
export default Rating;