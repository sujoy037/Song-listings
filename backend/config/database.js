import { Sequelize } from "sequelize";
 
const db = new Sequelize('song_listings_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;