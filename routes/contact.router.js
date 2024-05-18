import express from 'express';
import { createContact, deleteContact, getAllContacts, getOneContact, updateContact } from '../controllers/contact.controller.js';

const router = express.Router();


//routes--------->

// Get all users
router.get('/',getAllContacts);
// Get one user
router.get('/:id', getOneContact);
// Create a user
router.post('/',createContact);
// Update a user
router.put('/:id',updateContact);
// Delete a user
router.delete('/:id',deleteContact);

export default router;