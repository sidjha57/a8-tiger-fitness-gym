import React from "react";
import Image from "next/image";

export const CallOption = () => {
  return (
    <div>
      <div className='fixed bottom-10 right-10 z-50'>
        <a href='tel:7208426300' aria-label="Phone No.">
          <i className="fa-sharp fa-solid fa-phone fa-shake text-[30px] text-yellow-700 bg-yellow-300 rounded-full p-4"></i>
          
          {/* <Image src='/images/phone-icon.svg' className='bg-yellow-300 p-2 rounded-full animate-bounce z-20' alt='Call Us' width={60} height={60} /> */}
        </a>
      </div>
      <div className='fixed bottom-32 right-10 z-50'>
        <a href='https://api.whatsapp.com/send/?phone=917208426300&text&type=phone_number&app_absent=0' target="_blank" aria-label="Whatsapp chat linked">
          {/* <i class="fa-brands fa-whatsapp fa-fade text-[35px] bg-green-500 rounded-full p-4"></i> */}
          <Image src='/images/whatsapp.png' className='animate-pulse z-20' alt='Call Us' width={60} height={60} />
        </a>
      </div>
    </div>

  );
};