

function Header() {
    return (
        <div className='flex flex-col backy   mt-5   h-5/6 p-5  sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  justify-around    items-center '>
          
         <div className="w-5/6 sm:w-max md:w-max    p-2 rounded  flex-col justify-center items-center  h-max ">
              <h1 className="text-pink-400  font-bold font-roboto text-md sm:text-md md:text-xl   xl:text-xl xl:p-4 2xl:text-2xl self-center  ">Efficient Technologies With Expert Solution</h1>
              <h2 className="text-gray-400  font-bold font-ubuntu text-md  sm:text-md md:text-xl xl:text-xl xl:p-4 2xl:text-2xl self-center">Athough Experience Matter's</h2>
              <button className=" p-2   text-md rounded shadow-md hover:shadow-xl active:shadow bg-pink-600 text-white sm:px-4 md:px-10 xl:px-10 xl:font-extrabold 2xl:font-extrabold  2xl:px-10 m-10  font-karla">About</button>

          </div>
          <div className="flex ">
              <img src="/pictures/pic1.jpg" className="w-20 bg-white h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 border-2 p-3 rounded lg:w-40 lg:h-40 xl:w-60 xl:h-60 " />
              <img src="/pictures/pic2.jpg" className="w-20 bg-white h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 z-6 mt-10 border-2 p-3 rounded lg:w-40 lg:h-40 xl:w-60 xl:h-60 " />
          </div>

      
            
        </div>
    )
}

export default Header
