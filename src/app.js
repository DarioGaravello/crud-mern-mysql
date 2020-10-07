import express from 'express';
import session from 'express-session';
import MySQLStore from 'express-mysql-session';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import flash from 'connect-flash';
import passport from 'passport';
import todos from './routes/app.routes';
import auth from './routes/auth.routes';
import { database } from './keys';
import './database';
import './libs/passport';
const app = express();

//Middleware
app.use(session({
    secret: 'daromysqlcount',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

//Global variables
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.user = req.user;
    next();
});

//Routes
app.use('/api', todos);
app.use('/', auth);

//Static files
app.use(express.static(path.resolve(__dirname, '../frontend/dist')));
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'), err => {
        if(err){
            res.status(500).send(err);
        }
    });
});

export default app;