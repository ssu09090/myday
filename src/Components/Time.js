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