// import React from "react";
// import { useState, useEffect } from "react";
// import Calendar from "react-calendar"
// import "react-calendar/dist/Calendar.css";

// function TaskPage() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [dueDate, setDuedate] = useState("");
//   const [dueTime, setDueTime] = useState("");

//   useEffect(() => {
//     const saved = localStorage.getItem("tasks");
//     if (saved) {
//       setTasks(JSON.parse(saved));
//     }
//   }, []);

//   useEffect(() => {
//     if (tasks.length > 0) {
//       localStorage.setItem("tasks", JSON.stringify(tasks));
//     }
//   }, [tasks]);

//   const addTask = () => {
//     if (!task.trim()) return;
//     const newTask = {
//       text: task,
//       completed: false,
//       createdAT: new Date().toLocaleString(),
//       dueDate,
//       dueTime,
//     };
//     setTasks([...tasks, newTask]);
//     setTask("");
//     setDueTime("");
//     setDuedate("");
//   };

//   const toggleComplete=(index)=>{
//     const updated=[...tasks];
//     updated[index].completed=!updated[index].completed;
//     setTasks(updated);
//   }
//     const deleteTask=(index)=>{
//       const updated=tasks.filter((_,i)=>i !==index);
//       setTasks(updated);
//     }
  
//   return (
//     <div className="flex gap-6 justify-center mt-10">
//       <div className="h-[500px] w-[610px] bg- rounded-lg border-2 border-yellow-400  shadow mx-10 my-4">
//         <h1 className="font-bold text-yellow-500 text-center text-3xl">
//           Enter Your Daily Tasks Here
//         </h1>
//         <div className="flex gap-2 justify-center mt-4 mx-4">
//           <input
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             type="text"
//             placeholder="Enter Task"
//             className="w-3/4  rounded-md px-4 py-2 border-2 border-yellow-500 "
//           />
//           <input type="date"
//           value={dueDate}
//           onChange={(e)=>setDuedate(e.target.value)}
//           className="px-3 py-2 border rounded-md"
//           />
//           <input type="time"
//           value={dueTime}
//           onChange={(e)=>setDueTime(e.target.value)}
//           className="px-3 py-2 border rounded-md"
//           />
//           </div>
//           <div className="mt-5 flex justify-center ">
//           <button
//             onClick={addTask}
//             className="px-5 py-2  bg-yellow-500 text-white font-semibold rounded-md 
//              shadow-md hover:bg-yellow-600 transition duration-200"
//           >
//             Add Task
//           </button>
//         </div>
//         <ul>
//           {tasks.length === 0 ? (
//             <p className="text-gray-600">
//               No recent tasks yet. Add your task to get started!
//             </p>
//           ) : (
//             tasks.map((t, i) => (
//               <li
//                 key={i}
//                 className="mt-3 m-3 bg-white border rounded p-2 text-left shadow"
//               >
//                 <div>
//                   <p className={t.completed ? "line-through text-gray-500 ":""}
//                   >{t}
//                   </p>
//                    <small className="text-gray-500">
//                   Created: {t.createdAt}
//                   <br />
//                   {t.dueDate && `Due: ${t.dueDate}`} {t.dueTime && t.dueTime}
//                 </small>
//                 </div>
//                 <div className="flex gap-2">
//                 <button
//                   onClick={() => toggleComplete(i)}
//                   className={`px-3 py-1 rounded ${
//                     t.completed ? "bg-green-500 text-white" : "bg-gray-300"
//                   }`}
//                 >
//                   {t.completed ? "Completed" : "Pending"}
//                 </button>

//                 <button
//                   onClick={() => deleteTask(i)}
//                   className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </div>
//               </li>
//             ))
//           )}
//         </ul>
//       </div>
// <div className="border-2 border-yellow-500 rounded-md p-4 h-[500px] bg-white shadow mx-10 my-4">
//     <Calendar
//       onChange={(date) => console.log("Selected date:", date)}
//     />
      
//     </div>
//      <style>
//         {`
//           /* Main wrapper */
//           .react-calendar {
//             width: 100%;
//             border: none;
//             background: white;
//             font-family: 'Inter', sans-serif;
//             line-height: 1.5;
//           }

