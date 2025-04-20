import React, { useState } from "react";
import { Link } from "react-router-dom";

import { LiaNewspaperSolid, MdOutlineWaterDrop, GoLightBulb, GiRoad, CiLocationOn  } from "../../src/assets/icons/vander"
import { properties } from "../component/Properties/data";
import withRouter from "../component/withrouter";
import Navbar from "../component/Navbar";
import Switcher from "../component/Switcher";
import Footer from "../component/Footer";

import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { AiOutlineCamera } from "react-icons/ai";
import { LiaBathSolid, LiaCompressArrowsAltSolid } from "react-icons/lia";
import Property from "../component/Properties/property";

function GoogleMapsURLToEmbedURL(GoogleMapsURL) {
  console.log(GoogleMapsURL)
  var coords = /\@([0-9\.\,\-a-zA-Z]*)/.exec(GoogleMapsURL);
  if (coords != null) {
    var coordsArray = coords[1].split(',');
    return "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20000!2d" + coordsArray[1] + "!3d" + coordsArray[0] + "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1486486434098";
  }
}

function PropertyDetail(props) {
  const [photoIndex, setActiveIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const property = properties.find((user) => user.id === parseInt(props.params.id));

  const handleCLick = (index) => {
    setActiveIndex(index)
    setOpen(true);
  }

  return (
    <>
      <Navbar />
      {/* <!-- Hero Start --> */}
      <section className="relative md:pb-24 pb-16 mt-20">
        <div className="container-fluid">
          <div className="md:flex mt-4">
            <div className="lg:w-1/2 md:w-1/2 p-1">
              <div className="group relative overflow-hidden">
                <img src={property.detail[0]} alt="" />
                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                  <Link to="#" onClick={() => handleCLick(0)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><AiOutlineCamera className="text-lg" /></Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 md:w-1/2">
              <div className="flex">
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <img src={property.detail[1]} alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link to="#" onClick={() => handleCLick(1)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><AiOutlineCamera className="text-lg" /></Link>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <img src={property.detail[2]} alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link to="#" onClick={() => handleCLick(2)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><AiOutlineCamera className="text-lg" /></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <img src={property.detail[3]} alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link to="#" onClick={() => handleCLick(3)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><AiOutlineCamera className="text-lg" /></Link>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <img src={property.detail[4]} alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link to="#" onClick={() => handleCLick(4)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><AiOutlineCamera className="text-lg" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container md:mt-24 mt-16">
          <div className="md:flex">
            <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
              <h4 className="text-2xl font-medium">{property?.name}</h4>

              <ul className="py-6 flex items-center list-none list-features flex-wrap">
                <li className="flex items-center lg:m-6 lg:ml-0 lg:mb-0 m-4 ml-0 mb-0">
                  <LiaCompressArrowsAltSolid className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property?.square}sqf</span>
                </li>

                <li className="flex items-center lg:m-6 lg:ml-0 lg:mb-0 m-4 ml-0 mb-0">
                  <LiaBathSolid className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property?.baths} Baths</span>
                </li>

                <li className="flex items-center lg:m-6 lg:ml-0 lg:mb-0 m-4 ml-0 mb-0">
                  <LiaNewspaperSolid className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property?.legalConsiderations.titleIssues}</span>
                </li>

                <li className="flex items-center lg:m-6 lg:ml-0 lg:mb-0 m-4 ml-0 mb-0">
                  <MdOutlineWaterDrop className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property?.utilityInformation.waterSource}</span>
                </li>

                <li className="flex items-center lg:m-6 lg:ml-0 lg:mb-0 m-4 ml-0 mb-0">
                  <GoLightBulb className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property?.utilityInformation.electricitySource}</span>
                </li>

                <li className="flex items-center lg:m-6 lg:ml-0 lg:mb-0 m-4 ml-0 mb-0">
                  <GiRoad className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property?.terrainFeatures.accessibility}</span>
                </li>

                <li className="flex items-center lg:m-6 lg:ml-0 lg:mb-0 m-4 ml-0 mb-0">
                  <CiLocationOn className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property?.address}, {property?.state}</span>
                </li>
              </ul>

              <p className="text-slate-400 mt-4">{property.terrainFeatures.canItBeDivided}</p>
              <p className="text-slate-400 mt-4">{property.terrainFeatures.terrainType}</p>
              <p className="text-slate-400 mt-4">{property.terrainFeatures.elevation}</p>
              <p className="text-slate-400 mt-4">{property.terrainFeatures.soilQuality}</p>
              <p className="text-slate-400 mt-4">{property.terrainFeatures.naturalResources}</p>
              <p className="text-slate-400 mt-4">{property.terrainFeatures.topography}</p>
              <p className="text-slate-400 mt-4">{property.terrainFeatures.accessibility}</p>
              <p className="text-slate-400 mt-4">{property.terrainFeatures.proximityToAmenities}</p>
              <p className="text-slate-400 mt-4">{property.terrainFeatures.environmentalConcerns}</p>

              <p className="text-slate-400 mt-4">{property.legalConsiderations.zoningRegulations}</p>
              <p className="text-slate-400 mt-4">{property.legalConsiderations.landUseRestrictions}</p>
              <p className="text-slate-400 mt-4">{property.legalConsiderations.easements}</p>
              <p className="text-slate-400 mt-4">{property.legalConsiderations.propertyTaxStatus}</p>
              <p className="text-slate-400 mt-4">{property.legalConsiderations.titleIssues}</p>
              <p className="text-slate-400 mt-4">{property.legalConsiderations.surveyAvailable ? "Survey available" : "Survey not available"}</p>

              <p className="text-slate-400 mt-4">{property.utilityInformation.waterSource}</p>
              <p className="text-slate-400 mt-4">{property.utilityInformation.waterSourceComment}</p>
              <p className="text-slate-400 mt-4">{property.utilityInformation.sewerSystem}</p>
              <p className="text-slate-400 mt-4">{property.utilityInformation.electricitySource}</p>
              <p className="text-slate-400 mt-4">{property.utilityInformation.electricitySourceComment}</p>
              <p className="text-slate-400 mt-4">{property.utilityInformation.gasAvailability}</p>
              <p className="text-slate-400 mt-4">{property.utilityInformation.internetConnectivity}</p>

              <p className="text-slate-400 mt-4">{property.developmentPotential.futureLandValue}</p>
              <p className="text-slate-400 mt-4">{property.developmentPotential.potentialLandUse}</p>
              <p className="text-slate-400 mt-4">{property.developmentPotential.infrastructurePlans}</p>
              <p className="text-slate-400 mt-4">{property.developmentPotential.surroundingDevelopment}</p>
              <p className="text-slate-400 mt-4">{property.developmentPotential.marketTrends}</p>
              <p className="text-slate-400 mt-4">{property.developmentPotential.investmentOpportunities}</p>

              <div className="w-full leading-[0] border-0 mt-6">
                <iframe title="iframe" src={GoogleMapsURLToEmbedURL(property.googleMapsLink)} style={{ border: "0" }} className="w-full h-[500px]" allowFullScreen></iframe>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
              <div className="sticky top-20">
                <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                  <div className="p-6">
                    <h5 className="text-2xl font-medium">Price:</h5>

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-medium">$ {property?.price}</span>

                      <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">For Sale</span>
                    </div>

                    <ul className="list-none mt-4">
                      <li className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Days on Hously</span>
                        <span className="font-medium text-sm">124 Days</span>
                      </li>

                      <li className="flex justify-between items-center mt-2">
                        <span className="text-slate-400 text-sm">Price per sq ft</span>
                        <span className="font-medium text-sm">$ 186</span>
                      </li>

                      <li className="flex justify-between items-center mt-2">
                        <span className="text-slate-400 text-sm">Monthly Payment (estimate)</span>
                        <span className="font-medium text-sm">$ 1497/Monthly</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex">
                    <div className="p-1 w-1/2">
                      <Link to="#" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Book Now</Link>
                    </div>
                    <div className="p-1 w-1/2">
                      <Link to="#" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Offer Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Property />
      </section>

      {isOpen && (
        <Lightbox
          mainSrc={property.detail[photoIndex]}
          nextSrc={property.detail[(photoIndex + 1) % property.detail.length]}
          prevSrc={property.detail[(photoIndex + property.detail.length - 1) % property.detail.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setActiveIndex((photoIndex + property.detail.length - 1) % property.detail.length,
            )
          }
          onMoveNextRequest={() =>
            setActiveIndex((photoIndex + 1) % property.detail.length,
            )
          }
        />
      )}

      <Footer />
      <Switcher />
    </>
  );

}

export default withRouter(PropertyDetail);
