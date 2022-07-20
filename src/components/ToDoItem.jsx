import React, { useState } from "react";

// // aqui rebece-se de app.jsx
// function toDoItem(props) {
//   const [isDone, setIsDone] = useState(false);

//   function handleClick() {
//     setIsDone(prevValue => {
//       return !prevValue;
//     })
//   }

//   // aqui rebece-se de app.jsx
//   return (
//     <div onClick={handleClick}>
//       <li style={{ textDecoration: isDone ? "line-through" : "none" }}>{props.text}</li>
//     </div>
//   );
// }
// export default toDoItem;

// Splitting app in different components
// props are read-only

function toDoItem(props) {
  return (
    // this means it'll be able to trigge deleteItem
    // inside App.jsx
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default toDoItem;
