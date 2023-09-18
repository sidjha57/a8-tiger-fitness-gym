import { PriceCard } from "../components/priceCard";
import { Footer } from "../components/footer";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { CallOption } from "@/components/CallOption";

const inter = Inter({ subsets: ["latin"] });
const title = "About Us";
export default function Pricing() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="This is the story of Arms8 Gym, from humble beginnings to where we are today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <Navbar />
        <CallOption />
        <div className="h-[400px] w-full bg-black relative flex justify-center items-end">
          <Image
            alt="Man doing pushups"
            src="/images/sub-page-1.webp"
            className="object-cover"
            fill
            loading="lazy"
          />
          <div className="w-full h-full z-10 absolute bg-black/50"></div>
          <div className="text-center text-2xl mt-10 mb-5 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold z-30 text-white">
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-yellow-500 to-orange-600"></div>
            </span>
            {title}
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-yellow-500 to-orange-600"></div>
            </span>
          </div>
        </div>

        <div className="bg-[url('/images/18410.webp')] bg-cover flex flex-col py-8 items-center border-b-2">
          <div className="flex justify-center w-full">
            <div className="w-[400px] text-xs  sm:text-lg sm:w-[700px] md:w-[1000px] mx-[2rem] sm:mx-[6rem] text-gray-700 child:mb-2 border-4 border-black px-[1rem] sm:px-[4rem] py-[2rem]">
              <h2 className="text-4xl text-black font-semibold text-center">
                Our Story
              </h2>
              <div className="indent-[2rem] font-medium sm:text-[1.5rem] sm:leading-10">
                Arms 8 Gym is the premier place to get in shape in the heart of
                the city. Our state-of-the-art facility is kept impeccably clean
                and hygienic, and we offer a wide range of international branded
                equipments to help you reach your fitness goals. We also have
                personal studio spaces and a team of certified trainers to help
                you get the most out of your workout. Our gym also features
                elegant and ambient interiors to help you create great workout
                vibes. Come join us and we guarantee you will have a great time
                while achieving your fitness goals.
              </div>
              <h4 className="text-2xl text-black font-semibold text-center">
                Our Vision
              </h4>{" "}
              <div className="indent-[2rem] font-medium sm:text-[1.5rem] sm:leading-10">
                Arms8 Gym envisions a world where fitness is not just a goal but
                a lifestyle. We believe in the power of fitness to transform
                lives, inspire change, and create a positive impact. Our vision
                guides us in everything we do, from designing our gym facilities
                to crafting our fitness programs and hiring our staff.
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
