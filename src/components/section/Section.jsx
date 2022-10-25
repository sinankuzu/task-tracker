import React, { useState } from "react";
import Taskbar from "./Taskbar";

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
      {!show && <div>No tasks to show</div>}
      {show && <Taskbar />}
    </section>
  );
};

export default Section;
