import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
import { CallOption } from "@/components/CallOption";

// const inter = Inter({ subsets: ["latin"] });
const title = "Contact Us";
export default function Contact() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Any questions? Feel free to contact us here."
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
          <div className="flex justify-center w-full px-4 md:px-20">
            <div className="flex flex-col w-full md:w-[1000px]">
              <div className="text-3xl font-medium uppercase">
                Let&apos;s get in touch
              </div>
              <div className="h-[2px] bg-yellow-500 my-2"></div>
              <form>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="nameInput" className=" ">
                      Your Name
                    </label>
                    <input
                      type={"text"}
                      id="nameInput"
                      name="name_input"
                      className="block border p-2 border-yellow-500 text-gray-700 bg-gray-100 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="emailInput" className="text-md">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="emailInput"
                      name="email_input"
                      className="block border p-2 border-yellow-500 text-gray-700 bg-gray-100 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="interestInput" className=" ">
                      What You&apos;re Interested In
                    </label>
                    <input
                      type={"text"}
                      id="interestInput"
                      name="interest_input"
                      className="block border p-2 border-yellow-500 text-gray-700 bg-gray-100 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="goalInput" className="text-md">
                      Your Goal
                    </label>
                    <input
                      type="email"
                      id="goalInput"
                      name="goal_input"
                      className="block border p-2 border-yellow-500 text-gray-700 bg-gray-100 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="messageInput" className=" ">
                      Your Message
                    </label>
                    <textarea
                      id="messageInput"
                      name="message_input"
                      className="h-[200px] block border p-2 border-yellow-500 text-gray-700 bg-gray-100 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                    ></textarea>
                  </div>
                </div>
              </form>
              <div className="text-3xl font-medium uppercase pt-4 pb-4">
                Come Visit Us
              </div>
              <div className="w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.596552730864!2d72.84821347574974!3d19.081468051799888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c7119475e7%3A0x94654102dcfd27fb!2sKrishna%20Regency!5e0!3m2!1sen!2sin!4v1695062956683!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
