import express from "express";
import {
  ArtistList,
  createArtist,
  getAllartists,
} from "../controllers/Artist.js";
const router = express.Router();



router.post("/", createArtist);
router.get("/", getAllartists);
router.get("/list", ArtistList);

export default router;
