const router = require("express").Router();
const packingListController = require("../../controllers/packingListController");


router
  .route("/")
  .put(packingListController.updateList)
  .post(packingListController.addList);
  
router
  .route("/:id")
  .post(packingListController.deleteList)
  // .post(packingListController.deleteItem)
  .get(packingListController.findList);
module.exports = router;