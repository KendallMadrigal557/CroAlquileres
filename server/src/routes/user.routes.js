const express = require('express');
const router = express.Router();
const cors = require('cors');
const multer = require('multer');

const userSchema = require('../models/user.model')

const multerConfig = require('../config/multerConfig');

router.use(cors());

function validateUserData(req, res, next) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'El correo electrónico no tiene un formato válido.' });
    }

    next();
}


router.post('/user', validateUserData, (req, res) => {
    const user = new userSchema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get('/user', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


router.get('/user/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: 'Usuario no encontrado.' });
            }
            res.json(data);
        })
        .catch((error) => res.json({ message: error }));
});

router.put('/user/:id', validateUserData, (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    userSchema
        .findByIdAndUpdate(id, { $set: { name, email, password } }, { new: true })
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: 'Usuario no encontrado.' });
            }
            res.json(data);
        })
        .catch((error) => res.json({ message: error }));
});

router.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: 'Usuario no encontrado.' });
            }
            res.json(data);
        })
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
