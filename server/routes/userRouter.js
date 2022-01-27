// const express = require("express"); 
// const userController = require('../controllers/users.controller')
// const userRouter = express.Router();

// userRouter.get('/', userController.getAll);
// userRouter.post('/', userController.addUser);
// userRouter.delete('/:id', userController.deleteUser);

// module.exports = userRouter;


const express = require('express') 
const checkRole = require('../models/checkRole') 
const userController = require('../controllers/users.controller') 
const userRouter = express.Router(); 
 
userRouter.get('/', userController.getAll); 
userRouter.post('/', checkRole('admin'),userController.addUser);  //! checkRole('admin'), для проверки на роль
userRouter.delete('/:id',userController.deleteUser); 
 
module.exports = userRouter;