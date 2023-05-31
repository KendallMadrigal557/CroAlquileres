import axios from 'axios';
import { urlServer } from '../config/config';

class departmentService {
    constructor() {
        this.baseUrl = urlServer;
    }

    async createDepartment(departmentData, imageFile) {
        try {
            const formData = new FormData();
            formData.append('image', imageFile);
            for (const key in departmentData) {
                formData.append(key, departmentData[key]);
            }
            const response = await axios.post(`${urlServer}/department`, formData, {
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
    }

    async getDepartments() {
        try {
            const response = await axios.get(`${urlServer}/department`);
            return response.data;
        } catch (error) {
            throw error.response.data.message;
        }
    }

    async getDepartmentById(departmentId) {
        try {
            const response = await axios.get(`${urlServer}/department/${departmentId}`);
            return response.data;
        } catch (error) {
            throw error.response.data.message;
        }
    }

    async updateDepartment(departmentId, departmentData) {
        try {
            const response = await axios.put(`${urlServer}/department/${departmentId}`, departmentData);
            return response.data;
        } catch (error) {
            throw error.response.data.message;
        }
    }

    async deleteDepartment(departmentId) {
        try {
            const response = await axios.delete(`${urlServer}/department/${departmentId}`);
            return response.data;
        } catch (error) {
            throw error.response.data.message;
        }
    }
}

export default departmentService;
