import React from "react";
import "./Taskbar.css";
const taskbar = () => {
    
   

  return (
    <form className="taskbar">
      <label htmlFor="">Task</label>
      <input type="text" />
      <label htmlFor="">Day & Time</label>
      <input type="text" />
    </form>
  );
};

export default taskbar;
