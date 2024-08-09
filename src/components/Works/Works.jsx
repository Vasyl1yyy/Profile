import { useEffect, useState } from 'react';
import Carousel from './Carousel/Carousel';

export default function Works() {
  const [isBlock, setIsBlock] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsBlock(true);
    }, 500);
  }, []);

  return (
    <>
      {isBlock ? (
        <div className=" h-screen bg-main flex w-screen items-center container mx-auto">
          <Carousel />
        </div>
      ) : (
        <div className=" h-screen bg-main flex w-screen items-center container mx-auto"></div>
      )}
    </>
  );
}