//           /* Navigation bar */
//           .react-calendar__navigation {
//             display: flex;
//             justify-content: space-between;
//             margin-bottom: 10px;
//           }
//           .react-calendar__navigation button {
//             color: #f59e0b; /* yellow-500 */
//             font-weight: bold;
//             font-size: 20px;
//             padding: 6px 10px;
//             border-radius: 8px;
//             transition: background 0.2s;
//           }
//           .react-calendar__navigation button:hover {
//             background: #fef3c7; /* yellow-100 */
//           }

//           /* Weekdays */
//           .react-calendar__month-view__weekdays {
//             text-transform: uppercase;
//             font-size: 16px;
//             font-weight: 600;
//             color: #6b7280; /* gray-500 */
//             text-align: center;
//             margin-bottom: 5px;
//           }

//           /* Date tiles */
//           .react-calendar__tile {
//             padding: 12px 0;
//             border-radius: 8px;
//             transition: all 0.2s;
//           }
//           .react-calendar__tile:hover {
//             background: #fef3c7; /* yellow-100 */
//           }

//           /* Today’s date */
//           .react-calendar__tile--now {
//             background: #fde68a; /* yellow-200 */
//             color: #000;
//             font-weight: bold;
//           }

//           /* Selected date */
//           .react-calendar__tile--active {
//             background: #f59e0b; /* yellow-500 */
//             color: white;
//             font-weight: bold;
//             border-radius: 8px;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default TaskPage;



// import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";


// function TaskPage() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [dueDate, setDuedate] = useState("");
//   const [dueTime, setDueTime] = useState("");

//   // Load tasks from localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem("tasks");
//     if (saved) {
//       setTasks(JSON.parse(saved));
//     }
//   }, []);

//   // Save tasks to localStorage whenever they change
//   useEffect(() => {
//     if (tasks.length > 0) {
//       localStorage.setItem("tasks", JSON.stringify(tasks));
//     }
//   }, [tasks]);

//   // Add task
//   const addTask = () => {
//     if (!task.trim()) return;
//     const newTask = {
//       text: task,
//       completed: false,
//       createdAt: new Date().toLocaleString(), // ✅ fixed property name
//       dueDate,
//       dueTime,
//     };
//     setTasks([...tasks, newTask]);
//     setTask("");
//     setDueTime("");
//     setDuedate("");
//   };

//   // Toggle complete
//   const toggleComplete = (index) => {
//     const updated = [...tasks];
//     updated[index].completed = !updated[index].completed;
//     setTasks(updated);
//   };

//   // Delete task
//   const deleteTask = (index) => {
//     const updated = tasks.filter((_, i) => i !== index);
//     setTasks(updated);
//   };

//   return (
//     <div className="flex gap-6 justify-center mt-10">
//       {/* Task Manager Box */}
//       <div className="h-[500px] w-[610px] rounded-lg border-2 border-yellow-400 shadow mx-10 my-4 overflow-y-auto bg-yellow-200">
//         <h1 className="font-bold text-yellow-600 text-center text-3xl mt-2">
//           Enter Your Daily Tasks Here
//         </h1>

//         {/* Inputs */}
//         <div className="flex gap-2 justify-center mt-4 mx-4">
//           <input
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             type="text"
//             placeholder="Enter Task"
//             className="w-3/4 rounded-md px-4 py-2 border-2 border-yellow-500"
//           />
//           <input
//             type="date"
//             value={dueDate}
//             onChange={(e) => setDuedate(e.target.value)}
//             className="px-3 py-2 border rounded-md"
//           />
//           <input
//             type="time"
//             value={dueTime}
//             onChange={(e) => setDueTime(e.target.value)}
//             className="px-3 py-2 border rounded-md"
//           />
//         </div>

//         {/* Add button */}
//         <div className="mt-5 flex justify-center">
//           <button
//             onClick={addTask}
//             className="px-5 py-2 bg-yellow-500 text-white font-semibold rounded-md 
//              shadow-md hover:bg-yellow-600 transition duration-200"
//           >
//             Add Task
//           </button>
//         </div>

