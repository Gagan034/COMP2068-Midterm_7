const router = require('express').Router();

const ArcadeGameController = require('../controllers/ArcadeGameController');

// Begin routes

router.get('/', ArcadeGameController.index);
router.get('/new', ArcadeGameController.new);
router.get('/:id', ArcadeGameController.show);
router.get('/:id/edit', ArcadeGameController.edit);
router.post('/', ArcadeGameController.create);
router.post('/update', ArcadeGameController.update);
router.post('/destroy', ArcadeGameController.destroy);

// End routes

module.exports = router;