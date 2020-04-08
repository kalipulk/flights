const router = require("express").Router();
const purchaseController = require("../../controllers/purchaseController");
router
    .route("/")
    // .post(purchaseController.purchaseFlight)
    
router
    .route("/:id")
    .put(purchaseController.buyOffWishList)
    .delete(purchaseController.deleteWishlistItem)

module.exports =router

