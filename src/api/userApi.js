import axiosClient from './axiosClient';

const userApi = {
  async register(data) {
    const url = '/auth/local/register';
    return await axiosClient.post(url, data);
  },
};

export default userApi;
