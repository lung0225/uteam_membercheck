// import * as React from "react";
// import "./Note.css";


// const Note = () => {
//     return (
//         <div>
//             <h1>我的记事本</h1>
//         <ul className="todos">
//         <li>
//         <input type="text" placeholder="快写下您要我记住的事儿吧" onKeyUp={this.addThingHandle} />
//         </li>
//         {
//         this.state.todos.length === 0 ?
//         <li>暂无记录</li>:this.state.todos.map((e, index) =>
//         <li key={e.id} className={e.done ? 'checked' : ''}>
//         <input type="checkbox" onChange={() => { this.changeDoneStatus(event, e.id) }} checked={e.done} />
//         <label>{index + 1}. {e.thing}</label>
//         <time>{e.created}</time>
//         <button onClick={() => this.deleteThingHandle(index)}>&times;</button>
//         </li>)
//         }
//        </ul>
//         </div>
//     )
// }

// export default Note;
