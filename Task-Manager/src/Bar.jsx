import { Link } from "react-router-dom";
import { useState } from "react";

function Bar() {
  const [showMenu,setShowmenu]=useState(false);
   

  return (
    <div className="">
    <div className="hidden h-screen w-[250px] bg-gray-200 text-white md:flex flex-col  justify-between p-2   ">
      <div className="  flex items-center justify-center mt-4">
      <h1 className="text-3xl font-bold text-yellow-500  ">Taskly</h1>
      </div>
      <div>
      <Link to='/' className="flex flex-row text-black gap-2">
      <img className="h-7 w-9 " src="home.svg" alt="" /><p className='text-xl'>Home</p>
      </Link>
      <Link to="/Task" className="flex flex-row text-black gap-2 mt-6">
      <img className="h-7 w-9 " src="file-text.svg" alt="" /><p className='text-xl'>Tasks</p>
      </Link>
     
      
      <Link to="/graphs" className="flex flex-row text-black gap-2 mt-6">
      <img className="h-7 w-9 " src="folder.svg" alt="" /><p className='text-xl'>Graph</p>
      </Link>
      
      </div>


      <Link to="/profile" className="flex flex-row text-black gap-2 mb-6">
        <img src="user.svg" alt="" /> <p className="text-xl">Profile</p>
      </Link>
</div>
       <div className=" flex flex-col md:hidden  sm:m-4 m-1 ">
      <img src="menubar.svg"  onClick={()=>setShowmenu(true)} className=" " alt="" />
      </div>
      
       {/* <----------Menu Bar-------------> */}
       <div className={`md:hidden ${showMenu?"fixed w-full":"h-0 w-0"} fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all` }>
        <div className="flex justify-end p-6">
          <img src="cross_icon.svg" onClick={()=>setShowmenu(false)} className=" w-8" alt="" />
        </div>
               <div className="  flex items-center justify-center mt-4 ">
      <h1 className="text-3xl font-bold text-yellow-500  ">Taskly</h1>
      </div>
      <div>
      <Link to='/' onClick={()=>setShowmenu(false)} className="flex flex-row text-black gap-2">
      <img className="h-7 w-9 " src="home.svg" alt="" /><p className='text-xl'>Home</p>
      </Link>
      <Link to="/Task" onClick={()=>setShowmenu(false)} className="flex flex-row text-black gap-2 mt-6">
      <img className="h-7 w-9 " src="file-text.svg" alt="" /><p className='text-xl'>Tasks</p>
      </Link>
     
      
      <Link to="/graphs" onClick={()=>setShowmenu(false)} className="flex flex-row text-black gap-2 mt-6">
      <img className="h-7 w-9 " src="folder.svg" alt="" /><p className='text-xl'>Graph</p>
      </Link>
      
      </div>


      <Link to="/profile" onClick={()=>setShowmenu(false)} className="flex flex-row text-black gap-2 mt-4 mb-6">
        <img src="user.svg" alt="" /> <p className="text-xl">Profile</p>
      </Link>
</div>

      </div>


  
  )
}

export default Bar




 