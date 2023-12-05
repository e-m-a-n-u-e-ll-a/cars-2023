let router = require('express').Router();
let carService = require('../services/carService');
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
    console.log(req);
    await carService.create({ ...req.body, _ownerId: req.user._id });
    // await carService.create(req.body);
    res.json({ ok: true })
});

router.get('/catalog/:carId', async (req, res) => {
    let car = await carService.getOne(req.params.carId);

    res.json(car)
});

router.post('/catalog/:carId', async (req, res) => {
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

router.put('/catalog/:carId', async (req, res) => {
    await carService.update(req.params.carId, req.body);
    res.json({ ok: true })
});

router.delete('/catalog/:carId', async (req, res) => {
    await carService.delete(req.params.carId);
    res.json({ ok: true })
})
module.exports = router;