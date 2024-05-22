 "use client"
import { useState } from "react"
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
const App = () => {
const [userName,setUserName] = useState("")
const [password,setPassword] = useState("")
return (
    <>
    <nav className="flex items-center bg-[#095F59] text-white h-14">
        <h2 className="font-bold text-2xl pl-2">SHEY</h2>
        <div className="mr-1 absolute right-0">
          <a href="#" className="pr-2" >Home</a>
          <a href="#" className="pr-2" >Services</a>
          <a href="#" className="pr-2" >Contact us</a>
        </div>
    </nav>
<div className="relative h-[888px] overflow-hidden "> 
    <div className="bg-[#095F59] w-[2500px] h-[780px] absolute bottom-[-250px] rotate-[-8deg] left-[-10px] "></div>
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">{/*bu div ile login divini sarıp login kısmını arka planın önünde olmasını sağlıyoruz*/}
    <div className="absolute bottom-[-15px] opacity-80 left-[100px] w-[150px]">
    <div className="bg-[#15886f]  rounded-full absolute left-[100px] bottom-[350px] w-[150px] h-[150px]"></div>
    <div className="bg-[#095F59] opacity-50 rounded-full absolute left-[115px] bottom-[365px] w-[120px] h-[120px]"></div>
    </div>

    <div className="absolute bottom-[-410px] right-[150px] w-[150px]">
    <div className="
    bg-[#24c09e] opacity-70 rounded-full absolute left-[100px] bottom-[350px] w-[250px] h-[250px]"></div>
    <div className="bg-[#095F59] rounded-full absolute left-[125px] bottom-[375px] w-[200px] h-[200px]"></div>
    </div>
    
    <div className="flex  justify-center items-center ">
      <div className="flex flex-col justify-center shadow-2xl w-[500px] p-5 h-[500px] bg-slate-100 bg-opacity-30 ">
      <div className="flex flex-col">
      <h1 className=" text-5xl font-bold text-[#276662]">LOGIN</h1>
    <input 
      className="border rounded-lg p-2 pl-4 mt-3"
      type="text"
      placeholder="Username"
      value={userName}
      onChange={(event) => setUserName(event.target.value)} 
      />
    <input 
      className="border rounded-lg p-2 pl-4 mt-3"
      type="password"
      placeholder="Password"
      value={password}
      onChange={(event) => setPassword(event.target.value)} 
      />
    <button className="bg-[#095F59] border hover:bg-slate-50 hover:text-[#095F59] hover:border-[#095F59] text-white font-medium pl-10 pr-10 p-2 mt-5 rounded-lg">LOGIN</button>
      </div>
      
    <div className="flex items-center my-6 pt-2">
          <hr className="flex-grow border-gray-800" />
          <span className="mx-4 text-gray-800">OR</span>
          <hr className="flex-grow border-gray-800" />
    </div>
      <footer className="flex justify-center pt-2">
        <a href="#" className="mr-5"><FcGoogle size={30} /></a>
        <a href="#" className="ml-5"><FaFacebook size={30} color="blue" /></a>
      </footer>
        <p className="flex justify-center font-medium text-[#095F59] pt-5 ">Note yet registered, Click here to<a href="#" className="ml-2" >Sign up</a></p>
     
      </div>
      </div>
      </div>
      
</div>
          </>
  )
}
export default App
