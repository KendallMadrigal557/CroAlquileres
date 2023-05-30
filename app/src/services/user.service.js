import axios from 'axios';
require('dotenv').config();

const BASE_URL = `${SERVER_HOST}/api`;

class UserService {
    constructor() {
        this.baseUrl = BASE_URL;
    }

    async createUser(user) {
        try {
            const response = await axios.post(`${this.baseUrl}/user`, user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }

    async getUsers() {
        try {
            const response = await axios.get(`${this.baseUrl}/user`);
            return response.data;
        } catch (error) {
            console.error('Error getting users:', error);
            throw error;
        }
    }

    async getUserById(id) {
        try {
            const response = await axios.get(`${this.baseUrl}/user/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error getting user with ID ${id}:`, error);
            throw error;
        }
    }

    async updateUser(id, user) {
        try {
            const response = await axios.put(`${this.baseUrl}/user/${id}`, user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error(`Error updating user with ID ${id}:`, error);
            throw error;
        }
    }

    async deleteUser(id) {
        try {
            const response = await axios.delete(`${this.baseUrl}/user/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting user with ID ${id}:`, error);
            throw error;
        }
    }
}

export default UserService;
