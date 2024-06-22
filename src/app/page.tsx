import Image from "next/image";
import facebook from "../../public/pictures/facebook1.svg";
export default function Home() {
  return (
    
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-2xl  w-1/2 px-11">
        <Image src={facebook} width={300} height={100} alt="facebook logo" />
        <p className="ml-8 -mt-3 text-2xl">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      {/* Right side */}
      <div className="bg-white flex flex-col p-6 rounded-xl w-1/3 relative">
        <input
          className=" my-2 border border-1/2 border-gray-100 p-3  rounded-md focus:outline-1 outline-blue-500"
          width={200}
          type="text"
          placeholder="Email address or phone number"
        />
        <input
          className="my-2 border border-1/2 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-500"
          type="password"
          placeholder="password"
          name="password"
        />
        <button className=" my-2 bg-blue-600 py-2 rounded-md text-lg font-bold text-white hover:bg-blue-700">
          log in
        </button>
        <p className="text-blue-600 text-sm  text-center my-2 hover:underline cursor-pointer">
          Forgotten password?
        </p>
        <span className="my-2">
          <hr />
        </span>
        <button className="my-2 bg-green-500 py-3 px-5 mx-auto rounded-md text-lg font-bold w-fit text-white hover:bg-green-600">Create an account</button>
      <span className="absolute -bottom-10 text-sm "> <span className="font-bold hover:underline cursor-pointer">Create a Page </span>
       for a celebrity, brand or business.
      </span>
      </div>
  
    </div>
   
  );
}
