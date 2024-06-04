import api from "./ApiConfig";

interface RegistrationResponse {
  data?: string;
  errors?: any;
}

interface loginData {
  username: string;
  password: string;
}

export const AddUser = async (data: FormData): Promise<RegistrationResponse> => {
  try {
    await api.post(
      `/register`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }
    );

    return { data: "Account created successfully" };

  } catch (error: any) {
    if (error.response) {
      const errorsBox = error.response.data;
      if (errorsBox.errors) {
        return errorsBox;
      } else {
        return { errors: { network: "An error occurred. Please try again later." } };
      }
    } else {
      return { errors: { network: "An error occurred. Please try again later." } };
    }
  }
};

export const userLogin = async (data: loginData) => {
  try {
    const response = await api.post(`/login`, data);
    return { data: response.data };
  } catch (error: any) {
    if (error.response) {
      return { error: error.response.data.message };
    } else {
      return { error: "An error occurred. Please try again later." };
    }
  }
};