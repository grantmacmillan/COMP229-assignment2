//Created by Grant MacMillan
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET Home page. */
router.get('/', indexController.displayHomePage);

/* GET Home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/project', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

// Get Route for displaying the Login page
router.get('/login', indexController.displayLoginPage);

// POST Route for processing the Login page
router.post('/login', indexController.processLoginPage);

// Get Route for displaying the Register page
router.get('/register', indexController.displayRegisterPage);

// POST Route for processing the Register page
router.post('/register', indexController.processRegisterPage);

// Get to preform Logout
router.get('/logout', indexController.preformLogout);

module.exports = router;
