import axios from "axios";

interface RegistrationResponse {
  data?: string ; 
  errors?: any; 
}

interface loginData {
    username: string;
    password: string;
}

export const AddUser = async (data: FormData): Promise<RegistrationResponse> => {
  try {
    await axios.post(
      `${import.meta.env.VITE_BASE_API_URL}/register`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }
    );
    
    return { data: "account created successfully" };

  } catch (error: any) {
    
    if (axios.isAxiosError(error) && error.response) {
      const errors = error.response.data;
      return { errors };
    } else {
      return { errors: { network: "An error occurred. Please try again later." } };
    }
  }
};


export const userLogin = async (data: loginData) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/login`, data);
    return { data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { error: error.response.data.message };
    } else {
      return { error: "An error occurred. Please try again later." };
    }
  }
};

