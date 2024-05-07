import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="mt-10 flex justify-center items-center flex-col">
        <p className="text-primary-foreground mb-5 text-xl sm:text-2xl font-bold">
          Expertise
        </p>
        <h1 className=" text-foreground text-2xl  sm:text-4xl mb-2 font-bold place-items-start">
          Skills I Have Learned
        </h1>
        <div className="w-48 h-1 bg-secondary rounded mx-auto"></div>
      </div>
      <Container>
        <div className="mt-20">
          {/* HTMl */}
          <div className="md:w-[75%] mx-auto mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-[#E86229] dark:text-white">
                HTML
              </span>
              <span className="text-sm font-medium text-[#E86229] dark:text-white">
                95%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#E86229] h-2.5 rounded-full"
                style={{ width: " 95%" }}
              ></div>
            </div>
          </div>
          {/* CSS */}
          <div className="md:w-[75%] mx-auto mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-[#2B5FEF] dark:text-white">
                CSS
              </span>
              <span className="text-sm font-medium text-[#2B5FEF] dark:text-white">
                95%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#2B5FEF] h-2.5 rounded-full"
                style={{ width: " 95%" }}
              ></div>
            </div>
          </div>
          {/* Tailwind */}
          <div className="md:w-[75%] mx-auto mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-[#2B5FEF] dark:text-white">
                Tailwind
              </span>
              <span className="text-sm font-medium text-[#2B5FEF] dark:text-white">
                95%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#2B5FEF] h-2.5 rounded-full"
                style={{ width: " 95%" }}
              ></div>
            </div>
          </div>
          {/* JavaScript */}
          <div className="md:w-[75%] mx-auto mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-[#E8D44D] dark:text-white">
                JavaScript
              </span>
              <span className="text-sm font-medium text-[#E8D44D] dark:text-white">
                80%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#E8D44D] h-2.5 rounded-full"
                style={{ width: " 80%" }}
              ></div>
            </div>
          </div>
          {/* TypeScript */}
          <div className="md:w-[75%] mx-auto mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-[#2B5FEF] dark:text-white">
                TypeScript
              </span>
              <span className="text-sm font-medium text-[#2B5FEF] dark:text-white">
                80%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#2B5FEF] h-2.5 rounded-full"
                style={{ width: " 80%" }}
              ></div>
            </div>
          </div>
          {/* React */}
          <div className="md:w-[75%] mx-auto mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-[#00D1F7] dark:text-white">
                React
              </span>
              <span className="text-sm font-medium text-[#00D1F7] dark:text-white">
                90%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#00D1F7] h-2.5 rounded-full"
                style={{ width: " 90%" }}
              ></div>
            </div>
          </div>
          {/* Redux */}
          <div className="md:w-[75%] mx-auto mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-[#7248B6] dark:text-white">
                Redux
              </span>
              <span className="text-sm font-medium text-[#7248B6] dark:text-white">
                85%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#7248B6] h-2.5 rounded-full"
                style={{ width: " 85%" }}
              ></div>
            </div>
          </div>
          {/* Next JS */}
          <div className="md:w-[75%] mx-auto mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-[#ffffff] dark:text-white">
                NextJS
              </span>
              <span className="text-sm font-medium text-[#ffffff] dark:text-white">
                85%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#464646] h-2.5 rounded-full"
                style={{ width: " 85%" }}
              ></div>
            </div>
          </div>
          {/* Node JS */}
          <div className="md:w-[75%] mx-auto mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-[#509941] dark:text-white">
                NodeJS
              </span>
              <span className="text-sm font-medium text-[#509941] dark:text-white">
                65%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#509941] h-2.5 rounded-full"
                style={{ width: " 65%" }}
              ></div>
            </div>
          </div>
          {/* Express JS */}
          <div className="md:w-[75%] mx-auto mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-[#ffffff] dark:text-white">
                ExpressJS
              </span>
              <span className="text-sm font-medium text-[#ffffff] dark:text-white">
                75%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#535353] h-2.5 rounded-full"
                style={{ width: " 75%" }}
              ></div>
            </div>
          </div>
          {/* MongoDB JS */}
          <div className="md:w-[75%] mx-auto mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-[#509941] dark:text-white">
                MongoDB
              </span>
              <span className="text-sm font-medium text-[#509941] dark:text-white">
                80%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#509941] h-2.5 rounded-full"
                style={{ width: " 80%" }}
              ></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
