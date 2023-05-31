const departmentSchema = require('../models/department.model');

function validateDepartmentData(req, res, next) {
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

function createDepartment(req, res) {
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
}


function getDepartments(req, res) {
    departmentSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

function getDepartmentById(req, res) {
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
};

function updateDepartment(req, res) {
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
};

function deleteDepartment(req, res) {
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
};

module.exports = {
    validateDepartmentData,
    createDepartment,
    getDepartments,
    getDepartmentById,
    updateDepartment,
    deleteDepartment,
};