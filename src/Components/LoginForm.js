import { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = user.trim();
    if (trimmed) { //빈값이 아니라면
      onLogin(user); //부모에게 데이터 전송
      setUser("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>당신의 이름을 입력해주세요</p>
      <input
        type="text"
        value={user}
        placeholder="이름"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <button type="submit">입장하기</button>
    </form>
  );
};

export default LoginForm;
