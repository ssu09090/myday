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
          if (!res.ok) {
            setError("데이터 요청 실패");
          }
          return res.json();
        })
        .then((data) => {
          setWeather(data);
          setLoading(false);
        })
        .catch((err) => {
          setError("날씨 데이터를 불러오는데 실패했습니다");
          setLoading(false);
        });
    });
  }, []);
  return (
    <div className="weather">
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
