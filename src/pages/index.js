import { PriceCard } from "../components/priceCard";
import { Trainer } from "../components/trainer";
import { Footer } from "../components/footer";
import { Navbar } from "../components/Navbar";
import { SlideColorBox } from "@/components/SlideColorBox";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { CallOption } from "@/components/CallOption";
// import { Inter } from "next/font/google";
import Coverflow from "@/components/Coverflow";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [localArms8, setLocalArms8] = useState("Santacruz");
  const [modal, setModal] = useState(true);
  return (
    <>
      <Head>
        <title>Arms8 Gym</title>
        <meta
          name="description"
          content="Unlock your greatness and forge the body you want at Arms8 Gym. We offer personalized training, yoga, zumba and professional trainers to help you achieve your fitness goals. Join now and experience a game-changing fitness journey!"
        />
        <meta
          name="keywords"
          content="Arms8 Gym, gym, fitness, personalized training, juice bar, sauna, spa, professional trainers, fitness goals, membership plans, gym membership, fitness journey"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        id={"modal"}
        className={`${
          modal ? "fixed" : "hidden"
        } w-screen h-screen bg-black/50 z-50 overflow-y-hidden flex justify-center items-center `}
      >
        <div className="w-[300px] h-[260px] sm:w-[600px] sm:h-[140px] bg-white rounded-md flex flex-col  items-center gap-4 leading-5 overflow-hidden">
          <div id="modal-head" className="w-full h-[40px] py-2 px-4 border-b-2">
            <div className="leading-6 ">
              <div className="text-[1.2em] text-gray-900 font-medium">
                Select location
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-wrap justify-start gap-10 child:font-semibold text-gray-800 px-4">
              <button
                onClick={() => {
                  setLocalArms8("Santacruz");
                  setModal(false);
                }}
                aria-label="Santacruz"
              >
                Santacruz
              </button>
              <button
                onClick={() => {
                  setLocalArms8("Ville Parle");
                  setModal(false);
                }}
                aria-label="Ville Parle"
              >
                Ville Parle
              </button>
              <button
                onClick={() => {
                  setLocalArms8("Andheri");
                  setModal(false);
                }}
                aria-label="Andheri"
              >
                Andheri
              </button>
            </div>
          </div>
          <div className="w-full h-[50px] bg-gray-200 flex justify-end items-center">
            <button
              className="bg-white border-2 border-yellow-500 h-[40px] w-[60px] mx-4 text-black transition-all duration-100 hover:bg-yellow-500 hover:text-white hover:h-[50px] hover:w-[65px]"
              onClick={() => {
                setModal(false);
              }}
              aria-label="Close"
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <main className="bg-black w-screen">
        <Navbar />
        <CallOption />
        <div className="flex justify-center items-center mx-auto">
          <div className="h-[85vh] overflow-hidden z-0 bg-[url('/images/landing.webp')] bg-cover bg-no-repeat w-screen">
            <div
              name="bgChild"
              className="relative flex flex-col justify-center items-center sm:items-end text-left  w-full h-full pr-12"
            >
              <div className="w-full  md:w-2/5 mx-5 px-10 sm:px-5 py-10 leading-[3em] transition-all duration-300">
                <div className="h-12 relative w-[300px]">
                  <Image
                    className="object-fit   -z-10 bottom-0 "
                    alt="Trainer Backdrop"
                    src="/images/spray.png"
                    fill
                    loading="lazy"
                  />
                  <h1 className="text-white font-bold text-[1em] [text-shadow:_0_2px_2px_rgb(0_0_0_/_40%)] z-40 relative left-[2.5rem] top-[.25rem]">
                    UNLOCK YOUR GREATNESS
                  </h1>
                </div>

                <div className="text-gray-100 font-bold text-[4em] [text-shadow:_0_3px_3px_rgb(0_0_0_/_40%)]">
                  FORGE THE BODY
                </div>
                <div className="text-gray-100 text-[4em] [text-shadow:_0_3px_3px_rgb(0_0_0_/_40%)] font-light">
                  YOU WANT
                </div>
                <button
                  id="hero-cta"
                  className="bg-white my-4 py-3 px-6 text-sm uppercase font-bold border border-white hover:border-yellow-500 transition-all duration-300"
                  onMouseEnter={() => {
                    document
                      .getElementById("hero-cta-button-arrow")
                      .classList.add("left-2");
                  }}
                  onMouseLeave={() => {
                    document
                      .getElementById("hero-cta-button-arrow")
                      .classList.remove("left-2");
                  }}
                  onClick={() => {
                    window.location.assign("/pricing");
                  }}
                  aria-label="Membership Plans"
                >
                  Membership Plans{"  "}
                  <i
                    id="hero-cta-button-arrow"
                    className="relative fa-solid fa-arrow-right text-yellow-500 left-0 transition-all duration-200"
                  ></i>
                </button>

                <div className="flex gap-5">
                  <a
                    href="https://www.facebook.com/people/ARMS-8-GYM/100093163308833/?mibextid=ZbWKwL"
                    target="_blank"
                    aria-label="Facebook Logo"
                  >
                    <Image
                      src="/images/facebook-logo.png"
                      width={60}
                      height={60}
                      alt="Facebook logo"
                    />
                  </a>
                  <a href="https://www.instagram.com/arms8gym/" target="_blank"
                    aria-label="Instagram Logo"
                  >
                    <Image
                      src="/images/instagram-logo.png"
                      width={60}
                      height={60}
                      alt="Instagram logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-orange-400">
          <div className="py-8 flex flex-col justify-center items-center text-white">
            <div className="text-sm uppercase tracking-[.5em] font-medium">
              Closest Location
            </div>
            <div className="text-lg sm:text-2xl pt-2 pb-4 tracking-[.1em] font-semibold">
              Your Local Arms8 Gym&nbsp;
              <span>
                <a
                  href="https://maps.app.goo.gl/z5C1UAVWyvxy2HGP9"
                  target="_blank"
                  aria-label="Google Map Location"
                >
                  <i className="fa-solid fa-location-dot"></i>&nbsp;
                </a>
                <button
                  className="hover:tracking-[.15em] transition-all duration-300"
                  role={"button"}
                  aria-label={"Local Arms8 Gym Selector"}
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  {localArms8}
                </button>
                &nbsp;
                <button
                  className="uppercase text-xs"
                  role="button"
                  aria-label="Change Local Arms8 Location"
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  Change
                </button>
              </span>
            </div>
            <div className="flex justify-center">
              <div className="flex gap-4 font-medium">
                <button
                  className="w-52 h-14 bg-white uppercase text-yellow-700 tracking-[.2em] hover:tracking-[.1em] transition-all duration-300"
                  role="button"
                  aria-label="View information about your local Arms8 Gym"
                >
                  Get Details
                </button>
                <button
                  className="w-36 h-14 bg-white uppercase text-orange-600 tracking-[.2em] hover:tracking-[.1em] transition-all duration-300"
                  role="button"
                  aria-label="Memberships Button"
                >
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <Coverflow />
        <div className="bg-white flex flex-col gap-4 justify-center items-center">
          <div className="text-black  text-center text-2xl mt-10 mb-2.5 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold">
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-yellow-500 to-orange-600"></div>
            </span>
            Our Services
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-yellow-500 to-orange-600"></div>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 py-6 max-w-[1800px]">
            <SlideColorBox
              idNum={2}
              title={"MMA / Kick Boxing"}
              sub={
                "Your fitness destination! Get fit with MMA classes and expert trainers. Customized batches available. Come see why we're your #1 training spot!"
              }
              icon={"sports_martial_arts"}
              img="/images/mma.webp"
            />
            <SlideColorBox
              idNum={3}
              title={"Yoga"}
              sub={
                "We offer certified yoga classes with 12 monthly sessions on Mon, Wed, Fri. Visit us today for info!"
              }
              icon={"self_improvement"}
              img="/images/yoga.webp"
            />
            <SlideColorBox
              idNum={4}
              title={"Zumba"}
              sub={
                "Get fit with our certified Zumba trainers. 12 sessions/month, Mon, Wed, Fri batches. Join us on the path to a healthier you!"
              }
              icon={"people"}
              img="/images/zumba.webp"
            />
          </div>
        </div>
        <div className="bg-white flex flex-col">
          <div className="bg-[url('/images/18410.webp')] bg-cover h-max bg-opacity-10 py-8">
            <div className="text-black  text-center text-2xl mt-10 mb-2.5 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold">
              <span>
                <div className="w-8 h-[2px] bg-gradient-to-r from-yellow-500 to-orange-600"></div>
              </span>
              Professional Trainers
              <span>
                <div className="w-8 h-[2px] bg-gradient-to-r from-yellow-500 to-orange-600"></div>
              </span>
            </div>
            <div className="flex justify-center">
              <div className="h-8 relative w-[200px] mb-2.5">
                <Image
                  className="object-fit relative "
                  alt="Trainer Backdrop"
                  src="/images/spray.png"
                  fill
                  loading="lazy"
                />
                <h1 className="text-white text-center font-bold text-[1em] [text-shadow:_0_2px_2px_rgb(0_0_0_/_40%)] z-40 relative top-[.25rem] uppercase">
                  Here For You
                </h1>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="max-w-[400px] text-center text-gray-700 font-medium">
                Our team of expert coaches is dedicated to help you acheive your
                goals with personal guidance and motivation!
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-24 ">
              <Trainer
                name="Neel Vaidya"
                img="/images/trainers/trainer-2.png"
                trainerType={"Crossfit"}
              />
              <Trainer
                name="Vilash Shinde"
                img="/images/trainers/trainer-3.png"
                trainerType={"Bodybuilding"}
              />
              <Trainer
                name="Abdul Khan"
                img="/images/trainers/trainer-2.png"
                trainerType={"Lifestyle"}
              />
            </div>

            <div></div>
          </div>
        </div>
        <div className="bg-white flex flex-col py-8 items-center border-b-2">
          <div className="text-black  text-center text-2xl mt-10 mb-5 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold">
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-yellow-500 to-orange-600"></div>
            </span>
            Testimonials
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-yellow-500 to-orange-600"></div>
            </span>
          </div>

          <div className="flex max-w-[1000px] mx-10 my-16">
            <div className="h-[425px] w-[250px]  rounded-tr-[6.7em] relative overflow-hidden hidden md:block">
              <Image
                className="object-cover z-10 "
                alt="Fit Arms8 Gym Member With Testimonial"
                src="/images/testimonial-guy.webp"
                fill
              />
            </div>
            <div className="max-w-[750px]">
              <div className="h-[100px]"></div>
              <div className="h-[325px] px-4 py-6 bg-black text-white align-bottom md:pl-24">
                <i className="fa-solid fa-quote-right text-white text-[2em] sm:text-[3.5em]"></i>
                <div
                  id="testimonial text"
                  className="font-thin italic text-[.8em] sm:text-[1em] md:text-[1.1em]"
                >
                  &quot;The Arms8 Gym has truly been a game-changer in my
                  fitness journey. Its welcoming environment, top-notch
                  equipment, and expert trainers have supported me in surpassing
                  my fitness goals. From tailor-made personal training plans to
                  diverse group classes, they offer an all-encompassing approach
                  to health. Thanks to Arms8 Gym, I am stronger, healthier, and
                  more confident than ever.&quot;
                </div>
                <div className="flex justify-between h-[100px]">
                  <div>
                    <div className="font-semibold text-md sm:text-2xl">
                      Matthew M. Walsh
                    </div>
                    <div className="text-sm sm:text-md">Fitness Influencer</div>
                  </div>
                  <div className="flex flex-col h-[px] justify-end">
                    <div className="flex gap-4">
                      <button
                        id="testimonial-left-btn"
                        role="button"
                        aria-label="Previous Testimonial Button"
                        className="bg-white my-4 py-3 px-6 text-sm uppercase font-bold text-black hover:bg-yellow-500 hover:text-white transition-all duration-300"
                      >
                        <i
                          id="testimonial-left-arrow"
                          className="relative fa-solid fa-arrow-left"
                        ></i>
                      </button>

                      <button
                        id="testimonial-right-btn"
                        role="button"
                        aria-label="Next Testimonial Button"
                        className="bg-white my-4 sm:py-3 px-6 text-sm uppercase font-bold text-black hover:bg-yellow-500 hover:text-white transition-all duration-300"
                      >
                        <i
                          id="testimonial-right-arrow"
                          className="relative fa-solid fa-arrow-right"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-black  text-center text-xl mt-10 mb-10 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold underline">
            Brands We Work With
          </div>
          <div className="flex justify-center w-screen pb-4">
            <div className="flex justify-evenly w-[1080px] flex-wrap gap-10 ">
              <div className="flex flex-col sm:flex-row gap-10 child:opacity-60 child-hover:opacity-100">
                <div className="w-[200px] h-[100px] relative">
                  <Image
                    className="object-scale-down"
                    src="/images/brands/gymshark.webp"
                    alt="Brand Partner Gymshark"
                    fill
                  ></Image>
                </div>
                <div className="w-[200px] h-[100px] relative">
                  <Image
                    className="object-scale-down"
                    src="/images/brands/ryse.webp"
                    alt="Brand Partner Ryse"
                    fill
                  ></Image>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-10 child:opacity-60 child-hover:opacity-100">
                <div className="w-[200px] h-[100px] relative">
                  <Image
                    className="object-scale-down"
                    src="/images/brands/bodybuilding-com.webp"
                    alt="Brand Partner Bodybuilding.com"
                    fill
                  ></Image>
                </div>
                <div className="w-[200px] h-[100px] relative">
                  <Image
                    className="object-scale-down"
                    src="/images/brands/news.webp"
                    alt="Brand Partner Blank News"
                    fill
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col py-8 items-center border-b-2">
          <div className="text-black  text-center text-2xl mt-10 mb-5 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold">
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-yellow-500 to-orange-600"></div>
            </span>
            Pricing
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-yellow-500 to-orange-600"></div>
            </span>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center gap-10 flex-wrap">
              <PriceCard
                title={"Newcomer"}
                price="700"
                features={""}
                thumbnail="/images/pricing/pricing-2.jpg"
                tier={1}
              />
              <PriceCard
                title={"Experienced"}
                price="1500"
                features={""}
                thumbnail="/images/pricing/pricing-1.webp"
                tier={2}
              />
              <PriceCard
                title={"Mr. Olympia"}
                price="2500"
                features={""}
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
