import { QueryTypes } from "sequelize";
import db from "../config/database.js";
import Artist from "../models/Artist.js";
import Song from "../models/Song.js";
import path from "path";
import multer from "multer";

import { fileURLToPath } from "node:url";

export const createSong = async (req, res) => {
  const data = req.body;
  const image_file = req.files?.img;
  // let data={
  //   img: req.body.img,
  //   name: req.body.name,
  //   date_of_rel: req.body.date_of_rel,
  // }
  // console.log(path.dirname("/"));

  try {
    if (!image_file) {
      return res.status(422).json({ message: "Cover Image not found" });
    }

    const url = image_file?.name;
    const uploadPath = "/Images/" + url;
    image_file.mv("." + uploadPath, async function (err) {
      if (err) {
        console.log("error: ", err);
        return res.status(500).send(err);
      }

      const song_saved = await Song.create({ ...data, img: uploadPath });

      res.json({
        message: "Song Created",
        song_saved,
      });
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getAllSongs = async (req, res) => {
  try {
    const songs_with_ratings = await db.query(
      `SELECT s.song_id,s.date_of_rel, s.img as cover, s.name as song_name, s.artist_id, a.name as artist_name,  (select avg (r.value) from rating r where r.song_id = s.song_id ) as rating
        FROM song s
        join artist a
        on a.artist_id = s.artist_id
        order by (select avg (r.value) from rating r where r.song_id = s.song_id) desc
        ;
        `,
      { type: QueryTypes.SELECT }
    );
    //console.log(songs.artist_id.name)
    res.json({ data: songs_with_ratings });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getTopSongs = async (req, res) => {
  try {
    const songs_with_ratings = await db.query(
      `SELECT s.song_id,s.date_of_rel, s.img as cover, s.name as song_name, s.artist_id, a.name as artist_name,  (select avg (r.value) from rating r where r.song_id = s.song_id ) as rating
        FROM song s
        join artist a
        on a.artist_id = s.artist_id
        order by (select avg (r.value) from rating r where r.song_id = s.song_id) ;
        `,
      { type: QueryTypes.SELECT }
    );
    //console.log(songs.artist_id.name)
    res.json({ data: songs_with_ratings });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");
