const baseURL =
  process.env.REACT_APP_ENV === "development"
    ? ""
    : process.env.REACT_APP_BASE_URL;

export default baseURL;
