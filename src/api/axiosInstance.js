import axios from "axios";

const axiosInstance = axios.create({
  //   baseURL: "https://api.openweathermap.org",
  timeout: 5000,
});

// response interceptors
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("response received!");
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;
      let errMsg = "";
      if (status == 401) {
        errMsg =
          "Invalid API Key! Please check your openweather api configuration.";
      } else if (status == 404) {
        errMsg = "Invalid Input! Try again with another input.";
      } else if (status == 500) {
        errMsg = "Server Errror!";
      } else if (error.request) {
        errMsg =
          "Weather service is temporarily unavailable. Please try again after sometime.";
      } else {
        console.log("Error: " + error.message);
      }
      errMsg && console.log(errMsg);
      error.msg = errMsg;
      return Promise.reject(error);
    }
  },
);

export default axiosInstance;
