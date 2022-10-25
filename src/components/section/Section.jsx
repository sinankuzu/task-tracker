import React, { useState } from "react";
import Taskbar from "../taskbar/Taskbar";
import Tasks from "../tasks/Tasks";

const Section = () => {
  const [show, setShow] = useState(false);

  return (
    <section>
      {(!show && (
        <button className="my-button" onClick={() => setShow(!show)}>
          Show Add Task Bar
        </button>
      )) || (
        <button className="my-button" onClick={() => setShow(!show)}>
          Close Add Task Bar
        </button>
      )}
      {!show && <div></div>}
      {show && <Taskbar />}
      {!show && <Tasks/>}
    </section>
  );
};

export default Section;
