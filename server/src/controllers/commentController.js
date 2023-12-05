let router = require('express').Router();
let carService = require('../services/carService');
let commentService = require('../services/commentService')
router.get('/', async (req, res) => {
    let carId = req.query.carId
    let comments = await commentService.getCommentsByCarId(carId)

    res.json(comments)
});

router.post('/data/catalog/:carId/c', async (req, res) => {
    let data = req.body;
    let carId = req.params.carId
    console.log(carId)
    let commentData = {
        email: data.email,
        text: data.text,
        carId: carId

    }
    let comment = await commentService.create(commentData);
    await carService.update(carId, comment);

    res.json(comment)
});
module.exports = router;