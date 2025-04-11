import React from "react";
import { Link } from "react-router-dom";
import LogoLight from "../assets/images/logo.png";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BsPencil } from "react-icons/bs";

import { FiMail, FiMapPin, FiPhone, FiTwitter, FiGithub } from "react-icons/fi";

export default function Footer() {

  return (
    <>
      <footer id="jtwl" className="relative bg-slate-900 dark:bg-slate-800 pt-40">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="relative py-16">
              {/* <!-- Subscribe --> */}
              <div className="relative w-full">
                <div className="relative -top-40 bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700 overflow-hidden">
                  <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="md:text-start text-center z-1">
                      <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Join the Wailist!</h3>
                      <p className="text-slate-400 max-w-xl mx-auto">Be the first to get latest updates and information for the coming launch</p>
                    </div>

                    <div className="subcribe-form z-1">
                      <form className="relative max-w-lg md:ms-auto">
                        <input type="email" id="subcribe" name="email" className="rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-700" placeholder="Enter your email" />
                        <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white rounded-full">Subscribe</button>
                      </form>
                    </div>
                  </div>

                  <div className="absolute -top-5 -start-5">
                    <HiOutlineEnvelope className="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45" />
                  </div>

                  <div className="absolute -bottom-5 -end-5">
                    <BsPencil className="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90" />
                  </div>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] -mt-24">
                  <div className="lg:col-span-6 md:col-span-12 ">
                    <Link to="#" className="text-[22px] focus:outline-none footer-brand">
                      <img src={LogoLight} alt="" />
                      <h2>FractMarket</h2>
                    </Link>
                    <p className="mt-6 text-gray-300">What is the problem I am in love with? <br />Owning land with little money and provide high liquidity to the land/market</p>
                  </div>

                  <div className="lg:col-span-6 md:col-span-12">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Contact Details</h5>
                    <div className="flex">
                      <div className="flex mt-6">
                        <FiMapPin className="size-5 text-green-600 me-3" />
                        <div className="">
                          <h6 className="text-gray-300 mb-2">Torres de Heredia A701 <br /> Heredia 40101, <br /> Costa Rica</h6>
                          <Link to="https://maps.app.goo.gl/ZePsHc3eUgmtJrNa8" data-type="iframe" className="text-green-600 hover:text-green-700 duration-500 ease-in-out lightbox">View on Google map</Link>
                        </div>
                      </div>
                      <div className="md:mx-6">
                        <div className="flex mt-6">
                          <FiMail className="size-5 text-green-600 me-3" />
                          <div className="">
                            <Link to="mailto:fractmarket@gmail.com" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">fractmarket@gmail.com</Link>
                          </div>
                        </div>
                        <div className="flex mt-6">
                          <FiPhone className="size-5 text-green-600 me-3" />
                          <div className="">
                            <Link to="tel:+50671612344" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">+506 7161 2344</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Subscribe --> */}
            </div>
          </div>
        </div>

        <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
          <div className="container text-center">
            <div className="grid md:grid-cols-2 items-center gap-6">
              <div className="md:text-start text-center">
                <p className="mb-0 text-gray-300">© <script type="text/javascript" id="www-widgetapi-script" src="https://www.youtube.com/s/player/d87d581f/www-widgetapi.vflset/www-widgetapi.js"></script><script id="iframe_api" src="https://www.youtube.com/iframe_api"></script>{(new Date().getFullYear())}{" "} FractMarket, Design & Develop with <i className="mdi mdi-heart text-red-600"></i></p>
              </div>

              <ul className="list-none md:text-end text-center">
                <li className="inline ms-1"><Link to="https://x.com/FractMarket" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiTwitter className="size-4" /></Link></li>
                <li className="inline ms-1"><Link to="https://github.com/orgs/0xFractMarket/dashboard" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiGithub className="size-4" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}