//         {/* Task List */}
//         <ul>
//           {tasks.length === 0 ? (
//             <p className="text-gray-600 text-center mt-4">
//               No recent tasks yet. Add your task to get started!
//             </p>
//           ) : (
//             tasks.map((t, i) => (
//               <li
//                 key={i}
//                 className="mt-3 mx-3 bg-white border rounded p-2 text-left shadow"
//               >
//                 <div>
//                   {/* ✅ fixed to show t.text */}
//                   <p className={t.completed ? "line-through text-gray-500" : ""}>
//                     {t.text}
//                   </p>

//                   {/* ✅ fixed to show t.createdAt */}
//                   <small className="text-gray-500">
//                     Created: {t.createdAt}
//                     <br />
//                     {t.dueDate && `Due: ${t.dueDate}`} {t.dueTime && t.dueTime}
//                   </small>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex gap-2 mt-2">
//                   <button
//                     onClick={() => toggleComplete(i)}
//                     className={`px-3 py-1 rounded ${
//                       t.completed
//                         ? "bg-green-500 text-white"
//                         : "bg-gray-300 text-black"
//                     }`}
//                   >
//                     {t.completed ? "Completed" : "Pending"}
//                   </button>

//                   <button
//                     onClick={() => deleteTask(i)}
//                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </li>
//             ))
//           )}
//         </ul>
//       </div>

//       {/* Calendar Box */}
//       <div className="border-2 border-yellow-500 rounded-md p-4 h-[500px]  shadow mx-10 my-4 bg-purple-200">
//         <h1 className="text-yellow-700 text-center font-bold text-3xl mb-5">Calendar</h1>
//         <Calendar className="rounded-2xl" onChange={(date) => console.log("Selected date:", date)} />
//       </div>

//       {/* Calendar Styling */}
//       <style>
//         {`
//           .react-calendar {
//             width: 100%;
//             border: none;
//             background: white;
//             font-family: 'Inter', sans-serif;
//             line-height: 1.5;
//           }
//           .react-calendar__navigation {
//             display: flex;
//             justify-content: space-between;
//             margin-bottom: 10px;
//           }
//           .react-calendar__navigation button {
//             color: #f59e0b;
//             font-weight: bold;
//             font-size: 20px;
//             padding: 6px 10px;
//             border-radius: 8px;
//             transition: background 0.2s;
//           }
//           .react-calendar__navigation button:hover {
//             background: #fef3c7;
//           }
//           .react-calendar__month-view__weekdays {
//             text-transform: uppercase;
//             font-size: 16px;
//             font-weight: 600;
//             color: #6b7280;
//             text-align: center;
//             margin-bottom: 5px;
//           }
//           .react-calendar__tile {
//             padding: 12px 0;
//             border-radius: 8px;
//             transition: all 0.2s;
//           }
//           .react-calendar__tile:hover {
//             background: #fef3c7;
//           }
//           .react-calendar__tile--now {
//             background: #fde68a;
//             color: #000;
//             font-weight: bold;
//           }
//           .react-calendar__tile--active {
//             background: #f59e0b;
//             color: white;
//             font-weight: bold;
//             border-radius: 8px;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default TaskPage;
import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { TaskContext } from "./TaskContext";  // 🔹 import context

