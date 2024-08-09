import CarouselBlock from './CarouselBlock/CarouselBlock';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';

export default function Carousel() {
  return (
    <div>
      <div>
        <CarouselBlock
          img={
            'https://refine-web.imgix.net/blog/2023-10-29-react-slick/social.png?w=1788'
          }
          title={'paralax'}
          text={
            'kljdfkkfl jaslk;d fjaskld jfklas djfkla sdj fkl kladfi4jrkl sdklj asdlkjf askldfj asl;kfj asldfaskldjflaskdfkl j'
          }
          url={
            'https://refine-web.imgix.net/blog/2023-10-29-react-slick/social.png?w=1788'
          }
        />
      </div>
      <div className="flex justify-center items-center gap-5 mt-10 text-white">
        <div className="p-3 rounded-full bg-block cursor-pointer border-2 border-block transition hover:border-pruple text-pruple">
          <FaAngleLeft />
        </div>
        <div className="px-2 py-1 rounded-full bg-block cursor-pointer border-2 border-pruple transition hover:border-pruple">
          1
        </div>
        <div className="px-2 py-1 rounded-full bg-block cursor-pointer border-2 border-block transition hover:border-pruple">
          2
        </div>
        <div className="px-2 py-1 rounded-full bg-block cursor-pointer border-2 border-block transition hover:border-pruple">
          3
        </div>
        <div className="px-2 py-1 rounded-full bg-block cursor-pointer border-2 border-block transition hover:border-pruple">
          4
        </div>
        <div className="px-2 py-1 rounded-full bg-block cursor-pointer border-2 border-block transition hover:border-pruple">
          5
        </div>
        <div className="px-2 py-1 rounded-full bg-block cursor-pointer border-2 border-block transition hover:border-pruple">
          6
        </div>
        <div className="p-3 rounded-full bg-block cursor-pointer border-2 border-block transition hover:border-pruple text-pruple">
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
}
