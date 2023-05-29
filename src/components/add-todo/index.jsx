import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/creators/todo";

import styles from "./index.module.css";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(value));
    setValue("");
  };


  return (
    <div>
      <input className={styles.input} type="text" value={value} onChange={onInputChange} placeholder='New todo' />
      <button className={styles.addButton} onClick={handleAddTodo}>
        Add todo
      </button>
    </div>
  );
};
