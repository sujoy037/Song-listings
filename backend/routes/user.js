import express from 'express';
import { createUser, login ,logout} from '../controllers/User.js';
const router = express.Router();
router.post('/', createUser);
router.post('/',login);
router.get('/logout',logout);

export default router;