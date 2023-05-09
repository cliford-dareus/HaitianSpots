export const getUserFromLocalStorage = () => {
  if (localStorage.getItem("User") !== null) {
    return JSON.parse(localStorage.getItem("User"));
  } else {
    return {};
  }
};
