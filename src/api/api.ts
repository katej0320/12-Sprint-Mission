import axios from "axios";

const API_BASE_URL = "https://panda-market-api.vercel.app";

export const loginUser = async (email: string, password: string) => {
    const response = await axios.post (`${API_BASE_URL}/auth/login`,{
        email,
        password,
    });
    return response.data;
};