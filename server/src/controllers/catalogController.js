let router = require('express').Router();
let carService = require('../services/carService');
let { isAuth } = require('../middlewares/authMiddleware')
router.get('/', async (req, res) => {
  
    try {
        let cars = await carService.getAll();
        res.header('Content-Type', 'application/json');
        res.json(cars);
      } catch (error) {
        console.error('Error:', error.message);
        res.status(404).json({ error: 'Data not found' });
      }

});

router.post('/', async (req, res) => {
   // console.log(req.body);
   // await carService.create({ ...req.body, _ownerId: req.user._id });
   await carService.create(req.body);
    res.json({ ok: true })
});

router.get('/:carId', async (req, res) => {
    let car = await carService.getOne(req.params.carId);

    res.json(car)
});

router.put('/:carId', async (req, res) => {
    await carService.update(req.params.carId, req.body);
    res.json({ ok: true })
});

router.delete('/:carId', async (req, res) => {
    await carService.delete(req.params.carId);
    res.json({ ok: true })
})
module.exports = router;