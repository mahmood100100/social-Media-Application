import api from './ApiConfig';
import { UserData } from '../DataTypes/UserType';

export const fetchUser = async (id : number): Promise<UserData> => {
    try {
        const response = await api.get(`/users/${id}`);
        const userData: UserData = response.data.data;
        return userData;
    } catch (error) {
        throw "Error fetching this user, please try again";
    }
};
