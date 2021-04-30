const express = require('express');
const router = express.Router();
const categoryController = require('../../controllers/admin/category.controller');
const accountMiddleware = require('../../middleware/admin/account.middleware');
const permissionMiddleware = require('../../middleware/admin/permission.middleware');
/* Post create category page. */ 
router.post('/create',permissionMiddleware(['1','5']), categoryController.postCreateCategry);

/* PUT edit category page. */ 
router.put('/edit/:slug',permissionMiddleware(['1','5']), categoryController.putEditCategory);

/* DELETE  category page. */ 
router.delete('/delete/:slug',permissionMiddleware(['1','5']), categoryController.deleteCategory);

/* GET category page. */ 
router.get('/',accountMiddleware.requiredLogin,permissionMiddleware(['1','5']), categoryController.index);

module.exports = router;