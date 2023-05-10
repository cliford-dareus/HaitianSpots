const express = require('express');
const router = express.Router();
const { 
    getAllLocations, 
    createLocation, 
    getLocation, 
    updateFavoriteLocation,
    getLocationById
} = require('../controller/location.controller');
const authentication = require('../middleware/authentication');

router.route('/').get(getAllLocations).post(authentication, createLocation);
router.route('/:id').patch(updateFavoriteLocation).get(getLocationById);
router.route('/filter').get(getLocation);

module.exports = router;