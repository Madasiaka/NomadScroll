const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const pastTripsController = require("../controllers/pastTrips")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/home", ensureAuth, postsController.getHome);
router.get("/addTrip", ensureAuth, postsController.getAddTrip);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/pastTrips", ensureAuth, pastTripsController.getPastTrips);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
