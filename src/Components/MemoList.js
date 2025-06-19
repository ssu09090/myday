import { useState } from "react";

const MemoList = ({ memos, onDelete, onEdit }) => {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  if (memos.length === 0) {
    return <p className="list-none">메모가 없습니다</p>;
  }

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = () => {
    if (editText.trim()) {
      onEdit(editingId, editText);
      setEditingId(null);
      setEditText("");
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  return (
    <ul className="memolist">
      {memos.map((item) => {
        return (
          <li key={item.id}>
            {editingId === item.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  rows={3}
                />
                <button onClick={saveEdit}>저장</button>
                <button onClick={cancelEdit}>취소</button>
              </>
            ) : (
              <>
                <span className="memo-content">{item.memo}</span>
                <button onClick={() => startEdit(item.id, item.memo)}>
                  편집
                </button>
                <button onClick={() => onDelete(item.id)}>삭제</button>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MemoList;
