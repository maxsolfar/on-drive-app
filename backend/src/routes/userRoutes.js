const { Router } = require("express");

const userRouter = Router();

const { getAllUsers, getUser, postUser, deleteUser } = require("../controllers/userController");

userRouter.get("/", getAllUsers);
userRouter.get("/:idUser", getUser);
userRouter.post("/", postUser); 
userRouter.delete("/:idUser", deleteUser); 

module.exports = userRouter;