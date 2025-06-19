import { useEffect, useState } from "react";

const Time = () => {
  const [time,setTime] = useState(new Date());
  useEffect(()=>{
    const intervalID= setInterval(() => {
      setTime(new Date());
    }, 1000);
    const closeEffect=()=>{
      clearInterval(intervalID);
    }
    return closeEffect;
  },[])
  return (
    <div className="time">
      <p>
        {time.toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        })}
      </p>
      {time.toLocaleTimeString("ko-KR")}
      {/* {time.toLocaleTimeString('en-US',{
        hour: '2-digit',
        minute: '2-digit',
        hour12:false
      })} */}
    </div>
  );
};

export default Time;