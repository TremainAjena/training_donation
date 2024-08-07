const express = require('express')
const { query, validationResult, body } = require('express-validator');
const validationUtils = require('../utils/validator');
const router = express.Router()
const orgController = require("../controllers/orgController.ts");

// GET "/organizations" route:
// Add Swagger documentation here:

router.route("/").get(orgController.getOrganizations);

// GET "organizations/:id" route:
// TODO: fill in Swagger documentation for this route :) 
router.route("/:id").get(orgController.getOrganization);
router.route("/").post(orgController.createOrganization);

// router.route("/").post([
//     // body('name')
//     //     .isString()
//     //     .isLength({min: 2})
//     //     .withMessage('must be at least 2 chars long')
//     //     .trim(),
//     // body('region')
//     //     .isString()
//     //     .isLength({min: 3})
//     //     .withMessage('must be at least 3 chars long')
//     //     .trim(),
// ],
// validationUtils.validate,
// orgController.createOrganization
// );

router.route("/:id").put(orgController.updateOrganization);
router.route("/:id").delete(orgController.deleteOrganization);





module.exports = router;