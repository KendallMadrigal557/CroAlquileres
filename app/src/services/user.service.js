/* eslint-disable */
class UserService {
    constructor() {
        this.baseUrl = 'http://localhost:3001/api';
    }
/* eslint-enable */

    async createUser(user) {
        try {
            const response = await fetch(`${this.baseUrl}/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }

    async getUsers() {
        try {
            const response = await fetch(`${this.baseUrl}/user`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error getting users:', error);
            throw error;
        }
    }

    async getUserById(id) {
        try {
            const response = await fetch(`${this.baseUrl}/user/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error getting user with ID ${id}:`, error);
            throw error;
        }
    }

    async updateUser(id, user) {
        try {
            const response = await fetch(`${this.baseUrl}/user/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error updating user with ID ${id}:`, error);
            throw error;
        }
    }

    async deleteUser(id) {
        try {
            const response = await fetch(`${this.baseUrl}/user/${id}`, {
                method: 'DELETE'
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error deleting user with ID ${id}:`, error);
            throw error;
        }
    }
}

export default UserService;