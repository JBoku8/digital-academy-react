import axios from "axios";
import { loginUrl, registerUrl, AUTH_TOKEN } from "./auth.constants";
import { removeValue } from "./localStorage";

export const login = async (credentials) => {
  try {
    const response = await axios.post(loginUrl, credentials);
    return response.data;
  } catch (error) {
    console.group("LOGIN ERROR");
    console.trace(error);
    console.groupEnd();
  }
};

export const register = async (credentials) => {
  try {
    const response = await axios.post(registerUrl, credentials);
    return response.data;
  } catch (error) {
    console.group("REGISTER ERROR");
    console.trace(error);
    console.groupEnd();
  }
};

export const logOut = () => {
  removeValue(AUTH_TOKEN);
};
