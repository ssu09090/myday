import { useEffect, useState } from "react";
import Quote from "./Quote";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Memo from "./Memo";
import MemoList from "./MemoList";

const MainPage = ({ user, onLogout }) => {
  const TODOS_KEY = "todos";
  const MEMOS_KEY = "memos";
  const [todos, setTodos] = useState([]);
  const [memos, setMemos] = useState([]);
  //첨에 localstorage에 저장된 todos값이 있으면 읽어와서 설정.
  useEffect(() => {
    const saved = localStorage.getItem(TODOS_KEY);
    if (saved) {
      setTodos(JSON.parse(saved)); //문자열을 객체로
    }
    //메모
    const savememo = localStorage.getItem(MEMOS_KEY);
    if (savememo) {
      setMemos(JSON.parse(savememo));
    }
  }, []);
  //todos가 변경되면 localstorage에 저장
  useEffect(() => {
    const saved = JSON.stringify(todos); //객체를 문자열로
    localStorage.setItem(TODOS_KEY, saved);
  }, [todos]);
  useEffect(() => {
    const savememo = JSON.stringify(memos); //객체를 문자열로
    localStorage.setItem(MEMOS_KEY, savememo);
  }, [memos]);

  const addTodo = (text) => {
    //todo {id:현재시간, text}
    const newTodo = { id: Date.now(), todo: text, done: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const update = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(update);
  };
  const toggleTodo = (id) => {
    const update = todos.map((item) => {
      return item.id === id ? { ...item, done: !item.done } : item;
    });
    setTodos(update);
  };
  //메모
  const addMemo = (text) => {
    const newMemo = { id: Date.now(), memo: text, done: false };
    setMemos([...memos, newMemo]);
  };
  const deleteMemo = (id) => {
    const update = memos.filter((item) => {
      return item.id !== id;
    });
    setMemos(update);
  };
  const editMemo = (id, newText) => {
    const update = memos.map((item) =>
      item.id === id ? { ...item, memo: newText } : item
    );
    setMemos(update);
  };
  const getGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 5 && hour < 12) {
      return "좋은 아침이에요";
    } else if (hour >= 12 && hour < 18) {
      return "좋은 오후예요";
    } else if (hour >= 18 && hour < 22) {
      return "좋은 저녁이에요";
    } else {
      return "좋은 밤이에요";
    }
  };
  
  return (
    <div className="main">
      <div className="hello">
        <h2>
          {user}님, {getGreeting()}
        </h2>
        <button onClick={onLogout}>나가기</button>
      </div>
      <Quote/>
      <div className="tm">
        <div className="todo">
          <TodoForm onAdd={addTodo} />
          <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
        </div>
        <div className="todo">
          <Memo onAdd={addMemo} />
          <MemoList memos={memos} onDelete={deleteMemo} onEdit={editMemo} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;