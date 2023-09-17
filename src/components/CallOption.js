import React from "react";
import Image from "next/image";

export const CallOption = () => {
  return (
    <div className='fixed bottom-10 right-10 z-50'>
      <a href='tel:1234567890'>
        <Image src='/images/phone-icon.svg' className='bg-yellow-300 p-2 rounded-full animate-bounce z-20' alt='Call Us' width={60} height={60} />
      </a>
    </div>
  );
};