import axios from "axios";
export const AuthenticateSignup = async (data) => {
  try {
    const url = "https://flipkart-1-sw9k.onrender.com/signup";
    return await axios.post(url,data);
  } catch (error) {
    console.log("error while calling signup api", error);
  }
};

export const AuthenticateLogin = async (Data) => {
    try {
      const url = "https://flipkart-1-sw9k.onrender.com/login";
      return await axios.post(url,Data);
    } catch (error) {
      console.log("error while calling login api", error);
      return error.responce
    }
  };