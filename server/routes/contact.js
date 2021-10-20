let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');


let contactController = require('../controllers/contact');

//helper function for guard purposes
function requireAuth(req, res, next){
    //check if the user is logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}

// Get Route for the contact list page - READ OPERATION
router.get('/', contactController.displayContactList);

// Get Route for displaying the ADD page - CREATE OPERATION
router.get('/add', requireAuth, contactController.displayAddPage);

// POST Route for processing the ADD page - CREATE OPERATION
router.post('/add', requireAuth, contactController.processAddPage);

// Get Route for displaying the Edit page - UPDATE OPERATION
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

// POST Route for processing the Edit page - UPDATE OPERATION
router.post('/edit/:id', requireAuth, contactController.processEditPage);

// Get to preform deletion - DELETE OPERATION
router.get('/delete/:id', requireAuth, contactController.preformDelete);

module.exports = router;