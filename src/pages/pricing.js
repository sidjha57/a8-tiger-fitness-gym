import Head from "next/head";
import Image from "next/image";
import { CallOption } from "@/components/CallOption";
import { Navbar } from "@/components/Navbar";
import { PriceCard } from "@/components/PriceCards";
import { Footer } from "@/components/PageFooter";

const title = "Membership Plans";
export default function Pricing() {
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
          <Image alt="Initial Image" src="/images/sub-page-1.webp" className="object-cover" fill />
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

        <div className="bg-white flex flex-col py-8 items-center border-b-2">
          <div className="flex justify-center">
            <div className="flex justify-center gap-10 flex-wrap">
              <PriceCard
                title={"Newcomer"}
                price="700"
                features={['Personal Training', 'General Gym Acess', 'Sauna Access']}
                thumbnail="/images/pricing/pricing-2.webp"
                tier={1}
              />
              <PriceCard
                title={"Experienced"}
                price="1500"
                features={['Personal Training', 'General Gym Acess', 'Sauna Access']}
                thumbnail="/images/pricing/pricing-1.webp"
                tier={2}
              />
              <PriceCard
                title={"Mr. Olympia"}
                price="2500"
                features={['Personal Training', 'General Gym Acess', 'Sauna Access']}
                thumbnail="/images/pricing/pricing-3.webp"
                tier={3}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
