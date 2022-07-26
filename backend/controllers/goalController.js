const asyncHandler = require('express-async-handler');

// @desc GET goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler( async (req, res) => {
    res.status(200).json({ message: 'Get goal'});
});

// @desc POST goal
// @route Set /api/goals
// @access Private
const setGoal = asyncHandler( async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field');
    }
    res.status(200).json({ message: 'Set goal'});
});

// @desc PUT/UPDATE goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Update Goal: ${req.params.id}`});
});

// @desc DELETE goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Delete Goal: ${req.params.id}`});
});

// export controller objects to be used in goalRoute.js
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
};