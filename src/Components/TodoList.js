const TodoList = ({ todos, onDelete, onToggle }) => {
  if (todos.length === 0) {
    return <p className="list-none">할 일이 없습니다</p>;
  }
  return (
    <ul className="todolist">
      {todos.map((item) => {
        return (
          <li key={item.id} className="todo-item">
            <label className="toggle-switch">
              <input
                type="checkbox"
                onChange={() => {
                  onToggle(item.id);
                }}
                checked={item.done}
              />
              <span className="slider"></span>
            </label>
            <span
              className="todo-in"
              style={{
                textDecoration: item.done ? "line-through" : "none",
                textDecorationColor: item.done ? "#0056b360" : "transparent",
                textDecorationThickness: item.done ? "8px" : "0",
                color: item.done ? "#777777" : "#222222",
              }}
            >
              {item.todo}
            </span>
            <button
              onClick={() => {
                onDelete(item.id);
              }}
            >
              삭제
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
