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
    <form onSubmit={handleSubmit} className="login">
      <h2>사용자 이름을 입력해주세요</h2>
      <div className="name_box">
        <div className="play">
          <input
            type="text"
            value={user}
            placeholder="이름"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </div>
        <button type="submit">시작하기</button>
      </div>
    </form>
  );
};

export default LoginForm;
