import express from 'express';
import getProduct from '../controllers/search.controller';
import getDetail from '../controllers/detail.controller';
import getDescription from '../controllers/description.controller';

const router = express.Router();


router.get('/items/:product',getProduct );
router.get('/detail/:id',getDetail );
router.get('/detailtext/:id/description',getDescription);

export default router;