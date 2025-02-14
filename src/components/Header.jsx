import { Link } from "react-router-dom";
import { Eclipse } from "lucide-react";

export function Header(){
     function changeDarkMode(){
        document.documentElement.classList.toggle('dark')
      }

    return(
        <div className='flex justify-end sm:text-xl font-semibold bg-orange-400 dark:bg-gray-400'>
        <ul className="p-2 flex gap-3 text-blue-200 dark:text-white">
             <button onClick={changeDarkMode} className="h-7 w-7 bg-indigo-400 dark:bg-black rounded-md shadow-lg" aria-hidden="true">
                <Eclipse className='w-full text-white'/>
            </button>
                <li className="dark:hover:text-gray-900 hover:text-indigo-700 hover:scale-x-105 hover:scale-y-105 transition duration-150 underline underline-offset-4 shadow-xl hover:shadow-lg"><Link to="/">Home</Link></li>
                <li className="dark:hover:text-gray-900 hover:text-indigo-700 hover:scale-x-105 hover:scale-y-105 transition duration-150 underline underline-offset-4 shadow-xl hover:shadow-lg"><Link to="/login">Login</Link></li>
        </ul>
        </div>
    )
}