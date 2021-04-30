const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session')
const router = require('./routes');
const db = require('./config/db');
const app = express();


// view engine setup
app.engine('hbs', handlebars({
  extname: '.hbs',
  partialsDir: [
    'views/partials/admin',
    'views/partials/client'
  ],
  helpers: {
    equal: (a, b) => {
      return a !== b;
    },
    than: (a, b) => {
      return a > b;
    },
    minus: (a, b) => {
      return a - b;
    },
    for: (a, b) => {
      var list = [];
      var more = false;
      for (let index = a; index <= b; index++) {
        if (index > (a + 2) && index <= (b - 3)) {
          if (more) {
            continue;
          } else {
            list.push("...");
            more = true;
          }

        } else {
          list.push(index);
        }
      }
      return list;
    }
  }
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'private pass',
  cookie: { maxAge: 600000000 },
  resave: false,
  saveUninitialized: true,
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
// connect db 
db.connect();

router(app);

module.exports = app;
