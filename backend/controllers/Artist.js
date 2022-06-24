import Artist from "../models/Artist.js";
import { QueryTypes } from "sequelize";
import db from "../config/database.js";

export const createArtist = async (req, res) => {
    try {
        await Artist.create(req.body);
        res.json({
            "message": "Artist Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const ArtistList = async (req, res) => {
  try {
      const data = await Artist.findAll();
      res.json({
          "message": "Artistlist",
          data: data
      });
  } catch (error) {
      res.json({ message: error.message });
  }  
}

export const getAllartists = async (req, res) => {
    try {
      const artists_with_ratings = await db.query(
        `select table1.name as song_name,table1.song_id,table1.a_id,max(rating),artist.dob,artist.artist_id from (select s.name,s.song_id,s.artist_id as a_id,max(r.value) as rating from song s join rating r where s.song_id=r.song_id group by song_id desc) as table1 left join artist on artist.artist_id=table1.a_id group by artist_id desc limit 10`,
        { type: QueryTypes.SELECT }
      );
      //console.log(songs.artist_id.name)
      res.json(artists_with_ratings);
    } catch (error) {
      res.json({ message: error.message });
    }
  };