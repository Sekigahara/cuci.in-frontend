export const setToken = (token) => {
    localStorage.setItem("TOKEN", token);
};

export const getToken = () => {
    return localStorage.getItem("TOKEN");
};

export const login = (user) => {
    localStorage.setItem("USER", user);
};
  
export const logout = () => {
    localStorage.removeItem("USER");
};
  
export const user = () => {
    return localStorage.getItem("USER");
};
  
export const isLogin = () => {
    if (localStorage.getItem("USER")) {
        return true;
    }
    return false;
};