import React from 'react'
import Data from '../../Data'
import { FaTrashAlt } from "react-icons/fa";
const Tasks = () => {

 const [veri, setVeri] = useState(Data);

//  const gonder = (e) => {
//    e.preventDefault();
//    const id = veri.length + 1;
//    setVeri([...veri, { id, task, date, isDone: false }]);
//    console.log(veri);
//  };

 const choosen2 = (e) => {
   setVeri(
     veri.map((aaa) => (aaa.id === e ? { ...aaa, isDone: !aaa.isDone } : aaa))
   );
 };

 const remove = (id) => {
   setVeri(veri.filter((eleman) => eleman.id !== id));
 };



  return (
    <div>
      {Data.map((element) => {
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
  );
}

export default Tasks