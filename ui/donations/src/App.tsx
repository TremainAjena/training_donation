import './App.css'
import Router from './containers/routes'
import { useState, useEffect } from 'react'
import AuthContext from './context/auth';
import TokenUtils from './utils/token';


function App() {
  const [user, setUser] = useState();
  const jwt = TokenUtils.getUser();

  useEffect(() => {
    if (jwt) {
      setUser(jwt)
      console.log(jwt)
    } else {
      console.log('nope')
    }
  }, [])

  const login = async (userData: string) => {
    setUser(userData);
    await TokenUtils.setUser(userData);
  };

  const logout = async () => {
    setUser(null);
    await TokenUtils.logout();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Router />
    </AuthContext.Provider>

  )
}

export default App
