import { useEffect, useState } from "react";

const Weather = () => {
  const API_KEY = "a979a13bc0bd210878acc69bd4984cba";
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("위치 정보를 지원하지 않는 브라우저입니다");
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`;
      // console.log(URL);
      //fetch API : 브라우저 내장함수, 외부에 요청을 보내고, 응답을 받을 수 있음
      fetch(URL)
        .then((res) => {
          if (!res.ok) throw new Error("데이터 요청 실패");
        return res.json();
      })
        .then((data) => {
          setWeather(data);
          setLoading(false);
        })
        .catch(() => {
          setError("날씨 데이터를 불러오는데 실패했습니다");
          setLoading(false);
        });
    },
    (err) => {
      if (err.code === err.PERMISSION_DENIED) {
        setError("위치 접근 권한이 거부되었습니다.");
      } else if (err.code === err.POSITION_UNAVAILABLE) {
        setError("위치 정보를 사용할 수 없습니다.");
      } else if (err.code === err.TIMEOUT) {
        setError("위치 정보를 가져오는 데 시간이 너무 오래 걸렸습니다.");
      } else {
        setError("위치 정보를 불러올 수 없습니다.");
      }
      setLoading(false);
    }
  );
  }, []);
  return (
    <div className="weather">
      {loading && <h3>로딩 중...</h3>}
      {error && <h3 className="error">{error}</h3>}
      {weather && (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          />
          <h3>{weather.name}</h3>
          <h3>온도 : {Math.round(weather.main.temp)}°C</h3>
          <h3>날씨 : {weather.weather[0].description}</h3>
        </>
      )}
    </div>
  );
};

export default Weather;

//a979a13bc0bd210878acc69bd4984cba
