import React from "react";
import Link from "next/link";
import Image from "next/image";
export function Footer({}) {
  return (
    <footer className="bg-black/95">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center mb-10">
              <Image
                src="/images/logo.png"
                className="mr-3"
                alt="Arms8 Gym Logo"
                loading="lazy"
                width={90}
                height={90}
              />
            </Link>
            <div className="text-sm flex mt-8 justify-end sm:mt-0 text-gray-200 flex-col h-[70px]">
              <div className="text-lg font-medium">Contact</div>
              <a
                className="text-gray-400 font-medium hover:underline"
                href="mailto:example@example.com"
                aria-label="Company mail"
              >
                <i className="fa-solid fa-envelope text-gray-400 mr-2"></i> 
                arms8gym@gmail.com
              </a>
              <span>
                <i className="fa-solid fa-phone fa-sharp text-gray-400 mr-2"></i>
                <a
                  className="text-gray-400 font-medium hover:underline"
                  href="tel:+919152510140"
                  aria-label="First phone number"
                >
                  9152510140
                </a>
                {" / "}

                <a
                  className="text-gray-400 font-medium hover:underline"
                  href="tel:+917208426300"
                  aria-label="Second phone number"
                >
                  7208426300
                </a>
              </span>
              <a
                className="text-gray-400 font-medium hover:underline"
                href="https://maps.app.goo.gl/z5C1UAVWyvxy2HGP9"
                target="_blank"
                aria-label="Location"
              >       
               <i className="fa-solid fa-location-dot mr-2"></i>{" "}
               Krishna Regency, Datta Mandir Road, Vakola, Santacruz (E), Mumbai
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibol uppercase text-white">
                Services
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline" aria-label="Candly Tracker">
                    Request Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline" aria-label="Membership plans">
                    Memberships
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <ul className="text-gray-400  font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/arms8gym/"
                    target="_blank"
                    className="hover:underline "
                    aria-label="Instagram Linked"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/people/ARMS-8-GYM/100093163308833/?mibextid=ZbWKwL"
                    target="_blank"
                    className="hover:underline"
                    aria-label="Facebook"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray-400  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline" aria-label="privacy policy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline" aria-label="Terms and conditions">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-6 h-[2px] bg-gradient-to-r from-yellow-500 to-orange-600 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center ">
            © 2023{" "}
            <Link href="/" className="hover:underline">
              Arms8 Gym™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center ">
            created by{" "}
            <Link href="mailto:sidjha57@gmail.com" className="hover:underline">
              sidjha57@gmail.com
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
