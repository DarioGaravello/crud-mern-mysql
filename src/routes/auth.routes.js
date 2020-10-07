import { Router } from 'express';
import * as auth from '../controllers/auth.controllers';
import { isLogged, isNotLogged } from '../libs/auth';
const router = Router();

router.post('/signup', isNotLogged, auth.SignUp);

router.get('/logout',isLogged, auth.Logout);

router.post('/signin', isNotLogged, auth.SignIn)

router.get('/profile', isLogged);

router.get('/profile/access', (req, res) => {
    if(req.user){
        return res.send(req.user);
    }else{
        return false
    };
})

router.get('/signin', isNotLogged)

router.get('/signup', isNotLogged)

export default router;