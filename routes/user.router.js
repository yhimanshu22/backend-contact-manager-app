import express from 'express';

const router = express.Router();


//import from controllers-------->
import { registerUser} from '../controllers/user.controller.js';
import { loginUser } from '../controllers/user.controller.js';
import { currentUser } from '../controllers/user.controller.js';

// register of user
router.post('/register',registerUser );
// login of user
router.post('/login', loginUser);
// current login user
router.post('/current',currentUser);


export default router;
