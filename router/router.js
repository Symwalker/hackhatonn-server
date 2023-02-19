const express = require("express");
const authController = require("../Controller/controller");
const emergency = require("../Controller/request");
// const authController = require("../Controller/controller");
const routerr = express.Router()
const middlewares = require("../Middleware");


routerr.post("/signup", authController.signup)
routerr.post("/login", authController.login)
routerr.post("/request", emergency.requstss)
routerr.get("/request", emergency.getReq)
// routerr.post("/addtocart", product.addToCart)
// routerr.get("/getcart", product.getCart)
routerr.post("/tokenmidd",  middlewares.authMiddleware ,authController.tokennn)

module.exports = routerr
