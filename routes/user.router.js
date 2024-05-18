import express from 'express';

const router = express.Router();


//import from controllers-------->
import { getAllUsers } from '../controllers/user.controller.js';
import { getOneUser } from '../controllers/user.controller.js';
import { createUser } from '../controllers/user.controller.js';
import { updateUser } from '../controllers/user.controller.js';
import { deleteUser } from '../controllers/user.controller.js';

// Get all users
router.get('/',getAllUsers );
// Get one user
router.get('/:id', getOneUser);
// Create a user
router.post('/',createUser);
// Update a user
router.put('/:id',updateUser);
// Delete a user
router.delete('/:id',deleteUser);

export default router;
