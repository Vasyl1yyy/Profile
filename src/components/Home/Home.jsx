import { FaCode } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className=" h-screen bg-main flex w-screen items-center container mx-auto">
      <div className=" flex justify-center gap-[200px] w-full items-center ">
        <div className="">
          <p className=" text-base text-white opacity-50">Profile</p>
          <h1 className=" text-3xl text-pruple">I'am Dienis Vasylkov</h1>
          <h2 className=" text-2xl text-white mt-2">Frontend developer</h2>
          <div className="mt-16 flex justify-start items-center gap-5">
            <Link
              className=" bg-pruple rounded-full py-2 px-10 text-white"
              to="/resume"
            >
              Resume
            </Link>
            <Link
              className="text-pruple after:content-[''] after:block after:h-0.5 after:bg-pruple after:mt-[-3px]"
              to="/contacts"
            >
              Contacts
            </Link>
          </div>
        </div>
        <div className="text-[300px] text-pruple">
          <FaCode />
        </div>
      </div>
    </div>
  );
}
