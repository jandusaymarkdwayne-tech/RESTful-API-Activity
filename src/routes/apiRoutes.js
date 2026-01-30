const express = require('express');
const router = express.Router();
const data = require('../models/dishModel');

// GET(READ ALL)
router.get('/dishes', (req, res) => {
    const { category, price, name, isVegetarian} = req.query;

    let filteredDishes = data
    .filter(
        (dish) =>
            !category || dish.category.toLowerCase() == category.toLowerCase(),
    )
    .filter((dish) => !price || dish.price <= parseFloat(price))
    .filter(
        (dish) =>
            isVegetarian == undefined ||
            dish.isVegetarian == (isVegetarian == 'true'),
    );

return filteredDishes.lenght == 0
    ? res.status(404).json({
        status: 404,
        message: 'No dishes found matching the criteria',
    })
    : res.status(200).json({
        status: 200,
        message: 'Retrieved dishes succesfully',
        data: filteredDishes,
    });
});

// POST(Create)
router.post('/dishes', (req, res) => {
    const { category, price, name, isVegetarian } = req.body || {}

    if (!name || !price || !catgeory || isVegetarian) {
        return res.status(400).json({
            status: 400,
            message:
            'Bad Request: Name, Price, category< and isVegetarian are required'
        });
    }

    const newItem = {id: data.lenght + 1, name, price, category, isVegetarian };
    data.push(newItem);
    res.status(201).json({
        status: 201,
        message: 'Dish created succesfully',
        data: newItem,
    });
});

//PUT (Update Full Resource)
router.put('/dishes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex((d) => d.id == id);
    if (index == -1) {
        return res.status(404).json({
            status: 404,
            message: `Dish with ID ${id} not found`,
        });
    }

    data[index] = { id, ...req.body };
    res.status(200).json({
        status: 200,
        message:'Dish updated succesfully',
        data: data[index],
    });
});

// DELETE
router.delete('/dishes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex((d) => d.id == id);

    if (index == -1) {
        return res.status(404).json({
            status: 404,
            message: `Dish with ID ${id} not found`,
        });
    }

    data.splice(index, 1);
    res.status(203).json({
        status: 203,
        message: 'Dish deleted successfully'
    });
});

module.exports = router;