const indexRouter = require('./client/index');
const productRouter = require('./client/product');
const accountRouter = require('./client/account');
const cartRouter = require('./client/cart');
const indexAdRouter = require('./admin/index');
const productAdRouter = require('./admin/product');
const categoryAdRouter = require('./admin/category');
const cartAdRouter = require('./admin/cart');
const userAdRouter = require('./admin/user');
const authAdRouter = require('./admin/auth');
const searchController = require('../controllers/client/search.controller');
// const adminMiddleware = require('../middleware/admin/account.middleware');
function router(app){
  //app.use(adminMiddleware.requiredLogin);
  //router admin
  app.use('/admin', indexAdRouter);
  app.use('/admin', authAdRouter);
  app.use('/admin/product',  productAdRouter);
  app.use('/admin/category',  categoryAdRouter);
  app.use('/admin/order', cartAdRouter);
  app.use('/admin/user', userAdRouter);

  //router client
  app.get('/search', searchController);
  app.use('/account', accountRouter);
  app.use('/', indexRouter);
  app.use('/', cartRouter);
  app.use('/', productRouter);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
}
module.exports = router;