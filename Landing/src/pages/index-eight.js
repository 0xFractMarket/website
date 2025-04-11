import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar'
import BackgroundImage from "../assets/images/bg/bg2.png";
import Categories from '../component/categories';
import Property from '../component/Properties/property';
import Footer from '../component/Footer';
import Switcher from '../component/Switcher';
import { aboutData } from '../component/Properties/data';
import { FiHexagon } from 'react-icons/fi';
import Faq from './faq';

export default function IndexEight() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden md:h-screen pt-36 md:pb-48 pb-64 bg-green-600/10 dark:bg-green-600/20 bg-no-repeat bg-bottom bg-cover" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="container relative">
          <div className="grid grid-cols-1 items-center mt-10">
            <div className="text-center">
              <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Fractional Real Estate Made Easy</h1>
              <p className="text-slate-400 text-xl max-w-xl mx-auto">Buy and sell property fractions effortlessly. High liquidity, no hassle. Your gateway to real estate investment starts here</p>
              <a href='#jtwl' className="property-button inline-block mt-8">Join the waitlist!</a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <Categories />
        </div>

        <div id="wdwd" className="container relative lg:mt-24 pt-32 pb-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What We Do?</h3>
            <p className="text-slate-400 max-w-xl mx-auto">Fractional ownership, high liquidity, and full transparency—real estate investing made easy with blockchain technology</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {aboutData.map((item, index) => {
              return (
                <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center" key={index}>
                  <div className="relative overflow-hidden text-transparent -m-3">
                    <FiHexagon className="size-32 fill-green-600/5 mx-auto" />
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                      <img src={item.image} className="size-12" alt="" />
                    </div>
                  </div>

                  <div className="mt-6 mb-6">
                    <Link to="" className="text-xl font-medium hover:text-green-600">{item.title}</Link>
                    <p className="text-slate-400 mt-3">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <Property />
        <Faq />
      </section>
      <Footer />
      <Switcher />
    </>


  )
}
