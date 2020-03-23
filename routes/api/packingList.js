const router = require("express").Router();
const packingListController = require("../../controllers/packingListController");

// Matches with "/api/google"
router
  .route("/")
 
  .post(packingListController.addList)
  .post(packingListController.deleteList);
router
  .route("/:id")
  .get(packingListController.findList)
module.exports = router;