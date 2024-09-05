import { jwtDecode } from "jwt-decode";

const getUser = () => {
  return localStorage.getItem("user");
};

const setUser = (jwt: any) => {
  return localStorage.setItem("user", jwt);
};

const logout = () => {
  localStorage.removeItem("user");
};

const decodeJWT = (jwt: any) => {
  return jwtDecode(jwt);
};

const isTokenValid = () => {
  const jwt = getUser() ;
  if (jwt) {
    const data = jwtDecode(jwt)
    if (data) {
      console.log('Token is Valid!');
      return isTokenExpired(jwt);
    }
    else {
      console.log('Token is NOT Valid!');
      return false
    }
  }
  else {
    console.log('Token is NOT Valid!');
    return false;
  }
  console.log(jwt);
};

const isTokenExpired = (token: any) => {
  const jwt = jwtDecode(token) as any;
  const currentTime = new Date().getTime() / 1000;
  return currentTime > jwt.exp;
};

const TokenUtils = {
  getUser,
  setUser,
  logout,
  decodeJWT,
  isTokenValid,
  isTokenExpired
};

export default TokenUtils;









