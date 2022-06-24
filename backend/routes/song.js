import express from 'express';
import { createSong ,getAllSongs, getTopSongs} from '../controllers/Song.js';
const router = express.Router();
router.post('/', createSong);
router.get('/',getAllSongs);
router.get('/list',getTopSongs);

export default router;