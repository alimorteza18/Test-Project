import http from "./httpService";

export const URL = 'https://api.escuelajs.co/api/v1';

// Login User
export const login = (user) => {
    const url = `${URL}/auth/login`;
    return http.post(url, user);
  };

  // Get User
  export const getUserProfile = () => {
    const url = `${URL}/auth/profile`;
    return http.get(url)
  }

  // Get Products
  export const getProducts = () => {
    const url = `${URL}/products`;
    return http.get(url);
  }

  //Get Product
  export const getProduct = (id) =>{
    const url = `${URL}/products/${id}`;
    return http.get(url);
  }