import Link from 'next/link'
import {useState} from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Nav() {
    const [clicked,setClicked]=useState(false)
    return (
        <div className="flex justify-between items-center bg-white fixed top-0 mb-10  w-screen z-10 h-10 shadow-md p-6">
        <h1 className="font-bold flex text-gray-800 text-4xl font-curs">grey <p className='font-extrabold text-4xl text-pink-500'> 8</p></h1>
        
   <span  className='flex sm:flex md:flex lg:hidden xl:hidden 2xl:hidden 3xl:hidden'><MenuIcon style={{color:"#e75480",fontWeight:"extra-bold",fontSize:"30px",cursor:"pointer"}}  onClick={()=>setClicked(true)}/></span><div className='hidden justify-evenly items-center  sm:hidden md:hidden lg:flex  xl:flex 2xl:flex 3xl:flex '>
               <Link href="/"><h1 className='cursor-pointer m-2  visited:text-blue-400 font-bold text-md active:shadow-md  active:bg-gray-200 rounded p-2 active:text-blue-600 text-gray-500'>Home</h1></Link> 
               <Link href="/about"><h1 className='cursor-pointer m-2 font-bold visited:text-blue-400  active:shadow-md active:bg-gray-200 rounded p-2 active:text-blue-600 text-md text-gray-500'>About</h1></Link>
            </div>   
            <div className={clicked?" fixed flex-col  right-0 z-10 top-0 left-0 bottom-0 flex justify-center transition-all ease-in-out delay-300 items-center  h-screen w-screen   bg-gradient-to-r from-purple-500 to-pink-500":" fixed flex-col  top-0 left-full  right-0 bottom-0 justify-center items-center transition-all ease-in delay-100   bg-gradient-to-r from-purple-500 to-pink-500"}>
                
                <CloseIcon onClick={()=>setClicked(false)} className="p-2 rounded-full bg-white  text-4xl cursor-pointer"/>
                <div className='text-pink-400  mt-10   w-screen h-max flex-col items-center justify-evenly  font-bold'>
              <Link href="/"><a> <h1 className="text-2xl  sm:text-2xl md:text-2xl m-4 p-2 font-curs border-2 bg-white shadow active:shadow-xl hover:shadow-xl text-center " onClick={()=>setClicked(false)}>Home</h1>  </a></Link>
             <Link href="/about" ><a><h1 className="text-2xl  sm:text-2xl md:text-2xl m-4  font-curs  p-2 border-2 bg-white shadow  active:shadow-xl hover:shadow-xl text-center  " onClick={()=>setClicked(false)}>About</h1></a></Link>
               </div>

            </div>         
            
        </div>
    )
}

export default Nav
