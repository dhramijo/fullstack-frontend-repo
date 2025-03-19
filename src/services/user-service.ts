import axios from 'axios';
import config from '../config/config';

interface User {
    name: string;
    email: string;
}

export const getAllUsers = async () => {
    return await axios.get(`${config.API_URL + "/users"}`);
};

export const getUserById = async (id: string) => {
    return await axios.get(`${config.API_URL + "/users"}/${id}`);
};

export const createUser = async (user: User) => {
    return await axios.post(`${config.API_URL + "/users"}`, user);
};

export const updateUser = async (id: string, user: User) => {
    return await axios.put(`${config.API_URL + "/users"}/${id}`, user);
};

export const deleteUser = async (id: string) => {
    return await axios.delete(`${config.API_URL + "/users"}/${id}`);
};
