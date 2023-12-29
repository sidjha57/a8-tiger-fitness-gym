import Image from "next/image"
import { useState } from "react"

export const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const testimonial = 
        [
            {
                image: "/images/testimonial-guy.webp",
                desc:  "The A8 Tiger Fitness Gym has truly been a game-changer in my fitness journey. Its welcoming environment, top-notch equipment, and expert trainers have supported me in surpassing my fitness goals. From tailor-made personal training plans to diverse group classes, they offer an all-encompassing approach to health. Thanks to A8 Tiger Fitness Gym, I am stronger, healthier, and more confident than ever.",
                name:  "Matthew M. Walsh",
                profession: "Fitness Influencer"
            },
            {
                image: "/images/testimonial-guy.webp",
                desc:  "The A8 Tiger Fitness Gym has truly been a game-changer in my fitness journey. Its welcoming environment, top-notch equipment, and expert trainers have supported me in surpassing my fitness goals. From tailor-made personal training plans to diverse group classes, they offer an all-encompassing approach to health. Thanks to A8 Tiger Fitness Gym, I am stronger, healthier, and more confident than ever.",
                name:  "Matthew M",
                profession: "Fitness Influencer"
            },
            {
                image: "/images/testimonial-guy.webp",
                desc:  "The A8 Tiger Fitness Gym has truly been a game-changer in my fitness journey. Its welcoming environment, top-notch equipment, and expert trainers have supported me in surpassing my fitness goals. From tailor-made personal training plans to diverse group classes, they offer an all-encompassing approach to health. Thanks to A8 Tiger Fitness Gym, I am stronger, healthier, and more confident than ever.",
                name:  "Walsh",
                profession: "Fitness Influencer"
            }
        ]
    

    return (
        <div className="flex max-w-[1000px] mx-10 my-16 ">
        <div className="h-[425px] w-[250px]  rounded-tr-[6.7em] relative overflow-hidden hidden md:block">
          <Image
            className="object-cover z-10 "
            alt="Fit A8 Tiger Fitness Gym Member With Testimonial"
            src={testimonial[index].image}
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
              &quot;{testimonial[index].desc}&quot;
            </div>
            <div className="flex justify-between h-[100px]">
              <div>
                <div className="font-semibold text-md sm:text-2xl">
                {testimonial[index].name}
                  
                </div>
                <div className="text-sm sm:text-md">{testimonial[index].profession}</div>
              </div>
              <div className="flex flex-col h-[px] justify-end">
                <div className="flex gap-4">
                  <button
                    id="testimonial-left-btn"
                    role="button"
                    aria-label="Previous Testimonial Button"
                    className={`my-4 py-3 px-6 text-sm uppercase font-bold text-black  transition-all duration-300 
                        ${index === 0 ? "bg-gray-400 hover:bg-gray-400 ": "hover:bg-yellow-500 hover:text-white bg-white"}
                    `}
                    disabled={index === 0}
                    onClick={() => setIndex(index-1)}
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
                    className={` my-4 sm:py-3 px-6 text-sm uppercase font-bold text-black  transition-all duration-300
                        ${index === testimonial.length-1 ? "bg-gray-400 hover:bg-gray-400 hover:text-black" : "hover:bg-yellow-500 hover:text-white bg-white" }
                    `}
                    disabled={index === testimonial.length-1}
                    onClick={() => setIndex(index+1)}
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
    )
}