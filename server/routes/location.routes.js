const express = require('express');
const router = express.Router();
const { 
    getAllLocations, 
    createLocation, 
    getLocation, 
    updateFavoriteLocation
} = require('../controller/location.controller');

router.route('/').get(getAllLocations).post(createLocation);
router.route('/:id').patch(updateFavoriteLocation);
router.route('/filter').get(getLocation);

module.exports = router;