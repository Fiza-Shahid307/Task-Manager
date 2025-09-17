// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";


// function HomePage() {

//   return (
//     <div className="h-full">
//       <h1 className="bg-yellow-500 text-white p-2 font-bold text-4xl text-center ">
//         Welcome ,Fiza
//       </h1>
//       <h1 className="text-2xl text-center font-bold mt-4">
//         Stay Productive with Taskly
//       </h1>
//       <div className="grid grid-cols-2 gap-4 mt-10">
//         <Link
//           to="/profile"
//           className="bg-yellow-200 p-6 rounded-lg shadow text-center"
//         >
//           <h2 className="text-lg font-semibold">Profile</h2>
//           <p>Completed ✅</p>
//         </Link>
//         <div className="bg-blue-200 p-6 rounded-lg shadow text-center">
//           <h2 className="text-lg font-semibold">Tasks</h2>
//           <p>3 Pending</p>
//         </div>
//         <div className="bg-green-200 p-6 rounded-lg shadow text-center ">
//           <h2 className="text-lg font-semibold">Categories</h2>
//           <p>2 Added</p>
//         </div>
//         <div className="bg-gray-200 p-6 rounded-lg shadow text-center ">
//           <h2 className="text-lg font-semibold">Settings</h2>
//           <p>Default</p>
//         </div>
//       </div>

      

//     </div>
//   );
// }

// export default HomePage;





import { Link } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "./TaskContext";

function HomePage() {
  const { tasks } = useContext(TaskContext);

  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = tasks.filter((t) => !t.completed).length;

  return (
    <div className="h-full">
      {/* Header */}
      <h1 className="bg-yellow-500 text-white p-2 font-bold text-4xl text-center ">
        Welcome, Fiza
      </h1>
      <h1 className="text-2xl text-center font-bold mt-4">
        Stay Productive with Taskly
      </h1>

      {/* Stats Grid */}
      <div className="md:grid md:grid-cols-2 flex flex-col gap-4 mt-10">
        <Link
          to="/profile"
          className="bg-yellow-200 p-6 rounded-lg shadow text-center"
        >
          <h2 className="text-lg font-semibold">Profile</h2>
          <p>{completedCount} Completed ✅</p>
        </Link>

        <div className="bg-blue-200 p-6 rounded-lg shadow text-center">
          <h2 className="text-lg font-semibold">Tasks</h2>
          <p>{pendingCount} Pending</p>
        </div>

        <div className="bg-green-200 p-6 rounded-lg shadow text-center ">
          <h2 className="text-lg font-semibold">Categories</h2>
          <p>2 Added</p>
        </div>

        <div className="bg-gray-200 p-6 rounded-lg shadow text-center ">
          <h2 className="text-lg font-semibold">Settings</h2>
          <p>Default</p>
        </div>
      </div>

      {/* ✅ Task List Section */}
      <div className="flex justify-center mt-4">
      <div className="mt-10 p-6 bg-cyan-100 rounded-lg  h-[300px] shadow-lg w-[400px] md:w-[650px]  ">
        <h2 className="text-2xl text-center font-bold text-yellow-600 mb-4">Your Tasks</h2>

        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks yet. Go to Task Page to add one!</p>
        ) : (
          <ul className="space-y-3">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`p-3 rounded border ${
                  task.completed ? "bg-green-100 border-green-400" : "bg-yellow-100 border-yellow-400"
                }`}
              >
                <p className={task.completed ? "line-through text-gray-500" : ""}>
                  {task.text}
                </p>
                <small className="text-gray-500">
                  {task.dueDate && `Due: ${task.dueDate}`}{" "}
                  {task.dueTime && task.dueTime}
                </small>
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>
    </div>
  );
}

export default HomePage;

