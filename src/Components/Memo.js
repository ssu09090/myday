import { useState } from "react";

const Memo = ({ onAdd }) => {
  const [memo, setMemo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = memo.trim();
    if (trimmed) {
      onAdd(memo);
      setMemo("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div div className="play">
        <input
          placeholder="메모를 입력하세요"
          type="text"
          value={memo}
          onChange={(e) => {
            setMemo(e.target.value);
          }}
        />
      </div>
      <button type="submit">추가</button>
    </form>
  );
};

export default Memo;
