import React from "react";
import { Link } from "react-router-dom";

import { properties } from "./data";
import { LiaCompressArrowsAltSolid, LiaNewspaperSolid, MdOutlineWaterDrop, GoLightBulb, GiRoad, CiLocationOn  } from "../../assets/icons/vander"


export default function Property() {

  return (
    <>
      <div id="marketplace" className="container lg:pt-32 pt-32">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Marketplace</h3>

          <p className="text-slate-400 max-w-xl mx-auto">Explore real estate investment opportunities with instant liquidity and full control over your tokenized assets</p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {properties.slice(0, 3).map((item, index) => (
            <div className="group rounded-xl bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500" key={index}>
              <div className="relative">
                <img src={item.image} alt="" />

                <div className="absolute top-4 end-4">
                  <Link to="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart mdi-18px"></i></Link>
                </div>
              </div>

              <div className="p-6">
                <div className="p-1">
                  <h3 className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</h3>
                  <Link to={`/property-detail/${item.id}`} className={`property-button mt-4 w-full ${!item.enabled ? 'disabled' : ''}`}>{item.enabled ? 'View Property' : 'Coming soon'}</Link>
                </div>

                <ul className="pt-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none flex-wrap">
                <li className="flex items-center me-4 mb-4">
                    <LiaCompressArrowsAltSolid className="text-2xl me-2 text-green-600" /><i ></i>
                    <span>{item.square} mts2</span>
                  </li>

                  <li className="flex items-center me-4 mb-4">
                    <LiaNewspaperSolid className="text-2xl me-2 text-green-600" />
                    <span>{item.legalConsiderations.titleIssues} </span>
                  </li>

                  <li className="flex items-center me-4 mb-4">
                    <MdOutlineWaterDrop className="text-2xl me-2 text-green-600" />
                    <span>{item.utilityInformation.waterSource}</span>
                  </li>

                  <li className="flex items-center me-4 mb-4">
                    <GoLightBulb className="text-2xl me-2 text-green-600" />
                    <span>{item.utilityInformation.electricitySource} </span>
                  </li>

                  <li className="flex items-center me-4 mb-4">
                    <GiRoad className="text-2xl me-2 text-green-600" />
                    <span>{item.terrainFeatures.accessibility}</span>
                  </li>

                  <li className="flex items-center me-4 mb-4">
                    <CiLocationOn className="text-2xl me-2 text-green-600" />
                    <span>{item.address}, {item.state}</span>
                  </li>
                </ul>

                <ul className="pt-6 flex justify-between items-center list-none">
                  <li>
                    <span className="text-slate-400">Property Price</span>
                    <p className="text-lg font-medium">${item.price}</p>
                  </li>

                  <li>
                    <span className="text-slate-400">Token Price</span>
                    <p className="text-lg font-medium">$100</p>
                  </li>

                  <li>
                    <span className="text-slate-400">Rating</span>
                    <ul className="text-lg font-medium text-amber-400 list-none">
                      <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                      <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                      <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                      <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                      <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                      <li className="inline ms-1 text-black dark:text-white">{item.rating}(30)</li>
                    </ul>
                  </li>
                </ul>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

}

