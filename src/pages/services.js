import Head from "next/head";
import Image from "next/image";
import { CallOption } from '@/components/CallOption';
import { Navbar } from "@/components/Navbar";
import { SlideColorBox } from "@/components/SlideColorBox";
import { Footer } from "@/components/PageFooter";

export default function Services() {
  const title = "Services";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Various pricing options available with being a Member of A8 Tiger Fitness Gym. Whether you're new to the gym or an experienced lifter we have a plan that fits your needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <Navbar />
        <CallOption />

        <div className="h-[400px] w-full bg-black relative flex justify-center items-end">
          <Image
            alt="Initial image"
            src="/images/services.webp"
            className="object-cover"
            fill
            loading="lazy"
          />
          <div className="w-full h-full z-10 absolute bg-black/50"></div>
          <div className=" text-center text-2xl mt-10 mb-5 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold z-30 text-white">
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-yellow-500 to-orange-600"></div>
            </span>
            {title}
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-yellow-500 to-orange-600"></div>
            </span>
          </div>
        </div>

        <div className="bg-white flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-wrap justify-center gap-2 py-10 max-w-[1800px]">
            {/* <SlideColorBox idNum={1} title={"Personalized Training"} sub={"Work with experienced trainers to achieve your goals"} icon={"exercise"} img="/images/trainer.webp"/> */}
            <SlideColorBox idNum={2} title={"MMA / Kick Boxing"} sub={"Your fitness destination! Get fit with MMA classes and expert trainers. Customized batches available. Come see why we're your #1 training spot!"} icon={"user-ninja"} img="/images/mma.webp"/>
            <SlideColorBox idNum={3} title={"Yoga"} sub={"We offer certified yoga classes with 12 monthly sessions on Mon, Wed, Fri. Visit us today for info!"} icon={"person-praying"} img="/images/yoga.webp"/>
            <SlideColorBox idNum={4} title={"Zumba"} sub={"Get fit with our certified Zumba trainers. 12 sessions/month, Mon, Wed, Fri batches. Join us on the path to a healthier you!"} icon={"people-group"} img="/images/zumba.webp"/>
            {/* <SlideColorBox idNum={5} title={"Childcare"} sub={"Don't let life slow you down from your fitness goals"} icon={"child"} img="/images/daycare.jpeg"/>
            <SlideColorBox idNum={6} title={"Spa"} sub={"Post-workout relaxation"} icon={"spa"} img="/images/spa.jpeg"/> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
