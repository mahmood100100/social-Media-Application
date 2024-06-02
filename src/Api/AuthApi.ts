import axios from "axios";
import { BaseApiUrl } from "./ApiConfig";
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
      `${BaseApiUrl}/register`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }
    );
    
    return { data: "account created successfully" };

  } catch (error: any) {
    
    if (error.response) {
      const errorsBox = error.response.data;
      if(errorsBox.errors) {
        console.log(errorsBox.errors)
        return errorsBox
      }
      else {
        return { errors: { network: "An error occurred. Please try again later." } };
      }
    } else {
      return { errors: { network: "An error occurred. Please try again later." } };
    }
  }
};


export const userLogin = async (data: loginData) => {
  try {
    const response = await axios.post(`${BaseApiUrl}/login`, data);
    return { data: response.data };
  } catch (error : any) {
    if (error.response) {
      return { error: error.response.data.message };
    } else {
      return { error: "An error occurred. Please try again later." };
    }
  }
};

