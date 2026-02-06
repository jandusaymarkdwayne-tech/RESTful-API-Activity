const express = require('express' );
const router = express.Router();

// Import the Controller
const {
getAllDishes,
createDish,
getDishById,
updateDish,
deleteDish,
} = require('../controllers/dishController');

// 1. IF user goes to GET / (Show menu) Ask Chef to getAllDishes
router.get('/dishes', getAllDishes);

// 2. IF user sends POST / (New Order) Ask Chef to createDish
router.post('/dishes', createDish);

// 3. If user goes to GET /:id (Ask for specific meal) -> Ask Chef to getDishById
router.get('/dishes/:id', getDishById);

// 4. If user sends PUT /:id (Change meat) > Ask Chef to updateDish
router.put('/dishes/:id', updateDish);

//5. IF user sends DELETE /:id (Cancel meat) - Ask Chef to deleteDish
router.delete("/dishes/:id", deleteDish);

module.exports = router;