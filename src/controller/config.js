export const baseUrl = "https://test01.lakshmiagency.com/api/method";

let accessToken = "";
if (typeof window !== "undefined") {
  // Perform localStorage action
  accessToken = sessionStorage.getItem("access_token");
}
export let config = {
  method: "",
  maxBodyLength: Infinity,
  url: "",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessToken,
  },
};
