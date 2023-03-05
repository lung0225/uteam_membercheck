import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MemberCheck from './MemberCheck';
import Note from './Note';


// class LoggingButton extends React.Component {
//   handleClick() {
//     console.log('this is:', this);
//   }

//   render() {
//     // 這個語法確保 `this` 是在 handleClick 中被綁定：
//     return (
//       <button onClick={() => this.handleClick()}>
//         Click me
//       </button>
//     );
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MemberCheck />
    {/* <Note /> */}
  </React.StrictMode>
);


