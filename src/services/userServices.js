import UpdateUser from '../components/UpdateUser';
import { instance , protectedInstance} from '../services/instance'

const userServices = {
    Register: async (userName, email, phoneNumber, location, password) => {
        return await instance.post('users/register', { userName, email, password, phoneNumber, location });
    },

    LogIn: async (email, password) => {
        const response = await protectedInstance.post("/users/login", { email, password });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response;
    },

    //get the current user
    GetMe : async () => {
        return await protectedInstance.get('/users/me');
    },

    Logout : async () => {
        try {
          await protectedInstance.post("/users/logout");
          // Clear any local storage items if needed
          localStorage.removeItem('token');
        } catch (error) {
          console.error('Logout error:', error);
          throw error;
        }
      },

    UpdateUser : async (userName, email, phoneNumber, location) => {
        const response = await protectedInstance.put('/users/updateUser', { userName, email, phoneNumber, location });
        return response;
    },

    getAllUsers : async () => {
        const response = await protectedInstance.get('/users/getAllUsers');
        return response;
    }
}

export default userServices