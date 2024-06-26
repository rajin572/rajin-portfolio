"use client";

import Container from "@/components/ui/Container";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Education = () => {
  const view = useRef<HTMLDivElement>(null);
  const inView = useInView(view);
  return (
    <div className="pt-20  overflow-hidden">
      <div className="mt-10 flex justify-center items-center flex-col">
        <h1 className="text-5xl sm:text-6xl mb-2 font-bold place-items-start text-primary-foreground opacity-15">
          Education
        </h1>
        <p className="text-foreground font-bold mb-2 text-2xl sm:text-3xl  -mt-12 sm:-mt-[54px]">
          My Educational Degrees
        </p>
        <div className="w-48 h-1 bg-secondary rounded mx-auto"></div>
      </div>
      <Container>
        {/* <!-- component --> */}
        <motion.div
          ref={view}
          animate={
            inView
              ? { opacity: 1, x: 0, transition: { duration: 0.5 } }
              : { opacity: 0, x: -200, transition: { duration: 0.5 } }
          }
          className="flex justify-center items-center mt-10 md:-mt-10"
        >
          <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 ">
              <div className="flex flex-col justify-center divide-y divide-slate-200">
                <div className="w-full mx-auto">
                  {/* <!-- Vertical Timeline #1 --> */}
                  <div className="-my-6">
                    {/* <!-- Item #1 --> */}
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                      {/* <!-- Purple label --> */}
                      <motion.div
                        ref={view}
                        animate={
                          inView
                            ? {
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.5, duration: 1 },
                              }
                            : {
                                opacity: 0,
                                y: -20,
                                transition: { delay: 0.5, duration: 1 },
                              }
                        }
                        className="font-medium text-primary-foreground mb-1 sm:mb-0"
                      >
                        BBA in Accounting and Information Systems
                      </motion.div>
                      {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-500 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute -left-5 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-8 mb-3 sm:mb-0 text-primary bg-green-100 rounded-full">
                          2021 - Running
                        </time>
                        <motion.div
                          ref={view}
                          animate={
                            inView
                              ? {
                                  opacity: 1,
                                  y: 0,
                                  transition: { delay: 0.5, duration: 1 },
                                }
                              : {
                                  opacity: 0,
                                  y: -20,
                                  transition: { delay: 0.5, duration: 1 },
                                }
                          }
                          className="text-xl font-bold text-slate-400"
                        >
                          Kabi Nazrul Govt. College
                        </motion.div>
                      </div>
                      {/* <!-- Content --> */}
                      <motion.div
                        ref={view}
                        animate={
                          inView
                            ? {
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.5, duration: 1 },
                              }
                            : {
                                opacity: 0,
                                y: -20,
                                transition: { delay: 0.5, duration: 1 },
                              }
                        }
                        className="text-foreground"
                      >
                        Name of Department : Accounting
                        <br />
                        Session : 2020-2021
                        <br />
                        CGPA : Running
                      </motion.div>
                    </div>

                    {/* <!-- Item #2 --> */}
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                      {/* <!-- Purple label --> */}
                      <motion.div
                        ref={view}
                        animate={
                          inView
                            ? {
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.5, duration: 1 },
                              }
                            : {
                                opacity: 0,
                                y: -20,
                                transition: { delay: 0.5, duration: 1 },
                              }
                        }
                        className="font-medium text-primary-foreground mb-1 sm:mb-0"
                      >
                        Higher Secondary Certificate
                      </motion.div>
                      {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-500 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute -left-5 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-8 mb-3 sm:mb-0 text-primary bg-green-100 rounded-full">
                          2018-2020
                        </time>
                        <motion.div
                          ref={view}
                          animate={
                            inView
                              ? {
                                  opacity: 1,
                                  y: 0,
                                  transition: { delay: 0.5, duration: 1 },
                                }
                              : {
                                  opacity: 0,
                                  y: -20,
                                  transition: { delay: 0.5, duration: 1 },
                                }
                          }
                          className="text-xl font-bold text-slate-400"
                        >
                          CCER Model College
                        </motion.div>
                      </div>
                      {/* <!-- Content --> */}
                      <motion.div
                        ref={view}
                        animate={
                          inView
                            ? {
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.5, duration: 1 },
                              }
                            : {
                                opacity: 0,
                                y: -20,
                                transition: { delay: 0.5, duration: 1 },
                              }
                        }
                        className="text-foreground"
                      >
                        Group : Business Studies <br />
                        Year of Exam : 2020 <br />
                        Grade Achieved : GPA 4.48 Out of 5.00 scales.
                      </motion.div>
                    </div>

                    {/* <!-- Item #3 --> */}
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                      {/* <!-- Purple label --> */}
                      <motion.div
                        ref={view}
                        animate={
                          inView
                            ? {
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.5, duration: 1 },
                              }
                            : {
                                opacity: 0,
                                y: -20,
                                transition: { delay: 0.5, duration: 1 },
                              }
                        }
                        className="font-medium text-primary-foreground mb-1 sm:mb-0"
                      >
                        Secondary School Certificate
                      </motion.div>
                      {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-500 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute -left-5 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-8 mb-3 sm:mb-0 text-primary bg-green-100 rounded-full">
                          2017-2018
                        </time>
                        <motion.div
                          ref={view}
                          animate={
                            inView
                              ? {
                                  opacity: 1,
                                  y: 0,
                                  transition: { delay: 0.5, duration: 1 },
                                }
                              : {
                                  opacity: 0,
                                  y: -20,
                                  transition: { delay: 0.5, duration: 1 },
                                }
                          }
                          className="text-xl font-bold text-slate-400"
                        >
                          Bangladesh Bank High School
                        </motion.div>
                      </div>
                      {/* <!-- Content --> */}
                      <motion.div
                        ref={view}
                        animate={
                          inView
                            ? {
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.5, duration: 1 },
                              }
                            : {
                                opacity: 0,
                                y: -20,
                                transition: { delay: 0.5, duration: 1 },
                              }
                        }
                        className="text-foreground"
                      >
                        Group : Business Studies <br />
                        Year of Exam : 2018 <br />
                        Grade Achieved : GPA 4.17 Out of 5.00 scales.
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </Container>
    </div>
  );
};

export default Education;
