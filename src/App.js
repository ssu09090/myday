import { useEffect, useState } from "react";
import Time from "./Components/Time";
import "./App.scss";
import LoginForm from "./Components/LoginForm";
import MainPage from "./Components/MainPage";
import Weather from "./Components/Weather";

// import bgImg from "./images/beach.jpg";

const App = () => {
  const USER_KEY = "user_name";
  const [user, setUser] = useState("");

  const handleLogin = (data) => {
    localStorage.setItem(USER_KEY, data);
    setUser(data);
  };
  const handleLogout = () => {
    localStorage.removeItem(USER_KEY);
    setUser("");
  };

  useEffect(() => {
    const saved = localStorage.getItem(USER_KEY);
    if (saved) {
      setUser(saved);
    }
    //배경모드
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      setMode(savedMode);
    }
    // 새로고침할 때 랜덤 이미지
    if (savedMode === "random" || !savedMode) {
      const random = Math.floor(Math.random() * imageCount) + 1;
      setCurrentBgimg(random);
    }
  }, []);

  //배경랜덤이미지
  const [currentBgimg, setCurrentBgimg] = useState(1);
  const imageCount = 3;
  //배경모드
  const [mode, setMode] = useState("random");

  //모드변경
  useEffect(() => {
    localStorage.setItem("mode", mode);

    if (mode === "dark") {
      document.body.style.backgroundColor = "#222222";
      document.body.style.color = "#eeeeee";
    } else if (mode === "white") {
      document.body.style.backgroundColor = "#eeeeee";
      document.body.style.color = "#222222";
    } else {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    }
  }, [mode]);

  // 자동 이미지 변경 useEffect
  useEffect(() => {
    let interval;
    if (mode === "random") {
      interval = setInterval(() => {
        const random = Math.floor(Math.random() * imageCount) + 1;
        setCurrentBgimg(random);
      }, 30000);
    }

    // cleanup 함수 - 컴포넌트 언마운트 시 interval 정리
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [mode, imageCount]);

  //랜덤이미지
  const getBgImage = () => {
    const random = Math.floor(Math.random() * imageCount) + 1;
    setCurrentBgimg(random);
    setMode("random");
  };
  // 다크모드
  const setDarkMode = () => {
    setMode("dark");
  };
  // 화이트모드
  const setWhiteMode = () => {
    setMode("white");
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage:
          mode === "random"
            ? `url(${process.env.PUBLIC_URL}/images/bgimg_${currentBgimg}.jpg)`
            : "none",
        ...(mode === "random" && {
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
        }),
      }}
    >
      <div className="btn-mode">
        <button
          onClick={setDarkMode}
          className={`dark ${mode === "dark" ? "selected" : ""}`}
        ></button>
        <button
          onClick={setWhiteMode}
          className={`white ${mode === "white" ? "selected" : ""}`}
        ></button>
        <button
          onClick={getBgImage}
          className={`random ${mode === "random" ? "selected" : ""}`}
        ></button>
      </div>
      <Weather />
      {/* <img src={bgImg} alt="bgimg2" /> */}
      <div className={user ? "logged-in" : "center"}>
        <Time />
        {user ? (
          <MainPage user={user} onLogout={handleLogout} />
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default App;
