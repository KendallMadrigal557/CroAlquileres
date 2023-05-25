const express = require('express');
const router = express.Router();
const cors = require('cors');
const multer = require('multer');

const departmentSchema = require('../models/department.model')

const multerConfig = require('../config/multerConfig');

router.use(cors());

function validateDepartentData(req, res, next) {
    const { place, price, rooms, location, features, status, description, services } = req.body;
    const allowedExtensions = ['jpg', 'png', 'jpeg'];
    const fileExtension = req.file && req.file.originalname.split('.').pop();

    if (!place || !price || !rooms || !location || !features || !status || !description || !services) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
        return res.status(400).json({ message: 'El formato del archivo no es válido. Se permiten solo archivos JPG, PNG y JPEG.' });
    }

    next();
}

router.post('/department', multerConfig.single('image'), validateDepartentData, (req, res) => {
    const department = new departmentSchema({
        place: req.body.place,
        price: req.body.price,
        rooms: req.body.rooms,
        location: req.body.location,
        features: req.body.features,
        status: req.body.status,
        description: req.body.description,
        services: req.body.services,
        image: req.file.filename
    });

    department
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todos los departamentos
router.get('/department', (req, res) => {
    departmentSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


// Obtener un departamento por su ID
router.get('/department/:id', (req, res) => {
    const { id } = req.params;
    departmentSchema
        .findById(id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: 'Departamento no encontrado.' });
            }
            res.json(data);
        })
        .catch((error) => res.json({ message: error }));
});

// Actualizar un departamento por su ID
router.put('/department/:id', validateDepartentData, (req, res) => {
    const { id } = req.params;
    const { place, price, rooms, location, features, status, description, services } = req.body;
    departmentSchema
        .findByIdAndUpdate(id, { $set: { place, price, rooms, location, features, status, description, services } }, { new: true })
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: 'Departamento no encontrado.' });
            }
            res.json(data);
        })
        .catch((error) => res.json({ message: error }));
});

// Eliminar un departamento por su ID
router.delete('/department/:id', (req, res) => {
    const { id } = req.params;
    departmentSchema
        .findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: 'Departamento no encontrado.' });
            }
            res.json(data);
        })
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
