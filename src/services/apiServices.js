import axios from "../utils/axiosCustomize"
const postCreateNewUser = (email, password, username, role, image) => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('username', username);
    formData.append('role', role);
    formData.append('userImage', image);
    return axios.post('api/v1/participant', formData);
}


const getAllUsers = () => {
    return axios.get('api/v1/participant/all');
}
const deleteUser = (user_id) => {
    return axios.delete('api/v1/participant', { data: { id: user_id } });
}
const putUpdateUser = (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append("role", role);
    data.append("image", image)
    return axios.put('api/v1/participant', data);
}
const getUsersPageginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}
const postLogin = (email, password) => {
    return axios.post('api/v1/login', { email, password })
}
const postSignup = (email, username, password) => {
    return axios.post('api/v1/register', { email, username, password });
}
export { postCreateNewUser, getAllUsers, putUpdateUser, deleteUser, getUsersPageginate, postLogin, postSignup }
