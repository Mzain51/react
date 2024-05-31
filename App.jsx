import App2 from './App2'
 import './App.css'
import Alluser from './components/Alluser'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
 function App() {
  

    const router = createBrowserRouter ([
      {
        path: "/",
        element: <App2 />
    },
    {
        path: "/allusers",
        element: <Alluser />
    }
     
    ])
    return (

         <>
         
         <RouterProvider router={router}/>
      <div className="w-full h-full bg-zinc-800 p-10 text-white">
         <div className="nav mb-10">
            <a className="text-blue-500" href="/">Read Users</a>
         </div>
         <h1 className="text-3xl tracking-tighter mb-3">Create User</h1>
         <form action="/create" method="post">
             <input className="px-5 py-2 border-2 border-zinc-900 outline-none rounded-lg bg-transparent" type="text" name="name" placeholder="name" />
             <input className="px-5 py-2 border-2 border-zinc-900 outline-none rounded-lg bg-transparent" type="text" name="email" placeholder="email" />
             <input className="px-5 py-2 border-2 border-zinc-900 outline-none rounded-lg bg-transparent" type="text" name="image" placeholder="image" />    
             <input className="px-5 py-2 bg-blue-600 rounded-lg ml-3" type="submit" value="Create User" />
         </form>
     </div>
     </>
   )
 }

 export default App
    
