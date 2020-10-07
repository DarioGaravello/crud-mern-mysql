import passport from 'passport';
import localStrategy from 'passport-local';
import pool from '../database-mysql';
import encrypt from '../libs/encrypt';

const Strategy = localStrategy.Strategy;

passport.use('local.signin', new Strategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if(rows.length > 0){
        const user = rows[0];
        const validPassword = await encrypt.cryptCompare(password, user.password)
        if(validPassword){
            done(null, user);
        } else {
            done(null, false, req.flash('message', 'Incorrect password'));
        }
    } else {
        return done(null, false, req.flash('message', 'The username does not exists'));
    }
}));

passport.use('local.signup', new Strategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const { firstname, lastname } = req.body
    const newUser = {
        username,
        password,
        fullname: `${firstname} ${lastname}`
    };
    newUser.password = await encrypt.cryptPassword(password);
    const result = await pool.query('INSERT INTO users SET ?', [newUser]);
    newUser.id = result.insertId;
    return done(null, newUser);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser( async(id, done) => {
    const rows = await pool.query('SELECT * FROM users WHERE id = ?', [id])
    done(null, rows[0]);
});