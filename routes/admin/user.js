const express = require('express');
const router = express.Router();
const userController = require('../../controllers/admin/user.controller');
const accountMiddleware = require('../../middleware/admin/account.middleware');
const permissionMiddleware = require('../../middleware/admin/permission.middleware');

/* GET create user page. */ 
router.get('/create-user',accountMiddleware.requiredLogin,permissionMiddleware(['1','6']), userController.createUser);
router.post('/create-user',permissionMiddleware(['1','6']), userController.postCreateUser);

// GET detail user page
router.get('/:userID/detail',accountMiddleware.requiredLogin,permissionMiddleware(['1','6']), userController.detailUser);

//GET edit user page
router.get('/:userID/edit',accountMiddleware.requiredLogin,permissionMiddleware(['1','6']), userController.editUser);

// PUT edit user page
router.put('/:userID/edit',permissionMiddleware(['1','6']), userController.putEditUser);

// GET delte user page
router.get('/:userID/delete',accountMiddleware.requiredLogin,permissionMiddleware(['1','6']), userController.getDeleteUser);

// DELETE delete user page
router.delete('/:userID/delete',permissionMiddleware(['1','6']), userController.deleteUser);

/* GET user page. */ 
router.get('/',accountMiddleware.requiredLogin,permissionMiddleware(['1','6']), userController.index);

module.exports = router;