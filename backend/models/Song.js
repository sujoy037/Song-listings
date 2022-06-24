import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Artist from "./Artist.js";

const { DataTypes } = Sequelize;


const Song=db.define('song',{
    song_id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING
    },
    date_of_rel:{
        type: DataTypes.STRING
    },
    img:{
        type: DataTypes.STRING
    },
    artist_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
           model: 'Artist', // 'artists' refers to table name
           key: 'artist_id', // 'artist_id' refers to column name in artists table
        }
     }
   
},{
    freezeTableName: true    
})

//db.Song.hasMany(db.Artist, {as : 'Artist', foreignKey : 'artist_id'});
// Song.hasMany(Artist, {
//     foreignKey: "artist_id",
//     onDelete: "cascade",
// });
// Song.associate = models => {
//     Song.hasMany(models.Artist, {
//       foreignKey: 'artist_id'
//     });
// }
Artist.hasMany(Song,{foreignKey:'artist_id',foreignKeyConstraint:true});
await Song.sync();
console.log("The table for the Song model was just (re)created!");

  
export default Song;