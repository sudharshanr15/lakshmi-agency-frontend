import { showToast } from "@/utils/showToast";
import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = "https://test01.lakshmiagency.com/api/method";

let config = {
  method: "",
  maxBodyLength: Infinity,
  url: "",
  headers: {
    "X-Client-ID": "9d8766a37d",
    "X-Client-Secret": "193e43d76d",
    "X-Device-ID": "847ryhvnksdz",
    "X-Device-Name": "S 20",
    "Content-Type": "application/json",
  },
  data: {},
};

// SIGNUP
export const signUp = async (body) => {
  config.method = "POST";
  config.data = body;
  config.url = baseUrl + "/libnext.auth.signup";
  console.log(config);

  axios
    .request(config)
    .then((res) => {
      console.log(res.data);
      console.log("Signed in successfully");
      setAuthState("login");
    })
    .catch((err) => {
      console.log("Sign up failed");
      console.log(err.response.data.message);
    });
};

// LOGIN
export const login = async (body, setTempID, setAuthState) => {
  config.method = "POST";
  config.data = body;
  config.url = baseUrl + "/libnext.auth.login";
  // console.log(config);

  axios
    .request(config)
    .then((res) => {
      const data = res.data.data;
      console.log(data);
      setTempID(data.temp_id);
      console.log(res.data.message);
      setAuthState("OTP");
      //  GO TO OTP PAGE
    })
    .catch((err) => {
      console.log("Login failed");
      console.log(err);
      showToast(
        toast,
        "error",
        err.response.data.message || "Something went wrong"
      );
    });
};

// OTP
export const OTPSubmit = async (body, router) => {
  config.method = "POST";
  config.data = body;
  config.url = baseUrl + "/libnext.auth.verify";
  // console.log(config);
  // refreshToken();

  axios
    .request(config)
    .then((res) => {
      const data = res.data.data;
      // console.log(data);
      const accessToken = data.access_token;
      const refreshToken = data.refresh_token;
      sessionStorage.setItem("access_token", accessToken);
      sessionStorage.setItem("refresh_token", refreshToken);

      //  GO TO HOMEPAGE PAGE
      router.push("/dashboard");
    })
    .catch((err) => {
      console.log(err);
      showToast(
        toast,
        "error",
        err.response.data.message || "Something went wrong"
      );
    });
};

export const refreshToken = async () => {
  const refreshToken = sessionStorage.getItem("refresh_token");
  const accessToken = sessionStorage.getItem("access_token");

  config.method = "POST";
  config.data = {
    refresh_token: refreshToken,
    expires_in: "3600",
    scopes: "all openid",
  };
  config.url = baseUrl + "/libnext.auth.refresh";
  config.headers.Authorization = "Bearer " + accessToken;
  console.log(config);

  // axios
  //   .request(config)
  //   .then((res) => {
  //     const data = res.data.data;
  //     console.log(data);
  //     //  GO TO HOMEPAGE PAGE
  //   })
  //   .catch((err) => {
  //     console.log("Login failed");
  //     console.log(err);
  //   });
};
