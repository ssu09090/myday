import { useEffect, useState } from "react";
import Time from "./Components/Time";
import "./App.scss";
import LoginForm from "./Components/LoginForm";
import MainPage from "./Components/MainPage";

const App = () => {
  const USER_KEY = "user_name";
  const [user, setUser] = useState("");
  useEffect(() => {
    const saved = localStorage.getItem(USER_KEY);
    if (saved) {
      setUser(saved);
    }
  }, []);
  const handleLogin = (data) => {
    localStorage.setItem(USER_KEY, data);
    setUser(data);
  };
const handleLogout = ()=>{
  localStorage.removeItem(USER_KEY);
  setUser('');
}
  return (
    <div className="app">
      <Time />
      {user ? <MainPage user={user} onLogout={handleLogout}/> : <LoginForm onLogin={handleLogin} />}
    </div>
  );
};

export default App;
