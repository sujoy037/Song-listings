import express from 'express';
import { createRating ,getAllRatings} from '../controllers/Rating.js';
const router = express.Router();
router.post('/', createRating);
router.get('/',getAllRatings);

export default router;