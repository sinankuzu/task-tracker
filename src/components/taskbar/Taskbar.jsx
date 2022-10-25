import React, { useState } from "react";
import "./Taskbar.css"
import Data from "../../Data";
import { FaTrashAlt } from "react-icons/fa";

const Taskbar = () => {
  const [veri, setVeri] = useState(Data);
  const [task, setTask] = useState();
  const [date, setDate] = useState();
  const gonder = (e) => {
    e.preventDefault();
    const id = veri.length + 1;
    setVeri([...veri, { id, task, date, isDone: false }]);
    console.log(veri);
  };

  const choosen2 = (e) => {
    setVeri(
      veri.map((aaa) => (aaa.id === e ? { ...aaa, isDone: !aaa.isDone } : aaa))
    );
  };

  const remove = (id) => {
    setVeri(veri.filter((eleman) => eleman.id !== id));
  };

  return (
    <section>
      <form className="taskbar" onSubmit={gonder}>
        <label htmlFor="task" className="my-label">
          Task
        </label>
        <input
          type="text"
          id="task"
          placeholder="Add a Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <label htmlFor="date" className="my-label">
          Day & Time
        </label>
        <input
          type="date"
          id="date"
          placeholder="01.01.2022"
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit" className="my-button">
          Save Task
        </button>
      </form>

      <div>
        {veri.map((element) => {
          return (
            <div>
              <div
                onClick={() => choosen2(element.id)}
                className={element.isDone ? "clean" : "line-through"}
                key={element.id}
              >
                <h4>{element.task}</h4>
                <h3>{element.date}</h3>
              </div>

              <i onClick={() => remove(element.id)} className="remove">
                <FaTrashAlt />
              </i>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Taskbar;
