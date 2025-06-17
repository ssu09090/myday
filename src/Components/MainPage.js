import Quote from "./Quote";

const MainPage = ({ user, onLogout }) => {
  
  return (
    <div className="main">
      <h2>{user}님, 반가워요</h2>
      <Quote/>
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
};

export default MainPage;