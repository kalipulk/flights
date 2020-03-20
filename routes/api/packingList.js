const router = require("express").Router();
const packingListController = require("../../controllers/packingListController");

// Matches with "/api/google"
router
  .route("/")
  .get(packingListController.addList)
  .post(packingListController.deleteList);

module.exports = router;