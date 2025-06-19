import { useEffect, useState } from "react";

const quotes = [
  "오늘 걷지 않으면 내일은 뛰어야 한다.",
  "할 수 있다고 믿는 사람이 결국 해낸다.",
  "성공은 준비와 기회의 만남이다.",
  "계속 가라. 아무리 느려도 멈추지 마라.",
  "지금 이 순간이 가장 소중한 시간이다.",
  "작은 습관이 큰 변화를 만든다.",
  "시작이 반이다.",
  "포기하지 마라. 포기는 습관이 된다.",
  "불가능해 보여도 도전하라",
  "실패는 성공으로 가는 길이다. ",
  "노력은 절대 배신하지 않는다.",
  "천재는 1%의 영감과 99%의 노력이다.",
  "꿈을 이루고 싶다면 먼저 잠부터 깨라.",
  "오늘의 나는 어제의 나보다 더 나은 사람이다.",
  "공부는 고통이 아니라 성장이다.",
  "지금 힘든 것은 미래의 나를 위한 투자다.",
  "남들이 놀 때 공부하는 사람이 결국 웃는다.",
  "기회는 준비된 자에게만 온다.",
];
const Quote = () => {
  const [quote, setQuote] = useState("");
  // Math.random();
  useEffect(() => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  }, []);
  return <div>오늘의 명언 : "{quote}"</div>;
};

export default Quote;
