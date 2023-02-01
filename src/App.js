import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { addTodo } from "./redux/features/Todo";
function App() {
  const dispatch = useDispatch();
  const todoLists = useSelector((state) => state.todo.value);
  const [inputField, setInputfield] = useState("");

  // Input OnChange Function
  const handleChangeInput = (e) => {
    const value = e.target.value;
    setInputfield(value);
  };

  // Input on add click function

  const handleAddTodo = () => {
    // alert(inputField);
    dispatch(addTodo(inputField));
    setInputfield("");
  };

  return (
    <div className="App">
      <div style={{ width: "500px" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <input
            value={inputField}
            onChange={(e) => {
              handleChangeInput(e);
            }}
          ></input>
          <button
            onClick={() => {
              handleAddTodo();
            }}
          >
            Add
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          {todoLists.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  margin: "10px",
                }}
              >
                <div>
                  <div style={{ display: "flex" }}>
                    <div style={{ paddingRight: "10px" }}>{index + 1}.</div>
                    <div style={{ width: "100%" }}>{item.value}</div>
                  </div>
                </div>
                <input type="checkbox" checked={item.checked} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
