const express = require('express')
const { query, validationResult, body } = require('express-validator');
const validationUtils = require('../utils/validator');
const router = express.Router()
const organizationsController = require("../controllers/organizationsController.js");

// GET "/organizations" route:
// Add Swagger documentation here:

router.route("/").get(organizationsController.getorganizations);

// GET "organizations/:id" route:
// TODO: fill in Swagger documentation for this route :) 
router.route("/:id").get(organizationsController.getorganization);
// router.route("/").post(organizationsController.createorganization);

router.route("/").post([
    body('name')
        .isString()
        .isLength({min: 2})
        .withMessage('must be at least 2 chars long')
        .trim(),
    body('region')
        .isString()
        .isLength({min: 3})
        .withMessage('must be at least 3 chars long')
        .trim(),
   
    //  This is for custom error messages
    // .custom(async(value, {req}) => {
    //         const customer = await prisma.customers.findFirst({where: {first_name: value}});  *Consider separating prisma out into a service object for cleaner code
    //         console.log(customer)
    //         if (customer) {
    //             throw new Error('First name exceeds character limit.');
    //         }
    //         return true
    // })
],
validationUtils.validate,
organizationsController.createorganization
);

router.route("/:id").put(organizationsController.updateorganization);
router.route("/:id").delete(organizationsController.deleteorganization);





module.exports = router;