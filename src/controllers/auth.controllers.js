import passport from 'passport';

export const SignUp = (req, res, next) => {
    passport.authenticate('local.signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    })(req, res, next);
};

export const Logout = (req, res) => {
    req.logOut();
    res.redirect('/');
};

export const SignIn = (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
};