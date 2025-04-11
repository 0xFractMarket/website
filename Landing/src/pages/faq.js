import React, { useState } from "react";
import { accordionData } from "../component/Properties/data";


export default function Faq() {

  const [activeGeneral, setGeneralIndex] = useState(0);

  const toggleGeneral = (index) => {
    if (activeGeneral === index) {
      setGeneralIndex(null);
    } else {
      setGeneralIndex(index);
    }
  };

  return (
    <>
      {/* <!-- Start Section--> */}
      <section id="qymh" className="relative lg:pt-24 pt-16 pb-0">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-7">
              <div id="general" className="mt-8">
                <h5 className="text-2xl font-semibold">Questions You May Have</h5>

                <div id="accordion-collapse" data-accordion="collapse" className="mt-6">
                  {accordionData.map((section, index) => (
                    <div key={index}

                      className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                      <h2 className="text-base font-medium" id="accordion-collapse-heading-1">
                        <button type="button" onClick={() => toggleGeneral(index)}
                          className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeGeneral === index ? 'bg-gray-50 dark:bg-slate-800 text-green-600' : ''}`}>
                          <span>{section.title}</span>
                          <svg className="size-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                          </svg>
                        </button>
                      </h2>
                      {activeGeneral === index && (
                        <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                          <div className="p-5">
                            <p className="text-slate-400 dark:text-gray-400"> {section.content}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}

