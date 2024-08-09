import { FaLink } from 'react-icons/fa6';

export default function CarouselBlock({ img, title, text, url }) {
  return (
    <div className="flex justify-center  bg-block rounded-3xl mx-[250px] p-5 gap-10">
      <div className="h-[350px] max-w-[350px] min-w-[350px]  bg-pruple rounded-2xl overflow-hidden relative">
        <img
          className=" absolute top-1/2 left-1/2 max-w-min h-full translate-y-[-50%] translate-x-[-50%]"
          src={img}
        />
      </div>
      <div className="flex justify-between flex-col">
        <h2 className=" text-3xl text-pruple mt-5 ">{title}</h2>
        <p className=" text-base text-white ">{text}</p>
        <a
          href={url}
          className="text-pruple mb-5 flex justify-start items-center gap-2"
        >
          <FaLink /> Link
        </a>
      </div>
    </div>
  );
}