function TaskPage() {
  const { tasks, setTasks } = useContext(TaskContext); // 🔹 use context
  const [task, setTask] = useState("");
  const [dueDate, setDuedate] = useState("");
  const [dueTime, setDueTime] = useState("");

  // Add task
  const addTask = () => {
    if (!task.trim()) return;
    const newTask = {
      text: task,
      completed: false,
      createdAt: new Date().toLocaleString(),
      dueDate,
      dueTime,
    };
    setTasks([...tasks, newTask]); // 🔹 updates via context
    setTask("");
    setDueTime("");
    setDuedate("");
  };

  // Toggle complete
  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  // Delete task
  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div>
      <h1 className="bg-yellow-500 text-white p-2 font-bold text-4xl text-center ">Tasks Entry</h1>
    <div className="md:flex xl:flex-row flex flex-col  xl:gap-6 justify-center mt-8">
      {/* Task Manager Box */}
      <div className="flex-1 rounded-lg border-2 border-yellow-400 shadow mx-2 my-4 overflow-y-auto bg-yellow-200">
        <h1 className="font-bold text-yellow-600 text-center text-3xl mt-2">
          Enter Your Daily Tasks Here
        </h1>

        
        <div className="flex flex-col sm:flex-row gap-2 justify-center mt-4 mx-2">
  {/* Task Input */}
  <input
    value={task}
    onChange={(e) => setTask(e.target.value)}
    type="text"
    placeholder="Enter Task"
    className="flex-1 min-w-0 rounded-md px-4 py-2 border-2 border-yellow-500"
  />

  {/* Date Picker */}
  <input
    type="date"
    value={dueDate}
    onChange={(e) => setDuedate(e.target.value)}
    className="sm:w-auto w-full px-3 py-2 border rounded-md"
  />

  {/* Time Picker */}
  <input
    type="time"
    value={dueTime}
    onChange={(e) => setDueTime(e.target.value)}
    className="sm:w-auto w-full px-3 py-2 border rounded-md"
  />
</div>


        {/* Add button */}
        <div className="mt-5 flex justify-center">
          <button
            onClick={addTask}
            className="px-5 py-2 bg-yellow-500 text-white font-semibold rounded-md 
             shadow-md hover:bg-yellow-600 transition duration-200"
          >
            Add Task
          </button>
        </div>

        {/* Task List */}
        <ul>
          {tasks.length === 0 ? (
            <p className="text-gray-600 text-center mt-4">
              No recent tasks yet. Add your task to get started!
            </p>
          ) : (
            tasks.map((t, i) => (
              <li
                key={i}
                className="mt-3 mx-3 bg-white border rounded p-2 text-left shadow"
              >
                <div>
                  <p className={t.completed ? "line-through text-gray-500" : ""}>
                    {t.text}
                  </p>
                  <small className="text-gray-500">
                    Created: {t.createdAt}
                    <br />
                    {t.dueDate && `Due: ${t.dueDate}`} {t.dueTime && t.dueTime}
                  </small>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => toggleComplete(i)}
                    className={`px-3 py-1 rounded ${
                      t.completed
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-black"
                    }`}
                  >
                    {t.completed ? "Completed" : "Pending"}
                  </button>

                  <button
                    onClick={() => deleteTask(i)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Calendar Box */}
      <div className=" flex-1 border-2 border-yellow-500 rounded-md p-4  shadow mx-4 my-4 bg-purple-200">
        <h1 className="text-yellow-700 text-center font-bold text-3xl mb-5">
          Calendar
        </h1>
        <Calendar
          className="rounded-2xl"
          onChange={(date) =>
            setDuedate(date.toISOString().split("T")[0]) // 🔹 auto-fill due date
          }
        />
      </div>

      {/* Calendar Styling */}
      <style>
        {`
          .react-calendar {
            width: 100%;
            border: none;
            background: white;
            font-family: 'Inter', sans-serif;
            line-height: 1.5;
          }
          .react-calendar__navigation {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
          }
          .react-calendar__navigation button {
            color: #f59e0b;
            font-weight: bold;
            font-size: 20px;
            padding: 6px 10px;
            border-radius: 8px;
            transition: background 0.2s;
          }
          .react-calendar__navigation button:hover {
            background: #fef3c7;
          }
          .react-calendar__month-view__weekdays {
            text-transform: uppercase;
            font-size: 16px;
            font-weight: 600;
            color: #6b7280;
            text-align: center;
            margin-bottom: 5px;
          }
          .react-calendar__tile {
            padding: 12px 0;
            border-radius: 8px;
            transition: all 0.2s;
          }
          .react-calendar__tile:hover {
            background: #fef3c7;
          }
          .react-calendar__tile--now {
            background: #fde68a;
            color: #000;
            font-weight: bold;
          }
          .react-calendar__tile--active {
            background: #f59e0b;
            color: white;
            font-weight: bold;
            border-radius: 8px;
          }
        `}
      </style>
    </div>
    </div>
  );
}

export default TaskPage;
