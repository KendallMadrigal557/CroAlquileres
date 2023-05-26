import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

const departmentService = {
    createDepartment: async (departmentData, imageFile) => {
        try {
            const formData = new FormData();
            formData.append('image', imageFile);
            for (const key in departmentData) {
                formData.append(key, departmentData[key]);
            }
            const response = await axios.post(`${BASE_URL}/department`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                throw error.response.data.message;
            } else {
                throw error.message;
            }
        }
    },
    getDepartments: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/department`);
            return response.data;
        } catch (error) {
            throw error.response.data.message;
        }
    },
    getDepartmentById: async (departmentId) => {
        try {
            const response = await axios.get(`${BASE_URL}/department/${departmentId}`);
            return response.data;
        } catch (error) {
            throw error.response.data.message;
        }
    },
    updateDepartment: async (departmentId, departmentData) => {
        try {
            const response = await axios.put(`${BASE_URL}/department/${departmentId}`, departmentData);
            return response.data;
        } catch (error) {
            throw error.response.data.message;
        }
    },
    deleteDepartment: async (departmentId) => {
        try {
            const response = await axios.delete(`${BASE_URL}/department/${departmentId}`);
            return response.data;
        } catch (error) {
            throw error.response.data.message;
        }
    }
};

export default departmentService;
