import React from "react";
import Image from "next/image";

export const CallOption = () => {
  return (
    <div>
      <div className='fixed bottom-10 right-10 z-50'>
        <a href='tel:7208426300'>
          <Image src='/images/phone-icon.svg' className='bg-yellow-300 p-2 rounded-full animate-bounce z-20' alt='Call Us' width={60} height={60} />
        </a>
      </div>
      <div className='fixed bottom-32 right-10 z-50'>
        <a href='https://api.whatsapp.com/send/?phone=917208426300&text&type=phone_number&app_absent=0' target="_blank">
          <Image src='/images/whatsapp.png' className='animate-pulse z-20' alt='Call Us' width={60} height={60} />
        </a>
      </div>
    </div>

  );
};