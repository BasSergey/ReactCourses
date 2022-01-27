const express = require('express') 
const computerController = require('../controllers/computer.controller')
const computerRouter = express.Router(); 

 
computerRouter.get('/', computerController.getAll); 
computerRouter.post('/', computerController.addComputer);  //! checkRole('admin'), для проверки на роль
computerRouter.put('/', computerController.updateComputer)
computerRouter.delete('/:id',computerController.deleteComputer); 
 
module.exports = computerRouter;