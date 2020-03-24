const router = require("express").Router();
const packingListController = require("../../controllers/packingListController");

// Matches with "/api/google"
router
  .route("/")
 
  .post(packingListController.addList)
  
router
  .route("/:id")
  .post(packingListController.deleteList)
  .get(packingListController.findList);
module.exports = router;