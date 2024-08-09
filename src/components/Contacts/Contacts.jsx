import { useEffect, useState } from 'react';

export default function Contacts() {
  const [isBlock, setIsBlock] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsBlock(true);
    }, 500);
  }, []);

  return (
    <>
      {isBlock ? (
        <div className=" h-screen bg-main flex w-screen items-center container mx-auto"></div>
      ) : (
        <div className=" h-screen bg-main flex w-screen items-center container mx-auto"></div>
      )}
    </>
  );
}
