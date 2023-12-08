let router = require('express').Router();
let carService = require('../services/carService');
let userService = require('../services/userService');
let commentService = require('../services/commentService')
let { isAuth } = require('../middlewares/authMiddleware')
router.get('/catalog', async (req, res) => {

    try {
        let cars = await carService.getAll();
        res.header('Content-Type', 'application/json');

        res.json(cars);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(404).json({ error: 'Data not found' });
    }

});

router.post('/create', isAuth, async (req, res) => {
    //console.log(req);
    let createdPost = await carService.create({ ...req.body, _ownerId: req.user._id });
    await userService.pushPost(req.user._id, createdPost)
    // await carService.create(req.body);
    res.json({ ok: true })
});

router.get('/catalog/:carId', async (req, res) => {
    let car = await carService.getOne(req.params.carId);

    res.json(car)
});

router.put('/catalog/:carId/edit', async (req, res) => {
    await carService.update(req.params.carId, req.body);
    res.json({ ok: true })
});

router.delete('/catalog/:carId/delete', async (req, res) => {
    await carService.delete(req.params.carId);
    res.json({ ok: true })
})



router.get('/catalog/:carId/comments', async (req, res) => {
    let comments = await commentService.getCommentsByCarId(req.params.carId);
    res.json(comments)
});
router.post('/catalog/:carId/comments', async (req, res) => {
    let data = req.body;
    let carId = req.params.carId;
    console.log(carId);

    let commentData = {
        email: data.email,
        text: data.text,
        carId: carId
    };

    let comment = await commentService.create(commentData);

    await carService.updateWithComments(carId, comment);

    res.json(comment);

});


module.exports = router;