const express = require("express");
const router = express.Router();

const userController = require("../controllers/userControllers");
const restaurantsController = require("../controllers/restaurantController");
const landmarksController = require("../controllers/landmarkController");
const activitiesController = require("../controllers/activitiesController");
const accommodationsController = require("../controllers/accommodationController");
const allDataController = require("../controllers/allDataController");
// const favoritesController = require("../controllers/favoritesController");

//-----------USER ROUTES----------//
router.post("/users/login", userController.login); // /api/users/login
router.post("/users/signup", userController.signup);

//----------Restaurants----------//
router.get(
  "/restaurants/getAllRestaurants",
  restaurantsController.getAllRestaurants
);
router.get(
  "/restaurants/getRestaurant/:restaurantId",
  restaurantsController.getRestaurant
);

//----------Landmarks----------//
router.get("/landmarks/getAllLandmarks", landmarksController.getAllLandmarks);
router.get(
  "landmarks/getLandmark/:landmarkId",
  landmarksController.getLandmark
);

//----------Activities----------//
router.get(
  "/activities/getAllActivities",
  activitiesController.getAllActivities
);
router.get(
  "/activities/getActivity/:activityId",
  activitiesController.getActivity
);

//----------Accommodations----------//
router.get(
  "/accommodations/getAllAccommodations",
  accommodationsController.getAllAccommodations
);
router.get(
  "/accommodations/getAccommodation/:accommodationId",
  accommodationsController.getAccommodation
);

//----------All Categories----------//
router.get("/allData/getAllData", allDataController.getAllData);

//----------Favorites----------//
// router.get("/favorites/getFavorites", favoritesController.getFavorites);
// router.post("/favorites/addFavorites", userController.addFavorites);

module.exports = router;
