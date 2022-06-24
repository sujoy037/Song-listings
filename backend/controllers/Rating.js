import Artist from "../models/Artist.js";
import Rating from "../models/Rating.js";
import Song from "../models/Song.js";
import User from "../models/User.js";
import { QueryTypes, Sequelize } from "sequelize";
import db from "../config/database.js";

export const createRating = async (req, res) => {
  try {
    const exists_rate = await db.query(`select * from rating where song_id=${req.body.song_id} and user_id=${req.body.user_id}`)
    // console.log(exists_rate?.[0]?.length > 0);
    if (exists_rate?.[0]?.length > 0){
      await db.query(`update rating set value=${req.body.value} where user_id=${req.body.user_id}`)
      return res.json({
        message: "Rating updated",
      });
    }
    await Rating.create(req.body);
    res.json({
      message: "Rating done",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getAllRatings = async (req, res) => {
  try {
    // const ratings = await Rating.findAll({
    //     where :{user_id:1}

    // });

    // for (var i=0;i<ratings.length;i++){
    //     const tt=await Song.findOne({
    //         where:{song_id:ratings[i].song_id}
    //     })

    //  console.log(tt)
    // }
    // const ratings=await Rating.findAll({
    //     attributes:['id'],
    //     include: [{
    //         model: User,
    //         attributes: ['name'],
    //     }],
    // })

    const songs_with_ratings = await db.query(
      `SELECT s.song_id,s.date_of_rel, s.img as cover, s.name, s.artist_id, a.name as artist,  (select avg (r.value) from rating r where r.song_id = s.song_id ) as rating
      FROM song s
      join artist a
      on a.artist_id = s.artist_id
        `,
      { type: QueryTypes.SELECT }
    );

    res.json(songs_with_ratings);
  } catch (error) {
    res.json({ message: error.message });
  }
};
